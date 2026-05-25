import type { Metadata } from "next"
import Image from "next/image"
import { ArrowUpRight, Handshake } from "lucide-react"
import { getAllPartners } from "@/lib/partners"

export const metadata: Metadata = {
  title: "Partners · PUR Flutes",
  description:
    "Spaces and communities we play, gather, and create with — retreats, sound healing studios, and mountain homes.",
}

export default async function PartnersPage() {
  const partners = await getAllPartners()
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <header className="max-w-2xl">
        <div className="flex items-center gap-3">
          <Handshake className="h-5 w-5 text-primary" aria-hidden="true" />
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Partners</p>
        </div>
        <h1 className="mt-3 font-serif text-4xl text-balance text-foreground sm:text-5xl">
          Friends of the practice.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          The flutes don&apos;t live alone. These are the spaces and communities we play in, gather
          with, and learn from — places where the practice of listening is held with care.
        </p>
      </header>

      <ul className="mt-12 grid gap-10 md:grid-cols-2">
        {partners.map((partner) => (
          <li key={partner.slug}>
            <a
              href={partner.url}
              target="_blank"
              rel="noreferrer noopener"
              className="group block overflow-hidden rounded-lg border border-border/60 bg-card transition-colors hover:border-primary/60"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary">
                <Image
                  src={partner.image.src}
                  alt={partner.image.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-4 p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {partner.location}
                    </p>
                    <h2 className="mt-1 font-serif text-2xl text-foreground sm:text-3xl">
                      {partner.name}
                    </h2>
                  </div>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{partner.blurb}</p>
                <ul className="flex flex-wrap gap-2 pt-1">
                  {partner.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border/60 bg-secondary/60 px-3 py-1 text-xs text-foreground/70"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <p className="pt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {new URL(partner.url).hostname.replace(/^www\./, "")}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}
