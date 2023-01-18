import Theme from '../styles/theme';
import React from 'react'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
     <Head>
        <title>Zak Janzi - Portfolio</title>
        <link rel='icon' href='favicon2.ico'></link>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 