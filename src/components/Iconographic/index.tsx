import * as S from './style'
import { Lottie } from '@crello/react-lottie'
import mapView from './animations/mapView.json'
import photo from './animations/photo.json'
import email from './animations/email.json'
import takePhoto from './animations/take-photo.json'

const Icongraphic = () => {
  return (
    <S.IcongraphicWrapper>
      <S.Number>1</S.Number>
      <S.TextArea>
        <S.Title>encontre um Guapuruvu</S.Title>
        <S.Text>
          anote o endereço ou a localização do Guapuruvu que você encontrou
        </S.Text>
      </S.TextArea>
      <S.Icon>
        <Lottie
          width="150px"
          height="150px"
          className="lottie-container basic"
          config={{ animationData: mapView, loop: true, autoplay: true }}
        />
      </S.Icon>

      <S.Line />
      <S.Number>2</S.Number>
      <S.TextArea>
        <S.Title>tire uma foto</S.Title>
        <S.Text>
          registre através de fotos o Guapuruvu que você encontrou
        </S.Text>
      </S.TextArea>
      <S.Icon>
        <Lottie
          width="150px"
          height="150px"
          className="lottie-container basic"
          config={{ animationData: photo, loop: true, autoplay: true }}
        />
      </S.Icon>

      <S.Line />
      <S.TextArea>
      <S.Number>3</S.Number>
        <S.Title>nos envie as informações</S.Title>
        <S.Text>
          tamanho, colocaração, idade - essas informações serão enviadas através
          desse formulário
        </S.Text>
      </S.TextArea>

      <S.Icon>
        <Lottie
          width="150px"
          height="150px"
          className="lottie-container basic"
          config={{ animationData: email, loop: true, autoplay: true }}
        />
      </S.Icon>
    </S.IcongraphicWrapper>
  )
}


export default Icongraphic
