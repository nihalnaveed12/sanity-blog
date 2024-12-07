import { defineField, defineArrayMember, defineType } from "sanity";
export default defineType({
  name: "posts",
  type: "document",
  title: "Posts",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Blog Title",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "summary",
      type: "text",
      title: "Summary",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Content",
      of: [
        defineArrayMember({
          type: "block",
        }),
      ],
    }),
    defineField({
      name: "author",
      type: "reference",
      title: "Author",
      to: [
        {
          type: "author",
        },
      ],
    }),
  ],
});
