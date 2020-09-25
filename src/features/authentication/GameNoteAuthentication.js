import React from "react"
import firebaseService from "game-note/services/firebaseService"
import Login from "./Login"
import Logout from "./Logout"
import { login, logout } from "./authenticationSlice"
import { useDispatch, useSelector } from "react-redux"

export default function GameNoteAuthentication() {
  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.authentication.user)

  React.useEffect(() => {
    const unsubscribe = firebaseService.auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(login(user))
      } else {
        dispatch(logout())
      }
    })

    console.log("onAuthStateChanged subscribe")
    return () => {
      unsubscribe()
      console.log("onAuthStateChanged unsubscribe")
    }
  }, [])

  if (userInfo) {
    return <Logout />
  } else {
    return <Login />
  }
}
