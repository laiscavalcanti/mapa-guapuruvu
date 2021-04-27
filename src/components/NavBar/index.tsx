import * as S from './styles'
import { links } from './content'

const NavBar = () => {
    return (
      <S.Wrapper>
          <S.Logo src="/img/logo.png" alt="Logo - Imagem que descreve a marca Mapa de Guapuruvu" />
          {
          links.map(link =>(
            <li>{link.label}
              <a href={link.link}  ></a>
            </li>
          ))
          }
      </S.Wrapper>
    )

}

export default NavBar