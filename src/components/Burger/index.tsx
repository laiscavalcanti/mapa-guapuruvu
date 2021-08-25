//import { typeisOpen } from '../NavBar'
import styled from 'styled-components'
import media from 'styled-media-query'

const Radius = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: flex-end;
  z-index: 2001;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  right: 2rem;
  margin: 2rem 2rem 0 1rem;
  background-color: var(--white);
  ${media.lessThan('medium')`
    /* screen width is less than 768px (medium) */
    margin-top: -0.5rem;
  `}
`
const StyledBurger = styled.button<{ isOpen: boolean }>`
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
      isOpen ? '#222' : '#222'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      transform: ${({ isOpen }) =>
        isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`

type Props = {
  isOpen: boolean
  setOpen: (v: boolean) => void
}

const Burger = (props: Props) => {
  return (
    <>
      <Radius>
        <StyledBurger
          isOpen={props.isOpen}
          onClick={() => props.setOpen(!props.isOpen)}
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
