import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../components/sidebar/sidebar'
import Dashboard from '../pages/dashboard/dashboard'

const PrivateRoutes = () => {
  return (
    <div>
      <Sidebar>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Sidebar>

    </div>
  )
}

export default PrivateRoutes