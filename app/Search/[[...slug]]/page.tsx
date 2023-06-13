import { FC } from "react"

import { client } from "@/lib/sanityClient"
import { CompleteProduct } from "@/lib/types"
import ProductCard from "@/components/MainPage/ProductCard"
import SideBard from "@/components/MainPage/SideBard"

const page = async ({ params }: { params: { slug: string[] } }) => {
  const kv = params.slug

  let query = `*[_type=="product" ] | order(price_usd asc)`

  if (kv[0] === "os") {
    query = `*[_type=="product" && os match "${kv[1]}*"] | order(price_usd asc)`
  } else if (kv[0] === "sim") {
    query = `*[_type=="product" && sim match "${kv[1]}*"] | order(price_usd asc)`
  } else if (kv[0] === "storage") {
    query = `*[_type=="product" && storage match "${kv[1]}*"] | order(price_usd asc)`
  } else if (kv[0] == "price") {
    if (kv[1] == "30k") {
      query = `*[_type=="product" && price_pkr<=30000] | order(price_usd asc)`
    } else if (kv[1] == "50k") {
      query = `*[_type=="product" && price_pkr>30000 && price_pkr<=50000 ] | order(price_usd asc)`
    } else if (kv[1] == "100k") {
      query = `*[_type=="product" && price_pkr>50000 && price_pkr<=100000 ] | order(price_usd asc)`
    } else if (kv[1] == "150k") {
      query = `*[_type=="product" && price_pkr>100000 && price_pkr<=150000 ] | order(price_usd asc)`
    } else if (kv[1] == "200k") {
      query = `*[_type=="product" && price_pkr>150000 && price_pkr<=300000 ] | order(price_usd asc)`
    } else if (kv[1] == "300k") {
      query = `*[_type=="product" && price_pkr>300000  ] | order(price_usd asc)`
    }
  } else if (kv[0] === "memory") {
    query = `*[_type=="product" &&  memory =="${kv[1]}" ]| order(price_usd asc)`
  } else if (kv[0] == "size") {
    if (kv[1] == "3") {
      query = `*[_type=="product" && size<=3] | order(price_usd asc)`
    } else if (kv[1] == "4") {
      query = `*[_type=="product" && size>3 && size<=4 ] | order(price_usd asc)`
    } else if (kv[1] == "5") {
      query = `*[_type=="product" && size>4 && size<=5 ] | order(price_usd asc)`
    } else if (kv[1] == "6") {
      query = `*[_type=="product" && size>5 && size<=6 ] | order(price_usd asc)`
    } else if (kv[1] == "7") {
      query = `*[_type=="product" && size>6 && size<=7 ] | order(price_usd asc)`
    } else if (kv[1] == "8") {
      query = `*[_type=="product" && size>7  ]|  order(price_usd asc)`
    }
  } else if (kv[0] == "battery") {
    if (kv[1] == "1500") {
      query = `*[_type=="product" && battery<=1500] | order(price_usd asc)`
    } else if (kv[1] == "2500") {
      query = `*[_type=="product" && battery>1500 && battery<=2500 ] | order(price_usd asc)`
    } else if (kv[1] == "3500") {
      query = `*[_type=="product" && battery>2500 && battery<=3500 ] | order(price_usd asc)`
    } else if (kv[1] == "4500") {
      query = `*[_type=="product" && battery>3500 && battery<=4500 ] | order(price_usd asc)`
    } else if (kv[1] == "5500") {
      query = `*[_type=="product" && battery>4500 && battery<=5500 ] | order(price_usd asc)`
    } else if (kv[1] == "6500") {
      query = `*[_type=="product" && battery>5500  ] |  order(price_usd asc)`
    }
  } else if (kv[0] === "Search") {
    query = `*[_type=="product" &&

(    name  match "*$ {kv[1]} *" ||
    company  match "* ${kv[1]} *" ||
    price_pkr  match "* ${kv[1]} *" ||
    price_usd  match "* ${kv[1]} *" ||
    src  match "* ${kv[1]} *" ||
    os  match "* ${kv[1]} *" ||
    dimensions  match "* ${kv[1]} *" ||
    weight  match "* ${kv[1]} *" ||
    sim  match "* ${kv[1]} *" ||
    colors  match "* ${kv[1]} *" ||
    cpu  match "* ${kv[1]} *" ||
    chipset  match "* ${kv[1]} *" ||
    gpu  match "* ${kv[1]} *" ||
    technology  match "* ${kv[1]} *" ||
    size  match "* ${kv[1]} *" ||
    resolution  match "* ${kv[1]} *" ||
    storage  match "* ${kv[1]} *" ||
    memory  match "* ${kv[1]} *" ||
    card  match "* ${kv[1]} *" ||
    maincamera  match "* ${kv[1]} *" ||
    features  match "* ${kv[1]} *" ||
    front  match "* ${kv[1]} *" ||
    gps  match "* ${kv[1]} *" ||
    radio  match "* ${kv[1]} *" ||
    usb  match "* ${kv[1]} *" ||
    data  match "* ${kv[1]} *" ||
    sensors  match "* ${kv[1]} *" ||
    audio  match "* ${kv[1]} *" ||
    torch  match "* ${kv[1]} *" ||
    extra  match "* ${kv[1]} *" ||
    battery  match "* ${kv[1]} *")
    ] | order(price_usd asc)`
  }

  const fetchPhone = async () => {
    if (kv[0] !== "All") {
      console.log(query)
      const res = await client.fetch(query)
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
    <>
      {kv[0] === "Search" && (
        <h1 className="text-center text-4xl">{`Search Reaults for "${kv[1]}"`}</h1>
      )}
      <div className="container flex w-full">
        <div className="md:5/6 w-full">
          {data && (
            <div className="rounded-box flex flex-wrap justify-evenly ">
              {data.map((item: CompleteProduct, indx: number) => (
                <ProductCard
                  key={indx}
                  src={item.src}
                  name={item.name}
                  company={item.company}
                  usd={item.price_usd}
                  pkr={item.price_pkr}
                  item={item}
                  kv={kv}
                />
              ))}
            </div>
          )}
        </div>
        <SideBard />
      </div>
    </>
  )
}
export default page
