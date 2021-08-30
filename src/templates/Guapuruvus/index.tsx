import { MapProps } from 'components/Guapuruvus'
import Guapuruvus from 'components/Guapuruvus'
import Header from 'components/Header'
import Footer from 'components/Footer'

export default function PageForm({places}: MapProps) {
  return (
    <>
      <Header />
      <Guapuruvus places={places} />
      <Footer />
    </>
  )
}
