import axios from 'axios'
import { useAuthStore } from '@/stores/authStores'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_BASEURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use(
  config => {
    const token = useAuthStore.getState().accessToken

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default instance
