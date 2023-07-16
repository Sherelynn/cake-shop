import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav className="navBar">
      <img
        src="https://github.com/sherelynn-baguioso/my-photos/blob/main/Logo.jpg?raw=true"
        alt="silhouette of a female baker"
        className="logo"
      />
      <ul>
        <li>
          <NavLink to="/" onClick={() => setOpen(!isOpen)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/cakes" onClick={() => setOpen(!isOpen)}>
            Cakes
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" onClick={() => setOpen(!isOpen)}>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" onClick={() => setOpen(!isOpen)}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
