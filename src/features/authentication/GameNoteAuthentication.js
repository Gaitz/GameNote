import React, { useEffect, useState } from "react"
import firebaseService from "game-note/services/firebaseService"
import styles from "./GameNoteAuthentication.style.css"

export default function GameNoteAuthentication() {
  const [userInfo, setUserInfo] = useState(null)
  const [loginData, setLoginData] = useState({ email: null, password: null })

  useEffect(() => {
    const unsubscribe = firebaseService.auth.onAuthStateChanged(function (
      user
    ) {
      if (user) {
        setUserInfo(user)
      } else {
        setUserInfo(null)
      }
    })

    console.log("onAuthStateChanged subscribe")
    return () => {
      unsubscribe()
      console.log("onAuthStateChanged unsubscribe")
    }
  }, [])

  if (userInfo) {
    return (
      <article>
        <p>Welcome: {userInfo.email}</p>
        <button onClick={() => firebaseService.auth.signOut()}>Sign Out</button>
      </article>
    )
  } else {
    return (
      <article className={styles.loginComponent}>
        <form>
          <div>
            <label htmlFor="account">Account:</label>
            <input
              id="gameNoteAccount"
              type="email"
              autoComplete="username"
              onChange={(event) =>
                setLoginData({ ...loginData, email: event.target.value })
              }
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              id="gameNotePassword"
              type="password"
              autoComplete="current-password"
              onChange={(event) =>
                setLoginData({ ...loginData, password: event.target.value })
              }
            ></input>
          </div>
          <button
            onClick={(event) => {
              event.preventDefault()
              firebaseService.auth
                .signInWithEmailAndPassword(loginData.email, loginData.password)
                .catch((error) => {
                  console.error(error)
                })
            }}
          >
            Login
          </button>
        </form>
      </article>
    )
  }
}
