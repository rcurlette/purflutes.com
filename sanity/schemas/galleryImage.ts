import { defineField, defineType } from "sanity"

export const galleryImageType = defineType({
  name: "galleryImage",
  title: "Gallery image",
  type: "document",
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
    defineField({ name: "caption", title: "Caption", type: "string" }),
    defineField({
      name: "group",
      title: "Group",
      type: "string",
      options: {
        list: [
          { title: "The flutes", value: "flutes" },
          { title: "In the workshop", value: "workshop" },
          { title: "The makers", value: "makers" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "order", title: "Display order", type: "number", initialValue: 0 }),
    defineField({ name: "wide", title: "Wide tile", type: "boolean", initialValue: false }),
    defineField({ name: "tall", title: "Tall tile", type: "boolean", initialValue: false }),
    defineField({ name: "href", title: "Optional link (internal path)", type: "string" }),
  ],
  preview: { select: { title: "caption", subtitle: "group" } },
})
