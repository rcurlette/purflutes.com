"use client"

import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./sanity/schemas"
import {
  SANITY_PROJECT_ID,
  SANITY_DATASET,
  SANITY_API_VERSION,
} from "./lib/sanity/client"

export default defineConfig({
  name: "purflutes",
  title: "PUR Flutes",
  basePath: "/studio",
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  schema: { types: schemaTypes },
  plugins: [structureTool(), visionTool({ defaultApiVersion: SANITY_API_VERSION })],
})
