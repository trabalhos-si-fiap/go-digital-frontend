// src/contexts/auth.tsx
import { createContext, useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { api } from './lib/axios'

interface AuthContextType {
  isAuthenticated: boolean
  loading: boolean
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  loading: true,
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    api
      .get('/api/users') // ⬅️ Your auth check
      .then(() => {
        setIsAuthenticated(true)
      })
      .catch(() => {
        setIsAuthenticated(false)
        if (location.pathname !== '/login') {
          navigate('/login', { replace: true })
        }
      })
      .finally(() => {
        setLoading(false) // ✅ this MUST run
      })
  }, [navigate, location.pathname])

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading }}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
