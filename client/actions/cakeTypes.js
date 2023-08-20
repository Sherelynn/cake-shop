import {
  getCakeTypes,
  addCakeType,
  updateCakeType,
  deleteCakeType,
} from '../apis/cakeTypes'

// Action types
export const CAKETYPES_PENDING = 'CAKETYPES_PENDING'
export const CAKETYPES_REJECTED = 'CAKETYPES_REJECTED'
export const GET_CAKETYPES_FULFILLED = 'GET_CAKETYPES_FULFILLED'
export const ADD_CAKETYPE_FULFILLED = 'ADD_CAKETYPE_FULFILLED'
export const UPDATE_CAKETYPE_FULFILLED = 'UPDATE_CAKETYPE_FULFILLED'
export const DELETE_CAKETYPE_FULFILLED = 'DELETE_CAKETYPE_FULFILLED'

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

export const addCakeTypeFulfilled = (newCakeAndPrice) => ({
  type: ADD_CAKETYPE_FULFILLED,
  payload: newCakeAndPrice,
})

export const updateCakeTypeFulfilled = (updatedCakeAndPrice) => ({
  type: UPDATE_CAKETYPE_FULFILLED,
  payload: updatedCakeAndPrice,
})

export const deleteCakeTypeFulfilled = (cakeIdToDelete) => ({
  type: DELETE_CAKETYPE_FULFILLED,
  payload: cakeIdToDelete,
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

export const postCakeType = (newCake, newPrice) => async (dispatch) => {
  dispatch(cakeTypesPending())
  try {
    const newCakeAndPrice = await addCakeType(newCake, newPrice)
    dispatch(addCakeTypeFulfilled(newCakeAndPrice))
  } catch (err) {
    dispatch(cakeTypesRejected(`Error adding cake: ${err.message}`))
  }
}

export const patchCakeType =
  (cakeId, updatedCake, updatedPrice) => async (dispatch) => {
    dispatch(cakeTypesPending())
    try {
      const updatedCakeAndPrice = await updateCakeType(
        cakeId,
        updatedCake,
        updatedPrice,
      )
      dispatch(updateCakeTypeFulfilled(updatedCakeAndPrice))
    } catch (err) {
      dispatch(cakeTypesRejected(`Error updating cake: ${err.message}`))
    }
  }

export const delCakeType = (cakeId) => async (dispatch) => {
  dispatch(cakeTypesPending())
  try {
    const cakeIdToDelete = await deleteCakeType(cakeId)
    dispatch(deleteCakeTypeFulfilled(cakeIdToDelete))
  } catch (err) {
    dispatch(cakeTypesRejected(`Error deleting cake: ${err.message}`))
  }
}
