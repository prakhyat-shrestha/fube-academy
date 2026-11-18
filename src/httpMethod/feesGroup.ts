import instance from '@/axiosInstance/axiosInstance'
import { feesGroupTypes } from '@/types/feesGroup'

const getErrorMessage = (error: any) => {
  return error?.response?.data?.message || 'something went wrong'
}

const getFormData = (formData: Partial<feesGroupTypes>) => {
  return {
    name: formData.name,
    description: formData.description
  }
}

export const listFeesGroup = async (page: number, limit: number) => {
  try {
    const res = await instance({
      url: '/feesGroup',
      method: 'GET',
      params: { page, limit }
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const addFeesGroup = async (formData: Partial<feesGroupTypes>) => {
  try {
    const data = getFormData(formData)
    const res = await instance({
      url: '/feesGroup/create',
      method: 'POST',
      data
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const updateFeesGroup = async (id: number, formData: Partial<feesGroupTypes>) => {
  try {
    const data = getFormData(formData)
    const res = await instance({
      url: `/feesGroup/${id}`,
      method: 'PUT',
      data
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const deleteFeesGroup = async (id: number) => {
  try {
    const res = await instance({
      url: `/feesGroup/${id}`,
      method: 'DELETE'
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const searchFeesGroup = async (q: string) => {
  try {
    const res = await instance({
      url: '/feesGroup/search',
      method: 'GET',
      params: { q }
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}
