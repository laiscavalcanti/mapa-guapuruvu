import { typeisOpen } from '../NavBar'
import styled from 'styled-components'

const StyledBurger = styled.button`
  top: 15%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
    z-index: 2000;
position: absolute;


  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ isOpen }: { isOpen: boolean }) =>
      isOpen ? '#0D0C1D' : '#EFFFFA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ isOpen }: typeisOpen) =>
        isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ isOpen }: typeisOpen) => (isOpen ? '0' : '1')};
      transform: ${({ isOpen }: typeisOpen) =>
        isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ isOpen }: typeisOpen) =>
        isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const Burger = ({ isOpen, setOpen }: typeisOpen) => {
  return (
    <StyledBurger
      isOpen={isOpen}
      onClick={() => {
        setOpen(!isOpen)
        console.log('fui clicado')
      }}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger
