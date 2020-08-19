import "normalize.css"
import React from "react"
import styles from "./style.css"
import Login from "Components/Login"

function App() {
  return (
    <article className={styles.article}>
      <h1>welcome!</h1>
      <Login></Login>
    </article>
  )
}

export default App
