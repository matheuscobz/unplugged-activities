import React from 'react'
import ReactDOM from 'react-dom/client'
import { Inicio } from './inicio'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Atividades } from './atividades/selecionar-atividade'
import { Turing } from './atividades/turing'
import { ReconhecimentoDeImagens } from './atividades/reconhecimento-de-imagens'
import { RedeAdversariaGenerativa } from './atividades/rede-adversaria-generativa'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />
  },
  {
    path: "/atividades",
    element: <Atividades />
  },
  {
    path:"/atividades/teste-de-turing",
    element: <Turing />
  },
  {
    path:"/atividades/reconhecimento-de-imagens",
    element: <ReconhecimentoDeImagens />
  },
  {
    path:"/atividades/rede-adversaria-generativa",
    element: <RedeAdversariaGenerativa />
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
