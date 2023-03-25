export default function Markers({markersList}) {

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
