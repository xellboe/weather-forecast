"use client"
import React, { useContext } from "react"
import axios from "axios"

import { url } from "../../api/api"
import { AppContext } from "../../page"

import styles from "./Header.module.scss"

const Header = () => {
  const { value, setValue, setApiData } = useContext(AppContext)

  const onChange = (event) => {
    setValue(event.target.value)
  }

  function updatePost(e) {
    e.preventDefault()

    axios
      .get(`${url}${value}`)
      .then((resp) => {
        setApiData((current) => resp.data)
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          console.log(error.request)
        } else {
          console.log("Error", error.message)
        }
      })
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Weather forecast</h1>
      <div className={styles.form}>
        <input className={styles.input} value={value} onChange={onChange} type="text" placeholder="Enter city name" />
        <button onClick={updatePost} className={styles.btn}>
          Show
        </button>
      </div>
    </header>
  )
}

export default Header
