import './App.css'
import { useState, useMemo } from 'react'
import Map from './Map'
import Markers from './Markers'
import Popup from './Popup'

function App() {
  const data = [{ id: 1, position: [-37.905556, 145.049444], name: 'Home' }]
  const [markers, setMarkers] = useState(data)

  // use useMemo to prevent the markersList from being recreated on every render
  const markersList = useMemo(() => markers, [markers])

  const handleAddMarker = (newMarker) => {
    setMarkers([...markers, newMarker])
  }

  return (
    <div className='App'>
      <div className='container'>
        <div className='markers-wrapper'>
          <Markers markersList={markersList} />
          <Popup onAddMarker={handleAddMarker} />
        </div>

        <div className='map-wrapper'>
          <Map markersList={markersList} />
        </div>
      </div>
    </div>
  )
}

export default App
