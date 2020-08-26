import "normalize.css"
import React from "react"
import styles from "./style.css"
import Login from "Components/Login"
// import createStore from "Store"

export default function App() {
  // const reducer = () => {
  //   console.log("reducer")
  // }
  // const store = createStore(123, { initial: "hello" })

  // console.log(store.state)
  // console.log(store)

  return (
    <article className={styles.article}>
      <h1>Welcome!</h1>
      <Login></Login>
    </article>
  )
}
