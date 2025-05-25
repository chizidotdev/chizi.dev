import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { structure } from "@/sanity/desk-structure";
import { schema } from "@/sanity/schema-types";
import { codeInput } from "@sanity/code-input";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  plugins: [structureTool({ structure }), visionTool(), codeInput()],
  schema,
});
