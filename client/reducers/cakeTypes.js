import {
  CAKETYPES_PENDING,
  CAKETYPES_REJECTED,
  GET_CAKETYPES_FULFILLED,
  ADD_CAKETYPE_FULFILLED,
  UPDATE_CAKETYPE_FULFILLED,
  DELETE_CAKETYPE_FULFILLED,
} from '../actions/cakeTypes'

const initialState = {
  data: [],
  error: null,
  loading: false,
}

const cakeTypes = (state = initialState, { type, payload }) => {
  switch (type) {
    case CAKETYPES_PENDING:
      return { ...state, loading: true }
    case CAKETYPES_REJECTED:
      return { ...state, error: payload }
    case GET_CAKETYPES_FULFILLED:
      return { ...state, data: payload }
    case ADD_CAKETYPE_FULFILLED:
      return { ...state, data: [...state.data, payload] }
    case UPDATE_CAKETYPE_FULFILLED:
      return {
        ...state,
        data: state.data.map((cake) => {
          return cake.id === payload.id
            ? { ...cake, cakeTypes: payload.cakeTypes, price: payload.price }
            : cake
        }),
      }
    case DELETE_CAKETYPE_FULFILLED:
      return {
        ...state,
        data: state.data.filter((cake) => cake.id !== payload)
      }
    default:
      return state
  }
}

export default cakeTypes
