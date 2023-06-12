"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useCartContext } from "@/context/CartContext"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

import { DropdownMenuD } from "./ui/DropdownMenuD"
import { DropdownMenuD2 } from "./ui/DropdownMenuD2"
import { InputWithButton } from "./ui/SearchBar"

export default function NewNavBar() {
  const { Qty, GetItemTotalCount } = useCartContext()

  return (
    <div>
      <div className="z-60 navbar fixed top-0 w-full border-b bg-white dark:bg-black">
        <div className="navbar-start">
          <div tabIndex={0} className="lg:hidden">
            <DropdownMenuD2 />
          </div>
          <Link href="/" className="flex items-center space-x-2">
            <Image
              alt="logo"
              quality={100}
              src="/logo.png"
              height={6}
              width={6}
              className="h-6 w-6"
            />

            <span className="inline-block pt-2 font-bold">
              {siteConfig.name}
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div tabIndex={0} className="mt-3 flex p-2 shadow ">
            <a>
              <DropdownMenuD />
            </a>
            <a>
              <InputWithButton />
            </a>
          </div>
        </div>
        <div className="navbar-end">
          <Link href="/cart">
            <div
              className={buttonVariants({
                size: "lg",
                variant: "ghost",
              })}
            >
              <Icons.ShoppingCart className="h-5 w-5" />
              <div className="badge badge-primary badge-lg">{Qty}</div>
            </div>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
