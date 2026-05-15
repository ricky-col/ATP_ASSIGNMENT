import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/authstate';
import toast from 'react-hot-toast';

function Header() {
  const { isAuthenticated, currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const userRole = currentUser?.role?.toUpperCase();
  const dashboardPath = userRole === 'ADMIN' ? '/admin-dashboard' : 
                        userRole === 'AUTHOR' ? '/author-profile' : 
                        '/user-profile';

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="cursor-pointer" onClick={() => navigate('/')}>
            <p className="font-bold text-xl text-gray-900 tracking-tight">
              ATP<span className="text-indigo-600">Blog</span>
            </p>
          </div>
          
          {/* Nav Links */}
          <ul className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <li>
              <NavLink to="/" className={({isActive}) => isActive ? "text-gray-900 font-semibold" : "hover:text-gray-900 transition-colors"}>
                Home
              </NavLink>
            </li>
            {!isAuthenticated ? (
              <>
                <li>
                  <NavLink to="login" className={({isActive}) => isActive ? "text-gray-900 font-semibold" : "hover:text-gray-900 transition-colors"}>
                    Sign In
                  </NavLink>
                </li>
                <li>
                  <NavLink to="register" className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-700 transition-colors">
                    Get Started
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to={dashboardPath} className={({isActive}) => isActive ? "text-gray-900 font-semibold" : "hover:text-gray-900 transition-colors"}>
                    Dashboard
                  </NavLink>
                </li>
                <li className="flex items-center gap-3 pl-4 border-l border-gray-200">
                  <span className="hidden md:block text-gray-500 text-sm">
                    {currentUser?.firstName}
                  </span>
                  <button onClick={handleLogout} className="px-4 py-1.5 border border-gray-300 rounded-full text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                    Sign Out
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
