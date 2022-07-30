import React from 'react'
import dynamic from 'next/dynamic'

import { MapProps } from 'components/Map'

import Header from 'components/Header'
import SectionInfo from 'components/SectionInfo'
import Footer from 'components/Footer'
import Steps from 'components/Steps'
import Recents from 'components/Recents'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <Header />
      <Map places={places} />
      <SectionInfo />
      <Steps />
      <Recents places={places} />
      <Footer />
    </>
  )
}
