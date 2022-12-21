import React from 'react'
import { Outlet  } from 'react-router-dom'
import Settings from '../pages/dashboard/settings/settings'

const SettingsRoutes = () => {
  return (
    <Settings>
      <Outlet />
    </Settings>
  )
}

export default SettingsRoutes