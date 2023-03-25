import Popup from './Popup'
import { useState } from 'react'

export default function Markers(props) {
  const { markers } = props.prop
  const [markersList, setMarkersList] = useState(markers)

  const handleAddMarker = (newMarker) => {
    setMarkersList([...markersList, newMarker])
  }

  const showMarkers = () => {
    console.log(markersList)
  }

  return (
    <div>
      <div>
        <h2>Markers:</h2>
        <ul>
          {markersList.map((marker) => (
            <li key={marker.id}>{marker.name}</li>
          ))}
        </ul>
      </div>
      <Popup onAddMarker={handleAddMarker}/>
      <button onClick={showMarkers}>test</button>
    </div>
  )
}
