import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import AddArticle from './AddArticle'
function RootLayout() {
  return (
    <div>
        <Header />
        <div className='min-h-screen'>
            {/* <Login /> */}
             {/* <Register />  */}
             {/* <AddArticle /> */}
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default RootLayout