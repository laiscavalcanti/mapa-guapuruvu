import styled from 'styled-components'

export const FooterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 4rem 2rem 2rem 2rem;
  color: var(--black);
  background-color: var(--white);
`
export const Title = styled.p`
  font-size: var(--small);
  margin-bottom: var(--smallest);
  font-weight: 600;
`
export const ContainerFirst = styled.div`
  border-top: 1px solid rgba(34, 34, 34, 0.53);
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding: var(--small);
  margin: 0 auto;
  border-bottom: 1px solid rgba(34, 34, 34, 0.53);
`
export const ContainerSecond = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 0 auto;
`
export const ListOrganizations = styled.li`
  display: flex;
  flex-direction: column;
  font-size: var(--smallest);
`
export const ListSection = styled.section`
  display: flex;
  flex-direction: column;
`
export const ListLink = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: var(--smallest);
  font-weight: 700;
`
export const ListLinks = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: var(--smallest);
  padding-bottom: 1rem;
`
export const Link = styled.a`
  color: var(--black);
  padding: 0.5rem;
  font-weight: 600;
  &:hover {
    color: var(--background);
  }
`
export const LinksExtrasWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: var(--smallest);
`
export const Text = styled.p`
  margin: 0.5rem 0.5rem 0 0.5rem;
`
export const ListLinksExtras = styled.li`
  padding-top: .5rem;
  &:hover {
    color: var(--background);
  }
`
