import instance from '@/axiosInstance/axiosInstance'
import { adminSetupTypes } from '@/types/adminSetup'

const getErrorMessage = (error: any) => {
  return error?.response?.data?.message || 'something went wrong'
}

const getFormData = (formData: Partial<adminSetupTypes>) => {
  return {
    type: formData.type,
    name: formData.name,
    Description: formData.Description
  }
}

export const listAdminSetup = async (page: number, limit: number) => {
  try {
    const res = await instance({
      url: '/adminSetup',
      method: 'GET',
      params: { page, limit }
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const addAdminSetup = async (formData: Partial<adminSetupTypes>) => {
  try {
    const data = getFormData(formData)
    const res = await instance({
      url: '/adminSetup/create',
      method: 'POST',
      data
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const updateAdminSetup = async (id: number, formData: Partial<adminSetupTypes>) => {
  try {
    const data = getFormData(formData)
    const res = await instance({
      url: `/adminSetup/${id}`,
      method: 'PUT',
      data
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const deleteAdminSetup = async (id: number) => {
  try {
    const res = await instance({
      url: `/adminSetup/${id}`,
      method: 'DELETE'
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const searchAdminSetup = async (q: string) => {
  try {
    const res = await instance({
      url: '/adminSetup/search',
      method: 'GET',
      params: { q }
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}
