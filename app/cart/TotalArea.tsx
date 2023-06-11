"use client"

import React from "react"

export default function TotalArea({
  Subtotal,
  Total,
  shipping,
  createCheckOutSession,
}: {
  Subtotal: number
  Total: number
  shipping: number
  createCheckOutSession: () => void
}) {
  return (
    <div className="mt-6 h-full rounded-lg border  p-6 shadow-md md:mt-0 md:w-1/3">
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
