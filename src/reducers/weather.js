import {
  GET_LOCATION_REQUEST,
  GET_LOCATION_SUCCESS,
  GET_LOCATION_FAILED,
  GET_WEATHERS_REQUEST,
  GET_WEATHERS_SUCCESS,
  GET_WEATHERS_FAILED,
  SET_CURRENT_LOCATION
} from '../actionTypes'

const initialState = {
  locations: null,
  loading: false,
  weather: null,
  currentLocation: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOCATION_REQUEST:
      return {
        ...state,
        loading: true
      }

    case GET_LOCATION_SUCCESS:
      return {
        ...state,
        locations: action.data,
        loading: false
      }

    case GET_LOCATION_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    case GET_WEATHERS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case GET_WEATHERS_SUCCESS:
      return {
        ...state,
        loading: false,
        weather: action.data
      }

    case GET_WEATHERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    case SET_CURRENT_LOCATION:
      return {
        ...state,
        loading: false,
        currentLocation: action.data
      }

    default:
      return state
  }
}
