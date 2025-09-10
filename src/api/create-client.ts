import { api } from '../lib/axios'

export interface CreateClientBody {
  name: string
  email: string
  instagram: string
  phone: string
}

export async function createClient({ name, email, instagram, phone }: CreateClientBody) {
  await api.post('/api/clients', { name, email, instagram, phone })
}
