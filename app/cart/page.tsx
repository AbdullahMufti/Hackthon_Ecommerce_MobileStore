"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { loadStripe } from "@stripe/stripe-js"
import axios from "axios"

import { GetProducts } from "@/lib/cartManage"

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
export default function Page(): React.JSX.Element {
  const [ProductData, setProductData] = useState<[CartData] | null>(
    GetProducts()
  )
  const router = useRouter()

  const publishableKey = process.env
    .NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
  const stripePromise = loadStripe(publishableKey)

  const [shipping, setShipping] = useState(4.99)

  const [Subtotal, setSubtotal] = useState(0)
  const [Total, setTotal] = useState(0)

  useEffect(() => {
    const Pdata = GetProducts()
    setProductData(Pdata)
    if (Pdata) {
      CalculateTotals(Pdata)
    }
  }, [])

  const createCheckOutSession = async () => {
    if (ProductData) {
      const stripe = await stripePromise

      let item = {
        name: "",
        company: "",
        image: ProductData[0].src,
        quantity: 1,
        price: Total * 100,
      }
      const allName = ProductData.map(
        (item) => item.company + " - " + item.name
      )
      item.name = allName.join(",")
      const allcompanies = ProductData.map((item) => item.company)
      item.company = allcompanies.join(",")

      const checkoutSession = await fetch("/api/create-stripe-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ProductData: ProductData }),
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

  const CalculateTotals = (Pdata: [CartData]) => {
    let Total = 0
    if (Pdata) {
      Pdata.map((EP) => (Total = Total + EP.price * EP.quantity))
    }
    setSubtotal(Total)
    setTotal(Number(Total) + Number(shipping))
  }

  const UpdateNow = () => {
    const Pdata = GetProducts()
    setProductData(Pdata)
    if (Pdata) {
      CalculateTotals(Pdata)
    } else {
      setSubtotal(0)
      setTotal(0)
    }
  }

  return (
    <div>
      <div className="min-h-screen  pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {ProductData ? (
              ProductData.map((EProduct, indx) => (
                <EachProduct
                  EProduct={EProduct}
                  UpdateNow={UpdateNow}
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
          {ProductData && (
            <TotalArea
              Subtotal={Subtotal}
              Total={Total}
              shipping={shipping}
              createCheckOutSession={createCheckOutSession}
            />
          )}
        </div>
      </div>
    </div>
  )
}
