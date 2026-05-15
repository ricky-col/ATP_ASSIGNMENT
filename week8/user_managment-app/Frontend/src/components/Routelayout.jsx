import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

function Routelayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
        <Header/>
        <main className='flex-1'>
          <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Routelayout
