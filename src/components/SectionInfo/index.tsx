/* eslint-disable */
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
            <S.ItalicBold>Árvores Urbanas</S.ItalicBold> é um mapa feito
            coletivamente. O mapa marca a localização de árvores na cidade de
            Porto Alegre e na região metropolitana e colhe depoimentos, desenhos
            e fotografias das árvores. As primeiras árvores que estamos mapeando
            são os <S.ItalicBold>Guapuruvus</S.ItalicBold> (Schizolobium
            parahyba). O mapa é um projeto de{' '}
            <S.Link>
              <a
                href="https://cristinaribas.org/"
                target="_blank"
                rel="noreferrer"
              >
                Cristina Ribas
              </a>
            </S.Link>
            , artista e pesquisadora. Ao longo dos anos vamos adicionar mais
            árvores a este mapa. Você pode se comunicar com o projeto enviando
            um email para <i>mapadeguapuruvus@gmail.com </i>ou usando o
            formulário, e sugerir espécies a serem mapeadas futuramente. O mapa
            gera uma{' '}
            <S.ItalicBold>
              visualização da relação de proximidade entre as árvores e sua
              distribuição na cidade.
            </S.ItalicBold>{' '}
            Com o mapa podemos conhecer e imaginar a relação entre a extensão
            das raízes, os troncos e a copa das árvores, e também como a cidade
            se relaciona com as árvores - ou se tem refutado elas.
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
