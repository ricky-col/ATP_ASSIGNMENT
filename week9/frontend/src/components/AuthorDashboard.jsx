import React from 'react'
import { NavLink, Outlet } from 'react-router'

function AuthorDashboard() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 shadow-sm pt-8">
        <nav className="px-4 space-y-2">
          <NavLink 
            to="articles" 
            className={({isActive}) => `block px-4 py-2.5 rounded-lg transition-colors ${isActive ? 'bg-blue-600':'text-gray-600 hover:bg-gray-100'}`}
          >
            My Articles
          </NavLink>
          <NavLink 
            to="add-article" 
            className={({isActive}) => `block px-4 py-2.5 rounded-lg transition-colors ${isActive ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            Add New Article
          </NavLink>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default AuthorDashboard
