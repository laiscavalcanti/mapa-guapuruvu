import L from 'leaflet'

const markerIcon = new L.Icon({
    iconUrl: 'img/desenho_semente_0056.png',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -40]
  })
  
  export { markerIcon }