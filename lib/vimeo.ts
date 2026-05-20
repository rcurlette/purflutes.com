import { cache } from "react"

export type VimeoMeta = {
  title?: string
  description?: string
  thumbnail?: string
  duration?: string
}

type VimeoOEmbed = {
  title?: string
  description?: string
  thumbnail_url?: string
  thumbnail_url_with_play_button?: string
  duration?: number
}

function formatDuration(seconds: number | undefined): string | undefined {
  if (!seconds || !Number.isFinite(seconds)) return undefined
  const total = Math.round(seconds)
  const m = Math.floor(total / 60)
  const s = total % 60
  return `${m}:${s.toString().padStart(2, "0")}`
}

function upgradeThumbnail(url: string | undefined): string | undefined {
  if (!url) return undefined
  // Vimeo returns sized thumbnails like ..._295x166. Request a larger version.
  return url.replace(/_\d+x\d+(?=\.[a-z]+(?:\?|$))/i, "_1280x720")
}

/**
 * Fetch Vimeo video metadata (title, thumbnail, duration) via the public
 * oEmbed endpoint. Cached for the request and revalidated daily.
 */
export const fetchVimeoMeta = cache(async (id: string): Promise<VimeoMeta> => {
  try {
    const res = await fetch(
      `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(`https://vimeo.com/${id}`)}&width=1280`,
      { next: { revalidate: 60 * 5 } },
    )
    if (!res.ok) return {}
    const data = (await res.json()) as VimeoOEmbed
    return {
      title: data.title,
      description: data.description ?? undefined,
      thumbnail: upgradeThumbnail(data.thumbnail_url),
      duration: formatDuration(data.duration),
    }
  } catch {
    return {}
  }
})
