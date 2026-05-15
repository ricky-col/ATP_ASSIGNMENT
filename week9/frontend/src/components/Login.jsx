import {useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { inputClass,formCard,formTitle,loadingClass,errorClass,primaryBtn} from '../styles/common.js'
import {useAuth} from '../store/authstate'
import {useNavigate} from 'react-router'
import {toast} from 'react-hot-toast'


function Login() {
  const {register,handleSubmit,formState:{errors}} = useForm()
  const navigate = useNavigate()
  const login = useAuth(state=>state.login)
  const isAuthenticated = useAuth(state=>state.isAuthenticated)
  const currentUser = useAuth(state=>state.currentUser)
 // console.log(isAuthenticated)
    
    const submit= async (userobj)=>{
      await login(userobj)
      toast.success("login successfully")
      
      
    }

 useEffect(()=>{
    if(isAuthenticated && currentUser){
      const role = currentUser.role?.toUpperCase();
      if(role === "USER"){
        navigate("/user-profile",{state: currentUser})
      }
      else if (role === "AUTHOR"){
        navigate("/author-profile",{state: currentUser})
      }
    }
  },[isAuthenticated,currentUser])


  return (
    <div className={formCard}>
      <form onSubmit={handleSubmit(submit)}>
        <p className={formTitle}>Select Role</p>
        <input type="radio" {...register("role",{required:true})} value="USER"  /><label className='m-2'>User</label>
        <input type="radio" {...register("role",{required:true})} value="AUTHOR" /><label className={'m-2'}>Author</label><br />
        {errors.role?.type === 'required' && <p className='text-red-400'>Please select a role</p>}
        
        <input type="text" {...register("email",{required:true})} placeholder='Email' className={inputClass}/><br />
        {errors.email?.type === 'required' && <p className='text-red-400'>Email is required</p>}

        <input type="password" {...register("password",{required:true})} placeholder='Password' className={inputClass}/><br />
        {errors.password?.type === 'required' && <p className='text-red-400'>Password is required</p>}
        <button type="submit" className={primaryBtn}>Login</button>
      </form>
    </div>
  )

}

export default Login

