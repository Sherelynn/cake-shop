import {
  FLAVOURS_PENDING,
  FLAVOURS_REJECTED,
  GET_FLAVOURS_FULFILLED,
} from '../actions/flavours'

const initialState = {
  data: null,
  error: null,
  loading: false,
}

const flavoursReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FLAVOURS_PENDING:
      return { ...state, loading: true }
    case FLAVOURS_REJECTED:
      return { ...state, loading: false, error: payload }
    case GET_FLAVOURS_FULFILLED:
      return { ...state, loading: false, data: payload }
    default:
      return state
  }
}

export default flavoursReducer
