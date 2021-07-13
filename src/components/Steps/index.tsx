import * as S from './style'
import { Lottie } from '@crello/react-lottie'
import mapView from './animations/mapView.json'
import photo from './animations/photo.json'
import email from './animations/email.json'
import LinkWrapper from 'components/LinkWrapper'

const Steps = () => {
  return (
    <>
      <S.Container>
        <S.H2>Como colaborar</S.H2>
        <S.StepsWrapper>
          <S.TextArea>
            <S.Number>1</S.Number>
            <S.Title>Encontre um Guapuruvu</S.Title>
            <S.Text>
              Anote o endereço ou a localização do Guapuruvu que você encontrou
            </S.Text>
          </S.TextArea>
          <S.Icon>
            <Lottie
              width="120px"
              height="120px"
              className="lottie-container basic"
              config={{ animationData: mapView, loop: true, autoplay: true }}
            />
          </S.Icon>

          <S.Line />

          <S.TextArea>
            <S.Number>2</S.Number>
            <S.Title>Tire uma foto</S.Title>
            <S.Text>
              Registre através de fotos o Guapuruvu que você encontrou
            </S.Text>
          </S.TextArea>
          <S.Icon>
            <Lottie
              width="140px"
              height="140px"
              className="lottie-container basic"
              config={{ animationData: photo, loop: true, autoplay: true }}
            />
          </S.Icon>

          <S.Line />
          <S.TextArea>
            <S.Number>3</S.Number>
            <S.Title>Nos envie as informações</S.Title>
            <S.Text>
              Tamanho, coloração, idade - essas informações serão enviadas
              através desse{' '}
              <S.Link>
                <LinkWrapper href="/formulario">formulário</LinkWrapper>
              </S.Link>
            </S.Text>
          </S.TextArea>

          <S.Icon>
            <Lottie
              width="110px"
              height="110px"
              className="lottie-container basic"
              config={{ animationData: email, loop: true, autoplay: true }}
            />
          </S.Icon>
        </S.StepsWrapper>
      </S.Container>
    </>
  )
}

export default Steps
