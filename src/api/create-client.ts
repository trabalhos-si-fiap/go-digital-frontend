import { api } from '../lib/axios'

export interface CreateClientBody {
  name: string
  email: string
  instagram: string
}

export async function createClient({ name, email, instagram }: CreateClientBody) {
  await api.post('/api/clients/create', { name, email, instagram })
}
