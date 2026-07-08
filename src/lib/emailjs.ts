import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined

export interface ContactPayload {
  name: string
  email: string
  message: string
}

export const isEmailJsConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error('EmailJS is not configured. See SETUP.md.')
  }

  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      name: payload.name,
      email: payload.email,
      message: payload.message,
    },
    { publicKey: PUBLIC_KEY },
  )
}
