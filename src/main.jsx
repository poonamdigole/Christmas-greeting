import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './views/Home/Home.jsx'
import './index.css'
import { RouterProvider , createBrowserRouter} from 'react-router-dom';

const router = createBrowserRouter( 
  [
    {
      path:'/',
      element: <Home/>
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <RouterProvider router={router}/>
 
)
