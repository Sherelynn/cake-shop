import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchCakeTypes,
  postCakeType,
  patchCakeType,
} from '../actions/cakeTypes'
import firstLetterCapitalised from '../src/capsFirstLetter'

const ManageCakeTypes = () => {
  const dispatch = useDispatch()
  const cakeTypes = useSelector((state) => state.cakeTypes.data)

  useEffect(() => {
    dispatch(fetchCakeTypes())
  }, [])

  const [formInput, setFormInput] = useState({
    itemInputValue: '',
    priceInputValue: '',
    selectedOption: '',
  })

  const { itemInputValue, priceInputValue, selectedOption } = formInput

  const handleInputChange = (event, input) => {
    const { value } = event.target

    setFormInput({
      ...formInput,
      [input]: value,
    })
  }

  const handleSelection = (event) => {
    setFormInput({
      ...formInput,
      selectedOption: event.target.value,
    })
  }

  const handleAction = (actionType) => {
    const { itemInputValue, priceInputValue, selectedOption } = formInput
    const updatedInputValue = firstLetterCapitalised(itemInputValue)

    if (actionType === 'add') {
      dispatch(postCakeType(updatedInputValue, priceInputValue))
    } else if (actionType === 'update') {
      dispatch(
        patchCakeType(selectedOption, updatedInputValue, priceInputValue),
      )
    }

    setFormInput({
      itemInputValue: '',
      priceInputValue: '',
      selectedOption: '',
    })
  }

  return (
    <>
      <thead>
        <tr>
          <th>Types of Cake</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p>Choose from selections to update or delete a cake.</p>
            <select
              name={selectedOption}
              value={selectedOption}
              onChange={handleSelection}
            >
              <option value="">Selections:</option>
              {cakeTypes.map((cakeType) => (
                <option key={cakeType.id} value={cakeType.id}>
                  {cakeType.cakeTypes} ${cakeType.price}
                </option>
              ))}
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="text"
              placeholder="Enter new cake"
              value={itemInputValue}
              onChange={(event) => handleInputChange(event, 'itemInputValue')}
            />
            <input
              type="text"
              className="input-price"
              placeholder="Enter Price"
              value={priceInputValue}
              onChange={(event) => handleInputChange(event, 'priceInputValue')}
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
          </td>
        </tr>
      </tbody>
    </>
  )
}

export default ManageCakeTypes
