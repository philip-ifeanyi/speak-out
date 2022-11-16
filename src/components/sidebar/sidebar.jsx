import React from 'react'
import { NavLink } from 'react-router-dom'

import './sidebar.css'
import Logo from '../../assets/logo.svg';
import Bin from '../../assets/icons/bin.svg'
import Complaint from '../../assets/icons/complaint.svg'
import Draft from '../../assets/icons/draft.svg'
import Settings from '../../assets/icons/settings.svg'
import Logout from '../../assets/icons/logout.svg'

const Sidebar = () => {
  return (
    <div className='sideBar'>
      <div className="dashLogo">
        <img src={Logo} alt="Speak Out Logo" />
      </div>
      <div className="dashLinks">
        <ul>
          <li>
            <NavLink to='/dashboard/complaints'>
              <img src={Complaint} alt="Complaint link logo" />
              <span className='sideLink'>Complaints</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/draft'>
              <img src={Draft} alt="Draft link logo" />
              <span className='sideLink'>Draft</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/bin'>
              <img src={Bin} alt="bin link logo" />
              <span className='sideLink'>Bin</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/settings'>
              <img src={Settings} alt="settings link logo" />
              <span className='sideLink'>Settings</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="bottomDashLink">
        <NavLink to='/'>
          <img src={Logout} alt="settings link logo" />
          <span className='sideLink'>Logout</span>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar