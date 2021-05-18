import ImageWrapper from 'components/ImageWrapper'
import * as S from './style'

const SectionInfo = () => {
  return (
    <S.ContainerText>
      <S.SectionFormWrapper>
        <S.Container>
          <S.Text2>
            projeto de <S.Highlight>mapa colaborativo</S.Highlight>
          </S.Text2>
          <S.Text3>
            em{' '}
            <i>
              <b>porto alegre e região</b>
            </i>{' '}
            que localiza as{' '}
          </S.Text3>
          <S.Text1><S.Highlight2>schizolobium parahyba</S.Highlight2> ou guapuruvu</S.Text1>
          <S.Text4>arvóre das famílias fabáceas</S.Text4>
        </S.Container>

        <S.Text5>reconhecida pela sua <i><b>folhagem amarela</b></i></S.Text5>

        <S.Text6>
          suas sementes se <S.Highlight3>dispersam pelo ar</S.Highlight3> de forma anemocoria em uma
          cápsula-asa
        </S.Text6>

        <S.Text7>vive em média 60 anos</S.Text7>
        <S.Text8>cresce cerca de 3m por ano</S.Text8>
      </S.SectionFormWrapper>
      <S.Image>
        <ImageWrapper
          src="/img/Ativo-10.png"
          alt="Imagem que descreve uma guapuruvu amarela"
          width={500}
          height={800}
        />
      </S.Image>
    </S.ContainerText>
  )
}

export default SectionInfo
