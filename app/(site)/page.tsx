import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Wind, Heart, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FluteCard } from "@/components/site/flute-card"
import { SignupForm } from "@/components/site/signup-form"
import { getAllFlutes } from "@/lib/flutes"

export default async function HomePage() {
  const allFlutes = await getAllFlutes()
  const featuredFlutes = allFlutes.slice(0, 3)

  return (
    <>
      {/* Hero with banner image */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/banner.png"
            alt="A wide cosmic landscape with a flute, eagle, wolf, and sacred geometry — the visual world of PUR Flutes"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8 lg:py-44">
          <p className="font-serif text-sm uppercase tracking-[0.3em] text-primary/90">
            Sound · Breath · Ceremony
          </p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-balance text-foreground sm:text-6xl lg:text-7xl">
            Tune out the noise. <span className="text-primary italic">Tune into the soul.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-foreground/85">
            Handcrafted Native American style flutes for meditation, breathwork, and ceremony.
            Each instrument is shaped by hand in the Bulgarian Rhodope mountains and tuned to carry
            your breath into the world.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="font-medium">
              <Link href="/shop">
                Explore the flutes
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-medium">
              <Link href="/tryp">Meet us at TRYP Berlin</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mantras row */}
      <section className="border-y border-border/40 bg-card/40">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            { icon: Wind, label: "Sound is medicine" },
            { icon: Heart, label: "Breath is the bridge" },
            { icon: Sparkles, label: "Music is a portal" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-3 text-center">
              <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
              <span className="font-serif text-xl italic text-foreground/90">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured flutes */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">The Flutes</p>
            <h2 className="mt-2 max-w-2xl font-serif text-4xl text-balance text-foreground sm:text-5xl">
              Each one is hand-shaped, hand-tuned, and one of a kind.
            </h2>
          </div>
          <Button asChild variant="ghost" className="text-primary hover:text-primary">
            <Link href="/shop">
              See all flutes
              <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredFlutes.map((flute) => (
            <FluteCard key={flute.slug} flute={flute} />
          ))}
        </div>
      </section>

      {/* Real photos: workshop + playing */}
      <section className="border-t border-border/40 bg-card/40">
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <figure className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border/60 bg-secondary">
              <Image
                src="/workshop.png"
                alt="Inside Radenko&apos;s Rhodope workshop — a wooden bench with four hand-bored flute blanks beside a wall of carving tools"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent p-6 sm:p-8">
                <p className="font-serif text-xs uppercase tracking-[0.3em] text-primary">
                  Inside the workshop
                </p>
                <p className="mt-2 max-w-md font-serif text-2xl text-foreground sm:text-3xl">
                  Four blanks, hand-bored, waiting to find their voice.
                </p>
              </figcaption>
            </figure>
            <figure className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border/60 bg-secondary">
              <Image
                src="/robert-playing.png"
                alt="Robert playing a finished cedar flute, eyes closed, framed by traditional woven blankets"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent p-6 sm:p-8">
                <p className="font-serif text-xs uppercase tracking-[0.3em] text-primary">
                  Out in the world
                </p>
                <p className="mt-2 max-w-md font-serif text-2xl text-foreground sm:text-3xl">
                  Every flute is built to be played, not displayed.
                </p>
              </figcaption>
            </figure>
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center font-serif text-xl italic text-foreground/85 sm:text-2xl">
            Hands in the wood. Breath in the world.
          </p>
        </div>
      </section>

      {/* Makers teaser */}
      <section className="border-t border-border/40 bg-background">
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">The Makers</p>
            <h2 className="mt-2 font-serif text-4xl text-balance text-foreground sm:text-5xl">
              Two hands, two mountains, one breath.
            </h2>
            <p className="mt-6 max-w-prose leading-relaxed text-foreground/85">
              Every PūR Flute is carved by hand in the Bulgarian Rhodope mountains. Radenko shapes
              the wood; Robert voices and tunes each instrument before it ships to its player. A
              partnership built on craft, listening, and a love of instruments that play the player.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Robert */}
            <div className="grid gap-6 rounded-lg border border-border/60 bg-card p-6 sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-8">
              <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-md border border-border/60 bg-secondary sm:h-44 sm:w-44">
                <Image
                  src="/robert-playing.png"
                  alt="Robert playing a flute, co-founder of PUR Flutes"
                  fill
                  sizes="(min-width: 640px) 11rem, 8rem"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="font-serif text-xs uppercase tracking-[0.3em] text-primary">
                  Co-founder · Voice &amp; Vision
                </p>
                <h3 className="mt-2 font-serif text-2xl text-foreground">Robert: the listener.</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                  Came to the flute through meditation and never put it down. Today he leads circles,
                  tunes by ear, and carries each instrument from the workshop to the player.
                </p>
                <p className="mt-3 font-serif text-xs uppercase tracking-[0.3em] text-foreground/70">
                  Create · Heal · Inspire
                </p>
              </div>
            </div>

            {/* Radenko */}
            <div className="grid gap-6 rounded-lg border border-border/60 bg-card p-6 sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-8">
              <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-md border border-border/60 bg-secondary sm:h-44 sm:w-44">
                <Image
                  src="/radenko.png"
                  alt="Radenko Velinov, co-founder and master woodworker"
                  fill
                  sizes="(min-width: 640px) 11rem, 8rem"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-serif text-xs uppercase tracking-[0.3em] text-primary">
                  Co-founder · Rhodope Mountains
                </p>
                <h3 className="mt-2 font-serif text-2xl text-foreground">
                  Radenko Velinov: the maker.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                  Bulgarian-born, Scottish-trained master woodworker. Carves every PūR Flute by hand
                  in his Rhodope workshop, bridging Bulgarian and Native American traditions.
                </p>
                <p className="mt-3 font-serif text-xs uppercase tracking-[0.3em] text-foreground/70">
                  Wood · Grain · Breath · Tone
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Button asChild variant="link" className="px-0 text-primary">
              <Link href="/about">
                Read the full story
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto w-full max-w-3xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="rounded-lg border border-border/60 bg-card p-8 sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Stay in the circle</p>
          <h2 className="mt-2 font-serif text-3xl text-balance text-foreground sm:text-4xl">
            Stay close to the practice.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            A quiet, occasional letter. New flutes, ceremony invites, and where you can find us
            next.
          </p>
          <div className="mt-6">
            <SignupForm source="homepage" submitLabel="Sign up" />
          </div>
        </div>
      </section>
    </>
  )
}
