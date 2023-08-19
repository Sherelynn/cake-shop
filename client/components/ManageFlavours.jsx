import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchFlavours,
  postFlavour,
  patchFlavour,
  delFlavour,
} from '../actions/flavours'
import firstLetterCapitalised from '../src/capsFirstLetter'

const ManageFlavours = () => {
  const dispatch = useDispatch()
  const flavours = useSelector((state) => state.flavours.data)

  useEffect(() => {
    dispatch(fetchFlavours())
  }, [])

  const [formInput, setFormInput] = useState({
    inputValue: '',
    selectedOption: '',
  })

  const { inputValue, selectedOption } = formInput

  const handleInputChange = (event) => {
    setFormInput({
      ...formInput,
      inputValue: event.target.value,
    })
  }

  const handleSelection = (event) => {
    setFormInput({
      ...formInput,
      selectedOption: event.target.value,
    })
  }

  const handleAction = (actionType) => {
    const { inputValue, selectedOption } = formInput
    const updatedInputValue = firstLetterCapitalised(inputValue)

    if (actionType === 'add') {
      dispatch(postFlavour(updatedInputValue))
    } else if (actionType === 'update' && selectedOption) {
      dispatch(patchFlavour(selectedOption, updatedInputValue))
    } else if (actionType === 'delete' && selectedOption) {
      dispatch(delFlavour(selectedOption))
      dispatch(fetchFlavours())
    }

    setFormInput({
      inputValue: '',
      selectedOption: '',
    })
  }

  return (
    <>
      <thead>
        <tr>
          <th>Flavours</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p>Choose from selections to update or delete a flavour.</p>
            <select
              name={selectedOption}
              value={selectedOption}
              onChange={handleSelection}
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
              placeholder="Enter new flavour"
              value={inputValue}
              onChange={handleInputChange}
            />
          </td>
        </tr>
        <tr>
          <td>
            <button
              className="input-button"
              onClick={() => handleAction('add')}
            >
              Add
            </button>
            <button
              className="input-button"
              onClick={() => handleAction('update')}
            >
              Update
            </button>
            <button
              className="input-button"
              onClick={() => handleAction('delete')}
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </>
  )
}

export default ManageFlavours
