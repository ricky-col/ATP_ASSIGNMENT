import React from 'react'
import { useForm } from 'react-hook-form'
import { inputClass,formCard,formTitle,loadingClass,errorClass,primaryBtn} from '../styles/common.js'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'

function Register() {
  const {register,handleSubmit,formState:{errors}} = useForm()
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(null)
  const navigate = useNavigate()

  const Submit = async (newUser) => {
    console.log(newUser)
    try{
    const { role, ...userobj } = newUser;
    console.log(userobj)
    //make api request 
      if (role==='user'){
        // let res = await fetch("http://localhost:4000/user-api/users",{
        //   method:"POST",
        //   headers:{
        //     "Content-Type":"application/json",
        //   },
        //   body:JSON.stringify(user),
        // })
        //make a request to user-api
        let resobj = await axios.post("http://localhost:4000/user-api/users",userobj)
        let res = resobj.data
        if(resobj.status===201){ 
          navigate("/login")
        }
      }
      else if (role==='author'){
        // let res = await fetch("http://localhost:4000/author-api/users",{
        //   method:"POST",
        //   headers:{
        //     "Content-Type":"application/json",
        //   },
        //   body:JSON.stringify(newUser),
        // })
        //make a request to author-api
        let resobj = await axios.post("http://localhost:4000/author-api/users",userobj)
        let res = resobj.data
        if(resobj.status===201){
          navigate("/login")
        }
      }
    
  }
  catch(err){
    console.log(err)
    setError(err)
  }
  finally{
    setLoading(false)
  }}



  //loading 
  if(loading){
    return <p className={loadingClass}>loading</p>
  }
  //error
  // if(error){
  //   return <p className={errorClass}>{error.message}</p>
  // }

  //make api request 
  return (
    <div className={formCard}>
      <form onSubmit={handleSubmit(Submit)}>
        <p className={formTitle}>create an account</p>
        {/* error message */}
        {error && <p className={errorClass}>{error.message}</p>}
        <p className='inline text-2xl'>Select Role</p><br />
        <input type="radio" {...register("role",{required:true})} value="user" /><label className='m-2 text-xl'>User</label>
        <input type="radio" {...register("role",{required:true})} value="author" /><label className='m-2 text-xl'>Author</label><br />
        {errors.role?.type === 'required' && <p className='text-red-400'>Please select a role</p>}<br />

        <input type="text" {...register("firstName",{required:true})} placeholder='First Name' className={inputClass}/><br />
        {errors.firstName?.type === 'required' && <p className='text-red-400'>First Name is required</p>}

        <input type="text" {...register("lastName")} placeholder='Last Name' className={inputClass}/><br />
        <input type="text" {...register("email",{required:true,unique:true})} placeholder='Email' className={inputClass}/><br />
        {errors.email?.type === 'required' && <p className='text-red-400'>Email is required</p>}
        {errors.email?.type === 'unique' && <p className='text-red-400'>Email already exists</p>}
        <input type="password" {...register("password")} placeholder='Password' className={inputClass}/><br />
        {errors.password?.type === 'required' && <p className='text-red-400'>Password is required</p>}
        {/* Profile Image */}
        <input
          type="text"
          {...register("profileImageUrl")}
          className={inputClass}
          placeholder='profileImageUrl'
        /><br></br>
        {errors.profileImageUrl?.type === 'required' && <p className='text-red-400'>Profile Image is required</p>}
                <button type="submit" className={primaryBtn}>Register</button>
      </form>
    </div>
  )
}

export default Register