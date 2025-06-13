import { createBrowserRouter } from 'react-router-dom'

import DefaultLayout from './pages/_layouts/default-layout'
import Campanhas from './pages/app/campanhas'
import Clientes from './pages/app/clientes'
import Dashboard from './pages/app/dashboard'
import Equipes from './pages/app/equipes'
import Tarefas from './pages/app/tarefas'
import Login from './pages/auth/login'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/clientes', element: <Clientes /> },
      { path: '/campanhas', element: <Campanhas /> },
      { path: '/tarefas', element: <Tarefas /> },
      { path: '/equipes', element: <Equipes /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
])
