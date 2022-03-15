import React from 'react'
import * as S from './style'
import NavBar from 'components/NavBar'
import ImageWrapper from 'components/ImageWrapper'
import Link from 'next/link'

const Header = () => {
  const [navbarOpen, setNavbarOpen] = React.useState<boolean>(false)
  return (
    <>
      <S.SideBarWrapper>
        <S.NavWrapper>
          <S.LinkA href="/">
            <ImageWrapper
              src="/img/arvoresurbanasletteringPNGtransparente.png"
              alt={'logo'}
              width={400}
              height={130}
            />
          </S.LinkA>
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
    </>
  )
}
export default Header
