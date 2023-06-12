"use client"

import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function InputWithButton() {
  const router = useRouter()

  const [search, setSearch] = useState("")
  const pathname = usePathname()

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
      <Button
        type="submit"
        variant="outline"
        disabled={search === ""}
        onClick={() => {
          if (pathname.includes("/Search")) {
            router.push(`/Search/Search/${search}`)
          } else {
            router.push(`/Search/Search/${search}`)
          }
        }}
      >
        Search
      </Button>
    </div>
  )
}
0
