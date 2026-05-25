import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Order a Flute",
  description:
    "Commission a hand-made Native American style flute from PūRFlutes. Choose your type, wood, and key — we'll be in touch to confirm every detail before we begin.",
}

export default function OrderPage() {
  return (
    <article className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Commission a Flute
        </p>
        <h1 className="mt-3 font-serif text-5xl leading-[1.05] text-balance text-foreground sm:text-6xl">
          Order a flute.
        </h1>
        <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground/85">
          Every flute is made by hand to order. Fill in a few details below — we&apos;ll be in touch
          to confirm your wood, key, and timeline before we begin carving.
        </p>
        <div className="mt-4 flex flex-wrap gap-6 text-sm text-muted-foreground">
          <span>Walking Stick Flute from $800</span>
          <span className="text-border">·</span>
          <span>Drone Flute from $500</span>
          <span className="text-border">·</span>
          <span>Classic Flute from $400</span>
        </div>
      </header>

      <div className="mt-12 overflow-hidden rounded-lg border border-border/60 bg-card">
        <div className="border-b border-border/40 bg-secondary/40 px-6 py-4">
          <p className="text-sm font-medium text-foreground">PūRFlutes — Order a Flute</p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Responses go directly to Robert. He reads every one.
          </p>
        </div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSd2AvsN_HHG9UEP_IykJdPPie9880KsIjXhhpxQzvWpCRAgbQ/viewform?embedded=true"
          title="Order a PūRFlute"
          className="w-full"
          style={{ height: "820px", border: "none" }}
          loading="lazy"
        >
          Loading form…
        </iframe>
      </div>

      <section className="mt-12 rounded-lg border border-border/60 bg-card p-8 sm:p-10">
        <h2 className="font-serif text-2xl text-foreground">What happens next</h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              num: "01",
              title: "We confirm your order",
              body: "Robert will reach out within a few days to go over your choices, answer questions, and agree on a timeline.",
            },
            {
              num: "02",
              title: "The wood is selected",
              body: "Radenko hand-picks the blank from the workshop. Each piece is chosen for grain, density, and how it will sound.",
            },
            {
              num: "03",
              title: "Your flute is made",
              body: "Bored, voiced, tuned, and finished by hand in the Rhodope workshop. Shipped when it\u2019s ready to play.",
            },
          ].map((step) => (
            <li key={step.num} className="rounded-md border border-border/60 bg-background p-5">
              <p className="font-serif text-xs uppercase tracking-[0.3em] text-primary">{step.num}</p>
              <p className="mt-2 font-serif text-lg text-foreground">{step.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-10 flex items-center gap-4">
        <Link
          href="/shop"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Browse the collection first
        </Link>
      </div>
    </article>
  )
}
