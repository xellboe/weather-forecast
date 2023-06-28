"use client"
import { createContext, useState } from "react"

import Header from "./components/Header/Header"
import CardBlock from "./components/CardBlock/CardBlock"

import "../app/assets/styles/index.scss"

export const AppContext = createContext(null)

export default function Home() {
  const [value, setValue] = useState("")
  const [apiData, setApiData] = useState({})

  return (
    <>
      <AppContext.Provider value={{ value, setValue, apiData, setApiData }}>
        <Header />
        <CardBlock />
      </AppContext.Provider>
    </>
  )
}
