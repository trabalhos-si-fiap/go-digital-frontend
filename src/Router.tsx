import { Navigate, createBrowserRouter } from 'react-router-dom'

import type { JSX } from 'react'
import { AuthProvider, useAuth } from './auth-context'
import DefaultLayout from './pages/_layouts/default-layout'
import Campanhas from './pages/app/campanhas'
import Clientes from './pages/app/clientes'
import Dashboard from './pages/app/dashboard'
import Equipes from './pages/app/equipes'
import Tarefas from './pages/app/tarefas'
import Login from './pages/auth/login'

export function PrivateRoute({ children }: { children: JSX.Element }) {
  const { isAuthenticated, loading } = useAuth()

  if (loading) {
    return <p>Loading...</p> // or your custom spinner
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthProvider>
        <PrivateRoute>
          <DefaultLayout />
        </PrivateRoute>
      </AuthProvider>
    ),
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
