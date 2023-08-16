import {
  FLAVOURS_PENDING,
  FLAVOURS_REJECTED,
  GET_FLAVOURS_FULFILLED,
  ADD_FLAVOUR_FULFILLED,
} from '../actions/flavours'

const initialState = {
  data: [],
  error: null,
  loading: false,
}

const flavours = (state = initialState, { type, payload }) => {
  switch (type) {
    case FLAVOURS_PENDING:
      return { ...state, loading: true }
    case FLAVOURS_REJECTED:
      return { ...state, error: payload }
    case GET_FLAVOURS_FULFILLED:
      return { ...state, data: payload }
    case ADD_FLAVOUR_FULFILLED:
      return { ...state, data: [...state.data, payload] }
    default:
      return state
  }
}

export default flavours
