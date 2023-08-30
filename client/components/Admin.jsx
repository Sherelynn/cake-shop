import React from 'react'
import ManageFlavours from './ManageFlavours'
import ManageCakeTypes from './ManageCakeTypes'
import ManageTreats from './ManageTreats'
import LoginButton from './LoginButton'
import { useAuth0 } from '@auth0/auth0-react'

const Admin = () => {
  const { isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <div className="loader"></div>
  }

  if (!isAuthenticated) {
    return (
      <div>
        <h1>Access Denied</h1>
        <LoginButton />
      </div>
    )
  }

  return (
    <div>
      <h1>Admin Page</h1>
      <div className="table-container admin">
        <table className="table">
          <ManageFlavours />
        </table>
        <table className="table">
          <ManageCakeTypes />
        </table>
        <table className="table">
          <ManageTreats />
        </table>
      </div>
    </div>
  )
}

export default Admin
