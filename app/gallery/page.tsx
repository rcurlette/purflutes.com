import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Headphones, Youtube, Instagram, ArrowUpRight, Film } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SignupForm } from "@/components/site/signup-form"
import { VideoCard } from "@/components/site/video-card"
import { flutes } from "@/lib/flutes"
import { getFeaturedVideosEnriched } from "@/lib/videos"

export const metadata: Metadata = {
  title: "Sound & Gallery",
  description:
    "Listen to PUR Flutes — sound samples, recordings, and images of each instrument in the collection.",
}

export default async function GalleryPage() {
  const featuredVideos = await getFeaturedVideosEnriched(3)
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Sound & Gallery</p>
        <h1 className="mt-3 font-serif text-5xl leading-[1.05] text-balance text-foreground sm:text-6xl">
          Press play. Slow down.
        </h1>
        <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground/85">
          Recordings of the flutes in their natural habitat — quiet rooms, breathwork circles, and
          occasional outdoor sits. Use headphones if you can.
        </p>
      </header>

      {/* From the practice */}
      <section aria-labelledby="practice-heading" className="mt-14">
        <h2 id="practice-heading" className="sr-only">
          From the practice
        </h2>
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          <figure className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border/60 bg-secondary">
            <Image
              src="/workshop.png"
              alt="Radenko&apos;s Rhodope workshop — flute blanks on a bench beside a wall of tools"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent p-6 sm:p-8">
              <p className="font-serif text-xs uppercase tracking-[0.3em] text-primary">
                In the workshop
              </p>
              <p className="mt-2 max-w-md font-serif text-2xl text-foreground sm:text-3xl">
                Where the wood first finds its breath.
              </p>
            </figcaption>
          </figure>
          <figure className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border/60 bg-secondary">
            <Image
              src="/robert-playing.png"
              alt="Robert playing a finished cedar flute, framed by woven blankets"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent p-6 sm:p-8">
              <p className="font-serif text-xs uppercase tracking-[0.3em] text-primary">
                In the world
              </p>
              <p className="mt-2 max-w-md font-serif text-2xl text-foreground sm:text-3xl">
                Where the breath finds its song.
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Videos */}
      {featuredVideos.length > 0 && (
        <section className="mt-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex items-center gap-3">
              <Film className="h-5 w-5 text-primary" aria-hidden="true" />
              <h2 className="font-serif text-3xl text-foreground">Watch</h2>
            </div>
            <Button asChild variant="ghost" className="text-primary hover:text-primary">
              <Link href="/videos">
                All videos
                <ArrowUpRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {featuredVideos.map((video) => (
              <VideoCard key={video.slug} video={video} />
            ))}
          </div>
        </section>
      )}

      {/* Listen & follow */}
      <section className="mt-20">
        <div className="mb-6 flex items-center gap-3">
          <Headphones className="h-5 w-5 text-primary" aria-hidden="true" />
          <h2 className="font-serif text-3xl text-foreground">Listen & follow</h2>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Robert shares new recordings and moments from the practice on YouTube and Instagram.
          Follow along for the latest.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <a
            href="https://www.youtube.com/@robert-plays-flute"
            target="_blank"
            rel="noreferrer noopener"
            className="group flex flex-col gap-4 rounded-lg border border-border/60 bg-card p-6 transition-colors hover:border-primary/60 hover:bg-primary/5"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Youtube className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">YouTube</p>
                  <h3 className="font-serif text-xl text-foreground">@robert-plays-flute</h3>
                </div>
              </div>
              <ArrowUpRight
                className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                aria-hidden="true"
              />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Recordings of the flutes in their natural habitat — improvisations, longer sits, and
              ceremony pieces.
            </p>
          </a>

          <a
            href="https://www.instagram.com/robertc__bg/"
            target="_blank"
            rel="noreferrer noopener"
            className="group flex flex-col gap-4 rounded-lg border border-border/60 bg-card p-6 transition-colors hover:border-primary/60 hover:bg-primary/5"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">Instagram</p>
                  <h3 className="font-serif text-xl text-foreground">@robertc__bg</h3>
                </div>
              </div>
              <ArrowUpRight
                className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                aria-hidden="true"
              />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Short clips, workshop moments, and field recordings from the Rhodopes and beyond.
            </p>
          </a>
        </div>
      </section>

      {/* Gallery of flute images */}
      <section className="mt-20">
        <h2 className="font-serif text-3xl text-foreground">The collection in pictures</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {flutes.map((flute) => (
            <Link
              key={flute.slug}
              href={`/shop/${flute.slug}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg border border-border/60"
            >
              <Image
                src={flute.images[0]?.src ?? `/flutes/${flute.slug}.jpg`}
                alt={flute.images[0]?.alt ?? `${flute.name} flute by PUR Flutes`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-serif text-2xl text-foreground">{flute.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-primary">{flute.key}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mt-20 rounded-lg border border-primary/30 bg-primary/5 p-8 text-center sm:p-12">
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
          Want a recording in your inbox now and then?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          We send a track or two each season — quiet, no spam, with notes from the studio.
        </p>
        <div className="mx-auto mt-8 max-w-md text-left">
          <SignupForm source="gallery" submitLabel="Send me sounds" />
        </div>
        <div className="mt-6">
          <Button asChild variant="ghost">
            <Link href="/shop">Browse flutes instead</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
