import { useEffect } from "react";
import type { AppProps } from "next/app"
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { Provider as ReduxProvider } from "react-redux"
import theme from "game-note/shared/styles/theme"
import store from "game-note/app/store"
import firebaseService from "game-note/services/firebaseService"

function MyApp ({ Component, pageProps }: AppProps) {
  // Trigger global observer
  useEffect(() => {
    if (firebaseService) {
      const unsubscribe = firebaseService.auth().onAuthStateChanged((user) => {
        console.log(user)
      })
      return unsubscribe
    }
  }, [])

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/page_icon.png"></link>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ReduxProvider store={store}>
          <Component {...pageProps} />
        </ReduxProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
