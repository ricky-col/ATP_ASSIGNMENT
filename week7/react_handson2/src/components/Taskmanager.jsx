import React from 'react'
import Addtask from './Addtask'
import Taskslist from './Taskslist'
import Taskcount from './Taskcount'
import { useState } from 'react'

function Taskmanager() {
    let [tasks, setTask] = useState([])

    //add new task
    const addNewTask = (taskobj) => {
        setTask([...tasks, taskobj])
    }
    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTask(updatedTasks);
    };
    //
    return (
        <div>
            <h1 className='text-7xl text-blue-400 mb-10 text-center'>Taskmanager</h1>
            <div className='flex justify-around'>
                <Addtask addNewTask={addNewTask} /> 
                 <Taskslist tasks={tasks} deleteTask={deleteTask} /> 
                 <Taskcount tasks={tasks} />
                {/* <SideEffects/> */}
            </div>
        </div>
    )
}

export default Taskmanager;