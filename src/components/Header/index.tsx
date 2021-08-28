import React, { useState } from 'react'
import * as S from './style'
import NavBar from 'components/NavBar'
import Burger from 'components/Burger'
import ImageWrapper from 'components/ImageWrapper'
import { links } from './content'

type propsMenu = {
  open: boolean
}

const Header = ({ open }: propsMenu) => {
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
