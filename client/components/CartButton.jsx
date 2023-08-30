import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { NavLink } from 'react-router-dom'

const CartButton = () => {
  const { isAuthenticated } = useAuth0()
  const [isOpen, setOpen] = useState(false)

  return (
    isAuthenticated && (
      <NavLink
        className="button-cart"
        to="/menu"
        onClick={() => setOpen(!isOpen)}
      >
        <div className="button-container">
          <button className="button">Cart</button>
        </div>
      </NavLink>
    )
  )
}

export default CartButton
