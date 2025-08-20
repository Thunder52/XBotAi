import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home.jsx';
import History from './pages/History.jsx';

const router=createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:"history",
        element:<History />
      },
      {
        path:'/',
        element:<Home />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
