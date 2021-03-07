import { useEffect } from "react"
import Head from "next/head"
import AppHeader from "game-note/shared/components/AppHeader";
import firebaseService from "game-note/services/firebaseService"
import { useAppDispatch, useAppSelector } from "game-note/shared/store";
import { authStateChange } from "game-note/features/authentication/authenticationSlice"
import { Login } from "game-note/features/authentication"
import { Typography } from "@material-ui/core";

export default function Home () {
  const dispatch = useAppDispatch()
  const currentUser = useAppSelector((state) => state.authentication.user)

  useEffect(() => {
    if (firebaseService) {
      const unsubscribe = firebaseService.auth().onAuthStateChanged((user) => {
        dispatch(authStateChange(user))
      })
      return unsubscribe
    }
  }, [])

  return <>
    <Head>
      <title>Game Note</title>
    </Head>
    <AppHeader />
    {
      currentUser
        ? <Typography>Welcome Back, {currentUser?.displayName}</Typography>
        : <Login />
    }
  </>
}
