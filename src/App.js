import logo from './logo.svg'
import './App.css'
import Map from './Map'
import Markers from './Markers'
import Popup from './Popup'



function App() {
  const markers = [
    { id: 1, position: [-37.916, 145.019], name: 'Marker 1' },
    { id: 2, position: [-37.916, 145.029], name: 'Marker 2' },
    { id: 3, position: [-37.916, 145.039], name: 'Marker 3' }
  ]



  return (
    <div className='App'>
      <div className='markers-wrapper'>
        <Markers prop={{markers}}/>
      </div>

      <div className='map-wrapper'>
        <Map prop={{markers}}/>
      </div>
    </div>
  )
}

export default App
