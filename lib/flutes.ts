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

export async function getAllFlutes(): Promise<Flute[]> {
  // TODO: Implement data fetching from your preferred source
  return []
}

export async function getFluteBySlug(slug: string): Promise<Flute | null> {
  // TODO: Implement data fetching from your preferred source
  return null
}

export async function getFluteSlugs(): Promise<string[]> {
  // TODO: Implement data fetching from your preferred source
  return []
}
