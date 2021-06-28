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
            <S.Title>organizações:</S.Title>
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
        <SocialLinks
              color={'#222'}
              height={'25px'}
              width={'25px'}
              margin={'.5px'}
            />
       <S.LinksExtrasWrapper>
            <S.Text>@2021 mapadeguapuruvu.art</S.Text>
            <S.Text>
              desenvolvido por{' '}
              <S.Link href="www.github.com/laiscavalcanti">
                @laiscavalcante
              </S.Link>
            </S.Text>
            <S.ListLinksExtras>
              <S.Link href={'termos'}>termos de uso</S.Link>
              <S.Link href={'privacidade'}>política de privacidade</S.Link>
            </S.ListLinksExtras>
          </S.LinksExtrasWrapper>
        </S.ContainerSecond>
      </S.FooterWrapper>
    </>
  )
}

export default Footer
