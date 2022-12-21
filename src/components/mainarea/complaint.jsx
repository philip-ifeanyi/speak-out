import React from 'react'
import { NavLink } from 'react-router-dom'

import Back from '../../assets/icons/Left Arrow.svg'
import Bell from '../../assets/icons/notification icon.svg'

const Complaint = () => {
  return (
    <div className="h-fill w-[100%] dashBoard">
      <div className='flex justify-between items-center mt-10 w-10/12 m-auto'>
        <NavLink to='/dashboard' className='flex items-center text-sm text-[#0E2229]'>
          <img src={Back} alt="" className='mr-1'/>
          <p classname='text-sm text-[#0E2229]'>Dashboard</p>
        </NavLink>
        <NavLink>
          <img src={Bell} alt="" />
        </NavLink>
      </div>
      <form className='mt-12 flex flex-col  w-10/12 m-auto h-[70%] '>
        <header className='bg-[#A2D5E5] py-3 px-5 rounded-t-lg'><h2>New Complaint</h2></header>
        <div className="bg-[#DAEEF5] relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span className='pl-2'>Title:</span>
          </div>
          <input type="text" className='border-b border-[#333] outline-none py-3 pl-16 w-full bg-inherit' />
        </div>
        <textarea name="" id="" className='rounded-b-lg outline-none bg-[#DAEEF5] pt-5 px-5 h-4/5' placeholder="Write your complaint here..."></textarea>
        <span className='py-2 text-xs text-white'>*All unsent complaints are automatically saved as draft</span>
        <button type="submit" className='text-xl py-2 text-white w-full rounded-lg bg-[#0E2229]  font-light'>Send</button>
      </form>
    </div>
  )
}

export default Complaint