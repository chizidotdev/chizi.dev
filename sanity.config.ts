import { defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";

import { structure } from "@/sanity/desk-structure";
import { resolve } from "@/sanity/lib/resolve";
import { schema } from "@/sanity/schema-types";
import { codeInput } from "@sanity/code-input";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  plugins: [
    structureTool({ structure }),
    presentationTool({ previewUrl: location.origin, resolve }),
    visionTool(),
    codeInput(),
  ],
  schema,
});
