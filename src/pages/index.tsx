import { useEffect } from "react"
import { GetServerSideProps } from "next"
import Head from "next/head"
import firebase from "firebase/app"
import nookies from "nookies"
import { useAppDispatch, useAppSelector } from "game-note/shared/store";
import { Login, authStateChange } from "game-note/features/authentication"
import { Welcome } from "game-note/features/main";
import initializeClientSideFirebaseService from "game-note/services/firebaseService"
import { verifyIdToken } from "game-note/services/firebaseServerAdmin"

export default function Home () {
  const dispatch = useAppDispatch()
  const currentUser = useAppSelector((state) => state.authentication.user)

  useEffect(() => {
    initializeClientSideFirebaseService()

    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        nookies.set(null, "token", "")
        dispatch(authStateChange(user))
      } else {
        const token = await user.getIdToken()
        nookies.set(null, "token", token)
        dispatch(authStateChange({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        }))
      }
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const cookies = nookies.get(context)
    const tokenFromCookies = cookies.token

    if (!tokenFromCookies) {
      return { props: { currentUser: null } }
    }

    const token = await verifyIdToken(tokenFromCookies)
    console.warn(token)
    return { props: {} }
  } catch (error) {
    console.error(error)
  }

  return { props: {} }
}

