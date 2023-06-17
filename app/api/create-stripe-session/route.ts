import { NextRequest, NextResponse } from "next/server"
import { db } from "@vercel/postgres"
import Stripe from "stripe"

// const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string

export async function POST(req: NextRequest, response: any) {
  const client = await db.connect()

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15",
  })
  const url = req.nextUrl

  const body = await req.json()
  const PData = await body.ProductData
  const UData = await body.UserData

  const items = await PData.map(
    (item: {
      quantity: number
      name: string
      id: string
      src: string
      company: string
      price: number
    }) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.company + "-" + item.name,
            images: [
              `${url.origin}/mobiles/${item.src.split("/").reverse()[0]}`,
            ],
          },
          unit_amount: item.price * 100, // price in cents
        },
        quantity: item.quantity,
      }
    }
  )
  // console.log(await UData)

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: items,
    mode: "payment",
    success_url: `${url.origin}/success`,
    cancel_url: `${url.origin}/cancel`,
  })

  const query = `INSERT INTO orders (name, email,wapp,address,orderstatus,stripeid,paymenturl,createdAt) VALUES ('${UData.Name}', '${UData.Email}', '${UData.Wapp}', '${UData.Address}', 'Pending', '${session.id}', '${session.url}', DEFAULT);`

  // console.log(query)

  try {
    await client.sql`INSERT INTO orders (name, email,wapp,address,orderstatus,stripeid,paymenturl) VALUES (${UData.Name}, ${UData.Email}, ${UData.Wapp}, ${UData.Address}, 'Pending', ${session.id}, ${session.url});`
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: { error } }, { status: 500 })
  }

  if (typeof session.url === "string") {
    return NextResponse.json({ session: session, UData: UData })
  } else {
    return NextResponse.json(session)
  }
}
