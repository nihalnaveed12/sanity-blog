import { PortableTextComponents } from "@portabletext/react";

export const components: PortableTextComponents = {
  block: {
    h4: ({ children }) => (
      <h4 className="text-2xl pb-2 font-bold ">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="text-base text-dark dark:text-light">{children}</p>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="list-disc list-inside ml-4 mt-2">
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li className="list-decimal marker:text-accentDarkSecondary list-inside ml-4 pb-4 ">
        {children}
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-dark dark:text-white">{children}</strong>
    ),
  },
};
