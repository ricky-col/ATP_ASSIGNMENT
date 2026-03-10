import { useState } from "react";
function Statedemo() {

    let [counter, setCounter] = useState(10);
    let [marks,setMarks] = useState([1,2]);
    let [user,setUser] = useState({"email":"user@email.com","age":"21"})
    const increment = () => {
        setCounter(x=>x+1)
        // setCounter(prev=>prev+1)
        // setCounter(prev=>prev+1)
        // //setCounter(counter+1)
}

    const decrement = () => {
        setCounter(counter - 1)
    }
    const reset =()=>{
        setCounter(0)
    }
    const addmarks =()=>{
        setMarks([...marks,123])
    }
    //delete marks
    const deleteMarks =(a) =>{
        let result = marks.filter((m,i)=> i!==a)
       // let result = marks.filter((m,i)=><p>{i!==a}</p>)
        setMarks(result)
    }

    
    const updateUser =()=>{
        setUser({...user,city:"hyd"})
    }

    //delete user
    const deleteUser =()=>{
        let {email,...rest} = user
        setUser(rest)
    }

    return (
        <div className="text-center m-10 bg-amber-50 border-2">
            <h1 className="text-4xl text-blue-400 p-2">State Demo</h1>
            <h1 className="text-4xl p-2">{"counter:"+counter}</h1>
            <button onClick={increment} className="bg-sky-500 text-white  text-2xl m-2 rounded p-2">Increment</button>
            <button onClick={decrement} className="bg-sky-500 text-white  text-2xl m-2 rounded p-2">Decrement</button><br></br>
            <button onClick={reset} className="bg-sky-500 text-white  text-2xl m-2 rounded p-2">Reset</button>
        
            <h1>Marks</h1>
            {
                marks.map((mark,index)=>
                    <p key={index}>{mark}</p>
                )
            }
            <button onClick={addmarks} className="bg-sky-500 text-white  text-2xl m-2 rounded p-2">Add Marks</button>
            <button onClick={()=>deleteMarks(1)} className="bg-sky-500 text-white  text-2xl m-2 rounded p-2">delete marks</button>

            <h2 className="text-4xl p-2">{user.email}</h2>
            <h2 className="text-4xl p-2">{user.city}</h2>
            <h2 className="text-4xl p-2">{user.age}</h2>

            <button onClick={updateUser} className="bg-sky-500 text-white  text-2xl m-2 rounded p-2">Update User</button>
            <button onClick={deleteUser} className="bg-sky-500 text-white  text-2xl m-2 rounded p-2">delete User</button>

        </div>
    )
}
export default Statedemo;
