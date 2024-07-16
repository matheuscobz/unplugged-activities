import React from 'react'
import ReactDOM from 'react-dom/client'
import { Inicio } from './inicio'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Atividades } from './atividades'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />
  },
  {
    path: "/atividades",
    element: <Atividades />
  },
  // {
  //   path: "/sobre",
  //   element: <Sobre />
  // }
])



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
