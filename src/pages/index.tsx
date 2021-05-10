import { MapProps } from "components/Map";
import Client from "graphql/Client";
import { GET_PLACES } from "graphql/queries";
import HomeTemplate from "templates/Home";
import {GetPlacesQuery} from 'graphql/generated/graphql'

export default function Home({places}: MapProps){
  return <HomeTemplate places={places}/>
}
export const getStaticProps = async () => {
  const {places} =  await Client.request<GetPlacesQuery>(GET_PLACES)
  return{
    props:
     {
       places
     }
  }
}