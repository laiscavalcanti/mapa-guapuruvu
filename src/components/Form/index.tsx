import ImageWrapper from 'components/ImageWrapper'
import * as S from './style'

const Form = () => {
  return (
    <>
      <S.FormWrapper>
        {/* <ImageWrapper src="" alt=""/> */}
        <S.Title></S.Title>
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
    </>
  )
}

export default Form
