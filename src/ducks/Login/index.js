import React from "react"
import { storeContext } from "@game-note/ducks/App"

export default function Login() {
  const store = React.useContext(storeContext)
  return (
    <>
      <h2>Login Component</h2>
      <p>{store.state.sayHi}</p>
      <p>{JSON.stringify(store.state)}</p>
    </>
  )
}
