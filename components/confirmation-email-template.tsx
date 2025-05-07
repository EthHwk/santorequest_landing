interface ConfirmationEmailTemplateProps {
  name: string
}

export const ConfirmationEmailTemplate = ({ name }: ConfirmationEmailTemplateProps) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto", color: "#333" }}>
      <div style={{ backgroundColor: "#000", padding: "20px", textAlign: "center" }}>
        <h1 style={{ color: "#FFD700", margin: "0", fontSize: "24px" }}>Santo Request</h1>
      </div>

      <div style={{ padding: "30px 20px", backgroundColor: "#f9f9f9" }}>
        <h2 style={{ color: "#333", marginTop: "0" }}>¡Gracias por contactarnos, {name}!</h2>

        <p style={{ lineHeight: "1.6", fontSize: "16px" }}>
          Hemos recibido tu mensaje y queremos agradecerte por ponerte en contacto con nosotros.
        </p>

        <p style={{ lineHeight: "1.6", fontSize: "16px" }}>
          Nuestro equipo está revisando tu solicitud y te responderemos a la brevedad posible, generalmente dentro de
          las próximas 24-48 horas hábiles.
        </p>

        <div
          style={{
            backgroundColor: "#333",
            padding: "15px",
            borderRadius: "5px",
            marginTop: "25px",
            marginBottom: "25px",
            color: "#fff",
            fontSize: "14px",
            lineHeight: "1.5",
          }}
        >
          <p style={{ margin: "0 0 10px 0", fontWeight: "bold" }}>Resumen de tu mensaje:</p>
          <p style={{ margin: "0" }}>• Nos contactaste desde el formulario de nuestra web</p>
          <p style={{ margin: "0" }}>• Un miembro de nuestro equipo revisará tu mensaje</p>
          <p style={{ margin: "0" }}>• Te responderemos al correo electrónico que proporcionaste</p>
        </div>

        <p style={{ lineHeight: "1.6", fontSize: "16px" }}>
          Si tienes alguna pregunta adicional mientras tanto, no dudes en responder a este correo.
        </p>

        <p style={{ lineHeight: "1.6", fontSize: "16px", marginBottom: "0" }}>
          ¡Saludos heroicos!
          <br />
          <strong>El equipo de Santo Request</strong>
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#222",
          padding: "20px",
          textAlign: "center",
          color: "#999",
          fontSize: "12px",
        }}
      >
        <p style={{ margin: "0 0 10px 0" }}>© 2023 Santo Request. Todos los derechos reservados.</p>
        <p style={{ margin: "0" }}>Este es un mensaje automático, por favor no respondas directamente a este correo.</p>
      </div>
    </div>
  )
}
