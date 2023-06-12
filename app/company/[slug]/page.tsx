import Image from "next/image"

import { client } from "@/lib/sanityClient"
import { CompleteProduct } from "@/lib/types"
import ProductCard from "@/components/MainPage/ProductCard"

export default async function Page({ params }: { params: { slug: string } }) {
  const namecomp = params.slug

  const fetchPhone = async () => {
    if (namecomp !== "All") {
      const res = await client.fetch(
        `*[_type=="product" && company=='${namecomp}'] | order(price_usd asc)`
      )
      return res
    } else {
      const res = await client.fetch(
        `*[_type=="product"] | order(price_usd asc)`
      )
      return res
    }
  }

  const data: [CompleteProduct] = await fetchPhone()
  return (
    <div>
      <Image
        src={`/${namecomp.toLowerCase()}.svg`}
        height={140}
        width={140}
        alt="Mobile"
        className=" mx-auto my-4"
      />

      {data && (
        <div className="rounded-box flex flex-wrap justify-evenly ">
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
      )}
    </div>
  )
}
