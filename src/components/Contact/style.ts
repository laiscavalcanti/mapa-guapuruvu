import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--black);
  padding: var(--medium);
`
export const Title = styled.p`
  text-align: center;
  color: var(--white);
  font-size: var(--medium);
  padding: var(--small);
  &::selection {
    color: var(--white);
  }
`
export const ContactWrapper = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;
  display: flex;
  padding: 5rem;
`
export const Text = styled.p`
  color: var(--black);
  font-size: var(--small);
`
export const TextLink = styled.p`
  color: var(--white);
  font-size: var(--small);
`
export const SocialLinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const ContainerSocialLinks = styled.div`
  display: flex;
  width: 40%;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--black);
  border-radius: 10px;
`
export const ContainerContact = styled.div`
  width: 60%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
`
