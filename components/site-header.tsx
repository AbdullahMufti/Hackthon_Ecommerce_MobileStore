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
import { InputWithButton } from "./ui/SearchBar"

export function SiteHeader() {
  const { Qty, GetItemTotalCount } = useCartContext()

  const [qty, setQty] = useState(GetItemTotalCount())

  useEffect(() => {
    return () => {
      setQty(GetItemTotalCount())
    }
  }, [qty])

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex flex-wrap">
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
          <DropdownMenuD />
          <InputWithButton />
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
    </header>
  )
}
