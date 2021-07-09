import ImageWrapper from 'components/ImageWrapper'
import Link from 'next/link'
import * as S from './style'

const SectionInfo = () => {
  return (
    <>
      <S.Title>Mapa de Guapuruvus é colaborativo</S.Title>
      <S.SectionInfoWrapper>
        <ImageWrapper
          src="/img/gua02.jpg"
          alt="imagem guapuruvu verde"
          width={600}
          height={500}
        />
        <S.ContainerText>
          <S.Text>
            <S.ItalicBold>Mapa de Guapuruvus</S.ItalicBold> é um mapa
            colaborativo da localização das árvores Guapuruvu (Sch izolobium
            parahyba) <S.ItalicBold>na cidade de Porto Alegre</S.ItalicBold> e
            região metropolitana. Realizado por{' '}
            <Link href="https://cristinaribas.org/escritos/">
              <S.Link>Cristina Ribas</S.Link>
            </Link>
            , artista e pesquisadora. Os Guapuruvus se espalham pela floresta da
            Mata Atlântica e tem floração entre novembro e janeiro. Suas
            sementes se dispersam pelo ar de forma anemocoria em uma
            cápsula-asa. A Guapuruvu vive em média 60 anos e nos anos iniciais
            cresce 3m por ano.
          </S.Text>
          <Link href="/sobre">
            <S.ReadMore> Leia mais</S.ReadMore>
          </Link>
        </S.ContainerText>
      </S.SectionInfoWrapper>
    </>
  )
}

export default SectionInfo
