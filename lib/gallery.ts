import { sanityFetch } from "@/lib/sanity/client"

export type GalleryGroupKey = "flutes" | "workshop" | "makers"

export type GalleryImage = {
  src: string
  alt: string
  caption?: string
  href?: string
  wide?: boolean
  tall?: boolean
  group: GalleryGroupKey
}

export type GalleryGroup = {
  key: GalleryGroupKey
  label: string
  images: GalleryImage[]
}

export const GALLERY_GROUP_LABELS: Record<GalleryGroupKey, string> = {
  flutes: "The flutes",
  workshop: "In the workshop",
  makers: "The makers",
}

const GALLERY_GROUP_ORDER: GalleryGroupKey[] = ["flutes", "workshop", "makers"]

const GALLERY_PROJECTION = /* groq */ `{
  src,
  alt,
  caption,
  href,
  wide,
  tall,
  "group": group
}`

export async function getAllGalleryImages(): Promise<GalleryImage[]> {
  return sanityFetch<GalleryImage[]>(
    /* groq */ `*[_type == "galleryImage"] | order(group asc, coalesce(order, 9999) asc) ${GALLERY_PROJECTION}`,
    {},
    { tags: ["galleryImage"] },
  )
}

export async function getGalleryGroups(): Promise<GalleryGroup[]> {
  const all = await getAllGalleryImages()
  const byGroup = new Map<GalleryGroupKey, GalleryImage[]>()
  for (const img of all) {
    const list = byGroup.get(img.group) ?? []
    list.push(img)
    byGroup.set(img.group, list)
  }
  return GALLERY_GROUP_ORDER.filter((key) => byGroup.has(key)).map((key) => ({
    key,
    label: GALLERY_GROUP_LABELS[key],
    images: byGroup.get(key) ?? [],
  }))
}
