import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFlavours, postFlavour, patchFlavour } from '../actions/flavours'

const ManageFlavours = () => {
  const dispatch = useDispatch()
  const flavours = useSelector((state) => state.flavours.data)
  const [newFlavour, setNewFlavour] = useState('')
  const [flavourId, setFlavourId] = useState('')
  const [updatedFlavour, setUpdatedFlavour] = useState('')

  useEffect(() => {
    dispatch(fetchFlavours())
  }, [])

  // Adding a new flavour

  const handleAddNewFlavour = (event) => {
    setNewFlavour(event.target.value)
  }

  const handleSubmitNewFlavour = (event) => {
    event.preventDefault()
    dispatch(postFlavour(newFlavour))
    setNewFlavour('')
  }

  // Updating a flavour

  const handleFlavourSelection = (event) => {
    setFlavourId(event.target.value)
  }

  const handleUpdatedFlavour = (event) => {
    setUpdatedFlavour(event.target.value)
  }

  const handleSubmitUpdatedFlavour = (event) => {
    event.preventDefault()
    dispatch(patchFlavour(flavourId, updatedFlavour))
    setUpdatedFlavour('')
    setFlavourId('')
  }

  return (
    <div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Flavours</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <select
                  name="Selections"
                  value={flavourId}
                  onChange={handleFlavourSelection}
                >
                  <option value="">Selections:</option>
                  {flavours.map((flavour) => (
                    <option key={flavour.id} value={flavour.id}>
                      {flavour.flavours}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Add a new flavour:"
                  value={newFlavour}
                  onChange={handleAddNewFlavour}
                />
                <button
                  className="input-button"
                  type="submit"
                  onClick={handleSubmitNewFlavour}
                >
                  Add
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Update a flavour:"
                  value={updatedFlavour}
                  onChange={handleUpdatedFlavour}
                />
                <button
                  className="input-button"
                  type="submit"
                  onClick={handleSubmitUpdatedFlavour}
                >
                  Update
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageFlavours
