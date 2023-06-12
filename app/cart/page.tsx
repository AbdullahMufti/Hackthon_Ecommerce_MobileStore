"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { CartContext, useCartContext } from "@/context/CartContext"
import { loadStripe } from "@stripe/stripe-js"
import axios from "axios"

import EachProduct from "./EachProduct"
import TotalArea from "./TotalArea"

interface CartData {
  id: string
  src: string
  name: string
  company: string
  price: number
  quantity: number
}
export default function CartPage(): React.JSX.Element {
  const { prevData, Total } = useCartContext()

  const router = useRouter()

  const publishableKey = process.env
    .NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
  const stripePromise = loadStripe(publishableKey)

  const [shipping, setShipping] = useState(10)

  const createCheckOutSession = async () => {
    if (prevData) {
      const stripe = await stripePromise

      let item = {
        name: "",
        company: "",
        image: prevData[0].src,
        quantity: 1,
        price: Total * 100,
      }
      const allName = prevData.map(
        (item: CartData) => item.company + " - " + item.name
      )
      item.name = allName.join(",")
      const allcompanies = prevData.map((item: CartData) => item.company)
      item.company = allcompanies.join(",")

      const checkoutSession = await fetch("/api/create-stripe-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prevData: prevData }),
      })

      const session = await checkoutSession.json()

      if (session.url) {
        router.push(session.url)
      }

      // const result = await stripe?.redirectToCheckout({
      //   sessionId: session.url,
      // })

      // if (result?.error) {
      //   alert(result.error.message)
      // }
    }
  }

  return (
    <div>
      <div className="min-h-screen  pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {prevData && prevData.length > 0 ? (
              prevData.map((EProduct: CartData, indx: number) => (
                <EachProduct
                  id={EProduct.id}
                  src={EProduct.src}
                  name={EProduct.name}
                  company={EProduct.company}
                  price={EProduct.price}
                  quantity={EProduct.quantity}
                  key={indx}
                />
              ))
            ) : (
              <div className="text-center text-2xl font-bold">
                Cart is Empty!!
                <br /> Please Add Some Products to cart
                <br />
                Then come to Cart Page
              </div>
            )}
          </div>
          {prevData && (
            <TotalArea
              shipping={shipping}
              createCheckOutSession={createCheckOutSession}
            />
          )}
        </div>
      </div>
    </div>
  )
}
