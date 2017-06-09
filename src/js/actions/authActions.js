import axios from 'axios'

export const signinRequest = () => ({ type: 'SIGN_IN_REQUEST' })
export const signinSuccess = (username, password, error) => ({ type: 'SIGN_IN_SUCCESS', payload: { username, password, error } })
export const signinFail = () => ({ type: 'SIGN_IN_FAIL' })

export const signupRequest = () => ({ type: 'SIGN_UP_REQUEST' })
export const signupSuccess = (name, email, username, password) => ({ type: 'SIGN_UP_SUCCESS', payload: { name, email, username, password } })
export const signupFail = () => ({ type: 'SIGN_UP_FAIL' })

export const logoutRequest = () => ({ type: 'SIGN_OUT' })

export function signin(username, password) {
  return (dispatch) => {
    dispatch(signinRequest())
    axios({
      method: 'post',
      url: '/signin',
      data: {
        username,
        password
      }
    })
    .then(function(response) {
      dispatch(signinSuccess(response.data.username, response.data.password, response.data.error))
    })
    .catch(function(error) {
      dispatch(signinFail())
    })
  }
}

export function signup(name, email, username, password) {
  return (dispatch) => {
    dispatch(signupRequest())
    axios({
      method: 'post',
      url: '/signup',
      data: {
        name,
        email,
        username,
        password
      }
    })
    .then(function(response) {
      dispatch(signupSuccess(response.data.name, response.data.email, response.data.username, response.data.password))
    })
    .catch(function(error) {
      dispatch(signupFail())
    })
  }
}

export function signout() {
  return (dispatch) => {
    dispatch(logoutRequest())
  }
}
