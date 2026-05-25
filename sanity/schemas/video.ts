import { defineField, defineType } from "sanity"

export const videoType = defineType({
  name: "video",
  title: "Video",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "poster", title: "Poster image (path or URL)", type: "string" }),
    defineField({ name: "duration", title: "Duration (display)", type: "string" }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false }),
    defineField({
      name: "sourceType",
      title: "Source type",
      type: "string",
      options: {
        list: [
          { title: "Vimeo", value: "vimeo" },
          { title: "Local file", value: "local" },
        ],
      },
      initialValue: "vimeo",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "vimeoId",
      title: "Vimeo numeric ID",
      type: "string",
      hidden: ({ parent }) => parent?.sourceType !== "vimeo",
    }),
    defineField({
      name: "localSrc",
      title: "Local /public path",
      type: "string",
      hidden: ({ parent }) => parent?.sourceType !== "local",
    }),
    defineField({
      name: "localMimeType",
      title: "Local MIME type",
      type: "string",
      hidden: ({ parent }) => parent?.sourceType !== "local",
    }),
  ],
  preview: { select: { title: "title", subtitle: "date" } },
})
