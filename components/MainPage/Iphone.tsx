import React from "react"
import Image from "next/image"

import { client } from "@/lib/sanityClient"
import { CompleteProduct } from "@/lib/types"

import MultiCaro from "./MultiCaro"

const fetchPhone = async () => {
  const res = await client.fetch(
    `*[_type=="product" && company=="Apple"][0..10]`
  )
  return res
}

export default async function Iphone() {
  const data: [CompleteProduct] = await fetchPhone()
  return (
    <div>
      <div className="flex items-center justify-center">
        <Image
          src="/apple.svg"
          height={40}
          width={40}
          alt="Mobile"
          className=" my-4"
        />
        <span>Apple Mobiles</span>
      </div>

      {data && <MultiCaro data={data} />}
    </div>
  )
}
