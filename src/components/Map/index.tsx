import { MapContainer, TileLayer, Marker } from 'react-leaflet'

const Map = () => (
    <MapContainer center={[0, 0]} zoom={13} scrollWheelZoom={false}>
        <TileLayer  attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.title.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Marker position={[0, 0]}>
            
        </Marker>
    </MapContainer>

)

export default Map