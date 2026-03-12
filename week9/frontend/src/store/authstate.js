import {create} from "zustand"
import axios from "axios"

export const useAuth = create((set)=>({
    currentUser:null,
    isAuthenticated:false,
    error:null,
    loading:false,
    login:async(userCredObjwithRole)=>{
        const {role,...userCredObj} = userCredObjwithRole
        try{
            //set loading to true
            set({loading:true, error:null})
            //make api call
            let res = await axios.post("http://localhost:4000/common-api/login",userCredObj,{withCredentials:true})

            console.log("res is",res);
            // console.log(res.data.reason)
            //update state
            if(res.message!=='error'){
            set({
                loading:false,
                isAuthenticated:true,
                currentUser:res.data.user,
                error:null
            })}
            
        }
        catch(err)
        {
            console.log("error is "+ err.response.message)
            set({
                loading:false,
                isAuthenticated:false,
                currentUser:null,
                error:err,
            })
        }
    },
    logout:async()=>{
        try{
            //set loading to true
            set({loading:true, error:null})
            //make api call
            await axios.get("http://localhost:4000/common-api/logout",{ withCredentials:true })
            //update state
            set({
                loading:false,
                isAuthenticated:false,
                currentUser:null,
                error:null
            });
        }
        catch(err){
            console.log("error is "+ err.response.message)
            set({
                loading:false,
                isAuthenticated:false,
                currentUser:null,
                error:err.response?.data?.error || "logout failed"
            });
        }
    }
}))