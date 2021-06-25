import FormContact from 'components/FormContact'
import SocialLinks from 'components/SocialLinks'
import * as S from './style'

const Contact = () => {
  return (
    <S.ContactWrapper>
      <S.ContainerSocialLinks>
        <S.TextLink></S.TextLink>
        <S.SocialLinkColumn>
          <SocialLinks color="#ffffff" height="30px" width="30px" margin="1rem" />
        </S.SocialLinkColumn>
      </S.ContainerSocialLinks>
      <S.ContainerContact>
        <S.Text></S.Text>
        <FormContact />
      </S.ContainerContact>
    </S.ContactWrapper>
  )
}

export default Contact
