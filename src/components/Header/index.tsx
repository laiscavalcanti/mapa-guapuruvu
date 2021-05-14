import React from 'react'
import * as S from './style'
import NavBar from 'components/NavBar'
import Burger from 'components/Burger'
import ImageWrapper from 'components/ImageWrapper'

const Header = () => {
  const [isOpen, setOpen] = React.useState(false) // state para componente fechar e abrir
  return (
    <S.HeaderWrapper>
      <S.LogoWrapper>
      <ImageWrapper
        src="/img/logo.png"
        alt="logo que remete a árvore guapuruvu"
        width={350}
        height={75}
      />
      </S.LogoWrapper>
      <Burger isOpen={isOpen} setOpen={setOpen} />
      <NavBar isOpen={isOpen} setOpen={setOpen} />
    </S.HeaderWrapper>
  )
}
export default Header
