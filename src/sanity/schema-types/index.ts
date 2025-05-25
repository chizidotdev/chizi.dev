import type { SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./block-content";
import { projectType } from "./project";
import { siteSettings } from "./site-settings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, projectType, siteSettings],
};
