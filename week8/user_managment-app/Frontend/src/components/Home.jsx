import { useNavigate } from 'react-router'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">User Management System</h1>
      <p className="text-gray-600 mb-8">
        Welcome to the User Management System. Use the links below to manage your users.
      </p>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => navigate('/adduser')}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add New User
        </button>
        <button
          onClick={() => navigate('/userlist')}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
        >
          View User List
        </button>
      </div>

      <hr className="my-10" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <div className="border p-4 rounded">
          <h3 className="font-bold mb-2">Create</h3>
          <p className="text-sm text-gray-500">Add new users to the database with their details.</p>
        </div>
        <div className="border p-4 rounded">
          <h3 className="font-bold mb-2">Read</h3>
          <p className="text-sm text-gray-500">View a complete list of all registered users.</p>
        </div>
        <div className="border p-4 rounded">
          <h3 className="font-bold mb-2">Details</h3>
          <p className="text-sm text-gray-500">Check specific information for any individual user.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
