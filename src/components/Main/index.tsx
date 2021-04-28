import NavBar from 'components/NavBar'
import Map from 'components/Map'
import { Wrapper } from './styles'

const Main = () => {
  return (
    <>
      <NavBar />
      <Wrapper>
        <h1>Mapa de Guapuruvu</h1>
        <Map />
      </Wrapper>
    </>
  )
}

export default Main
