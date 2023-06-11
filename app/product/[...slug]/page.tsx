import Image from "next/image"

import { client } from "@/lib/sanityClient"
import { CompleteProduct } from "@/lib/types"
import { Icons } from "@/components/icons"

export default async function Page({ params }: { params: { slug: string[] } }) {
  const namecomp = params.slug
  const res: CompleteProduct = await client.fetch(
    `*[_type=="product" && company=='${namecomp[0]}' && name=='${namecomp[1]}'][0]`
  )

  return (
    <div>
      <h1 className="my-10 text-center text-2xl font-bold">
        {res.name}&nbsp;{res.company}&nbsp;Complete&nbsp;Specification
      </h1>
      <div className="flex  flex-wrap justify-center ">
        <div className="mx-auto  ">
          <Image
            className="object-contain"
            src={`/mobiles/${res.src.split("/").reverse()[0]}`}
            height={200}
            width={200}
            alt="product image"
          />
          <div className="mx-auto  justify-center">
            <div className="flex max-w-md items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
              <Icons.shoppingcart />
              Add to cart
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <div className="mx-auto flex max-w-md flex-row">
            <div className="my-3 w-1/2 border px-2  py-1 text-right capitalize">
              name
            </div>
            <div className="my-3 w-1/2 border px-2 py-1 text-left">
              {res.name}
            </div>
          </div>
          <div className="mx-auto flex max-w-md flex-row">
            <div className="my-3 w-1/2 border px-2  py-1 text-right capitalize">
              company
            </div>
            <div className="my-3 w-1/2 border px-2 py-1 text-left">
              {res.company}
            </div>
          </div>
          <div className="mx-auto flex max-w-md flex-row">
            <div className="my-3 w-1/2 border px-2  py-1 text-right capitalize">
              price Pkr
            </div>
            <div className="my-3 w-1/2 border px-2 py-1 text-left">
              Rs. {res.price_pkr}
            </div>
          </div>
          <div className="mx-auto flex max-w-md flex-row">
            <div className="my-3 w-1/2 border px-2  py-1 text-right capitalize">
              price USD
            </div>
            <div className="my-3 w-1/2 border px-2 py-1 text-left">
              $ {res.price_usd}
            </div>
          </div>
          <div className="mx-auto flex max-w-md flex-row">
            <div className="my-3 w-1/2 border px-2  py-1 text-right capitalize">
              os
            </div>
            <div className="my-3 w-1/2 border px-2 py-1 text-left">
              {res.os}
            </div>
          </div>
          <div className="mx-auto flex max-w-md flex-row">
            <div className="my-3 w-1/2 border px-2  py-1 text-right capitalize">
              dimensions
            </div>
            <div className="my-3 w-1/2 border px-2 py-1 text-left">
              {res.dimensions}
            </div>
          </div>
          <div className="mx-auto flex max-w-md flex-row">
            <div className="my-3 w-1/2 border px-2  py-1 text-right capitalize">
              weight
            </div>
            <div className="my-3 w-1/2 border px-2 py-1 text-left">
              {res.weight}
            </div>
          </div>
          <div className="mx-auto flex max-w-md flex-row">
            <div className="my-3 w-1/2 border px-2  py-1 text-right capitalize">
              sim
            </div>
            <div className="my-3 w-1/2 border px-2 py-1 text-left">
              {res.sim}
            </div>
          </div>
          <div className="mx-auto flex max-w-md flex-row">
            <div className="my-3 w-1/2 border px-2  py-1 text-right capitalize">
              colors
            </div>
            <div className="my-3 w-1/2 border px-2 py-1 text-left">
              {res.colors}
            </div>
          </div>
          <div className="mx-auto flex max-w-md flex-row">
            <div className="my-3 w-1/2 border px-2  py-1 text-right capitalize">
              cpu
            </div>
            <div className="my-3 w-1/2 border px-2 py-1 text-left">
              {res.cpu}
            </div>
          </div>
          <div className="mx-auto flex max-w-md flex-row">
            <div className="my-3 w-1/2 border px-2  py-1 text-right capitalize">
              chipset
            </div>
            <div className="my-3 w-1/2 border px-2 py-1 text-left">
              {res.chipset}
            </div>
          </div>
          <div className="mx-auto flex max-w-md flex-row">
            <div className="my-3 w-1/2 border px-2  py-1 text-right capitalize">
              gpu
            </div>
            <div className="my-3 w-1/2 border px-2 py-1 text-left">
              {res.gpu}
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <div className="mx-auto flex max-w-md flex-row">
            <div className="my-3 w-1/2 border px-2  py-1 text-right capitalize">
              technology
            </div>
            <div className="my-3 w-1/2 border px-2 py-1 text-left">
              {res.technology}
            </div>
          </div>
          <div className="mx-auto flex max-w-md flex-row">
            <div className="my-3 w-1/2 border px-2  py-1 text-right capitalize">
              size
            </div>
            <div className="my-3 w-1/2 border px-2 py-1 text-left">
              {res.size}
            </div>
          </div>
          <div className="mx-auto flex max-w-md flex-row">
            <div className="my-3 w-1/2 border px-2  py-1 text-right capitalize">
              resolution
            </div>
            <div className="my-3 w-1/2 border px-2 py-1 text-left">
              {res.resolution}
            </div>
          </div>
          <div className="mx-auto flex max-w-md flex-row">
            <div className="my-3 w-1/2 border px-2  py-1 text-right capitalize">
              storage
            </div>
            <div className="my-3 w-1/2 border px-2 py-1 text-left">
              {res.storage}
            </div>
          </div>
          <div className="mx-auto flex max-w-md flex-row">
            <div className="my-3 w-1/2 border px-2  py-1 text-right capitalize">
              memory
            </div>
            <div className="my-3 w-1/2 border px-2 py-1 text-left">
              {res.memory}
            </div>
          </div>
          <div className="mx-auto flex max-w-md flex-row">
            <div className="my-3 w-1/2 border px-2  py-1 text-right capitalize">
              card
            </div>
            <div className="my-3 w-1/2 border px-2 py-1 text-left">
              {res.card}
            </div>
          </div>
          <div className="mx-auto flex max-w-md flex-row">
            <div className="my-3 w-1/2 border px-2  py-1 text-right capitalize">
              maincamera
            </div>
            <div className="my-3 w-1/2 border px-2 py-1 text-left">
              {res.maincamera}
            </div>
          </div>
          <div className="mx-auto flex max-w-md flex-row">
            <div className="my-3 w-1/2 border px-2  py-1 text-right capitalize">
              features
            </div>
            <div className="my-3 w-1/2 border px-2 py-1 text-left">
              {res.features}
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <div className="mx-auto flex max-w-md flex-row">
            <div className="my-3 w-1/2 border px-2  py-1 text-right capitalize">
              front
            </div>
            <div className="my-3 w-1/2 border px-2 py-1 text-left">
              {res.front}
            </div>
          </div>
          <div className="mx-auto flex max-w-md flex-row">
            <div className="my-3 w-1/2 border px-2  py-1 text-right capitalize">
              gps
            </div>
            <div className="my-3 w-1/2 border px-2 py-1 text-left">
              {res.gps}
            </div>
          </div>
          <div className="mx-auto flex max-w-md flex-row">
            <div className="my-3 w-1/2 border px-2  py-1 text-right capitalize">
              radio
            </div>
            <div className="my-3 w-1/2 border px-2 py-1 text-left">
              {res.radio}
            </div>
          </div>
          <div className="mx-auto flex max-w-md flex-row">
            <div className="my-3 w-1/2 border px-2  py-1 text-right capitalize">
              usb
            </div>
            <div className="my-3 w-1/2 border px-2 py-1 text-left">
              {res.usb}
            </div>
          </div>
          <div className="mx-auto flex max-w-md flex-row">
            <div className="my-3 w-1/2 border px-2  py-1 text-right capitalize">
              nfc
            </div>
            <div className="my-3 w-1/2 border px-2 py-1 text-left">
              {res.nfc}
            </div>
          </div>
          <div className="mx-auto flex max-w-md flex-row">
            <div className="my-3 w-1/2 border px-2  py-1 text-right capitalize">
              data
            </div>
            <div className="my-3 w-1/2 border px-2 py-1 text-left">
              {res.data}
            </div>
          </div>
          <div className="mx-auto flex max-w-md flex-row">
            <div className="my-3 w-1/2 border px-2  py-1 text-right capitalize">
              sensors
            </div>
            <div className="my-3 w-1/2 border px-2 py-1 text-left">
              {res.sensors}
            </div>
          </div>
          <div className="mx-auto flex max-w-md flex-row">
            <div className="my-3 w-1/2 border px-2  py-1 text-right capitalize">
              audio
            </div>
            <div className="my-3 w-1/2 border px-2 py-1 text-left">
              {res.audio}
            </div>
          </div>
          <div className="mx-auto flex max-w-md flex-row">
            <div className="my-3 w-1/2 border px-2  py-1 text-right capitalize">
              torch
            </div>
            <div className="my-3 w-1/2 border px-2 py-1 text-left">
              {res.torch}
            </div>
          </div>
          <div className="mx-auto flex max-w-md flex-row">
            <div className="my-3 w-1/2 border px-2  py-1 text-right capitalize">
              extra
            </div>
            <div className="my-3 w-1/2 border px-2 py-1 text-left">
              {res.extra}
            </div>
          </div>
          <div className="mx-auto flex max-w-md flex-row">
            <div className="my-3 w-1/2 border px-2  py-1 text-right capitalize">
              battery
            </div>
            <div className="my-3 w-1/2 border px-2 py-1 text-left">
              {res.battery} mAh
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
