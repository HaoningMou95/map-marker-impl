import Popup from './Popup'

import { useState, useEffect } from 'react'

export default function Markers(props) {
  const markers = props.markers.markersList
  const onAddMarker = props.onAddMarker
  const [markersList, setMarkersList] = useState(markers)

  useEffect(() => {
    setMarkersList(markers)
  }, [markers])

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
    </div>
  )
}
