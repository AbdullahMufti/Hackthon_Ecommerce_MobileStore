/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision"
import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"

import { apiVersion, dataset, projectId } from "./sanity/lib/env"
import project from "./sanity/schemas/project-schema"

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works

export default defineConfig({
  projectId,
  dataset,
  apiVersion,
  title: "SanityShop",
  basePath: "/admin",
  plugins: [deskTool(), visionTool({ defaultApiVersion: apiVersion })],
  env: {
    staging: {
      plugins: ["@sanity/vision"],
    },
  },
  schema: { types: [project] },
})
