"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Toast } from "@/components/ui/toast"
import { submitContactForm, type ContactFormData } from "@/app/actions/contact"

// Esquema de validación
const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Ingresa un correo electrónico válido" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<{ show: boolean; message: string; variant: "success" | "error" }>({
    show: false,
    message: "",
    variant: "success",
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      const result = await submitContactForm(data)

      if (result.success) {
        setToast({
          show: true,
          message: result.message,
          variant: "success",
        })
        reset() // Limpiar el formulario en caso de éxito
      } else {
        setToast({
          show: true,
          message: result.message,
          variant: "error",
        })
      }
    } catch (error) {
      setToast({
        show: true,
        message: "Ocurrió un error inesperado. Por favor intenta nuevamente.",
        variant: "error",
      })
    } finally {
      setIsSubmitting(false)
      // Ocultar el toast después de 5 segundos
      setTimeout(() => {
        setToast((prev) => ({ ...prev, show: false }))
      }, 5000)
    }
  }

  return (
    <div className="space-y-6">
      {toast.show && (
        <Toast variant={toast.variant} onClose={() => setToast((prev) => ({ ...prev, show: false }))}>
          {toast.message}
        </Toast>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Input
            placeholder="Nombre"
            className={`bg-card border-input ${errors.name ? "border-red-500" : ""}`}
            {...register("name")}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <Input
            placeholder="Correo electrónico"
            type="email"
            className={`bg-card border-input ${errors.email ? "border-red-500" : ""}`}
            {...register("email")}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <Input placeholder="Teléfono (opcional)" type="tel" className="bg-card border-input" {...register("phone")} />
        </div>

        <div className="space-y-2">
          <Textarea
            placeholder="Mensaje"
            className={`bg-card border-input min-h-[120px] ${errors.message ? "border-red-500" : ""}`}
            {...register("message")}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
        </div>

        <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-4 w-4 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Enviando...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" /> Enviar mensaje
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
