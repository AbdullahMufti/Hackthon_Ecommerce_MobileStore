import React from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface InputProps {
  Name: string
  Email: string
  Wapp: string
  Address: string
  setName: (val: string) => void
  setEmail: (val: string) => void
  setWapp: (val: string) => void
  setAddress: (val: string) => void
}

export default function ShippingInfo({
  Name,
  Email,
  Wapp,
  Address,
  setWapp,
  setName,
  setEmail,
  setAddress,
}: InputProps) {
  return (
    <div className="mx-auto mt-6 w-full   md:mt-0 md:max-w-sm">
      <h1 className="mb-10 text-center text-lg font-bold">
        Shipping Information
      </h1>
      <div className="my-2 w-full max-w-sm items-center">
        <Label htmlFor="text">Name</Label>
        <Input
          type="text"
          id="name"
          placeholder="Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="my-2 w-full max-w-sm items-center">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          placeholder="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="my-2 w-full max-w-sm items-center">
        <Label htmlFor="number">Whatsapp Number</Label>
        <Input
          type="number"
          id="number"
          placeholder="Whatsapp Number"
          value={Wapp}
          onChange={(e) => setWapp(e.target.value)}
        />
      </div>
      <div className="my-2 w-full max-w-sm items-center">
        <Label htmlFor="shippng">Shipping Address</Label>
        <textarea
          className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          id="address"
          placeholder="Shippng Address"
          rows={4}
          value={Address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
      </div>
    </div>
  )
}
