import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTreats, postTreat, patchTreat } from '../actions/treats'
import firstLetterCapitalised from '../src/capsFirstLetter'

const ManageTreats = () => {
  const dispatch = useDispatch()
  const treats = useSelector((state) => state.treats.data)

  useEffect(() => {
    dispatch(fetchTreats())
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
      dispatch(postTreat(updatedInputValue, priceInputValue))
    } else if (actionType === 'update' && selectedOption) {
      dispatch(patchTreat(selectedOption, updatedInputValue, priceInputValue))
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
          <th>Treats</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p>Choose from selections to update or delete a treat.</p>
            <select
              name={selectedOption}
              value={selectedOption}
              onChange={handleSelection}
            >
              <option value="">Selections:</option>
              {treats.map((treat) => (
                <option key={treat.id} value={treat.id}>
                  {treat.treats} ${treat.price}
                </option>
              ))}
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="text"
              placeholder="Enter new treat"
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

export default ManageTreats
