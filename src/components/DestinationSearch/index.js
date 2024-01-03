import DestinationItem from '../DestinationItem/index'
import './index.css'

const DestinationSearch = props => {
  const {searchInput, deleteUser, destinationsList, onChangeSearchInput} = props

  const searchResult = destinationsList.filter(each => {
    const names = each.name.toLowerCase()
    return names.includes(searchInput)
  })

  return (
    <div className="card">
      <h1 className="head">Destination Search</h1>
      <div className="input-box">
        <input
          type="search"
          onChange={onChangeSearchInput}
          placeholder="Search"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
          className="img-size"
        />
      </div>
      <ul className="img-bg">
        {searchResult.map(destination => (
          <DestinationItem
            destination={destination}
            deleteUser={deleteUser}
            key={destination.id}
          />
        ))}
      </ul>
    </div>
  )
}

export default DestinationSearch
