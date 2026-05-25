import { createClient } from "next-sanity"

export const SANITY_PROJECT_ID =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "mqa20p9b"
export const SANITY_DATASET =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
export const SANITY_API_VERSION =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01"

/**
 * Read-only Sanity client used from RSC / server code.
 * The `production` dataset is public, so no token is required for reads.
 */
export const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  useCdn: true,
  perspective: "published",
})

type FetchOptions = {
  /** Next.js revalidation interval in seconds. Defaults to 5 minutes. */
  revalidate?: number
  /** Optional Next.js cache tags. */
  tags?: string[]
}

export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  options: FetchOptions = {},
): Promise<T> {
  const { revalidate = 300, tags } = options
  return sanityClient.fetch<T>(query, params, {
    next: { revalidate, tags },
  })
}
