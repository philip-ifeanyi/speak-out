import React from 'react'
import { Link } from 'react-router-dom'

import User from '../../assets/icons/Student Male icon.svg'
import Bell from '../../assets/icons/notification icon.svg'

const Top = () => {
  return (
    <div>
      <div className="hello">
        <h2>Hi Kami</h2>
        <div className="search">
          <input type="search" name="search" placeholder='Search' />
          <Link to=''>
            <img src={ Bell } alt="User" />
          </Link>
        </div>
      </div>
      <div className="userDetails">
        <img src={ User } alt="notifiction icon" />
        <div className="aboutUser">
          <ul>
            <li>Kami Cole</li>
            <li>Computer Engineering</li>
            <li>CE/20/454467</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Top