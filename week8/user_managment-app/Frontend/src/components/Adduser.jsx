import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

function Adduser() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onUserCreate = async (newUser) => {
    try {
      setLoading(true)
      setError(null)

      const res = await fetch("http://localhost:4000/user-api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser),
      })

      const data = await res.json()

      if (res.status === 201) {
        navigate('/userlist')
      } else {
        setError(new Error(data.message || "Failed to create user"))
      }
    } catch (err) {
      setError(new Error("Server not reachable"))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border border-gray-200 rounded shadow-sm">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Add New User</h1>

      {loading && <p className="text-blue-600 mb-4 text-center">Processing...</p>}
      {error && <p className="text-red-600 mb-4 text-center">{error.message}</p>}

      <form onSubmit={handleSubmit(onUserCreate)} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input
            type="text"
            placeholder="Enter username"
            {...register("name", { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {errors.name && <span className="text-xs text-red-500">Name is required</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            {...register("email", { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {errors.email && <span className="text-xs text-red-500">Email is required</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
          <input
            type="date"
            {...register("dateOfBirth", { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {errors.dateOfBirth && <span className="text-xs text-red-500">DOB is required</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
          <input
            type="number"
            placeholder="Enter mobile number"
            {...register("mobileNumber", { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {errors.mobileNumber && <span className="text-xs text-red-500">Mobile number is required</span>}
        </div>

        <button
          type="submit"
          className="mt-2 w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Adduser