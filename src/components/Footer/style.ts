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
  font-size: 2rem;
`
export const ContainerFirst = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  margin: 0 auto;
  border-bottom: 1px solid var(--black);
`
export const ContainerSecond = styled.div`
   width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 0 auto;

`
export const Line = styled.span`
  border-bottom: 1px solid var(--black);
  width: 100%;
`
export const ListOrganizations = styled.li`
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
`
export const ListLinks = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: var(--smallest);
  padding-bottom: 1rem;
  text-transform: lowercase;
`
export const Link = styled.a`
  color: var(--black);
  padding: 0.5rem;
  font-weight: 600;
`
export const LinksExtrasWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const Text = styled.p`
  margin: 0.5rem 0.5rem 0 0.5rem;
`
export const ListLinksExtras = styled.li`
  padding-top: 1.5rem;
`
