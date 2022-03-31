import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
  // static async getInitialProps(ctx: any) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   const { head } = ctx.renderPage();
  //   return { head, ...initialProps };
  // }
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
          <meta name="keywords" content="nextjs, realworld" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="next-realworld" />
          <meta property="og:title" content="Next.js realworld example app" />
          <meta
            property="og:description"
            content="Next.js + SWR codebase containing realworld examples"
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