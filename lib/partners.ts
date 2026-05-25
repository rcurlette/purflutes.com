import { sanityFetch } from "@/lib/sanity/client"

export type Partner = {
  slug: string
  name: string
  location: string
  url: string
  image: { src: string; alt: string }
  blurb: string
  tags: string[]
}

const PARTNER_PROJECTION = /* groq */ `{
  "slug": slug.current,
  name,
  location,
  url,
  "image": { "src": image.src, "alt": image.alt },
  blurb,
  tags
}`

export async function getAllPartners(): Promise<Partner[]> {
  return sanityFetch<Partner[]>(
    /* groq */ `*[_type == "partner"] | order(coalesce(order, 9999) asc, name asc) ${PARTNER_PROJECTION}`,
    {},
    { tags: ["partner"] },
  )
}
