"use server"

import { z } from "zod"
import { Resend } from "resend"

// Inicializar Resend con la API key
const resend = new Resend(process.env.RESEND_API_KEY)

// Esquema de validación
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Ingresa un correo electrónico válido" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
})

export type ContactFormData = z.infer<typeof ContactFormSchema>

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validar los datos
    const validatedData = ContactFormSchema.parse(formData)

    // Preparar el contenido del correo
    const { name, email, phone, message } = validatedData

    // Enviar el correo al equipo usando Resend
    try {
      await resend.emails.send({
        from: "Santo Request <contacto@santorequest.com>",
        to: ["destinatario@santorequest.com"], // Cambia esto por el correo del destinatario real
        subject: `Nuevo mensaje de contacto de ${name}`,
        reply_to: email,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #FFD700; border-bottom: 2px solid #FFD700; padding-bottom: 10px;">
              Nuevo mensaje de contacto - Santo Request
            </h2>
            <div style="margin-top: 20px;">
              <p style="margin: 5px 0;"><strong>Nombre:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 5px 0;"><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
            </div>
            <div style="margin-top: 20px; background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
              <p style="margin: 0 0 10px 0;"><strong>Mensaje:</strong></p>
              <p style="white-space: pre-line; margin: 0;">${message}</p>
            </div>
            <div style="margin-top: 30px; font-size: 12px; color: #666; border-top: 1px solid #eee; padding-top: 10px;">
              <p>Este mensaje fue enviado desde el formulario de contacto de Santo Request.</p>
            </div>
          </div>
        `,
      })
    } catch (error) {
      console.error("Error al enviar el correo de notificación:", error)
      return {
        success: false,
        message: "Hubo un problema al enviar tu mensaje. Por favor intenta nuevamente.",
      }
    }

    // Enviar correo de confirmación al usuario
    try {
      await resend.emails.send({
        from: "Santo Request <contacto@santorequest.com>",
        to: [email],
        subject: "Hemos recibido tu mensaje - Santo Request",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
            <div style="background-color: #000; padding: 20px; text-align: center;">
              <h1 style="color: #FFD700; margin: 0; font-size: 24px;">Santo Request</h1>
            </div>
            <div style="padding: 30px 20px; background-color: #f9f9f9;">
              <h2 style="color: #333; margin-top: 0;">¡Gracias por contactarnos, ${name}!</h2>
              <p style="line-height: 1.6; font-size: 16px;">
                Hemos recibido tu mensaje y queremos agradecerte por ponerte en contacto con nosotros.
              </p>
              <p style="line-height: 1.6; font-size: 16px;">
                Nuestro equipo está revisando tu solicitud y te responderemos a la brevedad posible, generalmente dentro de las
                próximas 24-48 horas hábiles.
              </p>
              <div style="background-color: #333; padding: 15px; border-radius: 5px; margin-top: 25px; margin-bottom: 25px; color: #fff; font-size: 14px; line-height: 1.5;">
                <p style="margin: 0 0 10px 0; font-weight: bold;">Resumen de tu mensaje:</p>
                <p style="margin: 0;">• Nos contactaste desde el formulario de nuestra web</p>
                <p style="margin: 0;">• Un miembro de nuestro equipo revisará tu mensaje</p>
                <p style="margin: 0;">• Te responderemos al correo electrónico que proporcionaste</p>
              </div>
              <p style="line-height: 1.6; font-size: 16px;">
                Si tienes alguna pregunta adicional mientras tanto, no dudes en responder a este correo.
              </p>
              <p style="line-height: 1.6; font-size: 16px; margin-bottom: 0;">
                ¡Saludos heroicos!<br>
                <strong>El equipo de Santo Request</strong>
              </p>
            </div>
            <div style="background-color: #222; padding: 20px; text-align: center; color: #999; font-size: 12px;">
              <p style="margin: 0 0 10px 0;">© 2023 Santo Request. Todos los derechos reservados.</p>
              <p style="margin: 0;">Este es un mensaje automático, por favor no respondas directamente a este correo.</p>
            </div>
          </div>
        `,
      })
    } catch (error) {
      console.error("Error al enviar el correo de confirmación:", error)
      // No fallamos la operación completa si solo falla el correo de confirmación
      // pero lo registramos para seguimiento
    }

    return {
      success: true,
      message: "Mensaje enviado correctamente. Hemos enviado una confirmación a tu correo electrónico.",
    }
  } catch (error) {
    console.error("Error al enviar el formulario:", error)

    if (error instanceof z.ZodError) {
      // Error de validación
      return {
        success: false,
        message: "Por favor verifica los datos ingresados.",
        errors: error.errors,
      }
    }

    // Error general
    return {
      success: false,
      message: "Hubo un problema al enviar tu mensaje. Por favor intenta nuevamente.",
    }
  }
}
