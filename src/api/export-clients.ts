import { api } from '../lib/axios'

export async function exportClients() {
  const response = await api.get('/api/clients/export-all', {
    responseType: 'blob',
  })

  const blob = new Blob([response.data], { type: 'text/csv' })
  const url = window.URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.download = 'clients.csv'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
