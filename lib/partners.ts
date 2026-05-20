export type Partner = {
  slug: string
  name: string
  location: string
  url: string
  image: { src: string; alt: string }
  blurb: string
  tags: string[]
}

export const partners: Partner[] = [
  {
    slug: "savaya-tribe",
    name: "Savaya Tribe",
    location: "Bulgarian mountains",
    url: "https://savayatribe.com/",
    image: {
      src: "/partners/savaya-tribe.jpg",
      alt: "Savaya Tribe — bright 60sqm event space with wood beams, yoga mats, cushions, and panoramic windows looking onto the Bulgarian countryside",
    },
    blurb:
      "A growing community in the mountains hosting bungalow stays, gatherings, yoga, and ceremony in a quiet corner of nature. We bring flutes to their gatherings and host sessions in their event space.",
    tags: ["Retreat", "Gatherings", "Yoga"],
  },
  {
    slug: "zendo-sounds",
    name: "Zendō Space",
    location: "Sofia, Bulgaria",
    url: "https://zendosounds.bg/en/",
    image: {
      src: "/partners/zendo-space.jpg",
      alt: "Zendō Space — warm interior with handpans on a wooden shelf, a single handpan on a stand, a boucle armchair, and dried pampas grass beside a tall window",
    },
    blurb:
      "A sound healing space in Sofia built around handpans, gongs, and contemplative instruments. A natural home for the flutes when we play in the city.",
    tags: ["Sound healing", "Sofia", "Handpan"],
  },
]
