import { useEffect } from "react"
import Head from "next/head"
import firebase from "firebase/app"
import { useAppDispatch, useAppSelector } from "game-note/shared/store";
import { authStateChange } from "game-note/features/authentication/authenticationSlice"
import { Login } from "game-note/features/authentication"
import Welcome from "game-note/features/main/Welcome";
import initializeClientSideFirebaseService from "game-note/services/firebaseService"

export default function Home () {
  const dispatch = useAppDispatch()
  const currentUser = useAppSelector((state) => state.authentication.user)

  useEffect(() => {
    initializeClientSideFirebaseService()

    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        dispatch(authStateChange(user))
        return
      }

      dispatch(authStateChange({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL
      }))
    })
    return unsubscribe
  }, [])

  return <>
    <Head>
      <title>Game Note</title>
    </Head>
    {
      currentUser
        ? <Welcome />
        : <Login />
    }
  </>
}
