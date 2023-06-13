import React from "react"
import Link from "next/link"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { ScrollArea } from "../ui/scroll-area"

export default function TopBar() {
  return (
    <div className="flex flex-col border px-2  lg:hidden">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Search</AccordionTrigger>
          <AccordionContent>
            <ScrollArea className="h-52 w-full rounded-md border">
              <div className="flex flex-col">
                <h1 className="w-full border bg-black text-center text-xl text-white dark:bg-white dark:text-black ">
                  {" "}
                  By Brands
                </h1>
                <Link className="btn-ghost btn-sm btn" href="/company/Apple">
                  Apple iphone
                </Link>
                <Link className="btn-ghost btn" href="/company/Samsung">
                  Samsung Mobile
                </Link>
                <Link className="btn-ghost btn" href="/company/Xiaomi">
                  Xiaomi Mobile
                </Link>
                <Link className="btn-ghost btn" href="/company/Nokia">
                  Nokia
                </Link>
                <Link className="btn-ghost btn" href="/company/OPPO">
                  OPPO Mobile
                </Link>
                <Link className="btn-ghost btn" href="/company/Infinix">
                  Infinix Mobile
                </Link>
                <Link className="btn-ghost btn" href="/company/Huawei">
                  Huawei Mobile
                </Link>
                <Link className="btn-ghost btn" href="/company/Vivo">
                  Vivo
                </Link>
              </div>
              <div className="flex flex-col">
                <h1 className="w-full border bg-black text-center text-xl text-white dark:bg-white dark:text-black ">
                  By No of Sims
                </h1>
                <Link className="btn-ghost btn" href="/Search/sim/SingleSim">
                  Single Sim
                </Link>
                <Link className="btn-ghost btn" href="/Search/sim/DualSim">
                  Dual Sim
                </Link>
              </div>
              <div className="flex flex-col">
                <h1 className="w-full border bg-black text-center text-xl text-white dark:bg-white dark:text-black ">
                  By Price
                </h1>
                <Link className="btn-ghost btn" href="/Search/price/30k">
                  Below 30,000
                </Link>
                <Link className="btn-ghost btn" href="/Search/price/50k">
                  30,000 - 50,000
                </Link>
                <Link className="btn-ghost btn" href="/Search/price/100k">
                  50,000- 100,000
                </Link>
                <Link className="btn-ghost btn" href="/Search/price/150k">
                  100,000 - 150,000
                </Link>
                <Link className="btn-ghost btn" href="/Search/price/200k">
                  150,000 - 300,000
                </Link>
                <Link className="btn-ghost btn" href="/Search/price/300k">
                  Above 300,000{" "}
                </Link>
              </div>
              <div className="flex flex-col">
                <h1 className="w-full border bg-black text-center text-xl text-white dark:bg-white dark:text-black ">
                  By RAM
                </h1>
                <Link className="btn-ghost btn" href="/Search/memory/2GB">
                  2GB RAM
                </Link>
                <Link className="btn-ghost btn" href="/Search/memory/3GB">
                  3GB RAM
                </Link>
                <Link className="btn-ghost btn" href="/Search/memory/4GB">
                  4GB RAM
                </Link>
                <Link className="btn-ghost btn" href="/Search/memory/6GB">
                  6GB RAM
                </Link>
                <Link className="btn-ghost btn" href="/Search/memory/8GB">
                  8GB RAM
                </Link>
                <Link className="btn-ghost btn" href="/Search/memory/12GB">
                  12GB RAM
                </Link>
              </div>
              <div className="flex flex-col">
                <h1 className="w-full border bg-black text-center text-xl text-white dark:bg-white dark:text-black ">
                  {" "}
                  By Storage
                </h1>
                <Link className="btn-ghost btn" href="/Search/storage/16GB">
                  16GB storage
                </Link>
                <Link className="btn-ghost btn" href="/Search/storage/32GB">
                  32GB storage
                </Link>
                <Link className="btn-ghost btn" href="/Search/storage/64GB">
                  64GB storage
                </Link>
                <Link className="btn-ghost btn" href="/Search/storage/128GB">
                  128GB storage
                </Link>
                <Link className="btn-ghost btn" href="/Search/storage/256GB">
                  256GB storage
                </Link>
                <Link className="btn-ghost btn" href="/Search/storage/512GB">
                  512GB storage
                </Link>
              </div>
              <div className="flex flex-col">
                <h1 className="w-full border bg-black text-center text-xl text-white dark:bg-white dark:text-black ">
                  By Screen size
                </h1>
                <Link className="btn-ghost btn" href="/Search/size/3">
                  Less Then 3 Inches
                </Link>
                <Link className="btn-ghost btn" href="/Search/size/4">
                  3.0 inch - 4.0 inch
                </Link>
                <Link className="btn-ghost btn" href="/Search/size/5">
                  4.0 inch - 5.0 inch
                </Link>
                <Link className="btn-ghost btn" href="/Search/size/6">
                  5.0 inch - 6.0 inch
                </Link>
                <Link className="btn-ghost btn" href="/Search/size/7">
                  6.0 inch - 7.0 inch
                </Link>
                <Link className="btn-ghost btn" href="/Search/size/8">
                  Above 7.0 inch
                </Link>
              </div>
              <div className="flex flex-col">
                <h1 className="w-full border bg-black text-center text-xl text-white dark:bg-white dark:text-black ">
                  By Battery Capacity
                </h1>
                <Link className="btn-ghost btn" href="/Search/battery/1500">
                  Less Then 1500mAh
                </Link>
                <Link className="btn-ghost btn" href="/Search/battery/2500">
                  1500mAh - 2500mAh
                </Link>
                <Link className="btn-ghost btn" href="/Search/battery/3500">
                  3500mAh - 3500mAh
                </Link>
                <Link className="btn-ghost btn" href="/Search/battery/4500">
                  3500mAh - 4500mAh
                </Link>
                <Link className="btn-ghost btn" href="/Search/battery/5500">
                  4500mAh - 5500mAh
                </Link>
                <Link className="btn-ghost btn" href="/Search/battery/6500">
                  Above 5500mAh
                </Link>
              </div>
              <div className="flex flex-col">
                <h1 className="w-full border bg-black text-center text-xl text-white dark:bg-white dark:text-black ">
                  By OS
                </h1>
                <Link className="btn-ghost btn" href="/Search/os/Android">
                  Android Phones
                </Link>
                <Link className="btn-ghost btn" href="/Search/os/IOS">
                  Apple Phones
                </Link>
              </div>
            </ScrollArea>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
