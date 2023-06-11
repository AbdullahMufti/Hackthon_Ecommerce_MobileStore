import { FC } from "react"

const page = ({ params }: { params: { slug: string[] } }) => {
  console.log(params)
  return <div>page</div>
}
export default page
