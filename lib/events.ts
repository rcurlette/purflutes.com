import { sanityFetch } from "@/lib/sanity/client"

export type FluteEventType = "expo" | "ceremony" | "workshop" | "festival"

export type FluteEvent = {
  slug: string
  name: string
  date: string
  dateISO: string
  location: string
  city: string
  country: string
  url?: string
  description: string
  type: FluteEventType
  featured?: boolean
}

const EVENT_PROJECTION = /* groq */ `{
  "slug": slug.current,
  name,
  date,
  dateISO,
  location,
  city,
  country,
  url,
  description,
  type,
  featured
}`

export async function getAllEvents(): Promise<FluteEvent[]> {
  return sanityFetch<FluteEvent[]>(
    /* groq */ `*[_type == "event"] | order(dateISO asc) ${EVENT_PROJECTION}`,
    {},
    { tags: ["event"] },
  )
}

export async function getFeaturedEvent(): Promise<FluteEvent | null> {
  return sanityFetch<FluteEvent | null>(
    /* groq */ `*[_type == "event" && featured == true] | order(dateISO asc)[0] ${EVENT_PROJECTION}`,
    {},
    { tags: ["event"] },
  )
}

export async function getEventBySlug(slug: string): Promise<FluteEvent | null> {
  return sanityFetch<FluteEvent | null>(
    /* groq */ `*[_type == "event" && slug.current == $slug][0] ${EVENT_PROJECTION}`,
    { slug },
    { tags: ["event", `event:${slug}`] },
  )
}
