export type FluteEvent = {
  slug: string
  name: string
  date: string
  dateISO: string
  location: string
  city: string
  country: string
  url?: string
  description: string
  type: "expo" | "ceremony" | "workshop" | "festival"
  featured?: boolean
}

export const events: FluteEvent[] = [
  {
    slug: "rhodope-breathwork-circle",
    name: "Rhodope Breathwork Sound Circle",
    date: "Monthly · First Sunday",
    dateISO: "2026-06-07",
    location: "The Workshop",
    city: "Smolyan",
    country: "Bulgaria",
    description:
      "An open monthly gathering for breath, flute, and silence. Beginners welcome — flutes provided. Donation-based.",
    type: "ceremony",
  },
  {
    slug: "summer-flute-immersion",
    name: "Summer Flute Immersion Retreat",
    date: "July 12 – 15, 2026",
    dateISO: "2026-07-12",
    location: "Rhodope Mountains",
    city: "Devin",
    country: "Bulgaria",
    description:
      "Three days of flute play, breathwork, and quiet practice in the mountains where the flutes are born. Limited to 12 participants. Includes a custom-tuned beginner flute.",
    type: "workshop",
  },
  {
    slug: "plovdiv-sound-healing",
    name: "Plovdiv Sound Healing Evening",
    date: "Last Friday of every month",
    dateISO: "2026-05-29",
    location: "Studio Klang",
    city: "Plovdiv",
    country: "Bulgaria",
    description:
      "An evening of low-drone flute, singing bowls, and guided rest. 90 minutes. Bring a blanket.",
    type: "ceremony",
  },
]

export function getFeaturedEvent(): FluteEvent | undefined {
  return events.find((e) => e.featured)
}

export function getEventBySlug(slug: string): FluteEvent | undefined {
  return events.find((e) => e.slug === slug)
}
