"use client"

import Image from "next/image"
import { useState } from "react"
import { Play } from "lucide-react"
import type { Video } from "@/lib/videos"
import { VideoPlayer } from "@/components/site/video-player"

type VideoCardProps = {
  video: Video
}

export function VideoCard({ video }: VideoCardProps) {
  const [playing, setPlaying] = useState(false)

  return (
    <article className="flex flex-col gap-4">
      {playing ? (
        <VideoPlayer video={video} autoPlay />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group relative aspect-video w-full overflow-hidden rounded-lg border border-border/60 bg-secondary"
          aria-label={`Play ${video.title}`}
        >
          {video.poster ? (
            <Image
              src={video.poster}
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-secondary to-card" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent transition-opacity group-hover:from-background/50" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
              <Play className="h-6 w-6 translate-x-0.5 fill-current" aria-hidden="true" />
            </span>
          </span>
          {video.duration && (
            <span className="absolute bottom-3 right-3 rounded bg-background/85 px-2 py-1 font-mono text-xs text-foreground">
              {video.duration}
            </span>
          )}
        </button>
      )}
      <div>
        <h3 className="font-serif text-xl text-foreground">{video.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{video.description}</p>
      </div>
    </article>
  )
}
