import { NavLink } from 'react-router'

function Header() {
  return (
    <nav className="bg-gray-100 border-b border-gray-300 px-6 py-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold text-gray-800">User Manager</h2>
      <ul className="flex gap-6">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? "font-bold text-blue-600 underline" : "text-gray-600 hover:text-blue-500"}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/adduser" className={({ isActive }) => isActive ? "font-bold text-blue-600 underline" : "text-gray-600 hover:text-blue-500"}>Add User</NavLink>
        </li>
        <li>
          <NavLink to="/userlist" className={({ isActive }) => isActive ? "font-bold text-blue-600 underline" : "text-gray-600 hover:text-blue-500"}>User List</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header