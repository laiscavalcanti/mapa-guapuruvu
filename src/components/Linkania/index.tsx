import Link from 'next/link'
import { linkania } from './content'
import * as S from './style'

const Linkania = () => {
  return (
    <>
      <S.LinkaniaWrapper>
        <S.Name>Linkania</S.Name>
        <S.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
          quam eros. Nullam eu mauris dapibus, interdum metus eu, vehicula
          tellus. Mauris at dolor purus. Ut dictum lectus eu ultricies tempus.
          Pellentesque ultrices tincidunt viverra. Duis convallis condimentum
          enim tincidunt accumsan. Fusce risus nulla, euismod in leo ac,
          sagittis consequat libero. In nec diam justo.{' '}
        </S.Body>
        {linkania.map((contents, i) => (
          <S.List key={i}>
            <S.Image
              src={contents.image}
              alt={contents.alt}
              width={450}
              height={230}
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
