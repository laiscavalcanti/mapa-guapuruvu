import styled from 'styled-components'
import media from 'styled-media-query'
import Link from 'next/link'

export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  position: absolute;
  text-align: right;
  margin: 0rem 0 0 2rem;
  z-index: 2000;
  right: 0;
  background: transparent;
  font-size: var(--small);
  font-weight: bold;
  transition: 0.3s all ease;
  border-radius: 5px;
  ${media.lessThan('medium')`
   display: flex;
   flex-direction: column;
  `}
`
export const ListLink = styled.li`
  display: flex;
  justify-content: space-around;
  margin: 4rem 1.5rem 2rem 1.5rem;

  .active {
    color: var(--sameColorWhite);
    opacity: 0.6;
  }
  ${media.lessThan('large')`
   display: flex;
   flex-direction: column;
  `}
`
export const LinkA = styled.a`
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
