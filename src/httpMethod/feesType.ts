import instance from '@/axiosInstance/axiosInstance'
import { feesTypeTypes } from '@/types/feesType'

const getErrorMessage = (error: any) => {
  return error?.response?.data?.message || 'something went wrong'
}

const getFormData = (formData: Partial<feesTypeTypes>) => {
  return {
    name: formData.name,
    feesGroupId: formData.feesGroupId !== undefined ? Number(formData.feesGroupId) : undefined,
    description: formData.description || undefined
  }
}

export const listFeesType = async (page: number, limit: number) => {
  try {
    const res = await instance({
      url: '/feesType',
      method: 'GET',
      params: { page, limit }
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const addFeesType = async (formData: Partial<feesTypeTypes>) => {
  try {
    const data = getFormData(formData)
    const res = await instance({
      url: '/feesType/create',
      method: 'POST',
      data
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const updateFeesType = async (id: number, formData: Partial<feesTypeTypes>) => {
  try {
    const data = getFormData(formData)
    const res = await instance({
      url: `/feesType/${id}`,
      method: 'PUT',
      data
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const deleteFeesType = async (id: number) => {
  try {
    const res = await instance({
      url: `/feesType/${id}`,
      method: 'DELETE'
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const searchFeesType = async (q: string) => {
  try {
    const res = await instance({
      url: '/feesType/search',
      method: 'GET',
      params: { q }
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}
