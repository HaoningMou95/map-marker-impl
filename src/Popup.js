import { useState } from 'react'

export default function Popup(props) {
  const { onAddMarker } = props
  const [isOpen, setIsOpen] = useState(false)
  const [inputName, setInputName] = useState('')
  const [inputPosition, setInputPosition] = useState('')

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  const handleInputName = (event) => {
    setInputName(event.target.value)
  }

  const handleInputPosition = (event) => {
    setInputPosition(event.target.value)
  }

  const parsePosition = (position) => {
    const [lat, lng] = position.split(',').map(Number)
    return [lat, lng]
  }

  const handleAdd = () => {
    const newMarker = {
      id: Math.floor(Math.random() * 1000),
      name: inputName,
      position: parsePosition(inputPosition) // Convert the string position to an array of numbers
    }
    onAddMarker(newMarker) // Call the onAddMarker function with the new marker
    togglePopup()
  }

  return (
    <div>
      <button onClick={togglePopup}>Add new marker</button>
      {isOpen && (
        <div style={{ padding: '10px', border: '1px solid black', height: '200px', width: '300px' }}>
          <h2 style={{ marginTop: '0px' }}>Add a new marker</h2>
          <p style={{ margin: '0px' }}>Marker Name</p>
          <input placeholder='Marker name' value={inputName} onChange={handleInputName} />
          <p style={{ margin: '0px' }}>Position (lat,lng)</p>
          <input placeholder='Position' value={inputPosition} onChange={handleInputPosition} />
          <div>
            <button onClick={handleAdd}>Add</button>
            <button onClick={togglePopup}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  )
}
