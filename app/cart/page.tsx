"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { CartContext, useCartContext } from "@/context/CartContext"
import { loadStripe } from "@stripe/stripe-js"
import axios from "axios"
import { toast } from "react-hot-toast"

import EachProduct from "./EachProduct"
import ShippingInfo from "./ShippingInfo"
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

  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Wapp, setWapp] = useState("")
  const [Address, setAddress] = useState("")

  const createCheckOutSession = async () => {
    if (Name === "") {
      toast("Please Fill out the shipping form, name is missing")
    } else if (Email === "") {
      toast("Please Fill out the shipping form, email is missing")
    } else if (Wapp === "") {
      toast("Please Fill out the shipping form, Whatsapp Number is missing")
    } else if (Address === "") {
      toast("Please Fill out the shipping form, Shipping Address is missing")
    } else {
      if (prevData) {
        const stripe = await stripePromise

        const checkoutSession = await fetch("/api/create-stripe-session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ProductData: prevData,
            UserData: {
              Name: Name,
              Email: Email,
              Wapp: Wapp,
              Address: Address,
            },
          }),
        })

        const data = await checkoutSession.json()

        console.log(data.session)

        if (data) {
          if (data.session) {
            if (data.session.url) {
              router.push(data.session.url)
            }
          }
        }

        // const result = await stripe?.redirectToCheckout({
        //   sessionId: session.url,
        // })

        // if (result?.error) {
        //   alert(result.error.message)
        // }
      }
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

          <div className="mt-6 h-full rounded-lg border  p-6 shadow-md md:mt-0 md:w-1/3">
            <ShippingInfo
              Name={Name}
              Email={Email}
              Wapp={Wapp}
              Address={Address}
              setName={setName}
              setEmail={setEmail}
              setWapp={setWapp}
              setAddress={setAddress}
            />
            <br />
            {prevData && (
              <TotalArea
                shipping={shipping}
                createCheckOutSession={createCheckOutSession}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
