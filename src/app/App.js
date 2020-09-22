import React from "react"
import { useSelector, useDispatch } from "react-redux"

import "normalize.css"
import styles from "./App.style.css"

/*
 * React Root component
 *
 * add React Router
 */
export default function App() {
  const value = useSelector((state) => state.value)
  const dispatch = useDispatch()

  return (
    <article className={styles.article}>
      <h1>Hello App</h1>
      <p>value is {value}</p>
      <button onClick={() => dispatch({ type: "ADD" })}>add</button>
    </article>
  )
}
