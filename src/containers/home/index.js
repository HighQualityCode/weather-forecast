import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  getLocationByPosition,
  getLocationByName,
  getWeathers
} from '../../actions/weatherActions'

import CurrentLocation from '../../presentationals/currentLocation'
import Search from '../../presentationals/search'
import SearchedLocations from '../../presentationals/searchedLocations'
import Loading from '../../presentationals/loading'
import NoResult from '../../presentationals/noResult'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      position: null,
      searchStr: ''
    }
  }

  getUserPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    })
  }

  handleChange = e => {
    this.setState({ searchStr: e.target.value })
  }

  handleSearch = () => {
    const { getLocationByName } = this.props
    getLocationByName(this.state.searchStr)
  }

  async componentDidMount() {
    let { position } = this.state
    const { getLocationByPosition } = this.props
    if (!position) {
      position = await this.getUserPosition()
      this.setState({ position })
    }

    if (position) {
      const query = {
        lattlong: position.coords.latitude + ',' + position.coords.longitude
      }
      await getLocationByPosition(query)
    }
  }

  render() {
    const {
      locations,
      currentLocation,
      weather,
      getLocationByPosition,
      loading
    } = this.props

    if (currentLocation && weather && !loading) {
      return (
        <div>
          <Search onChange={this.handleChange} onSearch={this.handleSearch} />
          {locations.length ? (
            <div>
              <SearchedLocations
                locations={locations}
                getLocationByPosition={getLocationByPosition}
              />
              <CurrentLocation
                currentLocation={currentLocation}
                weather={weather}
              />
            </div>
          ) : (
            <NoResult />
          )}
        </div>
      )
    } else return <Loading />
  }
}

const mapStateToProps = state => ({
  locations: state.weather.locations,
  currentLocation: state.weather.currentLocation,
  weather: state.weather.weather,
  loading: state.weather.loading
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { getLocationByPosition, getLocationByName, getWeathers },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
