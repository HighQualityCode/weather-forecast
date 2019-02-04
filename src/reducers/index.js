import { combineReducers } from 'redux'
import authReducer from './auth'
import weatherReducer from './weather'

export default combineReducers({
  auth: authReducer,
  weather: weatherReducer
})
