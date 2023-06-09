"use client"

import React, { useEffect } from "react"
import { useCartContext } from "@/context/CartContext"

import ShippingInfo from "./ShippingInfo"

export default function TotalArea({
  shipping,
  createCheckOutSession,
}: {
  shipping: number
  createCheckOutSession: () => void
}) {
  const { Subtotal, Total, CalculateTotals } = useCartContext()

  useEffect(() => {
    return () => {
      CalculateTotals()
    }
  }, [])

  return (
    <div>
      <div className="mb-2 flex justify-between">
        <p className="text-gray-700 dark:text-white">Subtotal</p>
        <p className="text-gray-700 dark:text-white">${Subtotal}.00</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-700 dark:text-white">Shipping</p>
        <p className="text-gray-700 dark:text-white">${shipping}</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <div className="">
          <p className="mb-1 text-lg font-bold">${Total}</p>
        </div>
      </div>

      <button
        className="btn-primary btn mt-6 w-full rounded-md py-1.5 font-medium "
        disabled={Total === 0}
        onClick={createCheckOutSession}
      >
        Check out
      </button>
    </div>
  )
}
