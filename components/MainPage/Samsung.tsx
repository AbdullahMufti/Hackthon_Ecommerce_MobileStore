import React from "react"
import Image from "next/image"

import { client } from "@/lib/sanityClient"
import { CompleteProduct } from "@/lib/types"

import MultiCaro from "./MultiCaro"

const fetchPhone = async () => {
  const res = await client.fetch(
    `*[_type=="product" && company=="Samsung"][0..10]`
  )
  return res
}

export default async function Samsung(): Promise<React.JSX.Element> {
  const data: [CompleteProduct] = await fetchPhone()
  return (
    <div>
      <Image
        src="/samsung.png"
        height={180}
        width={350}
        alt="Mobile"
        className=" mx-auto my-4"
      />
      {data && <MultiCaro data={data} />}
    </div>
  )
}
