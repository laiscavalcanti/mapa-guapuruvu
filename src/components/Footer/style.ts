import styled from 'styled-components'
import media from 'styled-media-query'

export const FooterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 4rem 2rem 2rem 2rem;
  color: var(--black);
  background-color: var(--white);
  ${media.lessThan('medium')`
    padding: 0.5rem;
  `}
`
export const Title = styled.p`
  font-size: var(--small);
  margin-bottom: var(--smallest);
  font-weight: 600;
  &::selection {
    color: var(--background);
  }
  ${media.lessThan('medium')`
  font-size: var(--smallest);
  `}
`
export const ListItem = styled.p`
  &::selection {
    color: var(--background);
  }
`
export const ContainerFirst = styled.div`
  border-top: 1px solid rgba(34, 34, 34, 0.53);
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding: var(--small);
  margin: 0 auto;
  border-bottom: 1px solid rgba(34, 34, 34, 0.53);
  ${media.lessThan('medium')`
  width: 90%;
  `}
  &::selection {
    color: var(--background);
  }
`
export const ContainerSecond = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: var(--minimal);
  margin: 0 auto;
  ${media.lessThan('medium')`
  width: 90%;
  padding: var(--minimal) 0 var(--minimal) 0;
  `}
`
export const ListOrganizations = styled.li`
  display: flex;
  flex-direction: column;
  font-size: var(--smallest);
  ${media.lessThan('medium')`
    max-width: 70%;
  `}
  &::selection {
    color: var(--background);
  }
`
export const ListSection = styled.section`
  display: flex;
  flex-direction: column;
`
export const ListLink = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: var(--smallest);
  font-weight: 600;
  color: var(--black);
  &:hover {
    color: var(--background);
  }
`
export const ListLinks = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: var(--smallest);
  padding-bottom: 1rem;
  &:hover {
    color: var(--background);
  }
`
export const LinkA = styled.a`
  color: var(--black);
  padding: 0.5rem;
  &:hover {
    color: var(--background);
  }
  &::selection {
    color: var(--background);
  }
`
export const LinksExtrasWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  font-size: var(--smallest);
  ${media.lessThan('medium')`
    max-width: 70%;
    flex-direction: column;
    font-size: 1.3rem;
  `}
`
export const Text = styled.p`
  margin: 0.5rem 0.5rem 0 0.5rem;
  &::selection {
    color: var(--background);
  }
`
export const ListLinksExtras = styled.li`
  padding-top: 0.5rem;
  &:hover {
    color: var(--background);
  }
  &::selection {
    color: var(--background);
  }
`
