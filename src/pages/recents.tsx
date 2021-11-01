/* eslint-disable */
import { MapPropsPlace } from 'components/Guapuruvus'
import Client from 'graphql/Client'
import { GET_PLACES } from 'graphql/queries'
import Guapuruvus from 'templates/Guapuruvus'
import { GetPlacesQuery } from 'graphql/generated/graphql'

export default function Home({ places }: MapPropsPlace) {
  return <Guapuruvus places={places} />
}
export const getStaticProps = async () => {
  const { places } = await Client.request<GetPlacesQuery>(GET_PLACES)
  return {
    props: {
      places
    }
  }
}
