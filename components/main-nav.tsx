import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { DropdownMenuD } from "@/components/ui/DropdownMenuD"
import { Icons } from "@/components/icons"

import { InputWithButton } from "./ui/SearchBar"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      <DropdownMenuD />
      {items?.length ? (
        <nav className="flex gap-6">
          <InputWithButton />
        </nav>
      ) : null}
    </div>
  )
}
