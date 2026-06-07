"use server"

import { z } from "zod"
import { getSupabaseServerClient } from "@/lib/supabase/server"
import { sendOwnerNotification, sendWelcomeEmail } from "@/lib/email"

const signupSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  name: z.string().max(120).optional().nullable(),
  source: z.string().max(60).default("website"),
  interests: z.string().max(500).optional().nullable(),
  notes: z.string().max(1000).optional().nullable(),
})

export type SignupResult =
  | { ok: true }
  | { ok: false; error: string }

export async function submitSignup(input: unknown): Promise<SignupResult> {
  const parsed = signupSchema.safeParse(input)
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input." }
  }

  try {
    const supabase = getSupabaseServerClient()
    const { error } = await supabase.from("signups").insert({
      email: parsed.data.email.trim().toLowerCase(),
      name: parsed.data.name?.trim() || null,
      source: parsed.data.source || "website",
      interests: parsed.data.interests?.trim() || null,
      notes: parsed.data.notes?.trim() || null,
    })
    if (error) {
      console.log("[v0] signup insert error:", error.message)
      return { ok: false, error: "We couldn't save your signup. Please try again." }
    }

    const email = parsed.data.email.trim().toLowerCase()
    const name = parsed.data.name?.trim() || null

    await Promise.allSettled([
      sendOwnerNotification({
        email,
        name,
        source: parsed.data.source || "website",
        interests: parsed.data.interests?.trim() || null,
        notes: parsed.data.notes?.trim() || null,
      }),
      sendWelcomeEmail(email, name),
    ])

    return { ok: true }
  } catch (err) {
    console.log("[v0] signup unexpected error:", err)
    return { ok: false, error: "Something went wrong. Please try again." }
  }
}
