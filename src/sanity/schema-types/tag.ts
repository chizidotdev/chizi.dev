import { defineField, defineType } from "sanity";

export const tagType = defineType({
  name: "tag",
  title: "Tags",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({
      name: "description",
      type: "text",
    }),
  ],
});
