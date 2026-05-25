import { fetchVimeoMeta } from "@/lib/vimeo"

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

export async function getAllVideos(): Promise<Video[]> {
  // TODO: Implement data fetching from your preferred source
  return []
}

export async function getFeaturedVideos(limit = 3): Promise<Video[]> {
  // TODO: Implement data fetching from your preferred source
  return []
}

export async function getVideoBySlug(slug: string): Promise<Video | null> {
  // TODO: Implement data fetching from your preferred source
  return null
}

/**
 * Enrich a video with live Vimeo metadata (title, description, thumbnail, duration).
 * Falls back to the stored values when oEmbed fails or the video is local.
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
