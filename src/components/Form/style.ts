import styled from 'styled-components'
import media from 'styled-media-query'

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  padding: 8rem;
  margin: var(--medium);
  ${media.lessThan('medium')`
    width: 100%;
    padding: var(--small);
    margin: 0 auto;
  `}
`
export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin: 3rem;
  padding-top: 2rem;
 
  ${media.lessThan('medium')`
    margin: 0 auto;
    padding-bottom: var(--large);
    iframe{
    width: 125%;
  }
  `}
`
export const Body = styled.div`
  padding-top: 2rem;
  
`
export const Title = styled.h1`
  font-size: var(--medium);
  margin-bottom: var(--medium);
  text-align: center;
  font-weight: 600;
  &::selection {
    color: var(--background);
  }
`

export const Name = styled.h2`
  
`