# Santo Request Landing Page

## Configuración del formulario de contacto con Resend

Para que el formulario de contacto funcione correctamente, es necesario configurar Resend:

1. Crea una cuenta en [Resend](https://resend.com) si aún no tienes una
2. Obtén tu API key desde el panel de control de Resend
3. Crea un archivo `.env.local` en la raíz del proyecto con el siguiente contenido:

\`\`\`
RESEND_API_KEY=tu_api_key_de_resend
\`\`\`

4. Verifica y actualiza la dirección de correo electrónico del remitente en `app/actions/contact.ts` para que coincida con un dominio verificado en tu cuenta de Resend
5. Actualiza la dirección de correo electrónico del destinatario en `app/actions/contact.ts` para recibir los mensajes de contacto

## Desarrollo local

\`\`\`bash
npm install
npm run dev
\`\`\`

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.
