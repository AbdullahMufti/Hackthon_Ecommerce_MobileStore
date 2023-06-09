import { atom } from "recoil"

interface CartData {
  id: string
  src: string
  name: string
  company: string
  price: number
  quantity: number
}

const prevData: string | null = localStorage.getItem("cart")
let prevDataArr: [CartData] = JSON.parse(prevData)
export const cartState = atom({
  key: "cartState",
  default: prevDataArr || [],
})
