import React from 'react'

function Taskslist({tasks,deleteTask}) {

    // if(tasks.length===0)
    // {
    //     return <p className='text-center'>No tasks found</p>
    // }
  return (
    <div className='text-center'>
        <h1 className='text-4xl text-blue-400 text-center'>Taskslist</h1>
        {
        tasks.length === 0 ? <p className='text-center mt-5 text-blue-400'>No tasks found</p> :
         tasks.map((taskobj,i)=> <p key={i} className='text-center'>{taskobj.taskName}
         <button
                onClick={() => deleteTask(i)}
                className='bg-red-500 text-white px-2 mt-3 ml-2 rounded'
              >
                Delete
              </button>
         </p>)}

    </div>
  )
}

export default Taskslist;
