import { api } from '../lib/axios'

export interface Validate2FABody {
  email: string
  code: string
}

export async function validate2FA({ email, code }: Validate2FABody) {
  const response = await api.post('/api/auth/validate-2fa', { email, code })

  return response.data
}
