import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home'
import User from './components/User'
import Adduser from './components/Adduser'
import Userlist from './components/Userlist'
import Routelayout from './components/Routelayout'

function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <Routelayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "adduser",
          element: <Adduser />,
        },
        {
           path:"userlist",
           element:<Userlist />
        },
        {
          path: "user",
          element: <User />,
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routerObj} />
  )
}

export default App;
