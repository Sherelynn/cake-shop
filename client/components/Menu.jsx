import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchFlavours } from '../actions/flavours'
import { fetchCakeTypes } from '../actions/cakeTypes'
import { fetchTreats } from '../actions/treats'
import Cart from './Cart'

const Menu = () => {
  const dispatch = useDispatch()
  const flavours = useSelector((state) => state.flavours.data)
  const cakeTypes = useSelector((state) => state.cakeTypes.data)
  const treats = useSelector((state) => state.treats.data)

  useEffect(() => {
    dispatch(fetchFlavours())
  }, [])

  useEffect(() => {
    dispatch(fetchCakeTypes())
  }, [])

  useEffect(() => {
    dispatch(fetchTreats())
  }, [])

  return (
    <>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Flavours</th>
            </tr>
          </thead>
          <tbody>
            {flavours.map((flavour) => (
              <tr key={flavour.id}>
                <td>{flavour.flavours}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="table">
          <thead>
            <tr>
              <th>Types of Cake</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cakeTypes.map((cakeType) => (
              <tr key={cakeType.id}>
                <td>{cakeType.cakeTypes}</td>
                <td>${cakeType.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="table">
          <thead>
            <tr>
              <th>Treats</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {treats.map((treat) => (
              <tr key={treat.id}>
                <td>{treat.treats}</td>
                <td>${treat.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div id="cart">
        {/* Display Cart */}
        <Cart />
      </div>
    </>
  )
}

export default Menu
