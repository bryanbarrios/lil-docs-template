import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { getTableOfContents } from "./utils";
import siteConfig from "./config/site-config";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  editUrl: {
    type: "string",
    resolve: (doc) =>
      siteConfig.repo?.editUrl ? `${siteConfig.repo.editUrl}/${doc._id}` : null,
  },
};

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the document",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the document",
      required: true,
    },
  },
  computedFields: {
    ...computedFields,
    headings: {
      type: "json",
      resolve: (doc) => getTableOfContents(doc.body.raw),
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});
