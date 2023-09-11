import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchFlavours } from '../actions/flavours'
import { fetchCakeTypes } from '../actions/cakeTypes'
import { fetchTreats } from '../actions/treats'
import StripeContainer from './StripeContainer'

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

  const getChosenItem = (itemId, itemsArray, itemCategory) => {
    const chosenItem = itemsArray.find((item) => item.id === Number(itemId))
    return chosenItem ? chosenItem[itemCategory] : ''
  }

  const calculateTotalPrice = () => {
    const cakePrice = selectedCake
      ? Number(getChosenItem(selectedCake, cakeTypes, 'price'))
      : 0

    const treatsPrice = selectedTreats.reduce((total, treatId) => {
      const treatPrice = Number(getChosenItem(treatId, treats, 'price'))
      return total + treatPrice
    }, 0)

    return cakePrice + treatsPrice
  }

  const calculateNumberOfItems = () => {
    const numberOfCakes = selectedCake ? 1 : 0
    const numberOfTreats = selectedTreats.length

    return numberOfCakes + numberOfTreats
  }

  const totalAmount = calculateTotalPrice()
  const numberOfItems = calculateNumberOfItems()

  const [chosenItemsSummary, setChosenItemsSummary] = useState([])

  const updateChosenItemsSummary = () => {
    const chosenItems = []

    if (selectedFlavour) {
      const chosenFlavour = getChosenItem(selectedFlavour, flavours, 'flavours')
      chosenItems.push(`Cake Flavour: ${chosenFlavour}`)
    }

    if (selectedCake) {
      const chosenCake = getChosenItem(selectedCake, cakeTypes, 'cakeTypes')
      const cakePrice = getChosenItem(selectedCake, cakeTypes, 'price')
      chosenItems.push(`${chosenCake} - $${cakePrice}`)
    }

    selectedTreats.forEach((treatId) => {
      const chosenTreat = getChosenItem(treatId, treats, 'treats')
      const treatPrice = getChosenItem(treatId, treats, 'price')
      chosenItems.push(`${chosenTreat} - $${treatPrice}`)
    })

    setChosenItemsSummary(chosenItems)
  }

  useEffect(() => {
    updateChosenItemsSummary()
  }, [selectedFlavour, selectedCake, selectedTreats])

  const [showItem, setShowItem] = useState(false)

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
                  {getChosenItem(selectedFlavour, flavours, 'flavours')}
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
                  {getChosenItem(selectedCake, cakeTypes, 'cakeTypes')}{' '}
                  {selectedCake
                    ? `$${getChosenItem(selectedCake, cakeTypes, 'price')}`
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
                      .map(
                        (treatId) =>
                          `${getChosenItem(
                            treatId,
                            treats,
                            'treats',
                          )} $${getChosenItem(treatId, treats, 'price')}`,
                      )
                      .join(', ')}
                </p>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="table">
          <thead>
            <tr>
              <th>Chosen Items</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>Number of Items: {numberOfItems}</p>
                {chosenItemsSummary.length > 0 && (
                  <>
                    <ul>
                      {chosenItemsSummary.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
                <p>Total Amount: ${totalAmount}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="payment-container">
        <div className="payment">
          {showItem ? (
            <StripeContainer
              totalAmount={totalAmount}
              numberOfItems={numberOfItems}
            />
          ) : (
            <>
              {' '}
              <p className="amount">Total Amount: ${totalAmount}</p>
              <button className="button pay" onClick={() => setShowItem(true)}>
                Pay
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Cart
