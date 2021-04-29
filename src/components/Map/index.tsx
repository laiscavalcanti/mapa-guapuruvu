import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

type Place = {
  id: string,
  name: string,
  slug: string,
  location: {
    latitude: number,
    longitude: number
  }

}

export type MapProps = {
  places?: Place[]
}

const Map = ({ places }: MapProps) => (
  <MapContainer center={{ lat: -30.0330600, lng: -51.2300000 }} zoom={10} style={{ height: '90%', width: '100%' }} >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {places?.map(({ id, slug, name, location }) => {
      const { latitude, longitude } = location

      return (
        <Marker key={`place-${id}`}  position={[latitude, longitude]} title={name} />
      )
    })}

  </MapContainer>
)

export default Map