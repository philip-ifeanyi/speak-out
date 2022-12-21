import React from 'react'
import { NavLink } from 'react-router-dom'

import Back from '../../../assets/icons/Left Arrow.svg'
import Bell from '../../../assets/icons/notification icon.svg'

const Bin = () => {
  return (
    <div className='dashBoard'>
      <div className='flex justify-between items-center mt-10 w-10/12 m-auto'>
        <NavLink to='/dashboard' className='flex items-center text-sm text-[#0E2229]'>
          <img src={Back} alt="" className='mr-1'/>
          <p classname='text-sm text-[#0E2229]'>Dashboard</p>
        </NavLink>
        <div className="flex w-2/4 justify-end align-center">
          <input type="search" name="search" placeholder='Search' className='w-3/4 text-right outline-none rounded-md p-2 mr-2 bg-[#DAEEF5]'/>
          <NavLink to=''>
            <img src={ Bell } alt="User" />
          </NavLink>
        </div>
      </div>
      <div className='mt-12 w-9/12 m-auto h-[70%] bg-[#DAEEF5]/30 rounded-lg'>
        <header className='p-3 bg-[#A2D5E5] rounded-t-md font-semibold'><h2>Settings</h2></header>
        <div className='flex flex-col justify-center items-center w-fill h-[90%]'>
          <h1 className='text-4xl text-[#225566] font-extrabold'>Oops! There's nothing here yet.</h1>
        </div>
      </div>
    </div>
  )
}

export default Bin