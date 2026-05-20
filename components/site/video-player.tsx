import type { Video } from "@/lib/videos"

type VideoPlayerProps = {
  video: Video
  /** Autoplay when mounted. Useful for the click-to-play card flow. */
  autoPlay?: boolean
  className?: string
}

export function VideoPlayer({ video, autoPlay = false, className }: VideoPlayerProps) {
  const base = "relative aspect-video w-full overflow-hidden rounded-lg border border-border/60 bg-black"
  const wrapperClass = className ? `${base} ${className}` : base

  if (video.source.type === "vimeo") {
    const params = new URLSearchParams({
      title: "0",
      byline: "0",
      portrait: "0",
      dnt: "1",
    })
    if (autoPlay) {
      params.set("autoplay", "1")
      params.set("muted", "1")
    }
    const src = `https://player.vimeo.com/video/${video.source.id}?${params.toString()}`
    return (
      <div className={wrapperClass}>
        <iframe
          src={src}
          title={video.title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 h-full w-full"
        />
      </div>
    )
  }

  return (
    <div className={wrapperClass}>
      <video
        controls
        autoPlay={autoPlay}
        muted={autoPlay}
        playsInline
        preload="metadata"
        poster={video.poster}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={video.source.src} type={video.source.mimeType ?? "video/mp4"} />
        Your browser does not support embedded video.
      </video>
    </div>
  )
}
