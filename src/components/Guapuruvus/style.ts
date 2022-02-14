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
    padding: var(--small) 0 var(--medium) 0;
    margin: 0 auto;
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
    font-size: var(--small);
  `}
`

export const GuapuruvuWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 2fr 2fr 2fr;
  padding: var(--minimal);
  margin: 0 auto;
  ${media.lessThan('large')`
   width: 100%;
   grid-template-columns: 2fr;
  `}
`
export const Container = styled.div`
  display: flex;
  ${media.lessThan('large')`
   width: 100%;
   grid-template-columns: 2fr;
  `}
`
export const ContainerItem = styled.section`
  padding-bottom: var(--large);
`
export const Button = styled.button`
  width: 100px;
  border: 1px solid var(--background);
  border-radius: 3px;
  margin: 0.5rem 0 0.5rem 0;
  padding: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  text-align: center;
  :hover {
    border: 1px solid var(--highlight);
    color: var(--highlight);
    background-color: transparent;
  }
`
export const Image = styled.div`
  :hover {
    opacity: 1;
    -webkit-animation: flash 1.5s;
    animation: flash 1.5s;
  }
`

export const Name = styled.h2`
  padding: var(--small) 0;
  font-size: var(--smallest);
  font-weight: 500;
  :hover {
    opacity: 0.6;
  }
`
