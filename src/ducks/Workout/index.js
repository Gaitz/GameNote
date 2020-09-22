import React from "react"
import styles from "./style.css"
import { storeContext } from "@game-note/ducks/App"
import { useRenderLog } from "@game-note/hooks"

export default function Workout() {
  useRenderLog("Workout component")

  const [localUser, setLocalUser] = React.useState(null)
  const store = React.useContext(storeContext)

  return (
    <>
      <h1
        onClick={() => {
          setLocalUser(store.state.user)
        }}
        className={styles.title}
        style={{ cursor: "pointer" }}
      >
        Workout
      </h1>
      <p>Store user: {JSON.stringify(store.state.user)}</p>
      <p>Local user: {JSON.stringify(localUser)}</p>
    </>
  )
}
