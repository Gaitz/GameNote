import "normalize.css"
import React from "react"
import styles from "./style.css"
import { useCreateStore } from "./useCreateStore"
import rootReducer, { initialState } from "./rootReducer"
import Login from "@game-note/ducks/Login"
import Workout from "@game-note/ducks/Workout"
import { useRenderLog } from "@game-note/hooks"

export function App() {
  useRenderLog("App")
  const Store = useCreateStore(rootReducer, initialState)

  return (
    <Store>
      <article className={styles.article}>
        <h1>Welcome!</h1>
        <Login></Login>
        <Workout></Workout>
      </article>
    </Store>
  )
}
