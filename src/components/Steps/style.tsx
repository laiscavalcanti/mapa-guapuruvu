import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: var(--white);
  margin-top: 8rem;
  padding: var(--medium);
  ${media.lessThan('medium')`
  margin-top: 2rem;
  `}
`
export const H2 = styled.h2`
  font-size: var(--medium);
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--black);
  margin: 4rem var(--large) 0 var(--small) 0;
  &::selection {
    color: var(--background);
  }
  ${media.lessThan('medium')`
  margin: 2rem var(--large) 0 var(--small) 0;
  font-size: var(--small);
  `}
`
export const StepsWrapper = styled.div`
  width: 80%;
  height: 40rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  background-color: var(--white);
  padding: var(--large);
  ${media.lessThan('medium')`
    /* screen width is less than 768px (medium) */
    flex-direction: column;
    height: auto;
    width: 100%;
    padding: var(--medium);
  `}
`
export const Line = styled.span`
  margin: var(--minimal);
  border-left: solid 1px #222;
  padding-left: var(--small);
`
export const Icon = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Number = styled.p`
  font-size: var(--smallest);
  &::selection {
    color: var(--background);
  }
  ${media.lessThan('medium')`
  font-size: var(--smallest);
  `}
`
export const Title = styled.h2`
  font-size: var(--small);
  padding-top: var(--medium);
  margin-bottom: var(--minimal);
  &::selection {
    color: var(--background);
    font-size: var(--smallest);
  }
  ${media.lessThan('medium')`
  font-size: var(--smallest);
  `}
`
export const Text = styled.p`
  font-size: 1.5rem;
  max-width: 90%;
  &::selection {
    color: var(--background);
  }
  ${media.lessThan('medium')`
  font-size: 1.4rem;
  `}
`
export const LinkA = styled.a`
  width: 8.5rem;
  text-decoration: none;
  font-style: italic;
  font-weight: 600;
  cursor: pointer;
  border-bottom: 1px solid var(--black);
  color: var(--black);
  &:hover {
    color: var(--highlight);
    border-bottom: 1px solid transparent;
  }
  &::selection {
    background-color: var(--highliht);
    color: var(--black);
  }
`
