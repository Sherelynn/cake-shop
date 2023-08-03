import { getCakeTypes } from '../apis/cakeTypes'

// Action types
export const CAKETYPES_PENDING = 'CAKETYPES_PENDING'
export const CAKETYPES_REJECTED = 'CAKETYPES_REJECTED'
export const GET_CAKETYPES_FULFILLED = 'GET_CAKETYPES_FULFILLED'

// Action creators
export const cakeTypesPending = () => ({
  type: CAKETYPES_PENDING,
})

export const cakeTypesRejected = () => ({
  type: CAKETYPES_REJECTED,
  payload: errorMessage,
})

export const getCakeTypesFulfilled = (cakeTypes) => ({
  type: GET_CAKETYPES_FULFILLED,
  payload: cakeTypes,
})

// Async thunk action creators using async/await
export const fetchCakeTypes = () => async (dispatch) => {
  dispatch(cakeTypesPending())
  try {
    const cakeTypes = await getCakeTypes()
    dispatch(getCakeTypesFulfilled(cakeTypes))
  } catch (err) {
    dispatch(cakeTypesRejected(`Error fetching cake types: ${err.message}`))
  }
}
