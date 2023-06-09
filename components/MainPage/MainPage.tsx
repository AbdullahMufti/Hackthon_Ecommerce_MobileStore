import React from "react"

import Iphone from "./Iphone"
import MainCarousel from "./MainCarousel"
import Oppo from "./Oppo"
import Samsung from "./Samsung"

export default async function MainPage() {
  return (
    <div>
      <MainCarousel />
      <Oppo />
      <Samsung />
      <Iphone />
    </div>
  )
}
