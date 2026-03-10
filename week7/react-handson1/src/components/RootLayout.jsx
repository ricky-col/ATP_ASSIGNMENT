import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

function RootLayout() {
    return (
        <div className='bg-violet-300'>
            
            <Header/>
            {/* <Search/> */}
            <div className=' p-6 min-h-screen'>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default RootLayout