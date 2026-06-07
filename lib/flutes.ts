import { getSupabaseServerClient } from "@/lib/supabase/server"

export type FluteImage = {
  src: string
  alt: string
}

export type FluteStatus = "available" | "made-to-order" | "sold"

export type Flute = {
  slug: string
  name: string
  key: string
  tuning: string
  wood: string
  length: string
  priceEUR: number
  status: FluteStatus
  shortDescription: string
  longDescription: string
  features: string[]
  images?: FluteImage[]
  audioSrc?: string
  youtubeId?: string
}

/** Shape of a row in the public.flutes Supabase table. */
type FluteRow = {
  slug: string
  name: string
  key: string
  tuning: string
  wood: string
  length: string
  price_eur: number | string
  status: FluteStatus
  short_description: string
  long_description: string
  features: string[] | null
  images: FluteImage[] | null
  audio_src: string | null
  youtube_id: string | null
}

const FLUTE_COLUMNS =
  "slug, name, key, tuning, wood, length, price_eur, status, short_description, long_description, features, images, audio_src, youtube_id"

function mapRow(row: FluteRow): Flute {
  return {
    slug: row.slug,
    name: row.name,
    key: row.key,
    tuning: row.tuning,
    wood: row.wood,
    length: row.length,
    priceEUR: Number(row.price_eur),
    status: row.status,
    shortDescription: row.short_description,
    longDescription: row.long_description,
    features: row.features ?? [],
    images: row.images ?? undefined,
    audioSrc: row.audio_src ?? undefined,
    youtubeId: row.youtube_id ?? undefined,
  }
}

export async function getAllFlutes(): Promise<Flute[]> {
  const supabase = getSupabaseServerClient()
  const { data, error } = await supabase
    .from("flutes")
    .select(FLUTE_COLUMNS)
    .order("created_at", { ascending: true })

  if (error) {
    console.log("[v0] getAllFlutes error:", error.message)
    return []
  }

  return (data as FluteRow[]).map(mapRow)
}

export async function getFluteBySlug(slug: string): Promise<Flute | null> {
  const supabase = getSupabaseServerClient()
  const { data, error } = await supabase
    .from("flutes")
    .select(FLUTE_COLUMNS)
    .eq("slug", slug)
    .maybeSingle()

  if (error) {
    console.log("[v0] getFluteBySlug error:", error.message)
    return null
  }

  return data ? mapRow(data as FluteRow) : null
}

export async function getFluteSlugs(): Promise<string[]> {
  const supabase = getSupabaseServerClient()
  const { data, error } = await supabase.from("flutes").select("slug")

  if (error) {
    console.log("[v0] getFluteSlugs error:", error.message)
    return []
  }

  return (data as { slug: string }[]).map((row) => row.slug)
}
