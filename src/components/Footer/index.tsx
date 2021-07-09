import LinkWrapper from 'components/LinkWrapper'
import SocialLinks from 'components/SocialLinks'
import { links } from '../NavBar/content'
import * as S from './style'

const Footer = () => {
  return (
    <>
      <S.FooterWrapper>
        <S.ContainerFirst>
          <S.ListOrganizations>
            <S.Title>Colaboradores:</S.Title>
            <p>UFRGS</p>
            <p>Aldir Blac</p>
            <p>Prefeitura de Porto Alegre</p>
          </S.ListOrganizations>

          <S.ListLinks>
            {links.map((link, i) => (
              <S.ListLink key={i}>
                <S.Link href={link.link}>{link.label}</S.Link>
              </S.ListLink>
            ))}
          </S.ListLinks>
        </S.ContainerFirst>
        <S.ContainerSecond>
          <S.LinksExtrasWrapper>
            <S.Text>@2021 mapadeguapuruvu.art</S.Text>
            <S.Text>
              Desenvolvido por
              <S.Link href="www.github.com/laiscavalcanti">
                @laiscavalcanti
              </S.Link>
            </S.Text>
            <S.ListLinksExtras>
              <S.Link href={'termos'}>Termos de uso</S.Link>
              <S.Link href={'privacidade'}>Política de privacidade</S.Link>
            </S.ListLinksExtras>
          </S.LinksExtrasWrapper>
          <SocialLinks
            color={'#222'}
            height={'25px'}
            width={'25px'}
            margin={'.5px'}
          />
        </S.ContainerSecond>
      </S.FooterWrapper>
    </>
  )
}

export default Footer
