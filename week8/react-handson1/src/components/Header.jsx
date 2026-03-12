import React from 'react'
import {NavLink} from 'react-router'

function Header() {
  return (
    <nav className='text-2xl'>
    <div className="flex justify-between px-10 items-center bg-gray-300">
        
       <NavLink to="/product"> <img
        width="100px"
        className='rounded'
        
        src="https://img.pikbest.com/png-images/20241022/stealth-masked-hacker-gaming-logo-for-gamers_10991543.png!bw700" alt=""
        /></NavLink>
        <ul className="flex gap-5 ">
            <li>
                <NavLink to="" className={({isActive})=>isActive?"text-blue-100 bg-blue-500 p-2":""}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/product" className={({isActive})=>isActive?"text-blue-100 bg-blue-500 p-2":""}>Product List</NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={({isActive})=>isActive?"text-blue-100 bg-blue-500 p-2":""}>Contact</NavLink>
            </li>
        </ul>
    </div>
    </nav>
  )
}

export default Header