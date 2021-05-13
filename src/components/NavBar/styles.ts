import styled from 'styled-components'
import {typeisOpen} from './index'


export const NavWrapper = styled.nav`
  display: flex;
  flex-direction:column;
  position: absolute;
  text-align: right;
  padding: var(--small);
  z-index: 2000;
  top: 0;
  right: 0;
  margin: 2rem 0rem 0 3rem;
  background: var(--white);
  font-size: var(--small);
  font-weight: bold;
  transition: 0.3s all ease;
  border-radius: 5px;
  transform: ${({ isOpen }: typeisOpen) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
`
export const ListLink = styled.li`
  display: flex;
  justify-content: space-around;
  margin: 4rem 1.5rem 2rem 1.5rem;
`

export const Link = styled.a`
position: relative;

  &::after {
    position: absolute;
    content: '';
    top: 100%;
    left: 0;
    width: 100%;
    height: 3px;
    background: #005000;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s;
  }

  &:hover {
    color: #228b22
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
