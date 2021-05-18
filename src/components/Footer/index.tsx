import ImageWrapper from 'components/ImageWrapper'
import SocialLinks from 'components/SocialLinks'
import { links } from '../NavBar/content'
import * as S from './style'

const Footer = () => {
  return (
    <>
      <S.FooterWrapper>
        <S.ListOrganizations>
        <S.Title>organizações:</S.Title>
            <p>UFRGS</p>
            <p>Aldir Blac</p>
            <p>Prefeitura de Porto Alegre</p>
        </S.ListOrganizations>
        <S.ListOrganizations>
        <S.ListLinks>
        {links.map((link, i) => (
        <S.ListLink key={i}>
          <S.Link href={link.link}>{link.label}</S.Link>
        </S.ListLink>
      ))}
        </S.ListLinks>
        <SocialLinks />
        </S.ListOrganizations>
      </S.FooterWrapper>
    </>
  )
}

export default Footer
