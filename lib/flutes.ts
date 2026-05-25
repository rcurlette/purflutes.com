import { sanityFetch } from "@/lib/sanity/client"

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

const FLUTE_PROJECTION = /* groq */ `{
  "slug": slug.current,
  name,
  key,
  tuning,
  wood,
  length,
  priceEUR,
  status,
  shortDescription,
  longDescription,
  features,
  "images": images[]{ src, alt },
  audioSrc,
  youtubeId
}`

export async function getAllFlutes(): Promise<Flute[]> {
  return sanityFetch<Flute[]>(
    /* groq */ `*[_type == "flute"] | order(coalesce(order, 9999) asc, name asc) ${FLUTE_PROJECTION}`,
    {},
    { tags: ["flute"] },
  )
}

export async function getFluteBySlug(slug: string): Promise<Flute | null> {
  return sanityFetch<Flute | null>(
    /* groq */ `*[_type == "flute" && slug.current == $slug][0] ${FLUTE_PROJECTION}`,
    { slug },
    { tags: ["flute", `flute:${slug}`] },
  )
}

export async function getFluteSlugs(): Promise<string[]> {
  return sanityFetch<string[]>(
    /* groq */ `*[_type == "flute" && defined(slug.current)].slug.current`,
    {},
    { tags: ["flute"] },
  )
}
