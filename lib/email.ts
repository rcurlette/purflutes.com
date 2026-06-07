import { Resend } from "resend"
import { render } from "@react-email/render"
import { WelcomeEmail } from "@/emails/welcome-email"
import {
  OwnerNotificationEmail,
  type OwnerNotificationEmailProps,
} from "@/emails/owner-notification-email"

const NOTIFICATION_TO = "robert.curlette@gmail.com"
const NOTIFICATION_FROM = "PurFlutes <onboarding@resend.dev>"

function getResend(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log("[v0] RESEND_API_KEY not set — skipping email send.")
    return null
  }
  return new Resend(apiKey)
}

type OwnerNotificationInput = OwnerNotificationEmailProps & {
  subject: string
  replyTo?: string
}

/**
 * Notify the site owner, rendered with React Email.
 * Returns silently on failure — form submissions must not be blocked by email issues.
 */
export async function sendOwnerNotification({
  subject,
  replyTo,
  ...templateProps
}: OwnerNotificationInput): Promise<void> {
  const resend = getResend()
  if (!resend) return

  try {
    const html = await render(OwnerNotificationEmail(templateProps))
    const text = await render(OwnerNotificationEmail(templateProps), { plainText: true })
    const { error } = await resend.emails.send({
      from: NOTIFICATION_FROM,
      to: NOTIFICATION_TO,
      subject,
      html,
      text,
      replyTo,
    })
    if (error) {
      console.log("[v0] Resend owner notification error:", error.message)
    }
  } catch (err) {
    console.log("[v0] Resend owner notification unexpected error:", err)
  }
}

/**
 * Send a branded welcome email to a new subscriber, rendered with React Email.
 * Returns silently on failure.
 */
export async function sendWelcomeEmail(to: string, name?: string | null): Promise<void> {
  const resend = getResend()
  if (!resend) return

  try {
    const html = await render(WelcomeEmail({ name }))
    const text = await render(WelcomeEmail({ name }), { plainText: true })
    const { error } = await resend.emails.send({
      from: NOTIFICATION_FROM,
      to,
      subject: "Welcome to PurFlutes",
      html,
      text,
    })
    if (error) {
      console.log("[v0] Resend welcome email error:", error.message)
    }
  } catch (err) {
    console.log("[v0] Resend welcome email unexpected error:", err)
  }
}
