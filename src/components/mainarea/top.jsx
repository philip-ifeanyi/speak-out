import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import User from '../../assets/icons/Student Male icon.svg'
import Bell from '../../assets/icons/notification icon.svg'

const Top = () => {

  const [user, setUser] = useState()
  const getUser = async () => {
    const details = await localStorage.getItem("user")
    const data = JSON.parse(details)
    setUser(data)
  }
  useEffect(() => {
    getUser()
  }, [])
  return (
    <div>
      <div className="hello">
        <h2 className='text-2xl'>Hi {user?.firstName}</h2>
        <div className="search">
          <input type="search" name="search" placeholder='Search' />
          <Link to=''>
            <img src={Bell} alt="User" />
          </Link>
        </div>
      </div>
      <div className="userDetails">
        <img src={User} alt="notifiction icon" />
        <div className="aboutUser">
          <ul>
            <li>{user?.firstName} {user?.lastName}</li>
            <li>{user?.department}</li>
            <li>{user?.matricOrStaffNumber}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Top