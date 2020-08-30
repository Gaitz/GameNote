import "normalize.css"
import React from "react"
import styles from "./style.css"
import { useCreateStore } from "./useCreateStore"
import rootReducer, { initialState } from "./rootReducer"
import Login from "@game-note/ducks/Login"

export function App() {
  const Store = useCreateStore(rootReducer, initialState)
  return (
    <Store>
      <article className={styles.article}>
        <h1>Welcome!</h1>
        <Login></Login>
      </article>
    </Store>
  )
}
