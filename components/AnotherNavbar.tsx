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

export default function AnotherNavbar() {
  const { Qty, GetItemTotalCount } = useCartContext()
  const [hide, setHide] = useState(true)

  return (
    <div>
      <nav className="fixed left-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <Link href="/" className="flex items-center">
            <Image
              alt="logo"
              quality={100}
              src="/logo.png"
              height={6}
              width={6}
              className="h-6 w-6"
            />

            <span className="flex items-center justify-center font-bold">
              {siteConfig.name}
            </span>
          </Link>
          <div className="flex md:order-2">
            <Link href="/cart">
              <div className="relative mt-0  flex items-center justify-center  hover:text-gray-700 lg:ml-6 lg:mt-0">
                <svg
                  className="h-8 w-8 flex-1"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                </svg>
                {Qty > 0 && (
                  <span className="top right absolute right-0 top-0 m-0 h-4 w-4 rounded-full bg-red-600 p-0 text-center font-mono text-sm  leading-tight text-white">
                    {Qty}
                  </span>
                )}
              </div>
            </Link>
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setHide(!hide)}
              className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <svg
                className="h-6 w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              hide && "hidden"
            } w-full items-center justify-between md:order-1 md:flex md:w-auto`}
            id="navbar-sticky"
          >
            <ul className="mt-4 flex flex-col rounded-lg    p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
              <li>
                <DropdownMenuD />
              </li>

              <li>
                <InputWithButton />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
