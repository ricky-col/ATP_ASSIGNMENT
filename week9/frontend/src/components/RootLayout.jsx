import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import { useAuth } from '../store/authstate'

function RootLayout() {
  const checkAuth = useAuth((state) => state.checkAuth);

  useEffect(()=>{
    checkAuth();
  },[]);
  
  return (
    <div>
        <Header />
        <div className='min-h-screen'>
            {/* <Login /> */}
             {/* <Register />  */}
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default RootLayout

