"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useCartContext } from "@/context/CartContext"
import toast, { Toaster } from "react-hot-toast"

import { Button } from "@/components/ui/button"

interface CartData {
  id: string
  src: string
  name: string
  company: string
  price: number
  quantity: number
}

export default function EachProduct({
  id,
  src,
  name,
  company,
  price,
  quantity,
}: CartData) {
  const { AddOneToCart, RemoveOneFromCart, GetQty } = useCartContext()

  const [qty, setQty] = useState(GetQty(id))

  useEffect(() => {
    return () => {
      setQty(GetQty(id))
    }
  }, [qty])

  return (
    <div className="mb-6 justify-between rounded-lg border p-6 shadow-xl sm:flex sm:justify-start">
      <Toaster />

      <Image
        src={`/mobiles/${src.split("/").reverse()[0]}`}
        height={50}
        width={50}
        alt="product-image"
        className="w-10 rounded-lg "
      />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold ">
            {company}&nbsp;{name}
          </h2>
          <p className="mt-1 text-xs ">Unit Price : ${price}</p>
        </div>
        <div className="mt-4  flex flex-col flex-wrap items-end justify-center sm:mt-0 sm:block sm:flex-row sm:justify-between sm:space-x-6 sm:space-y-6">
          <div className="flex  items-center justify-end border-gray-100">
            <Button
              variant="outline"
              className="  rounded-l-full  px-3 py-1 duration-100"
              onClick={() => {
                RemoveOneFromCart(id)
                setQty(GetQty(id))
                toast.error(`Removed 1 ${company} ${name}  from cart`, {
                  position: "bottom-right",
                })
              }}
            >
              -
            </Button>
            <div className="p1 mx-3 h-full">{qty}</div>
            <Button
              variant="outline"
              className="  rounded-r-full  px-3 py-1 duration-100"
              onClick={() => {
                AddOneToCart(id)
                setQty(GetQty(id))
                toast.success(`Added 1 ${company} ${name} to cart`, {
                  position: "bottom-right",
                })
              }}
            >
              +
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm">
              {" "}
              {name} * {qty} =
              <span className="text-lg font-bold">
                $&nbsp; {Number(qty) * Number(price)}{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
