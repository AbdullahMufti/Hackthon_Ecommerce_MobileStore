import { createClient } from "next-sanity"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const token = process.env.NEXT_PUBLIC_SANITY_ACCESS_TOKEN
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION
export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  useCdn: true,
  apiVersion: apiVersion,
  token: token,
})
