import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "From the Workshop",
  description:
    "Watch how a PUR flute comes to life — from raw wood to finished instrument. Process photos and video from the Rhodope workshop.",
}

const processSteps = [
  {
    image: "/workshop/air-chamber.jpg",
    caption: "Two halves of the flute body, grooved for the slow air chamber.",
  },
  {
    image: "/workshop/shaping-exterior.jpg",
    caption: "Shaping the exterior on the lathe. Sawdust and patience.",
  },
  {
    image: "/workshop/measuring.jpg",
    caption: "Measuring as the wood spins. Every dimension matters for the voice.",
  },
  {
    image: "/workshop/turning-interior.jpg",
    caption: "Hollowing the bore. Listening as the chamber opens up.",
  },
  {
    image: "/workshop/drilling.jpg",
    caption: "Precision drilling for the finger holes. Slow, careful work.",
  },
  {
    image: "/workshop/threading.jpg",
    caption: "Threading the base for the walking stick foot.",
  },
  {
    image: "/workshop/finishing.jpg",
    caption: "Final sanding and oiling. The wood grain comes alive.",
  },
  {
    image: "/workshop/walking-stick-finished.jpg",
    caption: "Ready to travel. A walking stick flute, voiced and waiting for its player.",
  },
]

export default function WorkshopPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          From the Workshop
        </p>
        <h1 className="mt-3 font-serif text-5xl leading-[1.05] text-balance text-foreground sm:text-6xl">
          Making the walking stick flute.
        </h1>
        <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground/85">
          A flute is slow work. Here&apos;s a look inside the process — from raw wood to an
          instrument ready to play.
        </p>
      </header>

      {/* Workshop hero images */}
      <section className="mt-12 grid gap-4 sm:grid-cols-3">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg sm:col-span-2 sm:aspect-[3/2]">
          <Image
            src="/workshop/workshop-space.jpg"
            alt="The workshop — tools, lathes, and works in progress"
            fill
            sizes="(min-width: 640px) 66vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src="/workshop/robert-safety.jpg"
            alt="Robert ready to work"
            fill
            sizes="(min-width: 640px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Video section */}
      <section className="mt-14">
        <div className="relative aspect-video overflow-hidden rounded-lg border border-border/60 bg-secondary">
          {/* 
            Replace this placeholder with your video embed:
            - For YouTube: <iframe src="https://www.youtube.com/embed/VIDEO_ID" ... />
            - For Vimeo: <iframe src="https://player.vimeo.com/video/VIDEO_ID" ... />
            - For self-hosted: <video src="/workshop/making-video.mp4" controls ... />
          */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-card/80">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
              <Play className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>
            <p className="text-sm text-muted-foreground">Video coming soon</p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          The full process — from selecting the wood to the first breath through the finished
          flute.
        </p>
      </section>

      {/* Process photos */}
      <section className="mt-20">
        <h2 className="font-serif text-3xl text-foreground">The process in pictures</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Each flute takes several days of careful work. These photos follow the walking stick
          flute from blank to breath.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {processSteps.map((step, index) => (
            <figure
              key={index}
              className="group overflow-hidden rounded-lg border border-border/60 bg-card"
            >
              <div className="relative aspect-[4/3] bg-secondary">
                <Image
                  src={step.image}
                  alt={step.caption}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="border-t border-border/40 px-5 py-4">
                <p className="font-mono text-xs uppercase tracking-widest text-primary">
                  Step {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/85">{step.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 flex flex-wrap items-center justify-between gap-6 rounded-lg border border-border/60 bg-card p-8 sm:p-12">
        <div className="max-w-xl">
          <h2 className="font-serif text-3xl text-foreground">See the finished flute</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            The walking stick flute is available now — walnut body, deep voice, made for long
            walks and quiet sits.
          </p>
        </div>
        <Button asChild>
          <Link href="/shop">
            View in the shop
            <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </section>
    </div>
  )
}
