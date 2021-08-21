import Link from 'next/link'
import { linkania } from './content'
import * as S from './style'

const Linkania = () => {
  return (
    <>
      <S.LinkaniaWrapper>
        {linkania.map((contents, i) => (
          <S.List key={i}>
            <S.Image
              src={contents.image}
              alt={contents.alt}
              width={250}
              height={130}
            />
            <S.Infos>
              <S.Title>{contents.title}</S.Title>
              <S.Description>{contents.description}</S.Description>
              <S.LinkA>
                <Link href={contents.url}>{contents.label}</Link>
              </S.LinkA>
            </S.Infos>
          </S.List>
        ))}
      </S.LinkaniaWrapper>
    </>
  )
}

export default Linkania
