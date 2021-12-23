/* eslint-disable */
import styled from 'styled-components'
import media from 'styled-media-query'

export const FooterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: var(--small);
  color: var(--white);
  background-color: var(--black);
  ${media.lessThan('medium')`
    padding: 0.5rem;
  `}
`
export const ContainerFirst = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding: 0 var(--small);
  margin: 0 auto;
  ${media.lessThan('medium')`
  flex-direction: column;
  width: 90%;
  `}
  &::selection {
    color: var(--background);
  }
`
export const Title = styled.p`
  font-size: 2.2rem;
  margin: var(--small) 0 var(--minimal) 0;
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
export const ContainerSecond = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--small) var(--minimal) var(--minimal) var(--minimal);
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
  margin-top: var(--minimal);
  ${media.lessThan('medium')`
    max-width: 70%;
  `}
  &::selection {
    color: var(--background);
  }
`
export const ListLeft = styled.div`
  display: flex;
  flex-direction: column;
`
export const ListSection = styled.section`
  display: flex;
  flex-direction: column;
`
export const ListLink = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: var(--minimal);
  font-size: 1.7rem;
  font-weight: 600;
  color: var(--white);
  &:hover {
    color: var(--background);
  }
`
export const ListLinks = styled.li`
  display: flex;
  flex-direction: column;
  font-size: var(--smallest);
  padding: var(--small) 0 0 0;
  &:hover {
    color: var(--background);
  }
`
export const LinkA = styled.a`
  color: var(--white);
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
