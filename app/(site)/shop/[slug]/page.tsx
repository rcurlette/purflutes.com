import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Check, Volume2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { InquiryForm } from "@/components/site/inquiry-form"
import { FluteImageCarousel } from "@/components/site/flute-image-carousel"
import { getFluteBySlug, getFluteSlugs, type Flute } from "@/lib/flutes"

const statusLabel: Record<Flute["status"], string> = {
  available: "Available now",
  "made-to-order": "Made to order",
  sold: "Sold",
}

export async function generateStaticParams() {
  const slugs = await getFluteSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const flute = await getFluteBySlug(slug)
  if (!flute) return { title: "Flute not found" }
  return {
    title: `${flute.name} — ${flute.key} flute`,
    description: flute.shortDescription,
  }
}

export default async function FluteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const flute = await getFluteBySlug(slug)
  if (!flute) notFound()

  // Resolve the image list: use curated images array if available, else fall back to the generated slug image
  const images =
    flute.images && flute.images.length > 0
      ? flute.images
      : [
          {
            src: `/flutes/${flute.slug}.jpg`,
            alt: `${flute.name} — ${flute.key} Native American style flute by PUR Flutes`,
          },
        ]

  const hasSoundOrVideo = !!(flute.audioSrc || flute.youtubeId)

  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <Link
        href="/shop"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All flutes
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-2">
        {/* Image carousel */}
        <FluteImageCarousel images={images} fluteName={flute.name} />

        {/* Details */}
        <div className="flex flex-col gap-6">
          <div>
            <Badge variant={flute.status === "sold" ? "secondary" : "default"} className="mb-4">
              {statusLabel[flute.status]}
            </Badge>
            <h1 className="font-serif text-5xl leading-[1.05] text-foreground sm:text-6xl">
              {flute.name}
            </h1>
            <p className="mt-3 text-base text-muted-foreground">
              {flute.key} · {flute.tuning} · {flute.wood} · {flute.length}
            </p>
            <p className="mt-4 font-serif text-3xl text-primary">
              €{flute.priceEUR.toLocaleString()}
            </p>
          </div>

          <p className="text-pretty leading-relaxed text-foreground/90">{flute.longDescription}</p>

          <Separator />

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-primary">
              Specifications
            </h2>
            <ul className="mt-4 grid gap-2.5 text-sm">
              {flute.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-foreground/90">
                  <Check
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Sound & video section */}
      {hasSoundOrVideo && (
        <section
          aria-labelledby="sound-heading"
          className="mt-20 rounded-lg border border-border/60 bg-card p-8 sm:p-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Volume2 className="h-5 w-5 text-primary" aria-hidden="true" />
            <h2
              id="sound-heading"
              className="font-serif text-2xl text-foreground sm:text-3xl"
            >
              Hear the {flute.name}
            </h2>
          </div>
          <p className="mb-8 max-w-prose text-sm leading-relaxed text-muted-foreground">
            Every flute has its own voice. These samples were recorded in the Rhodope workshop
            the day the instrument was finished — no effects, no studio treatment, just breath
            and wood.
          </p>

          {flute.youtubeId && (
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-border/60">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${flute.youtubeId}?rel=0&modestbranding=1`}
                title={`${flute.name} video demonstration`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          )}

          {flute.audioSrc && (
            <div className="mt-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Audio sample — {flute.key} · {flute.wood}
              </p>
              <audio
                controls
                src={flute.audioSrc}
                className="w-full rounded-md border border-border/60 bg-secondary px-2 py-1"
              >
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
        </section>
      )}

      {/* Placeholder sound section for flutes without samples yet */}
      {!hasSoundOrVideo && (
        <section
          aria-labelledby="sound-placeholder-heading"
          className="mt-20 rounded-lg border border-border/60 bg-card/60 p-8 sm:p-12"
        >
          <div className="flex items-start gap-4">
            <Volume2 className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <h2
                id="sound-placeholder-heading"
                className="font-serif text-2xl text-foreground sm:text-3xl"
              >
                Sound sample coming soon
              </h2>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground">
                We record every flute in the Rhodope workshop the day it is finished — no effects,
                just breath and wood. A sample for this instrument will be added shortly. To hear
                it now, reach out and Robert will send you a recording directly.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Inquiry form */}
      <section className="mt-12 rounded-lg border border-border/60 bg-card p-8 sm:p-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
            Inquire about the {flute.name}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Tell Robert a little about why this flute called you and how you&apos;d like to use
            it. He&apos;ll write back with availability, shipping options, and any details
            you&apos;d like to know.
          </p>
          <div className="mt-8">
            <InquiryForm fluteSlug={flute.slug} fluteName={flute.name} />
          </div>
        </div>
      </section>
    </article>
  )
}
