import { GetServerSideProps } from "next"
import Head from "next/head"
import nookies from "nookies"
import { useAppSelector, wrapper } from "game-note/shared/store"
import {
  Login,
  signIn,
  init,
  AUTH_COOKIE_KEY
} from "game-note/features/authentication"
import { Welcome } from "game-note/features/main"
import { getAppUserFromToken } from "game-note/services/firebaseServerAdmin"

import { serverSideTranslations } from "next-i18next/serverSideTranslations"

export default function Home() {
  const currentUser = useAppSelector((state) => state.authentication.user)

  return (
    <>
      <Head>
        <title>Game Note</title>
      </Head>
      {currentUser ? <Welcome /> : <Login />}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    // @ts-ignore until next-redux-wrapper version updated to fix the Type
    const { locale } = context

    const serverSideStore = context.store
    serverSideStore.dispatch(init())

    try {
      const cookies = nookies.get(context)
      const tokenFromCookies = cookies[AUTH_COOKIE_KEY]
      const appUser = await getAppUserFromToken(tokenFromCookies)

      /* eslint-disable-next-line */
      console.log(`appUser ${appUser?.email}`)

      if (appUser) {
        serverSideStore.dispatch(signIn(appUser))
      }
    } catch (error) {
      console.error(error)
    }

    return {
      props: {
        ...(await serverSideTranslations(locale ?? "", ["common", "login"]))
      }
    }
  }
)
