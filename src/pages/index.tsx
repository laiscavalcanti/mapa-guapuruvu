import Main from 'components/Main'
import dynamic from 'next/dynamic'

import { InfoOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {

  return (
    <>
      <Main />
      <LinkWrapper href="/about"  >
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map />
    </>

  )
}
