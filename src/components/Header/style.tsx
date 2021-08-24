import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  height: 11rem;
  padding: 1rem;
  background-color: var(--background);
  color: #e4d901;
`
export const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const NavWrapper = styled.nav<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  text-align: right;
  padding: var(--medium);
  margin: 0rem 0 0 2rem;
  z-index: 2000;
  top: 0;
  right: 0;
  background: var(--white);
  font-size: var(--small);
  font-weight: bold;
  transition: 0.3s all ease;
  border-radius: 5px;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  box-shadow: -7px -6px 15px 2px rgba(0, 0, 0, 0.18);
`
export const ListLink = styled.li`
  display: flex;
  justify-content: space-around;
  margin: 4rem 1.5rem 2rem 1.5rem;
`
export const Link = styled.a`
  position: relative;
  color: var(--black);
  &::after {
    position: absolute;
    content: '';
    top: 100%;
    left: 0;
    width: 100%;
    height: 3px;
    background: var(--highlight);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s;
  }

  &:hover {
    color: var(--black);
    opacity: 0.9;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`
export const Logo = styled.img`
  display: block;
  background-color: #222;
  width: 350px;
  height: 100px;
`
