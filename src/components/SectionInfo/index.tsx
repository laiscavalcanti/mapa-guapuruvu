import ImageWrapper from 'components/ImageWrapper'
import CarouselImages from 'components/Carousel'
import Link from 'next/link'
import * as S from './style'

const SectionInfo = () => {
  return (
    <>
      <S.Title>Mapa de Guapuruvus é feito coletivamente</S.Title>
      <S.SectionInfoWrapper>
        <S.ContainerCarousel>
          <CarouselImages />
          <S.Subtitle>Fotos de guapuruvus enviado por colaboradores</S.Subtitle>
        </S.ContainerCarousel>
        <S.ContainerText>
          <S.Text>
            <S.ItalicBold>Mapa de Guapuruvus</S.ItalicBold> O Mapa de Guapuruvus
            é feito coletivamente (Sch izolobium parahyba){' '}
            <S.ItalicBold>na cidade de Porto Alegre</S.ItalicBold> e região
            metropolitana. Realizado por{' '}
            <S.Link>
              <a
                href="https://cristinaribas.org/escritos/"
                target="_blank"
                rel="noreferrer"
              >
                Cristina Ribas
              </a>
            </S.Link>
            , artista e pesquisadora. Os Guapuruvus se espalham pela floresta da
            Mata Atlântica e tem floração entre novembro e janeiro. Suas
            sementes se dispersam pelo ar de forma anemocoria em uma
            cápsula-asa. A Guapuruvu vive em média 60 anos e nos anos iniciais
            cresce 3m por ano.
          </S.Text>
          <Link scroll={false} href="/sobre">
            <S.ReadMore> Leia mais</S.ReadMore>
          </Link>
        </S.ContainerText>
      </S.SectionInfoWrapper>
    </>
  )
}

export default SectionInfo
