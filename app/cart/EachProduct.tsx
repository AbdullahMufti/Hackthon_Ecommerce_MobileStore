"use client"

import Image from "next/image"
import toast, { Toaster } from "react-hot-toast"

import { AddOneToCart, RemoveOneFromCart } from "@/lib/cartManage"
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
  EProduct,
  UpdateNow,
}: {
  EProduct: CartData
  UpdateNow: any
}) {
  return (
    <div className="mb-6 justify-between rounded-lg border p-6 shadow-xl sm:flex sm:justify-start">
      <Toaster />

      <Image
        src={`/mobiles/${EProduct.src.split("/").reverse()[0]}`}
        height={50}
        width={50}
        alt="product-image"
        className="w-10 rounded-lg "
      />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold ">
            {EProduct.company}&nbsp;{EProduct.name}
          </h2>
          <p className="mt-1 text-xs ">Unit Price : ${EProduct.price}</p>
        </div>
        <div className="mt-4  flex items-end  justify-between sm:mt-0 sm:block sm:space-x-6 sm:space-y-6">
          <div className="flex items-center justify-end border-gray-100">
            <Button
              variant="outline"
              className="  rounded-l-full  px-3 py-1 duration-100"
              onClick={() => {
                RemoveOneFromCart(EProduct.id)
                UpdateNow()
                toast.error(
                  `Removed 1 ${EProduct.company} ${EProduct.name}  from cart`,
                  { position: "top-right" }
                )
              }}
            >
              -
            </Button>
            <div className="p1 mx-3 h-full">{EProduct.quantity}</div>
            <Button
              variant="outline"
              className="  rounded-r-full  px-3 py-1 duration-100"
              onClick={() => {
                AddOneToCart(EProduct.id)
                UpdateNow()
                toast.success(
                  `Added 1 ${EProduct.company} ${EProduct.name} to cart`,
                  { position: "top-right" }
                )
              }}
            >
              +
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm">
              {" "}
              {EProduct.name} * {EProduct.quantity} =
              <span className="text-lg font-bold">
                $&nbsp; {Number(EProduct.quantity) * Number(EProduct.price)}{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
