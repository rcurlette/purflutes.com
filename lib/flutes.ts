export type FluteImage = {
  src: string
  alt: string
}

export type Flute = {
  slug: string
  name: string
  key: string
  tuning: string
  wood: string
  length: string
  priceEUR: number
  status: "available" | "made-to-order" | "sold"
  shortDescription: string
  longDescription: string
  features: string[]
  /** Optional ordered array of images. First is used as the primary/card image. */
  images?: FluteImage[]
  /** Optional audio sample URL (relative or absolute) */
  audioSrc?: string
  /** Optional YouTube embed ID for a demo video */
  youtubeId?: string
}

export const flutes: Flute[] = [
  {
    slug: "walking-stick-flute",
    name: "Mystic - Walking Stick Flute",
    key: "D minor",
    tuning: "432 Hz",
    wood: "Walnut / Cherry",
    length: '160cm',
    priceEUR: 800,
    status: "made-to-order",
    shortDescription:
      "A meditative voice tuned to 432 Hz. The Mysitc carries breath into long, contemplative tones and joins you on your hikes!",
    longDescription:
      "Crafted from majestic Walnut with a hand-carved finish. The Mystic's A minor voice is widely regarded as the most contemplative key for the Native American style flute, soft on the ears, deep in the chest. Hand-tuned to 432 Hz for resonance with the natural world.",
    features: [
      "Pentatonic minor scale",
      "6 finger holes",
      "Walnut totem block with leather binding",
      "Shellac finish",
      "Comes with cotton carry sleeve",
    ],
    images: [
      {
        src: "/flutes/walking-stick-light.jpg",
        alt: "Mystic walking stick flute — full length leaning against a wall, warm reddish-brown finish",
      },
      {
        src: "/flutes/walking-stick-top.jpg",
        alt: "Mystic walking stick flute — close-up of the mouthpiece and carved bird totem with leather strap",
      },
      {
        src: "/flutes/walking-stick-foot.jpg",
        alt: "Mystic walking stick flute — detail of the rubber-capped maple foot at the base",
      },
    ],
  },
  {
    slug: "river-song-e",
    name: "River Song",
    key: "E minor",
    tuning: "432 Hz",
    wood: "Black Walnut",
    length: '22"',
    priceEUR: 300,
    status: "available",
    shortDescription:
      "Bright and conversational. E minor sits at the heart of the human voice — perfect for circle work and improvisation.",
    longDescription:
      "Black Walnut is the storyteller's wood — dark, warm, with cocoa undertones. The River Song's voice is balanced and articulate, well-suited for journey work, breath circles, and intimate ceremony.",
    features: [
      "Pentatonic minor scale",
      "6 finger holes",
      "Hand-carved",
      "Shellac finish",
  
    ],
    images: [
      {
        src: "/flutes/e-walnut-close.jpg",
        alt: "River Song walnut flute — full body view on the workshop bench, warm honey-to-espresso grain gradient",
      },
      {
        src: "/flutes/e-walnut-zoomed.jpg",
        alt: "River Song — close-up of the voicing window, two hand-cut rectangular sound holes in the warm cedar top",
      },
      {
        src: "/flutes/e-walnut-super-close.jpg",
        alt: "River Song — macro view along the spine showing three finger holes and a polished sanded finish",
      },
      {
        src: "/flutes/e-walnut-process.jpg",
        alt: "River Song and a second flute side by side on the bench, surrounded by fresh wood shavings as Radenko works",
      },
    ],
  },
  {
    slug: "drone",
    name: "Drone - Double-flute",
    key: "E",
    tuning: "440 Hz",
    wood: "Walnut or Cherry",
    length: '18"',
    priceEUR: 500,
    status: "made-to-order",
    shortDescription:
      "A grounding low drone flute. Deep Earth speaks from the root — felt as much as heard.",
    longDescription:
      "Built for deep meditative practice and sound healing sessions. The E minor voice carries low frequencies that move through the body. Hand-bored from a single piece of Walnut or Cherry, finished with traditional oils.",
    features: [
      "Low pentatonic minor",
      "6 finger holes with extended bore",
      "Suitable for sound healing & breathwork",
      "Made to order — 4 to 6 week build time",
    ],
    images: [
      {
        src: "/flutes/drone-bird.jpg",
        alt: "Drone double-flute — top view showing the olive wood bird block, finger holes, and leather strap on colorful fabric",
      },
      {
        src: "/flutes/drone-bore.jpg",
        alt: "Drone double-flute — end-on view revealing the two parallel bores in the walnut body",
      },
    ],
  },
]

export function getFluteBySlug(slug: string): Flute | undefined {
  return flutes.find((f) => f.slug === slug)
}
