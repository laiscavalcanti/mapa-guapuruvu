import React from 'react'
import * as S from './style'
import NavBar from 'components/NavBar'
import Burger from 'components/Burger'
import ImageWrapper from 'components/ImageWrapper'
import { links } from './content'

const Header = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false) // state para componente fechar e abrir
  const close = () => setOpen(false)
  return (
    <S.HeaderWrapper>
      <S.LogoWrapper>
        <ImageWrapper src="/logo.png" alt="Logo" width={350} height={75} />
      </S.LogoWrapper>
      <Burger isOpen={isOpen} setOpen={setOpen} />
      <S.NavWrapper isOpen={isOpen}>
        {links.map((link, i) => (
          <S.ListLink key={i}>
            <S.Link onClick={() => close()} href={link.link}>
              {link.label}
            </S.Link>
          </S.ListLink>
        ))}
      </S.NavWrapper>
    </S.HeaderWrapper>
  )
}
export default Header
