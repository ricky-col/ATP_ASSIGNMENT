import {useForm} from 'react-hook-form'
function FormDemo(){

    const {register,handleSubmit,formState:{errors} } = useForm();


    //form submission
    const submitForm = (data)=>{
        console.log("form submitted",data)
    }
    return(
        <div className="text-center border-2 p-2">
            <h1 >Form</h1>
            <form onSubmit={handleSubmit(submitForm)}>
                <div>
                    <input type="text" {...register("username",{required:true,minLength:3})} placeholder='Username' className='border-2 m-2 text-center'/>
                {
                    errors?.username?.type === 'required' && <p className='text-red-500'>username is required</p>
                }
               </div>
                <div>
                    
                <input type="email" {...register("email",{required:true,pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"})} placeholder='email' className='border-2 m-2 text-center'/>
                {
                    errors?.email?.type === 'required' && <p className='text-red-500'>email is required</p>
                }
                </div>
                <button type="submit" className='border-2 p-2 bg-sky-500 text-white hover:bg-sky-600'>Login</button>
            </form>

        </div>
    )
}

export default FormDemo;
