import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchFlavours } from '../actions/flavours'

const Menu = () => {
  const dispatch = useDispatch()
  const flavours = useSelector((state) => state.flavours.data)

  useEffect(() => {
    dispatch(fetchFlavours())
  }, [])

  return (
    <div>
      <h1>Flavours</h1>
      <ul>
        {flavours.map((flavour) => (
          <li key={flavour.id}>{flavour.flavours}</li>
        ))}
      </ul>
    </div>
  )
}

export default Menu
