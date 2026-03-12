import {useState} from 'react'
import {useAuth} from "../store/authstate"
import {useLocation, useNavigate} from "react-router"
import { primaryBtn,navbarClass } from '../styles/common'
import {toast} from 'react-hot-toast'
import axios from 'axios';
import { useEffect } from 'react'
import { NavLink } from 'react-router'
function UserDashboard() {
  //GET LOGOUT FUNCTION FROM AUTH STORE
  const logout = useAuth(state=>state.logout)

  const navigate = useNavigate()
  const {state} = useLocation()
  
  const [loading,setLoading] = useState()
  const [articles,setArticles] = useState([])
  // console.log(state)
  //PERFORM LOGOUT AND MAKE IT TO NAVIGATE TO LOGIN
  const onlogout = async () =>{
    //logout
    await logout();
    toast.success("logout successfully")
    //navigate
    navigate("/login")
  }


  const getArticles = async() =>{
    try{
      setLoading(true)

      let res = await axios.get("http://localhost:4000/user-api/articles",{ withCredentials:true })
      //console.log(res)
      setArticles(res.data.payload)
    }
    catch(err){
      console.log(err)
    }
    finally{
      setLoading(false)
    }
  }

useEffect(()=>{
  getArticles()
},[]) 
  
  


  return (
    <div>
      
    <div classname="bg-white/85 backdrop-blur-xl backdrop-saturate-150 border-b border-[#e8e8ed] px-8 h-[52px] flex items-center sticky top-0 z-50 justify-between">
      <nav >
                  <ul className='flex gap-10 '>
                      <li>
                          <NavLink to="http://localhost:5173" className={({isActive}) => isActive?"text-blue-400 bg-blue-200 p-3":""}>Home</NavLink>
                      </li>
                      <li>
                          <NavLink to="" className={({isActive}) => isActive?"text-blue-400 bg-blue-200 p-3":""}>Dashboard</NavLink>
                      </li>
                      <li>
                        <NavLink to="/login" onClick={onlogout} className={({isActive}) => isActive?"text-blue-400 bg-blue-200 p-3":""}>Logout</NavLink>
                      </li>
                  </ul>
              </nav>
      
    </div>
    {/* <div className="flex justify-center">
      <button onClick={getArticles} className="border items-center p-2 m-10">Get Articles</button>
    </div> */}
    {/* <div>
       {
        articles.map((article)=>{
          return(
            <div key = {article._id} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8e8ed] border border-[#e8e8ed] rounded-2xl overflow-hidden">
              <p>{article.title}</p>
              <p>{article.content}</p>
              <p>{article.category}</p>
            </div>
          )
        })
       }
    </div> */}
    <div>
            <p className='text-center text-3xl'>Welcome {state.firstName}</p>

    </div>
    <p className='text-center text-2xl '>list of articles are:-</p>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-10 text-center'>
        {articles.map((articleObj)=><div key ={articleObj._id} className='shadow-md p-10 rounded-2xl hover:shadow-2xl'>
          <p className='text-xl mb-2'>Title:- {articleObj.title}</p>
          <p>Article content:- {articleObj.content}</p>
        </div>)}
      </div>
    
   
    </div>
    )
}

export default UserDashboard;
