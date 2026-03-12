import {NavLink} from 'react-router'

function Header() {
  return (
    <div className='flex justify-between px-10 bg-green-300 items-center'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Z_1hT0wtQ-3jRNB0W4NH61W46Y1AEHlmJQ&s" alt="" className='w-20 h-20 rounded-full'/>
        <ul className='flex gap-10'>
            <li>
                <NavLink to="/" className={({isActive})=>isActive?"bg-blue-400 text-black rounded p-2":""}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/adduser" className={({isActive})=>isActive?"bg-blue-400 text-black rounded p-2":""}>Add User</NavLink>
            </li>
            <li>
                <NavLink to="/userlist" className={({isActive})=>isActive?"bg-blue-400 text-black rounded p-2":""}>User List</NavLink>
            </li>
            <li>
                <NavLink to="/user" className={({isActive})=>isActive?"bg-blue-400 text-black rounded p-2":""}>User</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Header