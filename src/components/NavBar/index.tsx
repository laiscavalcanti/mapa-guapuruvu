
import * as S from './styles'
import { links } from './content'

export type typeisOpen = {
  isOpen: boolean
}


const NavBar = ({ isOpen}: typeisOpen) => {

  return (
    <S.NavWrapper isOpen={isOpen}>
   
        {links.map((link, i) => (
          <S.ListLink key={i}>
            <S.Link href={link.link}>{link.label}</S.Link>
          </S.ListLink>
        ))}
    </S.NavWrapper>
  )
}

export default NavBar
