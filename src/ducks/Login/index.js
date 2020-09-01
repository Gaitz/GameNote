import React from "react"
import { storeContext } from "@game-note/ducks/App"
// import { userSignIn, userSignOut } from "@game-note/ducks/App/authentication"

export default function Login() {
  const store = React.useContext(storeContext)

  return (
    <>
      <h2>Login Component</h2>
      <p>{store.state.sayHi}</p>
      <p>{JSON.stringify(store.state)}</p>
      <button onClick={() => {}}>click to sign-in</button>
      <button onClick={() => {}}>click to sign-out</button>
    </>
  )
}
