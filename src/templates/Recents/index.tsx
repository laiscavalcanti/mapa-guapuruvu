import { MapPropsPlace } from 'components/Guapuruvus'
import Guapuruvus from 'components/Guapuruvus'
import Header from 'components/Header'
import Footer from 'components/Footer'

export default function PageGuapuruvus({places}: MapPropsPlace) {
  return (
    <>
      <Header />
      <Guapuruvus places={places} />
      <Footer />
    </>
  )
}
