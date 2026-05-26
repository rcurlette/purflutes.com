import Link from "next/link"
import { Instagram, Mail, Music, Youtube } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-semibold tracking-wide text-primary">PUR</span>
              <span className="font-serif text-2xl tracking-wide text-foreground/90">flutes</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Handcrafted Native American style flutes for meditation, ceremony, and the practice of
              listening. Made by hand by Radenko and Robert in the Bulgarian Rhodope mountains.
            </p>
            <p className="mt-4 font-serif text-base italic text-primary/90">
              Tune out the noise. Tune into the soul. Tune up your life.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground/60">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/shop" className="text-foreground/80 hover:text-primary">
                  All flutes
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-foreground/80 hover:text-primary">
                  About the Makers
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-foreground/80 hover:text-primary">
                  Sound samples
                </Link>
              </li>
              <li>
                <Link href="/videos" className="text-foreground/80 hover:text-primary">
                  Videos
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-foreground/80 hover:text-primary">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground/60">Connect</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="mailto:robert.curlette@gmail.com"
                  className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  robert.curlette@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/purflutes"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@robert-plays-flute"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary"
                >
                  <Youtube className="h-4 w-4" aria-hidden="true" />
                  YouTube
                </a>
              </li>
              <li>
                <Link href="/gallery" className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary">
                  <Music className="h-4 w-4" aria-hidden="true" />
                  Listen
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border/40 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PUR Flutes · Rhodope Mountains, Bulgaria</p>
          <p className="font-serif italic">Sound is medicine.</p>
        </div>
      </div>
    </footer>
  )
}
