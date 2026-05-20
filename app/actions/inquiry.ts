"use server"

import { z } from "zod"
import { getSupabaseServerClient } from "@/lib/supabase/server"
import { sendOwnerNotification } from "@/lib/email"

const inquirySchema = z.object({
  name: z.string().min(1, "Please tell us your name.").max(120),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().max(60).optional().nullable(),
  fluteSlug: z.string().max(120).optional().nullable(),
  fluteName: z.string().max(160).optional().nullable(),
  message: z.string().min(1, "Please write a brief message.").max(2000),
})

export type InquiryResult =
  | { ok: true }
  | { ok: false; error: string }

export async function submitInquiry(input: unknown): Promise<InquiryResult> {
  const parsed = inquirySchema.safeParse(input)
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input." }
  }

  try {
    const supabase = getSupabaseServerClient()
    const { error } = await supabase.from("inquiries").insert({
      name: parsed.data.name.trim(),
      email: parsed.data.email.trim().toLowerCase(),
      phone: parsed.data.phone?.trim() || null,
      flute_slug: parsed.data.fluteSlug || null,
      flute_name: parsed.data.fluteName || null,
      message: parsed.data.message.trim(),
    })
    if (error) {
      console.log("[v0] inquiry insert error:", error.message)
      return { ok: false, error: "We couldn't send your inquiry. Please try again." }
    }

    const email = parsed.data.email.trim().toLowerCase()
    const fluteLabel = parsed.data.fluteName || parsed.data.fluteSlug || "-"
    await sendOwnerNotification({
      subject: `New inquiry from ${parsed.data.name.trim()}${parsed.data.fluteName ? ` — ${parsed.data.fluteName}` : ""}`,
      replyTo: email,
      body: [
        `New flute inquiry on PurFlutes`,
        ``,
        `Name:    ${parsed.data.name.trim()}`,
        `Email:   ${email}`,
        `Phone:   ${parsed.data.phone?.trim() || "-"}`,
        `Flute:   ${fluteLabel}`,
        ``,
        `Message:`,
        parsed.data.message.trim(),
      ].join("\n"),
    })

    return { ok: true }
  } catch (err) {
    console.log("[v0] inquiry unexpected error:", err)
    return { ok: false, error: "Something went wrong. Please try again." }
  }
}
