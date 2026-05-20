import { Resend } from "resend"

const NOTIFICATION_TO = "robert.curlette@gmail.com"
const NOTIFICATION_FROM = "PurFlutes <onboarding@resend.dev>"

type EmailPayload = {
  subject: string
  /** Plain-text body. Rendered as <pre> in HTML for readability. */
  body: string
  /** Optional reply-to so Robert can hit "Reply" and respond to the submitter. */
  replyTo?: string
}

/**
 * Send a notification email to the site owner.
 * Returns silently on failure — form submissions must not be blocked by email issues.
 */
export async function sendOwnerNotification({ subject, body, replyTo }: EmailPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log("[v0] RESEND_API_KEY not set — skipping owner notification email.")
    return
  }

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: NOTIFICATION_FROM,
      to: NOTIFICATION_TO,
      subject,
      text: body,
      html: `<pre style="font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 14px; line-height: 1.5; white-space: pre-wrap; word-wrap: break-word;">${escapeHtml(body)}</pre>`,
      ...(replyTo ? { replyTo } : {}),
    })
    if (error) {
      console.log("[v0] Resend send error:", error.message)
    }
  } catch (err) {
    console.log("[v0] Resend unexpected error:", err)
  }
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}
