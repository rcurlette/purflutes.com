import { defineField, defineType } from "sanity"

export const partnerType = defineType({
  name: "partner",
  title: "Partner",
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
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({
      name: "url",
      title: "External URL",
      type: "url",
      validation: (Rule) => Rule.uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "object",
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
    }),
    defineField({ name: "blurb", title: "Blurb", type: "text", rows: 4 }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
  ],
  preview: { select: { title: "name", subtitle: "location" } },
})
