import React from 'react'
import Header from './Header'
import DataTable from './Table'
import Tableform from './Tableform'

function Dashbaord() {
  return (
    <div style={{ padding: '1rem 2rem', width: '100%' }}>
        <Header />
        <Tableform />
        <DataTable />
    </div>
  )
}

export default Dashbaord