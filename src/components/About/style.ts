import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  padding: 8rem;
  margin: var(--medium);
  ${media.lessThan('small')`
    padding: 1rem;
    width: 95%;
    overflow-x: hidden;
  `}
`
export const Container = styled.section`
  align-self: flex-start;
  max-width: 70%;
  background-color: rgba(139, 174, 99, 0.77);
  padding: var(--medium);
  margin: var(--medium);
  ${media.lessThan('small')`
    width: 90%;
    padding: var(--small);
  margin: var(--small);
  `}
`
export const Heading = styled.h1`
  font-size: var(--medium);
  margin-bottom: var(--medium);
  text-align: center;
  font-weight: 600;
  &::selection {
    color: var(--background);
  }
`
export const Body = styled.div`
  margin-bottom: var(--large);
  font-size: 20px;
  line-height: 1.7538461538;
  font-family: 'Cairo', sans-serif;
  font-weight: 400;
  width: 90%;
  p {
    margin-bottom: var(--medium);
    font-size: var(--small);
  }
  &::selection {
    color: var(--background);
    background-color: var(--black);
  }
  ${media.lessThan('small')`
    width: 100%;
  `}
`
export const Image = styled.div`
  padding: var(--small);
`
export const H2 = styled.h2`
  font-weight: bold;
  font-size: var(--small);
  padding: var(--small) 0 var(--small) 0;
  /* &::selection{
    color: var(--white);
    background-color: var(--black);
  } */
`

export const Italic = styled.span`
  font-style: italic;
  font-weight: 700;
  &::selection {
    color: var(--background);
    background-color: var(--black);
  }
`
export const Link = styled.a`
  text-decoration: none;
  font-style: italic;
  cursor: pointer;
  color: var(--black);
  border-bottom: 1px solid var(--black);
  &:hover {
    font-weight: 700;
    border-bottom: 1px solid transparent;
  }
  &::selection {
    background-color: var(--highliht);
    color: var(--black);
  }
`
export const Space = styled.br`
  overflow-wrap: break-word;
`
