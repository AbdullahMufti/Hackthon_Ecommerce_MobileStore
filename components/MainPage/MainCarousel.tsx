"use client"

import React from "react"
import Image from "next/image"
import { Carousel } from "react-responsive-carousel"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import Link from "next/link"

const MainCarousel = () => {
  return (
    <Carousel
      interval={2000}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showArrows={false}
      width={"100%"}
    >
      <Link href="/Search/os/ios">
        <div className="w-full">
          <Image
            src="/images/b1.jpg"
            height={836}
            width={1920}
            alt="b1"
            className="w-full"
          />
          <p className="legend pb-36 text-8xl">Iphone</p>
        </div>
      </Link>
      <Link href="/Search/os/android">
        <div className="w-full">
          <Image
            src="/images/b2.png"
            height={836}
            width={1920}
            alt="b1"
            className="w-full"
          />
          <p className="legend pb-36 text-8xl">Android</p>
        </div>
      </Link>
    </Carousel>
  )
}

export default MainCarousel
