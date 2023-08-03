import { combineReducers } from 'redux'

import flavours from './flavours'
import cakeTypes from './cakeTypes'
import treats from './treats'

export default combineReducers({
  flavours,
  cakeTypes,
  treats,
})
