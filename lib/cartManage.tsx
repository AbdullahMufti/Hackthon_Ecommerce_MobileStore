"use client"

import { CompleteProduct } from "./types"

interface CartData {
  id: string
  src: string
  name: string
  company: string
  price: number
  quantity: number
}

export const AddToCart = (item: CompleteProduct) => {
  const prevData = localStorage.getItem("cart")

  if (!prevData) {
    const ProductData = {
      quantity: 1,
      name: item.name,
      id: item._id,
      src: item.src,
      company: item.company,
      price: item.price_usd,
    }
    localStorage.setItem("cart", JSON.stringify([ProductData]))
  } else {
    let prevDataArr: [CartData] = JSON.parse(prevData)

    const Obj = prevDataArr.filter((obj) => obj.id === item._id)
    if (Obj.length === 0) {
      const ProductData = {
        quantity: 1,
        name: item.name,
        id: item._id,
        src: item.src,
        company: item.company,
        price: item.price_usd,
      }
      console.log("sending data")
      prevDataArr.push(ProductData)
      console.log(prevDataArr)
      localStorage.setItem("cart", JSON.stringify(prevDataArr))
    } else {
      const index = prevDataArr.findIndex((obj) => obj.id === item._id)
      const ProductData = {
        quantity: prevDataArr[index].quantity + 1,
        name: prevDataArr[index].name,
        id: prevDataArr[index].id,
        src: prevDataArr[index].src,
        company: prevDataArr[index].company,
        price: prevDataArr[index].price,
      }
      prevDataArr[index] = ProductData

      localStorage.setItem("cart", JSON.stringify(prevDataArr))
    }
  }
}

export const RemoveOneFromCart = (id: string) => {
  const prevData: string | null = localStorage.getItem("cart")
  if (prevData) {
    let prevDataArr: [CartData] | [] = JSON.parse(prevData)
    const index = prevDataArr.findIndex((obj) => obj.id === id)
    if (prevDataArr[index].quantity > 1) {
      const ProductData = {
        quantity: prevDataArr[index].quantity - 1,
        name: prevDataArr[index].name,
        id: prevDataArr[index].id,
        src: prevDataArr[index].src,
        company: prevDataArr[index].company,
        price: prevDataArr[index].price,
      }
      prevDataArr[index] = ProductData

      localStorage.setItem("cart", JSON.stringify(prevDataArr))
    } else {
      prevDataArr.splice(index, 1)
      if (prevDataArr.length === 0) {
        localStorage.removeItem("cart")
      } else {
        localStorage.setItem("cart", JSON.stringify(prevDataArr))
      }
    }
  }
}
export const RemoveAllFromCart = (id: string) => {
  const prevData: string | null = localStorage.getItem("cart")
  if (prevData) {
    let prevDataArr: [CartData] | [] = JSON.parse(prevData)
    const index = prevDataArr.findIndex((obj) => obj.id === id)
    prevDataArr.splice(index, 1)
    if (prevDataArr.length === 0) {
      localStorage.removeItem("cart")
    } else {
      localStorage.setItem("cart", JSON.stringify(prevDataArr))
    }
  }
}

export const ClearCart = () => {
  localStorage.removeItem("cart")
}
export const GetItemTotalCount = () => {
  const prevData = localStorage.getItem("cart")
  if (!prevData) {
    return 0
  } else {
    let total = 0
    let prevDataArr: [CartData] = JSON.parse(prevData)
    prevDataArr.forEach(
      (data: CartData) => (total = total + Number(data.quantity))
    )
    return total
  }
}
