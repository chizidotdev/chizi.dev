import type { SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./block-content";
import { projectType } from "./project";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, blockContentType],
};
