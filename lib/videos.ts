import { fetchVimeoMeta } from "@/lib/vimeo"
import { sanityFetch } from "@/lib/sanity/client"

export type VideoSource =
  | { type: "vimeo"; id: string }
  | { type: "local"; src: string; mimeType?: string }

export type Video = {
  slug: string
  title: string
  description: string
  poster?: string
  duration?: string
  date: string
  featured?: boolean
  source: VideoSource
}

type VideoRow = {
  slug: string
  title: string
  description: string
  poster?: string | null
  duration?: string | null
  date: string
  featured?: boolean | null
  sourceType: "vimeo" | "local"
  vimeoId?: string | null
  localSrc?: string | null
  localMimeType?: string | null
}

const VIDEO_PROJECTION = /* groq */ `{
  "slug": slug.current,
  title,
  description,
  poster,
  duration,
  date,
  featured,
  sourceType,
  vimeoId,
  localSrc,
  localMimeType
}`

function rowToVideo(row: VideoRow): Video {
  const source: VideoSource =
    row.sourceType === "local"
      ? {
          type: "local",
          src: row.localSrc ?? "",
          mimeType: row.localMimeType ?? undefined,
        }
      : { type: "vimeo", id: row.vimeoId ?? "" }

  return {
    slug: row.slug,
    title: row.title,
    description: row.description,
    poster: row.poster ?? undefined,
    duration: row.duration ?? undefined,
    date: row.date,
    featured: row.featured ?? false,
    source,
  }
}

export async function getAllVideos(): Promise<Video[]> {
  const rows = await sanityFetch<VideoRow[]>(
    /* groq */ `*[_type == "video"] | order(date desc) ${VIDEO_PROJECTION}`,
    {},
    { tags: ["video"] },
  )
  return rows.map(rowToVideo)
}

export async function getFeaturedVideos(limit = 3): Promise<Video[]> {
  const rows = await sanityFetch<VideoRow[]>(
    /* groq */ `*[_type == "video" && featured == true] | order(date desc)[0...$limit] ${VIDEO_PROJECTION}`,
    { limit },
    { tags: ["video"] },
  )
  return rows.map(rowToVideo)
}

export async function getVideoBySlug(slug: string): Promise<Video | null> {
  const row = await sanityFetch<VideoRow | null>(
    /* groq */ `*[_type == "video" && slug.current == $slug][0] ${VIDEO_PROJECTION}`,
    { slug },
    { tags: ["video", `video:${slug}`] },
  )
  return row ? rowToVideo(row) : null
}

/**
 * Enrich a video with live Vimeo metadata (title, description, thumbnail, duration).
 * Falls back to the values stored in Sanity when oEmbed fails or the video is local.
 */
export async function enrichVideo(video: Video): Promise<Video> {
  if (video.source.type !== "vimeo") return video
  const meta = await fetchVimeoMeta(video.source.id)
  return {
    ...video,
    title: meta.title ?? video.title,
    description: meta.description ?? video.description,
    poster: video.poster ?? meta.thumbnail,
    duration: video.duration ?? meta.duration,
  }
}

export async function getAllVideosEnriched(): Promise<Video[]> {
  const all = await getAllVideos()
  return Promise.all(all.map(enrichVideo))
}

export async function getFeaturedVideosEnriched(limit = 3): Promise<Video[]> {
  const featured = await getFeaturedVideos(limit)
  return Promise.all(featured.map(enrichVideo))
}
