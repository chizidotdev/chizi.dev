import type { SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./block-content";
import { categoryType } from "./category";
import { postType } from "./post";
import { projectType } from "./project";
import { siteSettings } from "./site-settings";
import { snippetType } from "./snippet";
import { tagType } from "./tag";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    siteSettings,
    projectType,
    postType,
    categoryType,
    tagType,
    snippetType,
  ],
};
