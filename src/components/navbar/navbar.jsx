import React from 'react';
import {NavLink } from 'react-router-dom';

import './navbar.css'
import Logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <nav>
      <div className='nav-content'>
        <div className='logo'>
          <img src={Logo} alt="Speak Out Logo" className='image' width='80px'/>
        </div>

        <div className="links">
          <ul className="nav-list">
            <li className='nav-item'>
              <NavLink to="/" className='item'>Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/about" className='item'>About</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/support" className='item'>Support</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/login" className='nav-button item'>Login</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/register" className='nav-button button-dark'>Get Started</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar