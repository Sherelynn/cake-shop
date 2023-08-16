import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFlavours, postFlavour } from '../actions/flavours'

const ManageFlavours = () => {
  const dispatch = useDispatch()
  const flavours = useSelector((state) => state.flavours.data)
  const [newFlavour, setNewFlavour] = useState('')

  useEffect(() => {
    dispatch(fetchFlavours())
  }, [])

  const handleAddNewFlavour = (event) => {
    setNewFlavour(event.target.value)
  }

  const handleSubmitNewFlavour = (event) => {
    event.preventDefault()
    dispatch(postFlavour(newFlavour))
    setNewFlavour('')
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
                <select name="Selections">
                  <option value="">Selections:</option>
                  {flavours.map((flavour) => (
                    <option key={flavour.id} value={flavour.flavours}>
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
                <button className="input-button" type="submit" onClick={handleSubmitNewFlavour}>
                  Add
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
