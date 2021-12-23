/* eslint-disable */
import styled from 'styled-components'
import media from 'styled-media-query'

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  padding: 8rem;
  margin: 0 auto;
  ${media.lessThan('medium')`
    width: 100%;
    padding: var(--small);
    margin: 0 auto;
  `}
`
export const Image = styled.div`
  padding: var(--small);
  margin-left: 1.2rem;
`
export const FormWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: rgba(139, 174, 99, 0.37);
  padding: var(--medium);
  margin: var(--medium);
  border-radius: 10px;
  ${media.lessThan('medium')`
    margin: 0 auto;
    padding-bottom: var(--large);
    iframe{
    width: 125%;
  }
  `}
`
export const Body = styled.p`
  font-size: 1.6rem;
  padding: var(--small);
  line-height: 1.6538461538;
  &::selection {
    color: var(--background);
    background-color: var(--black);
  }
  ${media.lessThan('medium')`
    /* screen width is less than 768px (medium) */
    font-size: var(--smallest);
  `}
`

export const Title = styled.h1`
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
  `}
`
export const ItalicBold = styled.span`
  font-weight: 700;
  font-style: italic;
  &::selection {
    color: var(--background);
    background-color: var(--black);
  }
`
export const Link = styled.a`
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  color: var(--black);
  &:hover {
    color: var(--highlight);
  }
  &::selection {
    background-color: var(--highliht);
    color: var(--black);
  }
`
export const Name = styled.h2``
