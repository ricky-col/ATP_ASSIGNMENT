import React from 'react'
import { useForm } from 'react-hook-form'

function AddArticle() {
    const {register,handleSubmit,formState:{errors}} = useForm()
    const submit = (obj) =>{
        console.log(obj)
    }

  return (
    <div className='bg-gray-300 text-center min-h-screen p-20'>
      <form onSubmit={handleSubmit(submit)}>
        <input type="text" {...register("title",{required:true})} placeholder='Title' className='border p-1 m-2'/><br />
        {errors.title?.type === 'required' && <p className='text-red-400'>Title is required</p>}
        <select {...register("category",{required:true})} id="category" className='m-2 p-1 border'>
            <option value="">Select Category</option>
            <option value="Science">Science</option>
            <option value="Programming">Programming</option>
            <option value="Maths">Maths</option>
            <option value="others">Others</option>
        </select><br />
        {errors.category?.type === 'required' && <p className='text-red-400'>Category is required</p>}
        <textarea
            id="content"
            {...register("content",{required:true})}
            rows="4"
            class="mt-1 w-50 h-32 p-3 border border-gray-950 shadow-sm focus:outline-none sm:text-sm resize-none"
            placeholder="Content"
            ></textarea> <br />
        {errors.content?.type === 'required' && <p className='text-red-400'>Content is required</p>}
        <button type="submit" className='bg-blue-400 p-2 mt-2 rounded'>Publish Article</button>
      </form>
    </div>
  )
}

export default AddArticle