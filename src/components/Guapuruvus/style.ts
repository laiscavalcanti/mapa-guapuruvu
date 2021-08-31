import styled from 'styled-components'
import media from 'styled-media-query'

export const Title = styled.h1`
  font-size: var(--medium);
  margin-bottom: var(--medium);
  text-align: center;
  font-weight: 600;
  &::selection {
    color: var(--background);
  }
`
export const GuapuruvuWrapper = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: 2fr 2fr 2fr;
  padding: var(--large);
  margin: 0 auto;
`
export const Container = styled.div`
  display: flex;
`

export const ContainerItem = styled.section``

export const Button = styled.button`
  border: none;
  cursor: pointer;
`
export const Image = styled.div`
  :hover{
    opacity: 1;
	-webkit-animation: flash 1.5s;
	animation: flash 1.5s;
}
@-webkit-keyframes flash {
	0% {
		opacity: .4;
	}
	100% {
		opacity: 1;
	}
}
@keyframes flash {
	0% {
		opacity: .4;
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
  :hover{
    opacity: 0.6;
  }
`