import { useMemo } from "react"
import { Provider as ReduxProvider } from "react-redux"
import type { AppProps } from "next/app"
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react"
import store, { wrapper } from "game-note/shared/store"
import { initializeClientSideFirebaseService } from "game-note/services/firebaseService"
import theme from "game-note/shared/styles/theme"


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
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ReduxProvider>
    </>
  )
}

export default wrapper.withRedux(MyApp)
