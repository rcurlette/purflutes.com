import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Headphones, Youtube, Instagram, ArrowUpRight, Film, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SignupForm } from "@/components/site/signup-form"
import { VideoCard } from "@/components/site/video-card"
import { getFeaturedVideosEnriched } from "@/lib/videos"

export const metadata: Metadata = {
  title: "Sound & Gallery",
  description:
    "Listen to PUR Flutes — sound samples, recordings, and images of each instrument in the collection.",
}

type GalleryImage = {
  src: string
  alt: string
  caption?: string
  href?: string
  /** Controls column / row span hints for the CSS grid */
  wide?: boolean
  tall?: boolean
}

const galleryGroups: { label: string; images: GalleryImage[] }[] = [
  {
    label: "The flutes",
    images: [
      {
        src: "/flutes/walking-stick-light.jpg",
        alt: "Mystic walking stick flute — full length, warm reddish-brown finish",
        caption: "Mystic · Walking Stick",
        href: "/shop/walking-stick-flute",
        tall: true,
      },
      {
        src: "/flutes/walking-stick-top.jpg",
        alt: "Mystic — close-up of the mouthpiece and carved bird totem",
        caption: "Mystic · mouthpiece detail",
        href: "/shop/walking-stick-flute",
      },
      {
        src: "/flutes/walking-stick-foot.jpg",
        alt: "Mystic — rubber-capped maple foot detail",
        caption: "Mystic · foot detail",
        href: "/shop/walking-stick-flute",
      },
      {
        src: "/flutes/e-walnut-close.jpg",
        alt: "River Song walnut flute — full body on the bench",
        caption: "River Song · E minor",
        href: "/shop/river-song-e",
        wide: true,
      },
      {
        src: "/flutes/e-walnut-zoomed.jpg",
        alt: "River Song — voicing window close-up",
        caption: "River Song · voicing window",
        href: "/shop/river-song-e",
      },
      {
        src: "/flutes/e-walnut-super-close.jpg",
        alt: "River Song — macro view along the spine with three finger holes",
        caption: "River Song · finger holes",
        href: "/shop/river-song-e",
      },
      {
        src: "/flutes/e-walnut-process.jpg",
        alt: "River Song and second flute side by side on the bench, fresh wood shavings",
        caption: "River Song · in process",
        href: "/shop/river-song-e",
        wide: true,
      },
      {
        src: "/flutes/drone-bird.jpg",
        alt: "Drone double-flute — top view showing olive wood bird block",
        caption: "Drone · double flute",
        href: "/shop/drone",
      },
      {
        src: "/flutes/drone-bore.jpg",
        alt: "Drone double-flute — end-on view of the two parallel bores",
        caption: "Drone · bore detail",
        href: "/shop/drone",
      },
      {
        src: "/flutes/morning-star.jpg",
        alt: "Morning Star flute resting on natural fabric",
        caption: "Morning Star",
      },
      {
        src: "/flutes/river-song.jpg",
        alt: "River Song flute on a wooden surface",
        caption: "River Song",
      },
      {
        src: "/flutes/stargazer.jpg",
        alt: "Stargazer flute against dark background",
        caption: "Stargazer",
      },
      {
        src: "/flutes/whisper.jpg",
        alt: "Whisper flute — delicate grain in warm light",
        caption: "Whisper",
      },
      {
        src: "/flutes/deep-earth.jpg",
        alt: "Deep Earth flute in natural setting",
        caption: "Deep Earth",
      },
      {
        src: "/flutes/ceremony.jpg",
        alt: "Ceremony flute in ceremonial context",
        caption: "Ceremony",
      },
    ],
  },
  {
    label: "In the workshop",
    images: [
      {
        src: "/workshop.png",
        alt: "Radenko's Rhodope workshop — flute blanks on a bench beside a wall of tools",
        caption: "The workshop",
        wide: true,
      },
      {
        src: "/workshop/workshop-space.jpg",
        alt: "Full view of the workshop interior",
        caption: "Workshop space",
      },
      {
        src: "/workshop/tools-and-bird.jpg",
        alt: "Hand tools and a carved bird block laid out on the bench",
        caption: "Tools of the trade",
      },
      {
        src: "/workshop/drilling.jpg",
        alt: "Drilling the bore channel through a flute blank",
        caption: "Drilling the bore",
      },
      {
        src: "/workshop/air-chamber.jpg",
        alt: "Shaping the slow air chamber",
        caption: "Air chamber",
      },
      {
        src: "/workshop/measuring.jpg",
        alt: "Precise measurements being taken on a flute blank",
        caption: "Measuring",
        wide: true,
      },
      {
        src: "/workshop/shaping-exterior.jpg",
        alt: "Carving and shaping the exterior profile of a flute",
        caption: "Shaping the exterior",
      },
      {
        src: "/workshop/turning-interior.jpg",
        alt: "Turning the interior bore smooth",
        caption: "Turning interior",
      },
      {
        src: "/workshop/threading.jpg",
        alt: "Threading and fitting the bird block",
        caption: "Threading",
      },
      {
        src: "/workshop/finishing.jpg",
        alt: "Applying shellac finish to the completed flute",
        caption: "Finishing",
      },
      {
        src: "/workshop/walking-stick-finished.jpg",
        alt: "Completed walking stick flute propped up in the workshop",
        caption: "Walking stick — finished",
        tall: true,
      },
      {
        src: "/workshop/robert-safety.jpg",
        alt: "Robert working with safety equipment in the workshop",
        caption: "Safety first",
      },
    ],
  },
  {
    label: "The makers",
    images: [
      {
        src: "/gallery/robert-purifier.jpg",
        alt: "Robert in his workshop, crafting a wooden flute — Adidas jacket and hat, tools everywhere",
        caption: "Robert · at work",
        tall: true,
      },
      {
        src: "/gallery/radenko-purifier.jpg",
        alt: "Radenko working on woodwork, surrounded by an organised wall of hand tools",
        caption: "Radenko · at the bench",
        tall: true,
      },
      {
        src: "/robert-playing.png",
        alt: "Robert playing a finished cedar flute, framed by woven blankets",
        caption: "Robert · playing",
      },
      {
        src: "/robert.png",
        alt: "Portrait of Robert, flute maker and player",
        caption: "Robert",
      },
      {
        src: "/radenko.png",
        alt: "Portrait of Radenko, master craftsman",
        caption: "Radenko",
      },
    ],
  },
]

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

      {/* Photo gallery — all images grouped by theme */}
      <section aria-labelledby="photos-heading" className="mt-20">
        <div className="flex items-center gap-3">
          <Camera className="h-5 w-5 text-primary" aria-hidden="true" />
          <h2 id="photos-heading" className="font-serif text-3xl text-foreground">
            Photos
          </h2>
        </div>

        {galleryGroups.map((group) => (
          <div key={group.label} className="mt-12">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-primary">
              {group.label}
            </h3>
            <div className="grid auto-rows-[220px] grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {group.images.map((img) => {
                const inner = (
                  <figure
                    className={[
                      "group relative overflow-hidden rounded-lg border border-border/60 bg-secondary",
                      img.wide && !img.tall ? "col-span-2" : "",
                      img.tall && !img.wide ? "row-span-2" : "",
                      img.wide && img.tall ? "col-span-2 row-span-2" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {img.caption && (
                      <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-background/90 px-3 py-2 text-xs text-foreground transition-transform duration-300 group-hover:translate-y-0">
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                )

                return img.href ? (
                  <Link key={img.src} href={img.href} className={[
                    img.wide && !img.tall ? "col-span-2" : "",
                    img.tall && !img.wide ? "row-span-2" : "",
                    img.wide && img.tall ? "col-span-2 row-span-2" : "",
                  ].filter(Boolean).join(" ")}>
                    {inner}
                  </Link>
                ) : (
                  <div key={img.src} className={[
                    img.wide && !img.tall ? "col-span-2" : "",
                    img.tall && !img.wide ? "row-span-2" : "",
                    img.wide && img.tall ? "col-span-2 row-span-2" : "",
                  ].filter(Boolean).join(" ")}>
                    {inner}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </section>

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
