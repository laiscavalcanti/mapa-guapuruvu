import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'
import NextNProgress from 'nextjs-progressbar'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo-config'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mapa de Guapuruvu</title>
        <link rel="shortcut icon" href="/img/icon.png" />
        <link rel="appele-touch-icon" href="/img/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <meta name="theme-color" content="#ffbf00" />
        <meta
          name="description"
          content="Um site mapa dos Guapuruvus da cidade de Ponto Alegre - Brasil"
        />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <NextNProgress 
        color="#228b22"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
      />
      <Component {...pageProps} />
    </>
  )
}

export default App
