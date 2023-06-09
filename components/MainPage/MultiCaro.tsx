import Image from "next/image"

import { CompleteProduct } from "@/lib/types"

import { Button } from "../ui/button"
import ProductCard from "./ProductCard"

function MultiCaro({ data }: [CompleteProduct]) {
  return (
    <div className="carousel-end carousel  rounded-box">
      {data.map((item: CompleteProduct, indx: number) => (
        <ProductCard
          src={item.src}
          name={item.name}
          company={item.company}
          usd={item.price_usd}
          pkr={item.price_pkr}
          item={item}
        />
      ))}
    </div>
  )
}

export default MultiCaro
