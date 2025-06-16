import { api } from '../lib/axios'

export interface GetClientsResponse {
  id: string
  name: string
  email: string
  instagram: string
}

export async function getClients() {
  const response = await api.get('/api/clients')

  return response.data.content as GetClientsResponse[]
}
