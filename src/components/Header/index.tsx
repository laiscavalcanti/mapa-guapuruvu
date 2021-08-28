import React from 'react'
import * as S from './style'
import NavBar from 'components/NavBar'

const Header = () => {
  const [navbarOpen, setNavbarOpen] = React.useState<boolean>(false)
  return (
    <S.SideBarWrapper>
      <S.NavWrapper>
        <p>aqui vai ficar a logo</p>
        <S.Toggle
          navbarOpen={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? <S.Hamburger open /> : <S.Hamburger open={false} />}
        </S.Toggle>
        {navbarOpen ? (
          <S.NavBox open={false}>
            <NavBar />
          </S.NavBox>
        ) : (
          <S.NavBox open>
            <NavBar />
          </S.NavBox>
        )}
      </S.NavWrapper>
    </S.SideBarWrapper>
  )
}
export default Header
