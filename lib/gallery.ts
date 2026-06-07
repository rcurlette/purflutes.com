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

export async function getAllGalleryImages(): Promise<GalleryImage[]> {
  // TODO: Implement data fetching from your preferred source
  return []
}

export async function getGalleryGroups(): Promise<GalleryGroup[]> {
  // TODO: Implement data fetching from your preferred source
  return []
}
