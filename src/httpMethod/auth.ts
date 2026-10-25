import instance from '@/axiosInstance/axiosInstance'
import { errorMessage, alertSuccess } from '@/views/errorHandling/error'

export const login = async (email: string, password: string) => {
  const data = {
    email,
    password
  }
  try {
    const res = await instance({
      url: '/auth/login',
      method: 'POST',
      data
    })

    return res.data
  } catch (e: any) {
    const message = e.response.data.message
    console.log(message)
    throw message
  }
}
