"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useCartContext } from "@/context/CartContext"
import toast, { Toaster } from "react-hot-toast"

import { CompleteProduct } from "@/lib/types"

import { Icons } from "../icons"
import { Button } from "../ui/button"

interface Pricecard {
  src: string
  name: string
  company: string
  usd: number
  pkr: number
  item: CompleteProduct
}
interface Mapobj {
  vval: string
  indx: number
}
export default function ProductCard({
  src,
  name,
  company,
  usd,
  pkr,
  item,
}: Pricecard) {
  const { AddToCart } = useCartContext()

  return (
    <div className="m-2 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100  shadow-md">
      <Toaster />

      <div className="relative mx-3 mt-3 flex h-auto justify-center overflow-hidden rounded-xl">
        <Image
          className="h-20 w-auto"
          src={`/mobiles/${src.split("/").reverse()[0]}`}
          height={350}
          width={170}
          alt="product image"
        />
      </div>
      <div className="mt-4 px-5 pb-5">
        <div>
          <h5 className="text-center text-lg tracking-tight ">
            {company.trim()} {name}
          </h5>
          <h5 className="text-center text-lg tracking-tight ">
            Storage : {item.storage}
          </h5>
          <h5 className="text-center text-lg tracking-tight ">
            Memory : {item.memory}
          </h5>
          <div className="flex items-center justify-center">
            <Icons.star />
            <Icons.star />
            <Icons.star />
            <Icons.star />
            <Icons.star />
            <span className="rounded p-1 text-xs font-semibold">5.0</span>
          </div>
          <div className="mb-5 mt-2  flex items-center justify-evenly">
            <p>
              <span className="text-xl font-bold ">$ {usd}</span>
            </p>
            <p>
              <span className="text-lg font-bold ">Rs. {pkr}</span>
            </p>
          </div>
        </div>
        <div className="flex  items-center justify-evenly ">
          <Button
            onClick={() => {
              AddToCart(item)
              toast(` ${item.company} ${item.name} added to cart`, {
                position: "bottom-right",
              })
            }}
            variant="outline"
            className="bg-green-500"
          >
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
            Add
          </Button>
          <Link
            href={`/product/${company.trim()}/${name.trim()}`}
            className="my-3 rounded-md border bg-transparent px-4 py-2 text-center font-bold text-inherit focus:scale-75"
          >
            Specs
          </Link>
        </div>
      </div>
    </div>
  )
}
