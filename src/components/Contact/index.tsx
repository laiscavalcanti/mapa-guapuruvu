import FormContact from 'components/FormContact'
import SocialLinks from 'components/SocialLinks'
import * as S from './style'

const Contact = () => {
  return (
    <S.Container>
      <S.Title>Fale com a gente</S.Title>
      <S.ContactWrapper>
        <S.ContainerSocialLinks>
          <S.SocialLinkColumn>
            <SocialLinks
              color="#ffffff"
              height="30px"
              width="30px"
              margin="1rem"
            />
          </S.SocialLinkColumn>
        </S.ContainerSocialLinks>
        <S.ContainerContact>
          <FormContact />
        </S.ContainerContact>
      </S.ContactWrapper>
    </S.Container>
  )
}

export default Contact
