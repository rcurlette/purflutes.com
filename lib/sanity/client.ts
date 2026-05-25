import { createClient } from "next-sanity"

const DEFAULT_API_VERSION = "2024-01-01"

/** Sanity expects either `1` or a date string in `YYYY-MM-DD` format. */
function normalizeApiVersion(input: string | undefined): string {
  if (!input) return DEFAULT_API_VERSION
  const trimmed = input.trim()
  if (trimmed === "1") return trimmed
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) return trimmed
  return DEFAULT_API_VERSION
}

export const SANITY_PROJECT_ID =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "mqa20p9b"
export const SANITY_DATASET =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
export const SANITY_API_VERSION = normalizeApiVersion(
  process.env.NEXT_PUBLIC_SANITY_API_VERSION,
)

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
