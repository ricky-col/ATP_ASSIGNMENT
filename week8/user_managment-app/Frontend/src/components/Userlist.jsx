import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

function Userlist() {

  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {

    async function getUsers() {

      try {

        setLoading(true)

        const res = await fetch('http://localhost:4000/user-api/users')

        const data = await res.json()

        console.log(data)   // 👈 check data

        setUsers(data.payload)

      } catch (err) {

        setError(err)

      } finally {

        setLoading(false)

      }

    }

    getUsers()

  }, [])


  const goToUser = (userObj) => {
    navigate('/user', { state: userObj })
  }

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>
  }

  if (error) {
    return <p className="text-center text-red-500 mt-10">{error.message}</p>
  }

  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl border border-gray-100'>

      <h1 className='text-2xl font-bold text-gray-800 mb-6 text-center'>
        List of Users
      </h1>

      {users.map((userObj) => (
        <div
          key={userObj._id}
          className="border-2 py-2 cursor-pointer"
          onClick={() => goToUser(userObj)}
        >
          <p className="font-semibold text-gray-700 text-center">name:{userObj.name}</p>
          <p className="text-sm text-gray-500 text-center">email:{userObj.email}</p><br />
        </div>
      ))}

    </div>
  )
}

export default Userlist