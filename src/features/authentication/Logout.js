import React from "react"
import { useSelector } from "react-redux"
//import { logout } from "./authenticationSlice"

export default function Logout() {
  const userInfo = useSelector((state) => state.authentication.user)

  return (
    <article>
      <p>Welcome: {userInfo?.email}</p>
      {/* <button
        onClick={() =>
          firebaseService.auth.signOut().then(() => {
            //          dispatch(logout())
          })
        }
      >
        Sign Out
      </button> */}
    </article>
  )
}
