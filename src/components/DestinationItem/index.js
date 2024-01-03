const DestinationItem = props => {
  const {destination, key} = props
  const {name, imgUrl} = destination
  return (
    <li key={key} className="card" style={{margin: '20px'}}>
      <img src={imgUrl} alt={name} className="city-img" />
      <p className="head-name">{name}</p>
    </li>
  )
}

export default DestinationItem
