/* eslint-disable */
import SocialLinks from 'components/SocialLinks'
import { links } from '../NavBar/content'
import * as S from './style'

const Footer = () => {
  return (
    <>
      <S.FooterWrapper>
        <S.ContainerFirst>
          <S.ListLeft>
            <S.ListOrganizations>
              <S.Title>Colaboradores:</S.Title>
              <S.ListItem>FAC Digital SEDAC-RS</S.ListItem>
              <S.ListItem>Lei Aldir Blac</S.ListItem>
              <S.ListItem>
                Sec. da Cultura da Prefeitura de Porto Alegre
              </S.ListItem>
            </S.ListOrganizations>
            <S.ListOrganizations>
              <S.Title>Apoio:</S.Title>
              <S.ListItem>FAC Digital SEDAC-RS</S.ListItem>
              <S.ListItem>Lei Aldir Blac</S.ListItem>
              <S.ListItem>
                Sec. da Cultura da Prefeitura de Porto Alegre
              </S.ListItem>
            </S.ListOrganizations>
          </S.ListLeft>
          <S.ListLinks>
            {links.map((link, i) => (
              <S.ListLink key={i}>
                <S.LinkA href={link.link}>{link.label}</S.LinkA>
              </S.ListLink>
            ))}
          </S.ListLinks>
        </S.ContainerFirst>
        <S.ContainerSecond>
          <S.LinksExtrasWrapper>
            <S.Text>@2021 mapadeguapuruvu.art</S.Text>
            <S.Text>
              Desenvolvido por
              <S.LinkA href="www.github.com/laiscavalcanti">
                @laiscavalcanti
              </S.LinkA>
            </S.Text>
            <S.ListLinksExtras>
              <S.LinkA href={'/licenca'}>Licença</S.LinkA>
            </S.ListLinksExtras>
          </S.LinksExtrasWrapper>
          <SocialLinks
            color={'#fffff'}
            height={'24px'}
            width={'24px'}
            margin={'.5px'}
          />
        </S.ContainerSecond>
      </S.FooterWrapper>
    </>
  )
}

export default Footer
