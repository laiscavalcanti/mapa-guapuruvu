/* eslint-disable */
import * as S from './styles'
import { useRouter } from 'next/router'
import { links } from './content'

const NavBar = () => {
  const router = useRouter()
  return (
    <S.NavWrapper>
      {links.map((link, i) => (
        <S.ListLink key={i}>
          <S.LinkA
            className={router.asPath == link.link ? 'active' : ' '}
            href={link.link}
          >
            {link.label}
          </S.LinkA>
        </S.ListLink>
      ))}
    </S.NavWrapper>
  )
}

export default NavBar
