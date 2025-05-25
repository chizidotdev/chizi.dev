import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Posts",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "category",
      type: "reference",
      to: { type: "category" },
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
  ],

  preview: {
    select: {
      title: "title",
      category: "category.title",
    },
    prepare(selection) {
      const { category } = selection;
      return { ...selection, subtitle: category && `in ${category}` };
    },
  },
});
