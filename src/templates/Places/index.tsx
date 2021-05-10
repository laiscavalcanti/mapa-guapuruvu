import Image from 'next/image'
import { CloseOutline } from "@styled-icons/evaicons-outline"
import LinkWrapper from "components/LinkWrapper"

//import * as S from 'styles'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlaceTemplateProps = {
  place: {
    name: string
    slug: string
    description: {
      html: string
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({ place }: PlaceTemplateProps) {
  return (
    <>
    <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="voltar para a página inicial" />
    </LinkWrapper>
      <h1>{place.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: place.description.html }} />
      {place.gallery.map((images, index) => (
        <Image width={1000} height={600} quality={75}  key={`proto-${index}`} src={images.url} alt={place.name} />
      ))}
    </>
  )
}
