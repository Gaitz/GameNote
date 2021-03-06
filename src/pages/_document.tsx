import Document, { Head, Html, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render () {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/png" href="/page_icon.png"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
