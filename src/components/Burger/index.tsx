import { typeisOpen } from '../NavBar'
import styled from 'styled-components'

const Radius = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: flex-end;
  z-index: 2001;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  top: 15%;
  right: 2rem;
  margin: 2rem 2rem 0 1rem;
  background-color: #e4d901;
 
`
const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  top: 15%;
  left: 1rem;
  margin: 1.5rem 1.5rem 0 0;
  z-index: 2000;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ isOpen }: { isOpen: boolean }) =>
      isOpen ? '#0D0C1D' : '#005000'};
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
    <>
      <Radius>
        <StyledBurger
          isOpen={isOpen}
          onClick={() => {
            setOpen(!isOpen)
          }}
        >
          <span />
          <span />
          <span />
        </StyledBurger>
      </Radius>
    </>
  )
}

export default Burger
