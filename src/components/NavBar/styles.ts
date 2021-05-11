import styled from 'styled-components'

export const NavWrapper = styled.nav`
  display: flex;
  width: 100%;
  font-size: var(--small);
  font-weight: bold;
  margin: var(--minimal);
`

export const Link = styled.li`
  display: flex;
  width:100%;
  justify-content: space-around;
  margin: 4rem 1.5rem 2rem 1.5rem;
` 

export const Logo = styled.img`
  display: block;
  background-color: #222;
  width: 350px;
  height: 100px;
`
