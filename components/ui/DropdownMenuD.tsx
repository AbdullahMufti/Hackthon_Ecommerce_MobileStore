"use client"

import Link from "next/link"
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuD() {
  const data = [
    { name: "Apple", url: "/company/Apple" },
    { name: "Samsung", url: "/company/Samsung" },
    { name: "Huawei", url: "/company/Huawei" },
    { name: "Vivo", url: "/company/Vivo" },
    { name: "Oppo", url: "/company/Oppo" },
    { name: "Nokia", url: "/company/Nokia" },
    { name: "Xiaomi", url: "/company/Xiaomi" },
    { name: "Infinix", url: "/company/Infinix" },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Mobile Companies</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {data.map((item, index) => (
            <Link key={index} className="pointer" href={item.url}>
              <DropdownMenuItem>
                <span>{item.name}</span>
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
