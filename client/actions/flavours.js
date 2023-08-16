import { getFlavours, addFlavour } from '../apis/flavours'

// Action types
export const FLAVOURS_PENDING = 'FLAVOURS_PENDING'
export const FLAVOURS_REJECTED = 'FLAVOURS_REJECTED'
export const GET_FLAVOURS_FULFILLED = 'GET_FLAVOURS_FULFILLED'
export const ADD_FLAVOUR_FULFILLED = 'ADD_FLAVOUR_FULFILLED'

// Action creators
export const flavoursPending = () => ({
  type: FLAVOURS_PENDING,
})

export const flavoursRejected = (errorMessage) => ({
  type: FLAVOURS_REJECTED,
  payload: errorMessage,
})

export const getFlavoursFulfilled = (flavours) => ({
  type: GET_FLAVOURS_FULFILLED,
  payload: flavours,
})

export const addFlavourFulfilled = (newFlavour) => ({
  type: ADD_FLAVOUR_FULFILLED,
  payload: newFlavour,
})

// Async thunk action creators using async/await
export const fetchFlavours = () => async (dispatch) => {
  dispatch(flavoursPending())
  try {
    const flavours = await getFlavours()
    dispatch(getFlavoursFulfilled(flavours))
  } catch (err) {
    dispatch(flavoursRejected(`Error fetching flavours: ${err.message}`))
  }
}

export const postFlavour = (newFlavour) => async (dispatch) => {
  dispatch(flavoursPending())
  try {
    const flavour = await addFlavour(newFlavour)
    dispatch(addFlavourFulfilled(flavour))
  } catch (err) {
    dispatch(flavoursRejected(`Error adding flavour: ${err.message}`))
  }
}
