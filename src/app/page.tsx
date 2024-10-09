"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
export default function Home() {
  useEffect(()=>{
      Router.push("/signup")
  },[])

  const Router =  useRouter()
  return(
    <></>
  )
}