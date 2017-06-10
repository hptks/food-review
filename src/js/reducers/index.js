import { combineReducers } from 'redux'

import users from './userReducer'
import profile from './profileReducer'

export default combineReducers({
  users,
  profile
})
