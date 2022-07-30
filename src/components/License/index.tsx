/* eslint-disable */
import ButtonBack from 'components/ButtonBack'
import * as S from './style'

const License = () => {
  return (
    <>
      <S.WrapperLicense>
        <S.Title>Licença</S.Title>
        <S.Container>
          <S.Text>
            Creative Commons 3.0. (Atribuição - Uso Não Comercial - Partilha nos
            Mesmos Termos 3.0 Brasil)
          </S.Text>
        </S.Container>
        <ButtonBack />
      </S.WrapperLicense>
    </>
  )
}

export default License
