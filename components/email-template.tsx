interface EmailTemplateProps {
  name: string
  email: string
  phone?: string
  message: string
}

export const EmailTemplate = ({ name, email, phone, message }: EmailTemplateProps) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <h2 style={{ color: "#FFD700", borderBottom: "2px solid #FFD700", paddingBottom: "10px" }}>
        Nuevo mensaje de contacto - Santo Request
      </h2>

      <div style={{ marginTop: "20px" }}>
        <p style={{ margin: "5px 0" }}>
          <strong>Nombre:</strong> {name}
        </p>
        <p style={{ margin: "5px 0" }}>
          <strong>Email:</strong> {email}
        </p>
        <p style={{ margin: "5px 0" }}>
          <strong>Teléfono:</strong> {phone || "No proporcionado"}
        </p>
      </div>

      <div style={{ marginTop: "20px", backgroundColor: "#f9f9f9", padding: "15px", borderRadius: "5px" }}>
        <p style={{ margin: "0 0 10px 0" }}>
          <strong>Mensaje:</strong>
        </p>
        <p style={{ whiteSpace: "pre-line", margin: "0" }}>{message}</p>
      </div>

      <div
        style={{ marginTop: "30px", fontSize: "12px", color: "#666", borderTop: "1px solid #eee", paddingTop: "10px" }}
      >
        <p>Este mensaje fue enviado desde el formulario de contacto de Santo Request.</p>
      </div>
    </div>
  )
}
