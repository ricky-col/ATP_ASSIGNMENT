import './App.css'
import RootLayout from './components/RootLayout'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home'
import Contactus from './components/Contactus'
import ProductList from './components/ProductList'
import Product from './components/Product'
function App() {
  const routeobj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contactus />,
        },
        {
          path:"product",
          element:<ProductList />
        },{
          path:"produc",
          element:<Product />
        }
      ],
    },
  ]);

  return <RouterProvider router={routeobj} />;
}

export default App
