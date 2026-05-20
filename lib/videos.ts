export type VideoSource =
  | {
      type: "vimeo"
      /** The numeric Vimeo video ID, e.g. "76979871" from vimeo.com/76979871 */
      id: string
    }
  | {
      type: "local"
      /** Path under /public, e.g. "/videos/morning-sit.mp4" */
      src: string
      /** Optional MIME type, defaults to "video/mp4" */
      mimeType?: string
    }

export type Video = {
  slug: string
  title: string
  description: string
  /** Optional poster image path under /public, e.g. "/videos/morning-sit.jpg" */
  poster?: string
  /** Optional duration string for display, e.g. "4:12" */
  duration?: string
  /** ISO date string, used for sorting (newest first) */
  date: string
  /** Mark as featured to surface on the Sound page */
  featured?: boolean
  source: VideoSource
}

/**
 * Robert's video library.
 *
 * To add a new video:
 *   - For Vimeo: copy the numeric ID from the share URL (vimeo.com/<id>)
 *     and add an entry with source: { type: "vimeo", id: "..." }
 *   - For a local file: drop the .mp4 in /public/videos and use
 *     source: { type: "local", src: "/videos/<filename>.mp4" }
 *   - For a poster image, drop a still in /public/videos and set `poster`.
 */
export const videos: Video[] = [
  {
    slug: "field-recording-01",
    title: "Field recording · 01",
    description: "A short flute moment captured on location.",
    date: "2026-05-20",
    featured: true,
    source: { type: "vimeo", id: "1192796089" },
  },
  {
    slug: "field-recording-02",
    title: "Field recording · 02",
    description: "A short flute moment captured on location.",
    date: "2026-05-20",
    featured: true,
    source: { type: "vimeo", id: "1192796090" },
  },
  {
    slug: "field-recording-03",
    title: "Field recording · 03",
    description: "A short flute moment captured on location.",
    date: "2026-05-20",
    featured: true,
    source: { type: "vimeo", id: "1192796088" },
  },
  {
    slug: "field-recording-04",
    title: "Field recording · 04",
    description: "A short flute moment captured on location.",
    date: "2026-05-19",
    source: { type: "vimeo", id: "1192796086" },
  },
  {
    slug: "field-recording-05",
    title: "Field recording · 05",
    description: "A short flute moment captured on location.",
    date: "2026-05-19",
    source: { type: "vimeo", id: "1192796085" },
  },
  {
    slug: "field-recording-06",
    title: "Field recording · 06",
    description: "A short flute moment captured on location.",
    date: "2026-05-18",
    source: { type: "vimeo", id: "1192794038" },
  },
  {
    slug: "field-recording-07",
    title: "Field recording · 07",
    description: "A short flute moment captured on location.",
    date: "2026-05-18",
    source: { type: "vimeo", id: "1192794037" },
  },
  {
    slug: "field-recording-08",
    title: "Field recording · 08",
    description: "A short flute moment captured on location.",
    date: "2026-05-18",
    source: { type: "vimeo", id: "1192794036" },
  },
  {
    slug: "field-recording-09",
    title: "Field recording · 09",
    description: "A short flute moment captured on location.",
    date: "2026-05-18",
    source: { type: "vimeo", id: "1192794033" },
  },
]

export function getAllVideos(): Video[] {
  return [...videos].sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getFeaturedVideos(limit = 3): Video[] {
  return getAllVideos()
    .filter((v) => v.featured)
    .slice(0, limit)
}

export function getVideoBySlug(slug: string): Video | undefined {
  return videos.find((v) => v.slug === slug)
}
