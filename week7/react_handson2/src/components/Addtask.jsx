import React from 'react'
import {useForm} from 'react-hook-form'

function Addtask({addNewTask}) {
    const {register,handleSubmit,formState:{errors},reset} = useForm();

    const onFormsubmit = (data)=>{
        addNewTask(data);
        reset();
    }
   
  return (
    <div>
        <h1 className='text-4xl text-blue-400 text-center'>Addtask</h1>
        <form onSubmit={handleSubmit(onFormsubmit)}>
            <div>
            <input type="text" {...register('taskName',{required:true})} className="border-2 border-gray-300 rounded mt-2 p-2" placeholder='add new task'/>
            {
                errors?.taskName?.type === 'required' && <p className='text-red-500'>task name is required</p>
            }
            </div>
            <div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Add Task</button>
            </div>
        </form>
        </div>
  )
}

export default Addtask;