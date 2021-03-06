import type { AppProps } from "next/app"
import theme from "game-note/shared/styles/theme"
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { Provider as ReduxProvider } from "react-redux"
import store from "game-note/app/store"
import Head from "next/head";

function MyApp ({ Component, pageProps }: AppProps) {
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
