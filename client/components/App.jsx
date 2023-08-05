import React from 'react'
import NavBar from './NavBar'
import Home from './Home'
import Cakes from './Cakes'
import Menu from './Menu'
import Login from './Login'
import Admin from './Admin'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="cakes" element={<Cakes />}></Route>
        <Route path="menu" element={<Menu />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="admin" element={<Admin />}></Route>
      </Routes>
    </div>
  )
}

export default App
