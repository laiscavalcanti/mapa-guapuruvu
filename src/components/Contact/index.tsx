import FormContact from 'components/FormContact'
import SocialLinks from 'components/SocialLinks'
import * as S from './style'

const Contact = () => {
  return (
    <S.ContactWrapper>
      <S.ContainerSocialLinks>
        <S.Text>Nosso contato</S.Text>
        <S.SocialLinkColumn>
          <SocialLinks colorlink="#ffffff" />
        </S.SocialLinkColumn>
      </S.ContainerSocialLinks>
      <S.ContainerContact>
        <S.Text>Nos mande uma mensagem</S.Text>
        <FormContact />
      </S.ContainerContact>
    </S.ContactWrapper>
  )
}

export default Contact
