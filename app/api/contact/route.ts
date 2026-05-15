import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  company: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
  website: z.string().max(0),
})

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 })
  }

  // Parse and validate
  const result = contactSchema.safeParse(body)

  // Honeypot check — check BEFORE returning validation errors
  // The honeypot field is "website" — if it has any value, silently reject
  const rawBody = body as Record<string, unknown>
  if (typeof rawBody.website === "string" && rawBody.website.length > 0) {
    return NextResponse.json({ success: false, error: "Submission rejected" }, { status: 400 })
  }

  if (!result.success) {
    return NextResponse.json(
      { success: false, error: "Invalid form data", details: result.error.issues },
      { status: 400 }
    )
  }

  const { name, company, email, message } = result.data

  const emailBody = `Name: ${name}
Company: ${company}
Email: ${email}

Message:
${message}

---
Submitted via cardellino.tech`

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? "hi@cardellino.tech",
    to: process.env.CONTACT_EMAIL ?? "dominic.cardellino@googlemail.com",
    replyTo: email,
    subject: `New inquiry from ${name} at ${company}`,
    text: emailBody,
  })

  if (error) {
    console.error("Resend error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send message. Please try again or email directly.",
      },
      { status: 500 }
    )
  }

  return NextResponse.json({ success: true })
}
