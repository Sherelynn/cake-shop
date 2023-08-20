import React from 'react'
import ManageFlavours from './ManageFlavours'
import ManageCakeTypes from './ManageCakeTypes'
import ManageTreats from './ManageTreats'

const Admin = () => {
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
