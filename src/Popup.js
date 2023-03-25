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

  const handleAdd = () => {
    togglePopup()
    const newMarker = {
      id: Math.floor(Math.random() * 1000),
      name: inputName,
      position: inputPosition
    }
    onAddMarker(newMarker)
    console.log(newMarker)
  }

  return (
    <div>
      <button onClick={togglePopup}>Add new marker</button>
      {isOpen && (
        <div style={{ padding: '10px', border: '1px solid black', height: '200px', width: '300px' }}>
          <h2 style={{ marginTop: '0px' }}>Add a new marker</h2>
          <p style={{ margin: '0px' }}>Marker Name</p>
          <input placeholder='Marker name' value={inputName} onChange={handleInputName} />
          <p style={{ margin: '0px' }}>Position</p>
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
