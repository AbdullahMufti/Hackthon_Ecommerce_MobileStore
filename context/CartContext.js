"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

// interface CartData {
//   id: string
//   src: string
//   name: string
//   company: string
//   price: number
//   quantity: number
// }
// type cartContextType = {
//   prevData: CartData[]
//   AddToCart: (item: CartData) => void
//   GetProducts: () => CartData[] | null
//   RemoveOneFromCart: (id: string) => void
//   AddOneToCart: (id: string) => void
//   RemoveAllFromCart: (id: string) => void
//   ClearCart: () => void
//   GetItemTotalCount: () => number
//   updateTodo: (id: number) => void
// }
// const Context = createContext<cartContextType>()
const Context = createContext()

export const CartContext = ({ children }) => {
  const [prevData, setPrevData] = useState()
  const [Qty, setQty] = useState(0)
  const [Subtotal, setSubtotal] = useState(0)
  const [Total, setTotal] = useState(0)

  useEffect(() => {
    return () => {
      const pData = localStorage.getItem("cart")
      if (!!pData && pData !== undefined) {
        console.log(pData)
        const pDataa = JSON.parse(pData)
        setPrevData(pDataa)
        setQty(pDataa.length)
        CalculateTotals()
      }
    }
  }, [])

  const AddToCart = (item) => {
    let prevDataArr = prevData
    if (!prevData) {
      const ProductData = [
        {
          quantity: 1,
          name: item.name,
          id: item._id,
          src: item.src,
          company: item.company,
          price: item.price_usd,
        },
      ]
      setPrevData(ProductData)
      setQty(1)
      localStorage.setItem("cart", JSON.stringify(ProductData))
    } else {
      const Obj = prevData.filter((obj) => obj.id === item._id)
      if (Obj.length === 0) {
        const ProductData = {
          quantity: 1,
          name: item.name,
          id: item._id,
          src: item.src,
          company: item.company,
          price: item.price_usd,
        }
        prevDataArr.push(ProductData)
        setPrevData(prevDataArr)
        setQty(prevDataArr.length)
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
        setPrevData(prevDataArr)
        setQty(prevDataArr.length)
        localStorage.setItem("cart", JSON.stringify(prevDataArr))
      }
    }
    CalculateTotals()
  }

  const GetProducts = () => {
    if (prevData) {
      setQty(prevData.length)
      return prevData
    } else {
      setQty(0)
      return null
    }
  }
  const GetQty = (id) => {
    const index = prevData.findIndex((obj) => obj.id === id)

    if (index >= 0) {
      return prevData[index].quantity
    } else {
      console.log(index)
      return ""
    }
  }

  const RemoveOneFromCart = (id) => {
    let prevDataArr = prevData

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
      setPrevData(prevDataArr)
      localStorage.setItem("cart", JSON.stringify(prevDataArr))
    } else {
      prevDataArr.splice(index, 1)
      if (prevDataArr.length === 0) {
        setPrevData(null)
        localStorage.removeItem("cart")
      } else {
        setPrevData(prevDataArr)
        localStorage.setItem("cart", JSON.stringify(prevDataArr))
      }
    }
    setQty(prevDataArr.length)
    CalculateTotals()
  }
  const AddOneToCart = (id) => {
    let prevDataArr = prevData

    const index = prevDataArr.findIndex((obj) => obj.id === id)
    const ProductData = {
      quantity: prevDataArr[index].quantity + 1,
      name: prevDataArr[index].name,
      id: prevDataArr[index].id,
      src: prevDataArr[index].src,
      company: prevDataArr[index].company,
      price: prevDataArr[index].price,
    }
    prevDataArr[index] = ProductData
    setQty(prevDataArr.length)
    localStorage.setItem("cart", JSON.stringify(prevDataArr))
    CalculateTotals()
  }

  const RemoveAllFromCart = (id) => {
    if (prevData) {
      let prevDataArr = JSON.parse(prevData)
      const index = prevDataArr.findIndex((obj) => obj.id === id)
      prevDataArr.splice(index, 1)
      if (prevDataArr.length === 0) {
        setPrevData(null)
        localStorage.removeItem("cart")
      } else {
        setPrevData(prevDataArr)
        localStorage.setItem("cart", JSON.stringify(prevDataArr))
      }
    }
    setQty(0)

    localStorage.removeItem("cart")

    CalculateTotals()
  }

  const ClearCart = () => {
    localStorage.removeItem("cart")
    setPrevData(null)
    setQty(0)
  }
  const GetItemTotalCount = () => {
    if (prevData) {
      const qty = prevData.length
      return qty
    } else return 0
  }
  const CalculateTotals = () => {
    let Total = 0
    if (prevData) {
      prevData.map((EP) => (Total = Total + EP.price * EP.quantity))
    }
    setSubtotal(Total)
    setTotal(Number(Total) + 4.99)
  }

  return (
    <Context.Provider
      value={{
        Qty,
        Subtotal,
        Total,
        prevData,
        AddToCart,
        GetProducts,
        RemoveOneFromCart,
        AddOneToCart,
        RemoveAllFromCart,
        ClearCart,
        GetItemTotalCount,
        GetQty,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useCartContext = () => useContext(Context)
