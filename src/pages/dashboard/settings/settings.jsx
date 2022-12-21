import React from 'react'
import { NavLink } from 'react-router-dom'

import Back from '../../../assets/icons/Left Arrow.svg'
import Bell from '../../../assets/icons/notification icon.svg'


const Settings = ({ children }) => {
  return (
    <div className="dashBoard">
      <div className='flex justify-between items-center mt-10 w-10/12 m-auto'>
        <NavLink to='/dashboard' className='flex items-center text-sm text-[#0E2229]'>
          <img src={Back} alt="" className='mr-1'/>
          <p classname='text-sm text-[#0E2229]'>Dashboard</p>
        </NavLink>
        <div className="flex w-2/4 justify-end align-center">
          <NavLink to=''>
            <img src={ Bell } alt="User" />
          </NavLink>
        </div>
      </div>
      <div className='w-10/12 m-auto mt-10 bg-[#DAEEF5] rounded-t-lg font-semibold h-[70%]'>
        <header className='p-3 bg-[#A2D5E5] rounded-t-md'><h2>Settings</h2></header>
        <div className='w-1/2 border-r-2 border-x-slate-400 h-[90%]'>
          <div>
            <h3 className='p-3'>Account</h3>
            <NavLink to='/dashboard/settings/changemail' className='block text-sm font-thin py-2 px-3 bg-[#C1E3EE]'>Change Email</NavLink>
            <NavLink to='/dashboard/settings/changepassword' className='block text-sm font-thin py-2 px-3 bg-[#C1E3EE]'>Change Password</NavLink>
            <NavLink to='/dashboard/settings/deleteaccount' className='block text-sm font-thin py-2 px-3 bg-[#C1E3EE]'>Delete Account</NavLink>
            <h3 className='p-3'>Notification</h3>
            <NavLink to='/dashboard/settings/notificationsettings' className='block text-sm font-thin py-2 px-3 bg-[#C1E3EE]'>Receive notifications via email</NavLink>
          </div>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Settings