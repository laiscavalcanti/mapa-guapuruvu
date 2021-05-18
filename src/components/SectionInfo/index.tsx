
import Link from 'next/link'
import * as S from './style'

const SectionInfo = () => {
  return (
    <>
      <S.ContainerText>
        <S.Text className="post-text">
              Projeto de mapa colaborativo em Porto Alegre e região que localiza as
          schizolobium parahyba ou guapuruvu. Arvóre das famílias fabáceas, 
          reconhecida pela sua folhagem amarela. Suas sementes se dispersam pelo
          ar de forma anemocoria em uma cápsula-asa. A Guapuruvu vive em média 60 anos e cresce
          cerca de 3m por ano
        </S.Text>
        <S.SectionInfo>
          <S.Text2>
            Você viu um <S.Highlight>guapuruvu</S.Highlight>?
          </S.Text2>
          <S.Text3>
            Nos envie seus dados <S.Highlight2><Link href="/formulario"> AQUI</Link></S.Highlight2>
          </S.Text3>
        </S.SectionInfo>
      </S.ContainerText>
    </>
  )
}

export default SectionInfo
