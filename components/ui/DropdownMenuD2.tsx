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

import { Separator } from "./separator"

export function DropdownMenuD2() {
  const data = [
    { title: "By Brands" },
    { name: "Apple", url: "/company/Apple" },
    { name: "Samsung", url: "/company/Samsung" },
    { name: "Huawei", url: "/company/Huawei" },
    { name: "Vivo", url: "/company/Vivo" },
    { name: "Oppo", url: "/company/Oppo" },
    { name: "Nokia", url: "/company/Nokia" },
    { name: "Xiaomi", url: "/company/Xiaomi" },
    { name: "Infinix", url: "/company/Infinix" },
    { name: "All Mobiles", url: "/company/All" },
    { title: "By No of Sims" },
    { url: "/Search/sim/SingleSim", name: "Single Sim" },
    { url: "/Search/sim/DualSim", name: "Dual Sim" },
    { title: "By Price" },
    { url: "/Search/price/30k", name: "Below 30,000" },
    { url: "/Search/price/50k", name: "30,000 - 50,000" },
    { url: "/Search/price/100k", name: "50,000- 100,000" },
    { url: "/Search/price/150k", name: "100,000 - 150,000" },
    { url: "/Search/price/200k", name: "150,000 - 300,000" },
    { url: "/Search/price/300k", name: "Above 300,000" },
    { title: "By RAM" },
    { url: "/Search/memory/2GB", name: "2GB RAM" },
    { url: "/Search/memory/3GB", name: "3GB RAM" },
    { url: "/Search/memory/4GB", name: "4GB RAM" },
    { url: "/Search/memory/6GB", name: "6GB RAM" },
    { url: "/Search/memory/8GB", name: "8GB RAM" },
    { url: "/Search/memory/12GB", name: "12GB RAM" },
    { title: "By Storage" },
    { url: "/Search/storage/16GB", name: "16GB storage" },
    { url: "/Search/storage/32GB", name: "32GB storage" },
    { url: "/Search/storage/64GB", name: "64GB storage" },
    { url: "/Search/storage/128GB", name: "128GB storage" },
    { url: "/Search/storage/256GB", name: "256GB storage" },
    { url: "/Search/storage/512GB", name: "512GB storage" },
    { title: "By Screen size" },
    { url: "/Search/size/3", name: "Less Then 3 Inches" },
    { url: "/Search/size/4", name: "3.0 inch - 4.0 inch" },
    { url: "/Search/size/5", name: "4.0 inch - 5.0 inch" },
    { url: "/Search/size/6", name: "5.0 inch - 6.0 inch" },
    { url: "/Search/size/7", name: "6.0 inch - 7.0 inch" },
    { url: "/Search/size/7+", name: "Above 7.0 inch" },
    { title: "By Battery Capacity" },
    { url: "/Search/size/1500", name: "Less Then 1500mAh" },
    { url: "/Search/size/2500", name: "1500mAh - 2500mAh" },
    { url: "/Search/size/3500", name: "3500mAh - 3500mAh" },
    { url: "/Search/size/4500", name: "3500mAh - 4500mAh" },
    { url: "/Search/size/5500", name: "4500mAh - 5500mAh" },
    { url: "/Search/size/5500+", name: "Above 5500mAh" },
    { title: "By OS" },
    { url: "/Search/os/Android", name: "Android Phones" },
    { url: "/Search/os/IOS", name: "Apple Phones" },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Brands</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup className="scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50 lg:supports-scrollbars:pr-2">
          {data.map((item, index) =>
            !!item.url ? (
              <Link key={index} className="pointer" href={item.url}>
                <DropdownMenuItem>
                  <span>{item.name}</span>
                </DropdownMenuItem>
              </Link>
            ) : (
              <DropdownMenuItem  key={index}>
                <div>{item.title}</div>
              </DropdownMenuItem>
            )
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
