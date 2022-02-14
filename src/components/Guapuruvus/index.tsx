/* eslint-disable */
import ImageWrapper from 'components/ImageWrapper'
import { useRouter } from 'next/router'
import * as S from './style'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type Place = {
  id: string
  name: string
  slug: string
  gallery: ImageProps[]
  key: any
}

export type MapPropsPlace = {
  places?: Place[]
}

const Guapuruvus = ({ places }: MapPropsPlace) => {
  const router = useRouter()

  return (
    <>
    <S.ContainerForm>
      <S.Title>Árvores Urbanas</S.Title>
      <S.GuapuruvuWrapper>
        {places?.map(({ id, slug, name, gallery }) => {
          return (
            <S.Container>
              <S.ContainerItem key={`place-${id}`}>
                <S.Image>
                  {gallery.slice(0, 1).map((image, index) => (
                    <ImageWrapper
                      key={index}
                      src={image.url}
                      width={320}
                      height={270}
                      alt={''}
                    />
                  ))}
                </S.Image>
                <S.Name>{name}</S.Name>
                <S.Button onClick={() => router.push(`place/${slug}`)}>
                  Leia mais
                </S.Button>
              </S.ContainerItem>
            </S.Container>
          )
        })}
      </S.GuapuruvuWrapper>
      </S.ContainerForm>
    </>
  )
}

export default Guapuruvus
