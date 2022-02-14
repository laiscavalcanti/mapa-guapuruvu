import styled from 'styled-components'
import media from 'styled-media-query'
import img from '../public/img/unnamed.png'

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: var(--background);
  color: #e4d901;
  ${media.lessThan('medium')`
    /* screen width is less than 768px (medium) */
    height: 6rem;
  `}
`
export const BackgroundHeader = styled.div`
  height: 4rem;
  width: 100%;
`
export const LinkA = styled.a`
  margin-top: var(--medium);
`
export const SideBarWrapper = styled.ul`
  display: flex;
  align-items: center;
  align-content: center;
  height: 16rem;
  z-index: 2;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  background-color: var(--white);
  padding: 0 4rem 0 4rem;
  ${media.lessThan('large')`
   height: 10rem;
   margin-left: var(--smallest);
   padding: 0;
   top: 0;
   right: 0;
   left: 0;
  `}
`
export const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`
export const Toggle = styled.div<{ navbarOpen: boolean }>`
  height: 100%;
  cursor: pointer;
  padding: 0 8vw;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-end;
  }
`
export const NavBox = styled.div<{ open: boolean }>`
  display: flex;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 50%;
    justify-content: flex-start;
    background-color: var(--white);
    transition: all 0.3s ease-in;
    top: 9.5vh;
    padding-top: 2vh;
    right: ${(props) => (props.open ? '-100%' : '0')};
  }
`
export const Hamburger = styled.div<{ open: boolean }>`
  background-color: var(--black);
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  border-radius: 2px;
  margin-left: 3rem;
  transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'inherit')};
  ::before,
  ::after {
    width: 30px;
    height: 3px;
    border-radius: 2px;
    background-color: var(--black);
    content: '';
    position: absolute;
    transition: all 0.3s linear;
  }
  ::before {
    transform: ${(props) =>
      props.open ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)'};
    top: -10px;
  }
  ::after {
    opacity: ${(props) => (props.open ? '0' : '1')};
    transform: ${(props) => (props.open ? 'rotate(90deg) ' : 'rotate(0deg)')};
    top: 10px;
  }
`
export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 2500;
  top: 0;
  right: 0;
  transition: 0.3s all ease;
`

{
  /*export const NavWrapper = styled.nav<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  text-align: right;'
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
  overflow-x: hidden;
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
` */
}
