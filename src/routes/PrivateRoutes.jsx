import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/sidebar';

const PrivateRoutes = () => {
  return (
    <Sidebar>
      <Outlet />
    </Sidebar>
  )
}

export default PrivateRoutes