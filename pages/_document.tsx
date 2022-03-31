import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {

  render() {
    return (
      <Html lang="es-PE">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="robots" content="index, follow" />
          <meta key="googlebot" name="googlebot" content="index,follow" />
          <meta name="google" content="notranslate" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="keywords" content="cine narrativo, cine publicitario, videoclips y televisión, novela peruana, consultor creativo y docente en el IPP" />
          <meta property="og:locale" content="en_PE" />
          <meta property="og:site_name" content="christopher-vasquez" />
          <meta property="og:title" content="Christopher Vásquez realworld | Guionista / Scriptwriter" />
          <meta
            property="og:description"
            content="Christopher Vásquez | Guionista / Scriptwriter"
          />
          <link
            rel="stylesheet"
            href="//fonts.googleapis.com/css?family=Azeret+Mono:800,400|Inter:400,700&display=swap"
          />
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