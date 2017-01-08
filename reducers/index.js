import { combineReducers } from "redux"

import users from './usersReducer'
import tweets from './tweetsReducer'

export default combineReducers({
  tweets,
  user,
})
