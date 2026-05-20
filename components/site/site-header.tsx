"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/shop", label: "Flutes" },
  { href: "/workshop", label: "Workshop" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Sound" },
  { href: "/videos", label: "Videos" },
  { href: "/partners", label: "Partners" },
  { href: "/order", label: "Order" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl font-semibold tracking-wide text-primary group-hover:text-primary/90 transition-colors">
            PūR
          </span>
          <span className="font-serif text-2xl tracking-wide text-foreground/90">flutes</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm" className="font-medium">
            <Link href="/order">Order a Flute</Link>
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden border-t border-border/40 overflow-hidden transition-all duration-300",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/85 hover:bg-secondary hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="mt-2">
            <Link href="/order" onClick={() => setOpen(false)}>
              Order a Flute
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
