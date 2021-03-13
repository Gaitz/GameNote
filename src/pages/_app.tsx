import type { AppProps } from "next/app"
import Head from "next/head";
import { Provider as ReduxProvider } from "react-redux"
import store, { wrapper } from "game-note/shared/store"
import { initializeClientSideFirebaseService } from "game-note/services/firebaseService"
import { useMemo } from "react"

function MyApp ({ Component, pageProps }: AppProps) {
  useMemo(initializeClientSideFirebaseService, [])

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/page_icon.png"></link>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>

    </>
  )
}

export default wrapper.withRedux(MyApp)
