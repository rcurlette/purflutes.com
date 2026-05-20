import type { Metadata } from "next"
import { FluteCard } from "@/components/site/flute-card"
import { flutes } from "@/lib/flutes"

export const metadata: Metadata = {
  title: "Flutes for Sale",
  description:
    "Browse handcrafted Native American style flutes by PUR Flutes. Each instrument is hand-shaped in the Bulgarian Rhodope mountains and tuned for meditation, breathwork, and ceremony.",
}

export default function ShopPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">The Collection</p>
        <h1 className="mt-3 font-serif text-5xl leading-[1.05] text-balance text-foreground sm:text-6xl">
          Flutes for the practice of listening.
        </h1>
        <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground/85">
          Each flute is a single instrument — hand-carved by Radenko in the Bulgarian Rhodope
          mountains, then voiced and tuned by Robert. Browse what&apos;s available, send an inquiry
          about anything that calls to you, or commission a custom piece in the key of your choice.
        </p>
      </header>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {flutes.map((flute) => (
          <FluteCard key={flute.slug} flute={flute} />
        ))}
      </div>

      <aside className="mt-16 rounded-lg border border-primary/30 bg-primary/5 p-8 text-center">
        <h2 className="font-serif text-3xl text-foreground">Looking for something custom?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Custom keys, drone flutes, and gift commissions are all welcome. Build time is typically 6–8 weeks.
          Send Robert a note with what you&apos;re looking for and he&apos;ll write back personally.
        </p>
        <a
          href="mailto:robert.curlette@gmail.com"
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          robert.curlette@gmail.com
        </a>
      </aside>
    </div>
  )
}
