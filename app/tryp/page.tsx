import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, ArrowRight, Sparkles, Wind, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SignupForm } from "@/components/site/signup-form"
import { getEventBySlug } from "@/lib/events"

export const metadata: Metadata = {
  title: "TRYP EXPO Berlin 2026",
  description:
    "Meet PUR Flutes at TRYP EXPO Berlin 2026 where psychedelics, science, music, and wellness meet. Try our flutes, take home an event guide, and stay in the circle.",
}

export default async function TrypPage() {
  const event = await getEventBySlug("tryp-expo-berlin-2026")

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/banner.png"
            alt="Cosmic banner with sacred geometry and a flute"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        </div>
        <div className="mx-auto w-full max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
          <p className="font-serif text-sm uppercase tracking-[0.3em] text-primary">
            We&apos;re at TRYP EXPO Berlin 2026
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-balance text-foreground sm:text-6xl lg:text-7xl">
            Welcome, friend of <span className="italic text-primary">TRYP</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-foreground/85">
            You found us. Whether you spoke with us, scanned a QR, or followed a thread —
            you&apos;re in the right place.
          </p>
          {event && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-foreground/80">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" aria-hidden="true" />
                {event.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                {event.location}, {event.city}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Email capture - the primary CTA for QR visitors */}
      <section className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="rounded-lg border border-primary/40 bg-card p-8 sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Stay in the circle</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
            Leave your email and we&apos;ll send you our TRYP guide.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            A short PDF with the flutes we&apos;re showing at the booth, sound samples, breathwork
            practices to try at home, and a TRYP-only discount code on your first flute.
          </p>
          <div className="mt-6">
            <SignupForm
              source="tryp-expo-berlin-2026"
              showName
              showInterests
              submitLabel="Send me the guide"
              successMessage="Welcome. The guide is on its way."
            />
          </div>
        </div>
      </section>

      {/* What we're bringing */}
      <section className="border-t border-border/40 bg-card/40">
        <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">At the booth</p>
            <h2 className="mt-3 font-serif text-4xl text-balance text-foreground sm:text-5xl">
              Come play. Come listen.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Music,
                title: "Try the flutes",
                body: "A small selection of flutes in different keys and woods. Pick one up. Take a breath. See what happens.",
              },
              {
                icon: Wind,
                title: "Mini breathwork sits",
                body: "Short guided breath sits with live flute throughout the day. Drop in for ten minutes.",
              },
              {
                icon: Sparkles,
                title: "TRYP-only offer",
                body: "Anyone who signs up at the booth gets a code for their first flute or commission.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-lg border border-border/60 bg-card p-6"
              >
                <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <h3 className="font-serif text-2xl text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pointer to the rest of the site */}
      <section className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/shop"
            className="group rounded-lg border border-border/60 bg-card p-8 transition-colors hover:border-primary/60"
          >
            <h3 className="font-serif text-2xl text-foreground group-hover:text-primary">
              Browse the full collection
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Six flutes available now plus made-to-order commissions in the key of your choice.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
              Shop flutes <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </Link>
          <Link
            href="/about"
            className="group rounded-lg border border-border/60 bg-card p-8 transition-colors hover:border-primary/60"
          >
            <h3 className="font-serif text-2xl text-foreground group-hover:text-primary">
              Meet the makers
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Robert and Radenko, carving flutes by hand in the Bulgarian Rhodope mountains. Two
              hands, one mountains, one breath.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
              Read their story <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </Link>
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <a href="https://tryp.de/" target="_blank" rel="noreferrer noopener">
              Visit TRYP EXPO Berlin
            </a>
          </Button>
        </div>
      </section>
    </>
  )
}
