"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { GetItemTotalCount } from "@/lib/cartManage"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const data = GetItemTotalCount()
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link href="/cart">
              <div
                className={buttonVariants({
                  size: "lg",
                  variant: "ghost",
                })}
              >
                <Icons.ShoppingCart className="h-5 w-5" />
                {data > 0 && <Badge className="pt-1">{data}</Badge>}
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
