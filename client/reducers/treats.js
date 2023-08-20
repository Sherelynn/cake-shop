import {
  TREATS_PENDING,
  TREATS_REJECTED,
  GET_TREATS_FULFILLED,
  ADD_TREAT_FULFILLED,
  UPDATE_TREAT_FULFILLED,
  DELETE_TREAT_FULFILLED,
} from '../actions/treats'

const initialState = {
  data: [],
  error: null,
  loading: false,
}

const treats = (state = initialState, { type, payload }) => {
  switch (type) {
    case TREATS_PENDING:
      return { ...state, loading: true }
    case TREATS_REJECTED:
      return { ...state, error: payload }
    case GET_TREATS_FULFILLED:
      return { ...state, data: payload }
    case ADD_TREAT_FULFILLED:
      return { ...state, data: [...state.data, payload] }
    case UPDATE_TREAT_FULFILLED:
      return {
        ...state,
        data: state.data.map((treat) => {
          return treat.id === payload.id
            ? { ...treat, treats: payload.treats, price: payload.price }
            : treat
        }),
      }
    case DELETE_TREAT_FULFILLED:
      return {
        ...state,
        data: state.data.filter((treat) => treat.id !== payload),
      }
    default:
      return state
  }
}

export default treats
