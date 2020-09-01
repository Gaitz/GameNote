import "normalize.css"
import React, { useContext } from "react"
import styles from "./style.css"
import { useCreateStore, storeContext } from "./useCreateStore"
import rootReducer, { initialState } from "./rootReducer"
import Login from "@game-note/ducks/Login"
import firebaseService from "@game-note/services/firebaseService"
import { userSignIn } from "@game-note/ducks/App/authentication"

export function App() {
  const Store = useCreateStore(rootReducer, initialState)

  const store = useContext(storeContext)

  React.useEffect(() => {
    firebaseService.auth.onAuthStateChanged((user) => {
      console.log(`user ${JSON.stringify(user)}`)
      if (user) {
        store.dispatch(userSignIn(user))
      }
    })
  }, [])

  return (
    <Store>
      <article className={styles.article}>
        <h1>Welcome!</h1>
        <Login></Login>
      </article>
    </Store>
  )
}
