import { getTreats, addTreat } from '../apis/treats'

// Action types
export const TREATS_PENDING = 'TREATS_PENDING'
export const TREATS_REJECTED = 'TREATS_REJECTED'
export const GET_TREATS_FULFILLED = 'GET_TREATS_FULFILLED'
export const ADD_TREAT_FULFILLED = 'ADD_TREAT_FULFILLED'

// Action creators
export const treatsPending = () => ({
  type: TREATS_PENDING,
})

export const treatsRejected = () => ({
  type: TREATS_REJECTED,
  payload: errorMessage,
})

export const getTreatsFulfilled = (treats) => ({
  type: GET_TREATS_FULFILLED,
  payload: treats,
})

export const addTreatFulfilled = (newTreatAndPrice) => ({
  type: ADD_TREAT_FULFILLED,
  payload: newTreatAndPrice,
})

// Async thunk action creators using async/await
export const fetchTreats = () => async (dispatch) => {
  dispatch(treatsPending())
  try {
    const treats = await getTreats()
    dispatch(getTreatsFulfilled(treats))
  } catch (err) {
    dispatch(treatsRejected(`Error fetching treats: ${err.message}`))
  }
}

export const postTreat = (newTreat, newPrice) => async (dispatch) => {
  dispatch(treatsPending())
  try {
    const newTreatAndPrice = await addTreat(newTreat, newPrice)
    dispatch(addTreatFulfilled(newTreatAndPrice))
  } catch (err) {
    dispatch(treatsRejected(`Error adding treat: ${err.message}`))
  }
}
