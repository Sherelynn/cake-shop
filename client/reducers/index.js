import { combineReducers } from 'redux'

import flavours from './flavours'
import cakeTypes from './cakeTypes'

export default combineReducers({
  flavours,
  cakeTypes,
})
