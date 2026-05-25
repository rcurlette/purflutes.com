import { defineField, defineType } from "sanity"

export const fluteType = defineType({
  name: "flute",
  title: "Flute",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "order", title: "Display order", type: "number", initialValue: 0 }),
    defineField({ name: "key", title: "Musical key", type: "string" }),
    defineField({ name: "tuning", title: "Tuning", type: "string" }),
    defineField({ name: "wood", title: "Wood", type: "string" }),
    defineField({ name: "length", title: "Length", type: "string" }),
    defineField({ name: "priceEUR", title: "Price (EUR)", type: "number" }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Available", value: "available" },
          { title: "Made to order", value: "made-to-order" },
          { title: "Sold", value: "sold" },
        ],
      },
      initialValue: "available",
    }),
    defineField({ name: "shortDescription", title: "Short description", type: "text", rows: 3 }),
    defineField({ name: "longDescription", title: "Long description", type: "text", rows: 6 }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "object",
          name: "fluteImage",
          fields: [
            defineField({
              name: "src",
              title: "Path or URL",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "alt",
              title: "Alt text",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: { select: { title: "alt", subtitle: "src" } },
        },
      ],
    }),
    defineField({ name: "audioSrc", title: "Audio source URL", type: "string" }),
    defineField({ name: "youtubeId", title: "YouTube ID", type: "string" }),
  ],
  preview: { select: { title: "name", subtitle: "key" } },
})
