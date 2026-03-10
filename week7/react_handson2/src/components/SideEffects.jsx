import React, { useState } from 'react'
import { useEffect } from 'react'

function SideEffects() {
    let [users,setUsers] = useState([]);
    let [loading,setLoading] = useState(false);
    let [err,setErr] = useState(null);
    console.log("component is rendered");

    useEffect(()=>{        
        async function getData(){
            setLoading(true);
            try{
            let res =  await fetch('https://jsonplaceholder.typicode.com/users');
            let usersData = await res.json();
            setUsers(usersData)
            console.log(usersData);
            }catch(err){
                setErr(err.message);
            }finally{
                setLoading(false)
            }
        }
        getData();
    },[])
     if(loading===true){
        return <p>loading...</p>
    }
    if(err!==null){
        return <p>Error occured</p>
    }
   
    
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>
                        id
                    </th>
                    <th>
                        name
                    </th>
                    <th>
                        usernamee
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((userObj,i)=> {
                       <tr key={i}>
                        <td>
                            {userObj.id}
                        </td>
                        <td>
                            {userObj.name}
                        </td>
                        <td>
                            {userObj.username}
                        </td>
                       </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default SideEffects