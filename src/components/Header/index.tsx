import React from 'react'
import * as S from './style'
import NavBar from 'components/NavBar'
import Burger from 'components/Burger'

const Header = () => {
  const [isOpen, setOpen] = React.useState(false) // state para componente fechar e abrir
  return (
    <S.HeaderWrapper>
      <h1>Mapa de Guapuruvus</h1>
      <Burger isOpen={isOpen} setOpen={setOpen} />
      <NavBar isOpen={isOpen} setOpen={setOpen} />
    </S.HeaderWrapper>
  )
}
export default Header
