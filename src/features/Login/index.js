import React from "react"
import { storeContext } from "@game-note/ducks/App"
import firebaseService from "@game-note/services/firebaseService"
import { userSignIn } from "@game-note/ducks/App/authentication"
import { userSignOut } from "../App/authentication"
import authenticationReducer from "@game-note/ducks/App/authentication"
import { useRenderLog } from "@game-note/hooks"

export default function Login() {
  useRenderLog("Login")

  const [local_state] = React.useReducer(authenticationReducer, {
    user: null,
  })
  const store = React.useContext(storeContext)
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    const unsubscribe = firebaseService.auth.onAuthStateChanged((user) => {
      if (user) {
        store.dispatch(userSignIn(user))
        console.log(
          `get global user from sub ${JSON.stringify(store.state.user)}`
        )
        //setUser(store.state.user)
        //local_dispatch(userSignIn(user))
        setUser(user)
      }
    })
    return () => {
      unsubscribe()
      store.dispatch(userSignOut())
      //local_dispatch(userSignOut())
      //setUser(null)
    }
  }, [])

  React.useEffect(() => {
    setUser(store.state.user)
    console.log(`hello setUser ${JSON.stringify(store.state.user)}`)
    return () => {
      setUser(null)
    }
  }, [store.state.user])

  return (
    <>
      <h2>Login Component</h2>
      <p>From state: {JSON.stringify(user)}</p>
      <p>From local store: {JSON.stringify(local_state.user)}</p>
      <p>From global store: {JSON.stringify(store.state.user)}</p>
      <button onClick={() => {}}>click to sign-in</button>
      <button onClick={() => {}}>click to sign-out</button>
    </>
  )
}
