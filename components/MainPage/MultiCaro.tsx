import Image from "next/image"

import { CompleteProduct } from "@/lib/types"

import { Button } from "../ui/button"
import ProductCard from "./ProductCard"

function MultiCaro({ data }: any) {
  return (
    <div className="rounded-box flex flex-wrap justify-evenly">
      {data.map((item: CompleteProduct, indx: number) => (
        <ProductCard
          src={item.src}
          name={item.name}
          company={item.company}
          usd={item.price_usd}
          pkr={item.price_pkr}
          item={item}
          kv={undefined}
        />
      ))}
    </div>
  )
}

export default MultiCaro
