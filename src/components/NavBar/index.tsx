import * as S from './styles'
import { links } from './content'

const NavBar = () => {
  // props para abrir e fechar o menu

  return (
    <S.NavWrapper>
      {links.map((link, i) => (
        <S.ListLink key={i}>
          <S.Link href={link.link}>{link.label}</S.Link>
        </S.ListLink>
      ))}
    </S.NavWrapper>
  )
}

export default NavBar
