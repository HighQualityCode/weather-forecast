import { LOGIN, LOGOUT } from '../actionTypes'

export const login = (username, password) => async dispatch => {
  dispatch({ type: LOGIN, data: password })
}

export const logout = () => async dispatch => {}
