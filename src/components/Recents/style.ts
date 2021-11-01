import styled from 'styled-components'
import media from 'styled-media-query'

export const GuapuruvuWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 85%;
  padding: var(--large);
  margin: 0 auto;
  ${media.lessThan('medium')`
    /* screen width is less than 768px (medium) */
    width: 100%;
    flex-direction: column;
    padding: var(--large) var(--small);
  `}
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 30rem;
  margin: 0 auto;
  flex-direction: column;
  padding: var(--small);
  ${media.lessThan('medium')`
    width: 100%;
    padding-top: var(--medium) var(--smallest);
    height: 40rem;
  `}
`
export const Title = styled.h1`
  font-size: var(--medium);
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--black);
  margin: var(--medium) 0 var(--large) 0;
  &::selection {
    font-size: var(--large);
    color: var(--background);
  }
  ${media.lessThan('medium')`
    font-size: var(--small);
    line-height: 30px;
    margin: var(--small) var(--smallest);
  `}
`
export const ContainerItem = styled.ul`
  display: flex;
  flex-direction: column;
  padding-bottom: var(--medium);
  ${media.lessThan('medium')`
    padding-bottom: var(--smallest);
  `}
`
export const Button = styled.button`
 width: 100px;
  border: 2px solid var(--background);
  border-radius: 10px;
  margin: 0.5rem 0 0.5rem 0;
  padding: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  text-align: center;
  :hover{
    border: 2px solid var(--highlight);
    color: var(--highlight);
    background-color: transparent;
  }
 
`
export const SectionLink = styled.section`
  background-color: transparent;
`
export const Image = styled.div`
  border-radius: 20px;
  :hover {
    opacity: 0.5;
    -webkit-animation: flash 1.5s;
    animation: flash 1.5s;
  }
`

export const Name = styled.h2`
  font-size: var(--small);
  font-weight: 700;
  color: var(--black);
  text-align: left;
  margin: var(--smallest) 0 var(--smallest) 0;
  &::selection {
    color: var(--background);
  }
  :hover {
    opacity: 0.9;
  }
`
