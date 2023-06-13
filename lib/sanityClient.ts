import { createClient } from "next-sanity"

const projectId = "jfk0nyjc"
const dataset = "production"
const token =
  "skXNj7WAFqO0CHGNyPZpkbVLIogSe3FjhJ9UP6mIsZR0OwE70GJhAFLVIgWdNF56P5rNSUZywUj7ExE8cy3x9SQwhuG6db2PWYqzxGGu3omivmQegkTp7pxps7O3Xnpen4gr6BU2jOma0HL5FlIjJHt9GSsJt4vsA7KoZE5ZOVnszEDNMWOo"
const apiVersion = "2022-11-15"
export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  useCdn: true,
  apiVersion: "2022-11-15",
  token: token,
})
