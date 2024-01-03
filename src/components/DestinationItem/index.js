const DestinationItem = props => {
  const {destination} = props
  return (
    <div key={destination.id} className="card" style={{margin: '20px'}}>
      <img src={destination.imgUrl} alt="img" className="city-img" />
      <h1 className="head-name">{destination.name}</h1>
    </div>
  )
}

export default DestinationItem
