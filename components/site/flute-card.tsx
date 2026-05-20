import Link from "next/link"
import Image from "next/image"
import type { Flute } from "@/lib/flutes"
import { Badge } from "@/components/ui/badge"

const statusLabel: Record<Flute["status"], string> = {
  available: "Available",
  "made-to-order": "Made to order",
  sold: "Sold",
}

export function FluteCard({ flute }: { flute: Flute }) {
  const cardImage =
    flute.images && flute.images.length > 0
      ? flute.images[0]
      : {
          src: `/flutes/${flute.slug}.jpg`,
          alt: `${flute.name} — ${flute.key} Native American style flute`,
        }

  return (
    <Link
      href={`/shop/${flute.slug}`}
      className="group flex flex-col rounded-lg border border-border/60 bg-card overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <Image
          src={cardImage.src}
          alt={cardImage.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge
            variant={flute.status === "sold" ? "secondary" : "default"}
            className="font-medium"
          >
            {statusLabel[flute.status]}
          </Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors">
            {flute.name}
          </h3>
          <span className="text-sm font-medium text-primary whitespace-nowrap">
            €{flute.priceEUR.toLocaleString()}
          </span>
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs uppercase tracking-wider text-muted-foreground">
          <span>{flute.key}</span>
          <span aria-hidden>·</span>
          <span>{flute.tuning}</span>
          <span aria-hidden>·</span>
          <span>{flute.wood}</span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {flute.shortDescription}
        </p>
      </div>
    </Link>
  )
}
