import { api } from '../lib/axios'

export interface SignInBody {
  email: string
  password: string
}

export async function signIn({ email, password }: SignInBody) {
  const response = await api.post('/api/auth/login', { email, password })

  return response.data.token
}
