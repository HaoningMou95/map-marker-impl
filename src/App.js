import './App.css'
import Map from './Map'
import Markers from './Markers'
import { useState, useMemo } from 'react'

function App() {
  const data = [{ id: 1, position: [-37.905556, 145.049444], name: 'Home' }]
  const [markers, setMarkers] = useState(data)

  const markersList = useMemo(() => markers, [markers])

  const handleAddMarker = (newMarker) => {
    setMarkers([...markers, newMarker])
  }

  return (
    <div className='App'>
      <div className='markers-wrapper'>
        <Markers prop={{ markersList }} onAddMarker={handleAddMarker} />
      </div>

      <div className='map-wrapper'>
        <Map prop={{ markersList }} />
      </div>
    </div>
  )
}

export default App
