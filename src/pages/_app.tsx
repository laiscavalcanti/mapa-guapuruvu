import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'
import NextNProgress from 'nextjs-progressbar'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo-config'

import './styles.css'

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#ffbf00" />
        <meta
          name="description"
          content="Um site mapa dos Guapuruvus da cidade de Ponto Alegre - Brasil"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <NextNProgress
        color="#ffbf00"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
      />
      <Component {...pageProps} />
    </>
  )
}

export default App
