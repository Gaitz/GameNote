import React from "react"
import { useSelector } from "react-redux"
import firebaseService from "game-note/services/firebaseService"

export default function Logout() {
  const userInfo = useSelector((state) => state.authentication.user)

  return (
    <article>
      <p>Welcome: {userInfo?.email}</p>
      <button onClick={() => firebaseService.auth.signOut()}>Sign Out</button>
    </article>
  )
}
