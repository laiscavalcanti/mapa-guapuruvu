/* eslint-disable */
import { useRouter } from 'next/router'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'
import * as S from './styles'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
  gallery: ImageProps[]
}

export type MapProps = {
  places?: Place[]
}

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID
const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID

const CustomTileLayer = () => {
  return (
    <TileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
    />
  )
}

const markerIcon = L.icon({
  iconUrl: 'img/desenho_semente_0056.png',
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  popupAnchor: [0, -40]
})

const Map = ({ places }: MapProps) => {
  const router = useRouter()

  return (
    <>
        <MapContainer
          center={{ lat: -30.03306, lng: -51.23 }}
          zoom={11}
          minZoom={10}
          worldCopyJump={true}
          className={'responsive'}
        >
          <CustomTileLayer />

          {places?.map(({ id, slug, name, location }) => {
            const { latitude, longitude } = location

            return (
              <Marker
                key={`place-${id}`}
                position={[latitude, longitude]}
                title={name}
                icon={markerIcon}
                eventHandlers={{
                  click: () => {
                    router.push(`place/${slug}`)
                  }
                }}
              />
            )
          })}
        </MapContainer>
     
    </>
  )
}

export default Map
