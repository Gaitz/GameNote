import React from "react"
import styles from "./Main.style.css"
import { useSelector } from "react-redux"

export default function Main() {
  const userInfo = useSelector((state) => state.authentication.user)

  return (
    <>
      <article>
        <h1 className={styles.h1}>Game Note</h1>
        <p>Welcome: {userInfo?.email}</p>
      </article>
    </>
  )
}
