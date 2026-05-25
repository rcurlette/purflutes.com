export type Partner = {
  slug: string
  name: string
  location: string
  url: string
  image: { src: string; alt: string }
  blurb: string
  tags: string[]
}

export async function getAllPartners(): Promise<Partner[]> {
  // TODO: Implement data fetching from your preferred source
  return []
}
