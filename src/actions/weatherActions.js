import axios from 'axios'
import moment from 'moment'
import {
  GET_LOCATION_REQUEST,
  GET_LOCATION_SUCCESS,
  GET_LOCATION_FAILED,
  GET_WEATHERS_REQUEST,
  GET_WEATHERS_SUCCESS,
  GET_WEATHERS_FAILED,
  SET_CURRENT_LOCATION
} from '../actionTypes'

export const getLocationByPosition = query => async dispatch => {
  try {
    dispatch({ type: GET_LOCATION_REQUEST })
    const url = 'https://www.metaweather.com/api/location/search/'

    const { data } = await axios({
      method: 'GET',
      params: query,
      url
    })

    const currentLocation = data.reduce((prev, current) => {
      return prev.distance < current.distance ? prev : current
    })

    await dispatch({ type: GET_LOCATION_SUCCESS, data: [currentLocation] })
    await dispatch({ type: SET_CURRENT_LOCATION, data: currentLocation })
    await dispatch(getWeathers(currentLocation.woeid))
  } catch (error) {
    dispatch({
      type: GET_LOCATION_FAILED,
      error
    })
  }
}

export const getLocationByName = name => async dispatch => {
  try {
    dispatch({ type: GET_LOCATION_REQUEST })
    const url = 'https://www.metaweather.com/api/location/search/'
    const query = {
      query: name
    }

    const { data } = await axios({
      method: 'GET',
      params: query,
      url
    })

    await dispatch({ type: GET_LOCATION_SUCCESS, data })
  } catch (error) {
    dispatch({
      type: GET_LOCATION_FAILED,
      error
    })
  }
}

export const getWeathers = woeid => async dispatch => {
  try {
    dispatch({ type: GET_WEATHERS_REQUEST })
    const date = moment(new Date()).format('YYYY/MM/DD')
    const url =
      'https://www.metaweather.com/api/location/' + woeid + '/' + date + '/'

    const { data } = await axios({
      method: 'GET',
      url
    })

    await dispatch({ type: GET_WEATHERS_SUCCESS, data })
  } catch (error) {
    dispatch({
      type: GET_WEATHERS_FAILED,
      error
    })
  }
}
