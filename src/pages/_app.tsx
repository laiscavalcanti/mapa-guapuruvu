import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mapa de Guapuruvu</title>
        <link rel="shortcut icon" href="/img/icon.png" />
        <link rel="appele-touch-icon" href="/img/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffbf00" />
        <meta
          name="description"
          content="Um site mapa dos Guapuruvus da cidade de Ponto Alegre - Brasil"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
