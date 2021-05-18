import React from 'react'
import dynamic from 'next/dynamic'

import { MapProps } from 'components/Map'

import Header from 'components/Header'
import SectionInfo from 'components/SectionInfo'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({places}: MapProps) {
 
  
  return (
    <>
      <Header/>
      <Map places={places} />
      <SectionInfo />
    </>

  )
}