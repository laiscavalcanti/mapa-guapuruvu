import * as S from './styles'
import { links } from './content'

const NavBar = () => {
  return (
    <S.NavWrapper>
      <S.Logo
        src="/img/logo.png"
        alt="Logo - Imagem que descreve a marca Mapa de Guapuruvu"
      />
      {links.map((link, i) => (
        <S.Link key={i}>
          <a href={link.link}>{link.label}</a>
        </S.Link>
      ))}
    </S.NavWrapper>
  )
}

export default NavBar
