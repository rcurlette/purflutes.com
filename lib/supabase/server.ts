import { createClient } from "@supabase/supabase-js"

/**
 * Server-side Supabase client used by Server Actions.
 * The site is anonymous-only for the public surface (signups + inquiries),
 * so we use the publishable anon key. RLS policies on the tables enforce
 * insert-only access from the public.
 */
export function getSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL ?? ""
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
    process.env.SUPABASE_ANON_KEY ??
    ""

  if (!url || !key) {
    throw new Error(
      "Supabase environment variables are not configured. Expected NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
    )
  }

  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}
