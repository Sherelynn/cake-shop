import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { NavLink } from 'react-router-dom'

const AdminButton = () => {
  const { isAuthenticated } = useAuth0()
  const [isOpen, setOpen] = useState(false)

  return (
    isAuthenticated && (
      <NavLink
        className="button-admin"
        to="/admin"
        onClick={() => setOpen(!isOpen)}
      >
        <div className="button-container">
          <button className="button">Admin</button>
        </div>
      </NavLink>
    )
  )
}

export default AdminButton
