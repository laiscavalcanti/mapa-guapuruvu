import React from 'react'

import dynamic from 'next/dynamic'

import { InfoOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'
import NavBar from 'components/NavBar'
import Burger from 'components/Burger'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({places}: MapProps) {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <Burger isOpen={isOpen} setOpen={setOpen}  />
      <NavBar isOpen={isOpen} setOpen={setOpen} />
      <LinkWrapper href="/about"  >
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>

  )
}