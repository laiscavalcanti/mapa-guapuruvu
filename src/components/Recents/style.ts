import styled from 'styled-components'
import media from 'styled-media-query'

export const Title = styled.h1`
  font-size: var(--medium);
  text-align: center;
  font-weight: 600;
  background-color: var(--black);
  color: var(--white);
  padding: var(--medium);
  &::selection {
    color: var(--background);
  }
`
export const GuapuruvuWrapper = styled.div`
  display: flex;
  padding: var(--minimal);
  width: 100%;
  padding: var(--large);
  margin: 0 auto;
  background-color: var(--black);
`
export const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: var(--small);
  background-color: var(--black);
`
export const ContainerItem = styled.ul`
  display: flex;

  padding: var(--small);
`

export const Button = styled.button`
  border: none;
  cursor: pointer;
`
export const Image = styled.div`
  border-top-left-radius: 5px;
  :hover {
    opacity: 1;
    -webkit-animation: flash 1.5s;
    animation: flash 1.5s;
  }
  @-webkit-keyframes flash {
    0% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes flash {
    0% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`

export const Name = styled.h2`
  padding: var(--small);
  font-size: var(--smallest);
  font-weight: 500;
  color: var(--black);
  text-align: left;
  :hover {
    opacity: 0.6;
  }
`
