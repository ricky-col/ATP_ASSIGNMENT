import React from 'react'
import { NavLink } from 'react-router'
import {navbarClass} from '../styles/common'

function Header() {
  return (
    <nav className={navbarClass}>
      <p>LOGO</p>
      <ul className='flex px-10 items-center gap-6'>
        <li>
          <NavLink to="" >Home</NavLink>
        </li>
        <li>
          <NavLink to="register">Register</NavLink>
        </li>
        <li>
          <NavLink to="login">Login</NavLink>
        </li>
      </ul>
        
        

      
      </nav>
  )
}

export default Header