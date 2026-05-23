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
    slug: "the-purifier",
    name: "Пречистващата / The Purifier",
    location: "Bulgaria",
    url: "https://www.facebook.com/p/%D0%9F%D1%80%D0%B5%D1%87%D0%B8%D1%81%D1%82%D0%B2%D0%B0%D1%89%D0%B0%D1%82%D0%B0-The-Purifier-100093921861044/",
    image: {
      src: "/partners/the-purifier.jpg",
      alt: "The Purifier — sacred space with ceremonial instruments, candles, and natural elements in warm contemplative lighting",
    },
    blurb:
      "A space for ceremony, sound healing, and spiritual practice. Bringing ancient traditions and purifying rituals to those seeking deeper connection.",
    tags: ["Ceremony", "Sound healing", "Spiritual"],
  },
  {
    slug: "purifier-crafts",
    name: "Purifier Crafts",
    location: "Bulgaria",
    url: "https://www.instagram.com/purifier.crafts/",
    image: {
      src: "/partners/purifier-crafts.jpg",
      alt: "Purifier Crafts — artisan woodcraft studio with handmade wooden instruments, tools, and natural materials in a workshop setting",
    },
    blurb:
      "A collective of master craftspeople dedicated to the art of flute-making and wooden instrument creation. Where tradition meets precision in the mountains.",
    tags: ["Craftsmanship", "Woodwork", "Handmade"],
  },
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
