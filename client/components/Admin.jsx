import React from 'react'
import ManageFlavours from './ManageFlavours'
import ManageCakeTypes from './ManageCakeTypes'

const Admin = () => {
  return (
    <div>
      <h1>Admin Page</h1>
      <div className="table-container">
        <table className="table">
          <ManageFlavours />
        </table>
        <table className="table">
          <ManageCakeTypes />
        </table>
      </div>
    </div>
  )
}

export default Admin
