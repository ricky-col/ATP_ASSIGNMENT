import { useLocation, useNavigate } from 'react-router'

function User() {
  const location = useLocation()
  const navigate = useNavigate()
  const user = location.state

  if (!user) {
    return (
      <div className="max-w-md mx-auto mt-20 p-6 text-center border rounded shadow-sm bg-gray-50">
        <h2 className="text-xl font-bold mb-2">No User Selected</h2>
        <p className="text-gray-600 mb-6">Please select a user from the list.</p>
        <button
          onClick={() => navigate('/userlist')}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Go to User List
        </button>
      </div>
    )
  }

  const formatDate = (dateStr) => {
    if (!dateStr) return 'N/A'
    return new Date(dateStr).toLocaleDateString()
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white border border-gray-200 rounded shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">User Details</h1>
        <button
          onClick={() => navigate('/userlist')}
          className="text-sm text-blue-600 hover:underline"
        >
          &larr; Back to List
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex border-b pb-2">
          <span className="w-1/3 font-semibold text-gray-700">Full Name</span>
          <span className="w-2/3">{user.name}</span>
        </div>
        <div className="flex border-b pb-2">
          <span className="w-1/3 font-semibold text-gray-700">Email Address</span>
          <span className="w-2/3">{user.email}</span>
        </div>
        <div className="flex border-b pb-2">
          <span className="w-1/3 font-semibold text-gray-700">Status</span>
          <span className="w-2/3">
            <span className={user.status ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
              {user.status ? 'Active' : 'Inactive'}
            </span>
          </span>
        </div>
        <div className="flex border-b pb-2">
          <span className="w-1/3 font-semibold text-gray-700">Date of Birth</span>
          <span className="w-2/3">{formatDate(user.dateOfBirth)}</span>
        </div>
        <div className="flex border-b pb-2">
          <span className="w-1/3 font-semibold text-gray-700">Mobile Number</span>
          <span className="w-2/3">{user.mobileNumber || 'N/A'}</span>
        </div>
        <div className="flex">
          <span className="w-1/3 font-semibold text-gray-700">User ID</span>
          <span className="w-2/3 text-xs text-gray-500 font-mono">{user._id}</span>
        </div>
      </div>
    </div>
  )
}

export default User