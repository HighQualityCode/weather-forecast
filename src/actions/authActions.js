import { LOGIN } from '../actionTypes'

export const login = (username, password) => async dispatch => {
  dispatch({ type: LOGIN, data: password })
}
