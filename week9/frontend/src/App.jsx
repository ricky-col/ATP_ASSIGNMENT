import { useState } from 'react'
import RootLayout from './components/RootLayout'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import AdminDashboard from './components/AdminDashboard'
import AuthorDashboard from './components/AuthorDashboard'
import UserDashbord from "./components/UserDashboard"
import {Toaster} from "react-hot-toast"

function App() {

  const routerobj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "register",
          element: <Register />
        }]},
        {
          path: "admin-dashboard",
          element: <AdminDashboard />
        },
        {
          path: "author-profile",
          element: <AuthorDashboard />
        },
        {
          path: "user-profile",
          element: <UserDashbord />
        }
  ])

  return (
    <div>
    <Toaster position="top-center" reverseOrder={false}/>
      <RouterProvider router={routerobj} />
    </div>
  )
}

export default App