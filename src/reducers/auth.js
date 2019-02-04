import { LOGIN, LOGOUT } from '../actionTypes'

const initialState = {
  password: 'test',
  loginStatus: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      if (action.data === state.password) {
        return {
          ...state,
          loginStatus: true
        }
      } else {
        return {
          ...state,
          loginStatus: false
        }
      }

    case LOGOUT:

    default:
      return state
  }
}
