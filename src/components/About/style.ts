/* eslint-disable */
import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  padding: 8rem;
  margin: 0 auto;
  ${media.lessThan('medium')`
    padding: var(--small) 0 var(--medium) 0;
    width: 100%;
    overflow-x: hidden;
  `}
`
export const Heading = styled.h1`
  font-size: var(--medium);
  margin-bottom: var(--medium);
  margin-left: var(--small);
  text-align: left;
  font-weight: 600;
  &::selection {
    color: var(--background);
  }
  ${media.lessThan('small')`
    margin-top: var(--medium);
    font-size: var(--small);
  `}
`
export const Container = styled.section`
  width: 100%;
  padding: var(--medium);
  margin: 0 auto;
  border-radius: 10px;
  ${media.lessThan('medium')`
    max-width: 100%;
    align-self: center;
    padding: var(--smallest);
    margin: var(--small);
  `}
`
export const Body = styled.div`
  width: 70%;
  padding: var(--smallest);
  font-size: 16px;
  line-height: 1.7538461538;
  font-weight: 400;
  text-align: justify;
  p {
    margin-bottom: var(--small);
    font-size: var(--smallest);
  }
  &::selection {
    color: var(--background);
    background-color: var(--black);
  }
  ${media.lessThan('small')`
    width: 100%;
    font-size: 14px;
  `}
`
export const Image = styled.div`
  padding: var(--small);
  margin-left: 1.2rem;
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
  font-weight: 700;
  color: var(--black);
  border-bottom: 2px solid var(--highlight);
  &:hover {
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
