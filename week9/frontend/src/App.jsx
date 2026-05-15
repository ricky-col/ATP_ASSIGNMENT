import { useState } from 'react'
import RootLayout from './components/RootLayout'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import AdminDashboard from './components/AdminDashboard'
import AuthorDashboard from './components/AuthorDashboard'
import UserProfile from "./components/UserProfile"
import WriteArticle from './components/WriteArticle'
import MyArticles from './components/MyArticles'
import ArticleDetail from './components/ArticleDetail'
import {Toaster} from "react-hot-toast"
import ProtectedRoute from './components/ProtectedRoute'
import Unauthorized from './components/Unauthorized'

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
        },
        {
          path: "admin-dashboard",
          element: <ProtectedRoute><AdminDashboard /></ProtectedRoute>
        },
        {
          path: "author-profile",
          element: <ProtectedRoute allowedRoles={["AUTHOR"]}><AuthorDashboard /></ProtectedRoute>,
          children: [
            {
              path: "add-article",
              element: <WriteArticle />
            },
            {
              path: "articles",
              element: <MyArticles />
            },
            {
              path: "",
              element: <Navigate to="articles" replace />
            }
          ]
        },
        {
          path: "user-profile",
          element: <ProtectedRoute allowedRoles={["USER"]}><UserProfile /></ProtectedRoute>
        },
        {
          path: "article/:id",
          element: <ProtectedRoute><ArticleDetail /></ProtectedRoute>
        }
      ]
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