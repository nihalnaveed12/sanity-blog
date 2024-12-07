import { defineType, defineField } from "sanity";

export default defineType({
  name: "author",
  type: "document",
  title: "Authors",
  fields: [
    defineField({
      name: "author",
      type: "string",
      title: "Author Name",
    }),
    defineField({
      name: "bio",
      type: "text",
      title: "Bio",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Author Image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
