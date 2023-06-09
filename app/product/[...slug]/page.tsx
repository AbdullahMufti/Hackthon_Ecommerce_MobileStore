import Image from "next/image"

import { client } from "@/lib/sanityClient"
import { CompleteProduct } from "@/lib/types"

export default async function Page({ params }: { params: { slug: string[] } }) {
  const namecomp = params.slug
  const res: CompleteProduct = await client.fetch(
    `*[_type=="product" && company=='${namecomp[0]}' && name=='${namecomp[1]}'][0]`
  )

  return (
    <div>
      <div className="mx-auto flex justify-center">
        <Image
          className="object-contain"
          src={`/mobiles/${res.src.split("/").reverse()[0]}`}
          height={200}
          width={200}
          alt="product image"
        />
      </div>
      <div className="mx-auto flex justify-center">
        <div className="max-w-md flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to cart
        </div>
      </div>

      <div className="flex flex-row max-w-md mx-auto">
        <div className="w-1/2 px-2 py-1  text-right bg-red-400 capitalize">
          name
        </div>
        <div className="w-1/2 px-2 py-1 text-left bg-green-500">{res.name}</div>
      </div>
      <div className="flex flex-row max-w-md mx-auto">
        <div className="w-1/2 py-1 px-2 text-right bg-red-400 capitalize">
          company
        </div>
        <div className="w-1/2 px-2 py-1 text-left bg-green-500">
          {res.company}
        </div>
      </div>
      <div className="flex flex-row max-w-md mx-auto">
        <div className="w-1/2 py-1 px-2 text-right bg-red-400 capitalize">
          price Pkr
        </div>
        <div className="w-1/2 px-2 py-1 text-left bg-green-500">
          Rs. {res.price_pkr}
        </div>
      </div>
      <div className="flex flex-row max-w-md mx-auto">
        <div className="w-1/2 py-1 px-2 text-right bg-red-400 capitalize">
          price USD
        </div>
        <div className="w-1/2 px-2 py-1 text-left bg-green-500">
          $ {res.price_usd}
        </div>
      </div>
      <div className="flex flex-row max-w-md mx-auto">
        <div className="w-1/2 py-1 px-2 text-right bg-red-400 capitalize">
          os
        </div>
        <div className="w-1/2 px-2 py-1 text-left bg-green-500">{res.os}</div>
      </div>
      <div className="flex flex-row max-w-md mx-auto">
        <div className="w-1/2 py-1 px-2 text-right bg-red-400 capitalize">
          dimensions
        </div>
        <div className="w-1/2 px-2 py-1 text-left bg-green-500">
          {res.dimensions}
        </div>
      </div>
      <div className="flex flex-row max-w-md mx-auto">
        <div className="w-1/2 py-1 px-2 text-right bg-red-400 capitalize">
          weight
        </div>
        <div className="w-1/2 px-2 py-1 text-left bg-green-500">
          {res.weight}
        </div>
      </div>
      <div className="flex flex-row max-w-md mx-auto">
        <div className="w-1/2 py-1 px-2 text-right bg-red-400 capitalize">
          sim
        </div>
        <div className="w-1/2 px-2 py-1 text-left bg-green-500">{res.sim}</div>
      </div>
      <div className="flex flex-row max-w-md mx-auto">
        <div className="w-1/2 py-1 px-2 text-right bg-red-400 capitalize">
          colors
        </div>
        <div className="w-1/2 px-2 py-1 text-left bg-green-500">
          {res.colors}
        </div>
      </div>
      <div className="flex flex-row max-w-md mx-auto">
        <div className="w-1/2 py-1 px-2 text-right bg-red-400 capitalize">
          cpu
        </div>
        <div className="w-1/2 px-2 py-1 text-left bg-green-500">{res.cpu}</div>
      </div>
      <div className="flex flex-row max-w-md mx-auto">
        <div className="w-1/2 py-1 px-2 text-right bg-red-400 capitalize">
          chipset
        </div>
        <div className="w-1/2 px-2 py-1 text-left bg-green-500">
          {res.chipset}
        </div>
      </div>
      <div className="flex flex-row max-w-md mx-auto">
        <div className="w-1/2 py-1 px-2 text-right bg-red-400 capitalize">
          gpu
        </div>
        <div className="w-1/2 px-2 py-1 text-left bg-green-500">{res.gpu}</div>
      </div>
      <div className="flex flex-row max-w-md mx-auto">
        <div className="w-1/2 py-1 px-2 text-right bg-red-400 capitalize">
          technology
        </div>
        <div className="w-1/2 px-2 py-1 text-left bg-green-500">
          {res.technology}
        </div>
      </div>
      <div className="flex flex-row max-w-md mx-auto">
        <div className="w-1/2 py-1 px-2 text-right bg-red-400 capitalize">
          size
        </div>
        <div className="w-1/2 px-2 py-1 text-left bg-green-500">{res.size}</div>
      </div>
      <div className="flex flex-row max-w-md mx-auto">
        <div className="w-1/2 py-1 px-2 text-right bg-red-400 capitalize">
          resolution
        </div>
        <div className="w-1/2 px-2 py-1 text-left bg-green-500">
          {res.resolution}
        </div>
      </div>
      <div className="flex flex-row max-w-md mx-auto">
        <div className="w-1/2 py-1 px-2 text-right bg-red-400 capitalize">
          storage
        </div>
        <div className="w-1/2 px-2 py-1 text-left bg-green-500">
          {res.storage}
        </div>
      </div>
      <div className="flex flex-row max-w-md mx-auto">
        <div className="w-1/2 py-1 px-2 text-right bg-red-400 capitalize">
          memory
        </div>
        <div className="w-1/2 px-2 py-1 text-left bg-green-500">
          {res.memory}
        </div>
      </div>
      <div className="flex flex-row max-w-md mx-auto">
        <div className="w-1/2 py-1 px-2 text-right bg-red-400 capitalize">
          card
        </div>
        <div className="w-1/2 px-2 py-1 text-left bg-green-500">{res.card}</div>
      </div>
      <div className="flex flex-row max-w-md mx-auto">
        <div className="w-1/2 py-1 px-2 text-right bg-red-400 capitalize">
          maincamera
        </div>
        <div className="w-1/2 px-2 py-1 text-left bg-green-500">
          {res.maincamera}
        </div>
      </div>
      <div className="flex flex-row max-w-md mx-auto">
        <div className="w-1/2 py-1 px-2 text-right bg-red-400 capitalize">
          features
        </div>
        <div className="w-1/2 px-2 py-1 text-left bg-green-500">
          {res.features}
        </div>
      </div>
      <div className="flex flex-row max-w-md mx-auto">
        <div className="w-1/2 py-1 px-2 text-right bg-red-400 capitalize">
          front
        </div>
        <div className="w-1/2 px-2 py-1 text-left bg-green-500">
          {res.front}
        </div>
      </div>
      <div className="flex flex-row max-w-md mx-auto">
        <div className="w-1/2 py-1 px-2 text-right bg-red-400 capitalize">
          gps
        </div>
        <div className="w-1/2 px-2 py-1 text-left bg-green-500">{res.gps}</div>
      </div>
      <div className="flex flex-row max-w-md mx-auto">
        <div className="w-1/2 py-1 px-2 text-right bg-red-400 capitalize">
          radio
        </div>
        <div className="w-1/2 px-2 py-1 text-left bg-green-500">
          {res.radio}
        </div>
      </div>
      <div className="flex flex-row max-w-md mx-auto">
        <div className="w-1/2 py-1 px-2 text-right bg-red-400 capitalize">
          usb
        </div>
        <div className="w-1/2 px-2 py-1 text-left bg-green-500">{res.usb}</div>
      </div>
      <div className="flex flex-row max-w-md mx-auto">
        <div className="w-1/2 py-1 px-2 text-right bg-red-400 capitalize">
          nfc
        </div>
        <div className="w-1/2 px-2 py-1 text-left bg-green-500">{res.nfc}</div>
      </div>
      <div className="flex flex-row max-w-md mx-auto">
        <div className="w-1/2 py-1 px-2 text-right bg-red-400 capitalize">
          data
        </div>
        <div className="w-1/2 px-2 py-1 text-left bg-green-500">{res.data}</div>
      </div>
      <div className="flex flex-row max-w-md mx-auto">
        <div className="w-1/2 py-1 px-2 text-right bg-red-400 capitalize">
          sensors
        </div>
        <div className="w-1/2 px-2 py-1 text-left bg-green-500">
          {res.sensors}
        </div>
      </div>
      <div className="flex flex-row max-w-md mx-auto">
        <div className="w-1/2 py-1 px-2 text-right bg-red-400 capitalize">
          audio
        </div>
        <div className="w-1/2 px-2 py-1 text-left bg-green-500">
          {res.audio}
        </div>
      </div>
      <div className="flex flex-row max-w-md mx-auto">
        <div className="w-1/2 py-1 px-2 text-right bg-red-400 capitalize">
          torch
        </div>
        <div className="w-1/2 px-2 py-1 text-left bg-green-500">
          {res.torch}
        </div>
      </div>
      <div className="flex flex-row max-w-md mx-auto">
        <div className="w-1/2 py-1 px-2 text-right bg-red-400 capitalize">
          extra
        </div>
        <div className="w-1/2 px-2 py-1 text-left bg-green-500">
          {res.extra}
        </div>
      </div>
      <div className="flex flex-row max-w-md mx-auto">
        <div className="w-1/2 py-1 px-2 text-right bg-red-400 capitalize">
          battery
        </div>
        <div className="w-1/2 px-2 py-1 text-left bg-green-500">
          {res.battery} mAh
        </div>
      </div>
    </div>
  )
}
