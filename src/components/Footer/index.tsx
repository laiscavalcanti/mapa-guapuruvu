import ImageWrapper from 'components/ImageWrapper'
import { links } from '../NavBar/content'
import * as S from './style'

const Footer = () => {
  return (
    <>
      <S.FooterWrapper>
        <S.Title>organizações:</S.Title>
        <S.ListOrganizations>
            <p>UFRGS</p>
            <p>Aldir Blac</p>
            <p>Prefeitura de Porto Alegre</p>
        </S.ListOrganizations>
        <S.ListLink>
        {links.map((link, i) => (
        <S.ListLink key={i}>
          <a href={link.link}>{link.label}</a>
        </S.ListLink>
      ))}
        </S.ListLink>
      </S.FooterWrapper>
    </>
  )
}

export default Footer
