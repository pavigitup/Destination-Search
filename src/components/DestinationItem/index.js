const DestinationItem = props => {
  const {destination} = props
  const {id, name, imgUrl} = destination
  return (
    <li key={id} className="card" style={{margin: '20px'}}>
      <img src={imgUrl} alt={name} className="city-img" />
      <p className="head-name">{name}</p>
    </li>
  )
}

export default DestinationItem
