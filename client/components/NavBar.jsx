import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const [isOpen, setOpen] = useState(false)

  const NavItems = [
    { id: 1, path: '/', label: 'Home' },
    { id: 2, path: '/cakes', label: 'Cakes' },
    { id: 3, path: '/menu', label: 'Menu' },
    { id: 4, path: '/login', label: 'Login' },
  ]

  const handleNavItemsClick = () => setOpen(!isOpen)

  return (
    <nav className="navBar">
      <img
        src="https://github.com/sherelynn-baguioso/my-photos/blob/main/Logo.jpg?raw=true"
        alt="silhouette of a female baker"
        className="logo"
      />
      <ul>
        {NavItems.map((item) => (
          <li key={item.id}>
            <NavLink to={item.path} onClick={handleNavItemsClick}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
