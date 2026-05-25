import { defineField, defineType } from "sanity"

export const eventType = defineType({
  name: "event",
  title: "Event",
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
    defineField({
      name: "date",
      title: "Date (display)",
      type: "string",
      description: 'Free-form display string, e.g. "May 15 – 17, 2026"',
    }),
    defineField({
      name: "dateISO",
      title: "Date (sortable)",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "location", title: "Venue / location", type: "string" }),
    defineField({ name: "city", title: "City", type: "string" }),
    defineField({ name: "country", title: "Country", type: "string" }),
    defineField({
      name: "url",
      title: "External URL",
      type: "url",
      validation: (Rule) => Rule.uri({ scheme: ["http", "https"] }),
    }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Expo", value: "expo" },
          { title: "Ceremony", value: "ceremony" },
          { title: "Workshop", value: "workshop" },
          { title: "Festival", value: "festival" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false }),
  ],
  preview: { select: { title: "name", subtitle: "dateISO" } },
})
