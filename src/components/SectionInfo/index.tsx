import Link from 'next/link'
import * as S from './style'

const SectionInfo = () => {
  return (
    <>
      <S.ContainerText>
        <p className="post-text">
          <S.Highlight>Mapa de Guapuruvus</S.Highlight>  é um mapa colaborativo da localização das árvores
          Guapuruvu (Schizolobium parahyba) na cidade de Porto Alegre e região
          metropolitana. Realizado por Cristina Ribas, artista e pesquisadora.
          Os Guapuruvus se espalham pela floresta da Mata Atlântica e tem
          floração entre novembro e janeiro. Suas sementes se dispersam pelo ar
          de forma anemocoria em uma cápsula-asa. A Guapuruvu vive em média 60
          anos e nos anos iniciais cresce 3m por ano.
        </p>
        <S.SectionInfo></S.SectionInfo>
      </S.ContainerText>
    </>
  )
}

export default SectionInfo
