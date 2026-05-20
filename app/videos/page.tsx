import type { Metadata } from "next"
import Link from "next/link"
import { Film, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VideoCard } from "@/components/site/video-card"
import { getAllVideos } from "@/lib/videos"

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Watch PUR Flutes — improvisations, ceremony pieces, and moments from the workshop in the Bulgarian Rhodopes.",
}

export default function VideosPage() {
  const videos = getAllVideos()

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Videos</p>
        <h1 className="mt-3 font-serif text-5xl leading-[1.05] text-balance text-foreground sm:text-6xl">
          Watch the flutes breathe.
        </h1>
        <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground/85">
          Short pieces, longer sits, and the occasional walk through the workshop. Press play.
        </p>
      </header>

      {videos.length > 0 ? (
        <section className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <VideoCard key={video.slug} video={video} />
          ))}
        </section>
      ) : (
        <section className="mt-12 rounded-lg border border-dashed border-border/60 bg-card p-10 text-center">
          <Film className="mx-auto h-10 w-10 text-primary" aria-hidden="true" />
          <h2 className="mt-4 font-serif text-2xl text-foreground">More videos on the way</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            We&apos;re editing fresh recordings from the workshop and the mountains. In the
            meantime, the full channel lives on YouTube.
          </p>
          <div className="mt-6">
            <Button asChild>
              <a
                href="https://www.youtube.com/@robert-plays-flute"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Youtube className="h-4 w-4" aria-hidden="true" />
                Watch on YouTube
              </a>
            </Button>
          </div>
        </section>
      )}

      <section className="mt-20 rounded-lg border border-primary/30 bg-primary/5 p-8 text-center sm:p-12">
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
          Prefer to listen?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Sound samples, gallery images, and links to the Instagram feed live on the Sound page.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button asChild>
            <Link href="/gallery">Visit Sound</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/shop">Browse flutes</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
