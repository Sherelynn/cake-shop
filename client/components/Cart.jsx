import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchFlavours } from '../actions/flavours'
import { fetchCakeTypes } from '../actions/cakeTypes'
import { fetchTreats } from '../actions/treats'

const Cart = () => {
  const dispatch = useDispatch()
  const flavours = useSelector((state) => state.flavours.data)
  const cakeTypes = useSelector((state) => state.cakeTypes.data)
  const treats = useSelector((state) => state.treats.data)

  useEffect(() => {
    dispatch(fetchFlavours())
    dispatch(fetchCakeTypes())
    dispatch(fetchTreats())
  }, [])

  const [formInput, setFormInput] = useState({
    selectedFlavour: '',
    selectedCake: '',
    selectedTreats: [],
  })

  const { selectedFlavour, selectedCake, selectedTreats } = formInput

  const handleSelection = (event, category) => {
    const value = event.target.value

    if (category === 'selectedTreats') {
      const updatedTreats = selectedTreats.includes(value)
        ? selectedTreats.filter((treatId) => treatId !== value)
        : [...selectedTreats, value]

      setFormInput({
        ...formInput,
        selectedTreats: updatedTreats,
      })
    } else {
      setFormInput({
        ...formInput,
        [category]: value,
      })
    }
  }

  return (
    <>
      <h1>Cart</h1>
      <div className="table-container cart-table">
        <table className="table">
          <thead>
            <tr>
              <th>Cake</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>Pick a flavour</p>
                <select
                  name={selectedFlavour}
                  value={selectedFlavour}
                  onChange={(event) =>
                    handleSelection(event, 'selectedFlavour')
                  }
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
                <p>
                  Chosen flavour:{' '}
                  {
                    flavours.find(
                      (flavour) => flavour.id === Number(selectedFlavour),
                    )?.flavours
                  }
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Choose a type of cake</p>
                <select
                  name={selectedCake}
                  value={selectedCake}
                  onChange={(event) => handleSelection(event, 'selectedCake')}
                >
                  <option value="">Selections:</option>
                  {cakeTypes.map((cake) => (
                    <option key={cake.id} value={cake.id}>
                      {cake.cakeTypes} ${cake.price}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Chosen cake:{' '}
                  {
                    cakeTypes.find(
                      (cakeType) => cakeType.id === Number(selectedCake),
                    )?.cakeTypes
                  }{' '}
                  {selectedCake
                    ? `$${
                        cakeTypes.find(
                          (cakeType) => cakeType.id === Number(selectedCake),
                        )?.price
                      }`
                    : ' '}
                </p>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="table">
          <thead>
            <tr>
              <th>Other Treats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>Add treats</p>
                <select
                  name={selectedTreats}
                  value={selectedTreats}
                  multiple
                  onChange={(event) => handleSelection(event, 'selectedTreats')}
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
                <p>
                  Chosen treats:{' '}
                  {selectedTreats.length > 0 &&
                    selectedTreats
                      .map((treatId) => {
                        const treat = treats.find(
                          (treat) => treat.id === Number(treatId),
                        )?.treats
                        const price = treats.find(
                          (treat) => treat.id === Number(treatId),
                        )?.price
                        const treatAndPrice = `${treat} $${price}`
                        return treatAndPrice ? treatAndPrice : ''
                      })
                      .join(', ')}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Cart
