import React, { useState } from 'react'
import * as S from './style'
import NavBar from 'components/NavBar'
import Burger from 'components/Burger'
import ImageWrapper from 'components/ImageWrapper'
import { links } from './content'

type propsMenu = {
  open: boolean
}

const Header = ({open}: propsMenu) => {
  const [navbarOpen, setNavbarOpen] = React.useState<boolean>(false)
  return (
   
    <S.SideBarWrapper>
      <S.NavWrapper>
        
        <S.Toggle
          navbarOpen={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? <S.Hamburger open /> : <S.Hamburger open={false} />}
        </S.Toggle>
        {navbarOpen ? (
          <S.NavBox open={false}>
            <a href="#">opa</a>
          </S.NavBox>
        ) : (
          <S.NavBox open>
              <a href="#">opa</a>
          </S.NavBox>
        )}
      </S.NavWrapper>
    </S.SideBarWrapper>

  )
}
export default Header
