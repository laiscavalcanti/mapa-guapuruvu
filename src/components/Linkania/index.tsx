import Link from 'next/link'
import { linkania } from './content'
import * as S from './style'

const Linkania = () => {
  return (
    <>
      <S.LinkaniaWrapper>
        {linkania.map((contents, i) => (
          <S.LinkA>
            <S.List key={i}>
              <S.Image
                src={contents.image}
                alt={contents.alt}
                width={300}
                height={150}
              />
              <S.Infos>
                <S.Title>{contents.title}</S.Title>
                <S.Description>{contents.description}</S.Description>
                <Link href={contents.url}>{contents.label}</Link>
              </S.Infos>
            </S.List>
          </S.LinkA>
        ))}
      </S.LinkaniaWrapper>
    </>
  )
}

export default Linkania
