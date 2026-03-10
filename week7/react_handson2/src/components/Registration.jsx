import {useForm} from "react-hook-form"
import { useState } from "react";
import React from "react";
function Registration(){
    
    const {register,handleSubmit,formState:{errors} } = useForm();
    let [users,setUsers] = useState([]);

    const FormSubmit =(data)=>{
        console.log("form submitted",data)
        //update users array
        setUsers([...users,data])
    }   

    return(
       
        <div className="text-center bg-blue-300 w-full">
            <form className="border-2 bg-pink-400 m-10 ml-100 mr-100 p-2" onSubmit={handleSubmit(FormSubmit)}>
            <h1 className="text-3xl">User Registration Form</h1>
            <div>
            <input type="text"  {...register("firstname",{required:true,minLength:4,maxLength:6})} placeholder="enter first name" className="text-center border-2 p-2 m-4 text-2xl bg-gray-200 text-black"/><br></br>
            {
                    errors?.firstname?.type === 'required' && <p className='text-white'>firstname is required</p>
                }
                {
                    errors?.firstname?.type === 'minLength' && <p className='text-white'>firstname is too short</p>
                }
                {
                    errors?.firstname?.type === 'maxLength' && <p className='text-white'>firstname is too long</p>
                }
            </div>

            <div>
            <input type="text" {...register("lastname",{required:true,minLength:4,maxLength:6})} placeholder="enter last name" className="text-center border-2 p-2 m-4 text-2xl bg-gray-200 text-black"/><br></br>
            {
                    errors?.lastname?.type === 'required' && <p className='text-white'>lastname is required</p>
                }
                {
                    errors?.lastname?.type === 'minLength' && <p className='text-white'>firstname is too short</p>
                }
                {
                    errors?.lastname?.type === 'maxLength' && <p className='text-white'>firstname is too long</p>
                }
            </div>
            <div>
            <input type="email" {...register("email",{required:true})}placeholder="enter email " className="text-center border-2 p-2 m-4 text-2xl bg-gray-200 text-black"/><br></br>
            {
                errors?.email?.type==="required" && <p className="text-white">email is required</p>
            }
           </div>
           <div>
            <input type="date" {...register("dob",{required:true})} placeholder="enter date of birth " className="text-center border-2 p-2 m-4 text-2xl bg-gray-200 text-black"/><br></br>
            {
                errors?.dob?.type==="required" && <p className="text-white">dob is required</p>
            }
           </div>
           <div>
            <button className="border-2 bg-amber-200 p-2">add the user</button>
           </div>
            </form>
            
            <h1 className="text-4xl">list of users</h1>
            <div className="ml-100 mt-5 mr-100 bg-pink-500 p-20">
            <table className="border-2 ml-15 p-2">
                
                <thead>
                <tr>
                    <th className="border-2 p-4">firstname</th>
                    <th className="border-2 p-4">lastname</th>
                    <th className="border-2 p-4">email</th>
                    <th className="border-2 p-4">dob</th>
                    
                </tr>
                </thead>
                <tbody>
                    {
                        users.map((u)=>(
                            <tr >
                                <td className="border-2">{u.firstname}</td>
                                <td className="border-2">{u.lastname}</td>
                                <td className="border-2">{u.email}</td>
                                <td className="border-2">{u.dob}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Registration;
