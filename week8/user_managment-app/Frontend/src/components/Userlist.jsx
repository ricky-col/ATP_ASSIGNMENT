import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

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
        setUsers(data.payload || [])
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
    return <div className="text-center mt-10">Loading users...</div>
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-600">
        <p>Error: {error.message}</p>
        <button onClick={() => window.location.reload()} className="underline mt-2">Retry</button>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-6">User List</h1>

      {users.length === 0 ? (
        <div className="text-center p-10 border rounded bg-gray-50">
          <p className="mb-4">No users found.</p>
          <button
            onClick={() => navigate('/adduser')}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add First User
          </button>
        </div>
      ) : (
        <div className="border border-gray-200 rounded overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{user.name}</td>
                  <td className="px-4 py-3 text-gray-600">{user.email}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-1 rounded ${user.status ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {user.status ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => goToUser(user)}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Userlist