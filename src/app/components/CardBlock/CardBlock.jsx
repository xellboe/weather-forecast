"use client"
import React, { useContext } from "react"

import styles from "./CardBlock.module.scss"
import Image from "next/image"

import { AppContext } from "@/app/page"
const CardBlock = () => {
  const { apiData } = useContext(AppContext)

  return (
    <>
      {apiData?.location ? (
        <div className={styles.card}>
          <div className={styles.card__block}>
            <h2 className={styles.card__city}>
              {apiData.location.name} <span> {apiData.location.country}</span>
            </h2>
            <p className={styles.card__time}>{apiData.location?.localtime.replace(/[^ ]+ /, "")}</p>
          </div>
          <div className={styles.card__weather}>
            <div className={styles.card__value}>
              {apiData.current.temp_c}
              <sup>°C</sup>
            </div>
            <Image
              src={`https:${apiData.current.condition.icon}`}
              width={120}
              height={120}
              className={styles.card__img}
              alt="Weather"
            />
          </div>
          <div className={styles.card__addiction_info}>
            <div className={styles.card__feelslike}>
              RealFeel {apiData.current.feelslike_c}
              <sup>°C</sup>
            </div>
            <div className={styles.card__description}> {apiData.current.condition.text}</div>
          </div>
        </div>
      ) : (
        <div>NO MATCHES</div>
      )}

      <footer className={styles.footer}>
        <a href="#">©Nikita Korotkyi</a>
      </footer>
    </>
  )
}

export default CardBlock
