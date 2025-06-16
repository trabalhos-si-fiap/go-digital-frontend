import axios from 'axios'
import { env } from '../env'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
})

const token = localStorage.getItem('token')

if (token) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`
}
