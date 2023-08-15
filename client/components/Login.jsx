import React from 'react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import AdminButton from './AdminButton'

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <LoginButton />
      <LogoutButton />
      <AdminButton />
    </div>
  )
}

export default Login
