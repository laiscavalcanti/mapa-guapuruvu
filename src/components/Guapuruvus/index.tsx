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
}

export type MapProps = {
  places?: Place[]
}

const Guapuruvus = ({ places }: MapProps) => {
  const router = useRouter()

  return (
    <>
      <S.Title></S.Title>
      <S.GuapuruvuWrapper>
        {places?.slice(0, 4).map(({ id, slug, name, gallery }) => {
          return (
            <S.Container>
              <S.ContainerItem key={`place-${id}`}>
                <S.Button onClick={() => router.push(`place/${slug}`)}>
                  {name}

                  <S.Image>
                    {gallery.slice(0, 1).map((image, index) => (
                      <ImageWrapper
                        key={index}
                        src={image.url}
                        width={300}
                        height={250}
                        alt={''}
                      />
                    ))}
                  </S.Image>
                </S.Button>
              </S.ContainerItem>
            </S.Container>
          )
        })}
      </S.GuapuruvuWrapper>
    </>
  )
}

export default Guapuruvus
