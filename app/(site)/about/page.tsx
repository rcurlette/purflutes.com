import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About",
  description:
    "PURFlutes is the work of two makers — Robert and Radenko — building Native American style flutes by hand in the Bulgarian Rhodope mountains for breathwork, ceremony, and quiet practice.",
}

export default function AboutPage() {
  return (
    <article className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">The Makers</p>
        <h1 className="mt-3 font-serif text-5xl leading-[1.05] text-balance text-foreground sm:text-6xl">
          Two hands, two mountains, one breath.
        </h1>
        <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground/85">
          PūRFlutes is the work of Robert and Radenko, carving Native American style flutes by
          hand in the Bulgarian Rhodope mountains — a partnership built on craft, listening, and a
          love of instruments that play the player.
        </p>
      </header>

      <section aria-labelledby="robert-heading" className="mt-14">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Co-founder · Voice &amp; Vision</p>
          <h2 id="robert-heading" className="mt-2 font-serif text-4xl text-foreground sm:text-5xl">
            Robert — the listener.
          </h2>
        </div>

      <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <div className="relative aspect-square overflow-hidden rounded-lg border border-border/60 bg-secondary">
          <Image
            src="/robert.png"
            alt="Portrait of Robert, co-founder of PUR Flutes"
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="space-y-6 text-pretty leading-relaxed text-foreground/90">
          <p>
            Robert came to the flute later in life, after years working in code, technology, and the
            quieter end of music. The first flute he played was a borrowed cedar instrument at a
            breathwork circle. He didn&apos;t put it down.
          </p>
          <p>
            What began as a personal practice grew into a partnership. He studied with elders and
            makers across Europe and North America, learning to read grain, tune by ear, and trust
            the wood to know what it wanted to be. Today he works alongside Radenko in the Rhodope
            workshop, voicing and finishing each flute before it ships to its player.
          </p>
          <blockquote className="border-l-2 border-primary pl-6 font-serif text-2xl italic text-foreground/95">
            &ldquo;A good flute doesn&apos;t play music. It plays the player. My job is to listen until
            the wood is ready to speak.&rdquo;
          </blockquote>
          <p>
            Robert holds breathwork circles, leads occasional retreats in nature, and travels to
            events like TRYP EXPO Berlin to share the flutes with people who are looking for them.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 pt-2">
            {[
              { word: "CREATE", line: "Wood, breath, time, and care." },
              { word: "HEAL", line: "Sound that meets the body." },
              { word: "INSPIRE", line: "A flute outlives its maker." },
            ].map((item) => (
              <div key={item.word} className="rounded-md border border-border/60 bg-card p-4">
                <p className="font-serif text-xs uppercase tracking-[0.3em] text-primary">{item.word}</p>
                <p className="mt-2 text-sm text-foreground/85">{item.line}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

   
      </section>

      <section aria-labelledby="radenko-heading" className="mt-24">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Co-founder &amp; Master Woodworker · Rhodope Mountains
          </p>
          <h2 id="radenko-heading" className="mt-2 font-serif text-4xl text-foreground sm:text-5xl">
            Radenko Velinov — the maker.
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-foreground/85">
            Born in Bulgaria&apos;s musical heartland, sharpened by a decade in Scotland, returned to
            the mountains to carve instruments that sing in two traditions at once.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div className="space-y-6 text-pretty leading-relaxed text-foreground/90 lg:order-1">
            <p>
              Radenko grew up surrounded by the modal melodies and ornamented breathwork of Bulgarian
              folk music — a tradition that, like the Native American flute, lives in long held tones
              and the spaces between them. The Rhodopes were the first instrument he ever loved.
            </p>
            <p>
              He spent more than ten years in Scotland refining his hands as a woodworker, learning
              precision, patience, and the quiet language of grain. When he came home to the
              mountains, he brought those tools back to a question he had carried since childhood:
              what does it sound like when two ancient flute traditions meet inside one piece of
              wood?
            </p>
            <blockquote className="border-l-2 border-primary pl-6 font-serif text-2xl italic text-foreground/95">
              &ldquo;A flute is a small forest. You cut it carefully, and you let it keep singing.&rdquo;
            </blockquote>
            <p>
              Every PūRFlute begins and ends in the Rhodope workshop — selected, bored, voiced,
              tuned, and finished by hand — before it ships to its player.
            </p>

            <ol className="grid gap-4 pt-2 sm:grid-cols-3">
              {[
                {
                  num: "01",
                  title: "Rhodope Origins",
                  body: "Born in Bulgaria's musical heartland. Inspired by the region's rich folk traditions and melodic heritage.",
                },
                {
                  num: "02",
                  title: "Scottish Woodworking",
                  body: "Honed his craft during 10+ years in Scotland. Developed precision techniques working with various woods.",
                },
                {
                  num: "03",
                  title: "Musical Innovation",
                  body: "Returned to the Rhodopes to bridge Bulgarian and Native American traditions. Creates instruments with unique tonal qualities.",
                },
              ].map((item) => (
                <li key={item.num} className="rounded-md border border-border/60 bg-card p-5">
                  <p className="font-serif text-xs uppercase tracking-[0.3em] text-primary">{item.num}</p>
                  <p className="mt-2 font-serif text-lg text-foreground">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">{item.body}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-border/60 bg-secondary lg:order-2">
            <Image
              src="/radenko.png"
              alt="Radenko Velinov, co-founder and master woodworker, holding a finished flute in his Rhodope workshop"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <figure className="mt-12 overflow-hidden rounded-lg border border-border/60 bg-secondary">
          <div className="relative aspect-[16/10] sm:aspect-[16/9]">
            <Image
              src="/workshop.png"
              alt="Radenko&apos;s Rhodope workshop — a wooden bench with four hand-bored flute blanks beside a wall of carving tools"
              fill
              sizes="(min-width: 1024px) 64rem, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="border-t border-border/60 bg-card px-6 py-5 text-sm leading-relaxed text-muted-foreground sm:px-8">
            Inside the Rhodope workshop. Four hand-bored blanks rest on the bench, ready to be voiced
            and tuned. The tools above the bench are arranged exactly as Radenko likes them &mdash; the
            way a player keeps their flutes within reach.
          </figcaption>
        </figure>
      </section>

      <section className="mt-20 flex flex-wrap items-center justify-between gap-6 rounded-lg border border-border/60 bg-card p-8 sm:p-12">
        <div className="max-w-xl">
          <h2 className="font-serif text-3xl text-foreground">Want to play one?</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Browse the current collection or come find us in person — Robert often travels to retreats and
            expos with a small selection of flutes to try.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/shop">
              See the flutes
              <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/order">Order a flute</Link>
          </Button>
        </div>
      </section>
    </article>
  )
}
