"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { FluteImage } from "@/lib/flutes"
import { cn } from "@/lib/utils"

interface FluteImageCarouselProps {
  images: FluteImage[]
  fluteName: string
}

export function FluteImageCarousel({ images, fluteName }: FluteImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const prev = useCallback(() => {
    setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  }, [images.length])

  const next = useCallback(() => {
    setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1))
  }, [images.length])

  const active = images[activeIndex]

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border/60 bg-secondary">
        <Image
          key={active.src}
          src={active.src}
          alt={active.alt}
          fill
          priority={activeIndex === 0}
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover transition-opacity duration-300"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 border border-border/60 text-foreground backdrop-blur-sm transition hover:bg-background hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 border border-border/60 text-foreground backdrop-blur-sm transition hover:bg-background hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>

            {/* Dot indicators */}
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2"
              role="tablist"
              aria-label={`${fluteName} image gallery`}
            >
              {images.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`View image ${i + 1} of ${images.length}`}
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    i === activeIndex
                      ? "w-6 bg-primary"
                      : "w-1.5 bg-foreground/40 hover:bg-foreground/70"
                  )}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2" role="list" aria-label="Image thumbnails">
          {images.map((img, i) => (
            <button
              key={img.src}
              role="listitem"
              onClick={() => setActiveIndex(i)}
              aria-label={`Select image ${i + 1}: ${img.alt}`}
              className={cn(
                "relative aspect-square overflow-hidden rounded border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                i === activeIndex
                  ? "border-primary ring-1 ring-primary"
                  : "border-border/60 opacity-60 hover:opacity-90"
              )}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 11vw, 25vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
