import React from 'react'
import { NavContainer } from './style'
import dynamic from 'next/dynamic'

import { MapProps } from 'components/Map'
import NavBar from 'components/NavBar'
import Burger from 'components/Burger'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  const [isOpen, setOpen] = React.useState(false) // state para componente fechar e abrir
  //
  return (
    <>
      <NavContainer>
        <Burger isOpen={isOpen} setOpen={setOpen} />
        <NavBar isOpen={isOpen} setOpen={setOpen} />
      </NavContainer>

      <Map places={places} />
    </>
  )
}
