import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

function Routelayout() {
  return (
    <div>
        <Header/>

        <div className='min-h-screen'>
        <Outlet/>
        </div>

        <Footer/>
    </div>
  )
}

export default Routelayout
