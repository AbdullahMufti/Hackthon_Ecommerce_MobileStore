import React from "react"

import Iphone from "./Iphone"
import MainCarousel from "./MainCarousel"
import Oppo from "./Oppo"
import Samsung from "./Samsung"
import SideBard from "./SideBard"

export default async function MainPage() {
  return (
    <div className="flex w-full">
      <div className="md:5/6 w-full">
        <MainCarousel />
        {/* @ts-expect-error Server Component */}
        <Iphone />
        {/* @ts-expect-error Server Component */}
        <Samsung />
        {/* @ts-expect-error Server Component */}
        <Oppo />
      </div>
      <SideBard />
    </div>
  )
}
