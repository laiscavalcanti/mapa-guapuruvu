import { NextSeo } from 'next-seo'
import Image from 'next/image'

import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import * as S from './style'
import { useRouter } from 'next/dist/client/router'

import {
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon
} from 'next-share'
import ButtonBack from 'components/ButtonBack'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlacesTemplateProps = {
  place: {
    slug: string
    name: string
    location_numeric: string
    adress: string
    tag: string
    state: string
    age: string
    period: string
    description?: {
      html: string
      text: string
    }
    gallery: ImageProps[]
  }
}

export type PlacesTemplatePropsFirts = {}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${place.name} - Árvores Urbanas`}
        description={
          place.description?.text ||
          'Um site que conta a histórias de árvores urbanas na cidade de Porto Alegre'
        }
        canonical="https://arvoresurbanas.net"
        openGraph={{
          url: 'https://arvoresurbanas.net',
          title: `${place.name} - Árvores Urbanas`,
          description:
            place.description?.text ||
            'Um site que conta a histórias de árvores urbanas na cidade de Porto Alegre',
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`
            }
          ]
        }}
      />
      <LinkWrapper href="/">
        <CloseOutline
          size={32}
          aria-label="Volte para o mapa"
          color="rgba(139,174,99,0.51)"
        />
      </LinkWrapper>
      <S.Wrapper>
        <S.ButtonShareWrapper>
          <TelegramShareButton url={`https://www.arvoresurbanas.net/place.slug`} title={place.name}>
            <TelegramIcon size={30} round />
          </TelegramShareButton>
          <TwitterShareButton url={`https://www.arvoresurbanas.net/place.slug`} title={place.name}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <FacebookShareButton url={`https://www.arvoresurbanas.net/place.slug`} quote={place.name}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <WhatsappShareButton url={`https://www.arvoresurbanas.net/place.slug`} title={place.name}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </S.ButtonShareWrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>
          <S.ListField>
            <S.FieldWrapper>
              <S.Field>Coordenadas:</S.Field>
              <S.Value>{place.location_numeric}</S.Value>
            </S.FieldWrapper>
            <S.FieldWrapper>
              <S.Field>Endereço:</S.Field>
              <S.Value>{place.adress}</S.Value>
            </S.FieldWrapper>
            <S.FieldWrapper>
              <S.Field>Área:</S.Field>
              <S.Value>{place.tag}</S.Value>
            </S.FieldWrapper>
            <S.FieldWrapper>
              <S.Field>Estado:</S.Field>
              <S.Value>{place.state}</S.Value>
            </S.FieldWrapper>
            <S.FieldWrapper>
              <S.Field>Período: </S.Field>
              <S.Value>{place.period}</S.Value>
            </S.FieldWrapper>
            <S.FieldWrapper>
              <S.Field>Idade: </S.Field>
              <S.Value> {place.age}</S.Value>
            </S.FieldWrapper>
          </S.ListField>
          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />
          <S.Gallery>
            {place.gallery.map((image, index) => (
              <>
                <Image
                  key={index}
                  src={image.url}
                  alt={place.name}
                  width={image.width}
                  height={image.height}
                  quality={75}
                />
                <S.Caption></S.Caption>
              </>
            ))}
          </S.Gallery>
         
        </S.Container>
      </S.Wrapper>
      <S.WrapperButton>
      <ButtonBack />
      </S.WrapperButton>
    </>
  )
}
