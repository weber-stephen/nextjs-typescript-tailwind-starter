import '../styles/globals.css'
import React from 'react'

type AppLayoutProps = {
  Component: React.FC
  pageProps: any
}

function MyApp({ Component, pageProps }: AppLayoutProps) {
  return <Component {...pageProps} />
}

export default MyApp