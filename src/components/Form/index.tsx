import ButtonBack from 'components/ButtonBack'
import ImageWrapper from 'components/ImageWrapper'
import * as S from './style'

const Form = () => {
  return (
    <>
    <S.ContainerForm>
      <S.Title>Formulário</S.Title>
      <ImageWrapper
            src="/img/guapu03.jpg"
            alt="imagem de uma arvore e de um céu azul com nuvens"
            width={1000}
            height={500}
          />
      <S.FormWrapper>
        <S.Body>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfysY5zFwQM6hyUfI_Q1E9lbi5uYdcahPKHWjY9BoihMo9eRQ/viewform"
            width="800"
            height="1103"
            frameBorder="0"          
          >
            Carregando…
          </iframe>
        </S.Body>
      </S.FormWrapper>
      <ButtonBack />
      </S.ContainerForm>
    </>
  )
}

export default Form
