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
  // Example entries — replace these with your real videos.
  // {
  //   slug: "morning-sit-cedar",
  //   title: "Morning sit · cedar in A",
  //   description:
  //     "A short improvisation on the cedar A-minor flute, recorded just after sunrise in the Rhodopes.",
  //   poster: "/videos/morning-sit.jpg",
  //   duration: "4:12",
  //   date: "2026-04-10",
  //   featured: true,
  //   source: { type: "vimeo", id: "76979871" },
  // },
  // {
  //   slug: "workshop-tour",
  //   title: "Inside the workshop",
  //   description: "A walk through Radenko's bench in the mountains.",
  //   poster: "/videos/workshop-tour.jpg",
  //   duration: "2:38",
  //   date: "2026-03-22",
  //   source: { type: "local", src: "/videos/workshop-tour.mp4" },
  // },
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
