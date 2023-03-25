import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function Map(props) {
  const { markersList } = props.markers
  
  return (
    <MapContainer className='map-container' center={[-37.916, 145.039]} zoom={13} style={{ height: '500px', width: '500px' }}>
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      {markersList.map((marker) => (
        <Marker key={marker.id} position={marker.position}>
          <Popup>{marker.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
