import * as S from './style'


const Form = () => {
  return (
     <>
     <S.FormWrapper>
       <S.Title></S.Title>
       <S.Body>
    <iframe
     src="https://docs.google.com/forms/d/e/1FAIpQLSfysY5zFwQM6hyUfI_Q1E9lbi5uYdcahPKHWjY9BoihMo9eRQ/viewform"
      width="1000"
      height="1403"
      frameBorder="0"
      
      style={{backgroundColor: "lightblue"}}
      >
      Carregando…
    </iframe>
    </S.Body>
    </S.FormWrapper>
    </>
  )
}

export default Form