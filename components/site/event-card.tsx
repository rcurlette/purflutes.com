import Link from "next/link"
import { Calendar, MapPin, ArrowUpRight } from "lucide-react"
import type { FluteEvent } from "@/lib/events"
import { Badge } from "@/components/ui/badge"

const typeLabel: Record<FluteEvent["type"], string> = {
  expo: "Expo",
  ceremony: "Ceremony",
  workshop: "Workshop",
  festival: "Festival",
}

export function EventCard({ event }: { event: FluteEvent }) {
  const isTryp = event.slug === "tryp-expo-berlin-2026"
  const internalHref = isTryp ? "/tryp" : null

  const content = (
    <div
      className={`flex h-full flex-col gap-4 rounded-lg border bg-card p-6 transition-colors ${
        event.featured ? "border-primary/40" : "border-border/60"
      } hover:border-primary/60`}
    >
      <div className="flex items-start justify-between gap-3">
        <Badge variant={event.featured ? "default" : "secondary"}>{typeLabel[event.type]}</Badge>
        {event.featured && (
          <span className="text-xs uppercase tracking-widest text-primary">Featured</span>
        )}
      </div>
      <h3 className="font-serif text-2xl leading-tight text-foreground">{event.name}</h3>
      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <Calendar className="h-4 w-4 text-primary/80" aria-hidden="true" />
          {event.date}
        </span>
        <span className="inline-flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary/80" aria-hidden="true" />
          {event.location}, {event.city}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-foreground/80 line-clamp-4">{event.description}</p>
      <div className="mt-auto flex items-center gap-3 pt-2 text-sm">
        {internalHref && (
          <Link
            href={internalHref}
            className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
          >
            Event guide
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        )}
        {event.url && (
          <a
            href={event.url}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1 font-medium text-foreground/80 hover:text-primary"
          >
            {isTryp ? "tryp.de" : "Visit site"}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
  )

  return content
}
