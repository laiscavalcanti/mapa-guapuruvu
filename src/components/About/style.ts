import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  padding: 8rem;
  margin: var(--medium);
`
export const Container = styled.section`
  align-self: flex-start;
  max-width: 70%;
  background-color: rgba(139, 174, 99, 0.37);
  padding: var(--medium);
  margin: var(--medium);
`
export const Heading = styled.h1`
  font-size: var(--medium);
  margin-bottom: var(--medium);
  text-align: center;
  font-weight: 300;
  &::selection {
    color: var(--background);
  }
`
export const Body = styled.div`
  margin-bottom: var(--large);
  font-size: 20px;
  line-height: 1.7538461538;
  font-family: 'Cairo', sans-serif;
  font-weight: 300;
  width: 90%;
  p {
    margin-bottom: var(--medium);
    font-size: var(--small);
  }
  &::selection {
    color: var(--background);
    background-color: var(--black);
  }
`
export const Image = styled.div`
  padding: var(--small);
`

export const H2 = styled.h2`
  font-weight: bold;
  font-size: var(--small);
  padding: var(--medium) 0 var(--medium) 0;
`

export const Italic = styled.span`
  font-style: italic;
  font-weight: 600;
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
    color: var(--highlight);
    border-bottom: 1px solid transparent;
  }
  &::selection {
    background-color: var(--highliht);
    color: var(--black);
  }
`
