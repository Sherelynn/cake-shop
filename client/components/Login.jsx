import React from 'react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import AdminButton from './AdminButton'
import UserProfile from './UserProfile'
import { useAuth0 } from '@auth0/auth0-react'

const Login = () => {
  const { isLoading, error } = useAuth0()
  return (
    <div>
      <h1>Login Page</h1>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <div className="loader"></div>}
      {!error && !isLoading && (
        <>
          <LoginButton />
          <UserProfile />
          <LogoutButton />
          <AdminButton />
        </>
      )}
    </div>
  )
}

export default Login
