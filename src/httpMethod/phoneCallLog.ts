import instance from '@/axiosInstance/axiosInstance'
import { phoneCallLogTypes } from '@/types/phoneCallLog'

const getErrorMessage = (error: any) => {
  return error?.response?.data?.message || 'something went wrong'
}

const getFormData = (formData: Partial<phoneCallLogTypes>) => {
  return {
    name: formData.name,
    phone: formData.phone,
    date: formData.date,
    followUpDate: formData.followUpDate,
    callDuration: formData.callDuration,
    Description: formData.Description,
    type: formData.type
  }
}

export const listPhoneCallLog = async (page: number, limit: number) => {
  try {
    const res = await instance({
      url: '/phoneCallLog',
      method: 'GET',
      params: { page, limit }
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const addPhoneCallLog = async (formData: Partial<phoneCallLogTypes>) => {
  try {
    const data = getFormData(formData)
    const res = await instance({
      url: '/phoneCallLog/create',
      method: 'POST',
      data
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const updatePhoneCallLog = async (id: number, formData: Partial<phoneCallLogTypes>) => {
  try {
    const data = getFormData(formData)
    const res = await instance({
      url: `/phoneCallLog/${id}`,
      method: 'PUT',
      data
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const deletePhoneCallLog = async (id: number) => {
  try {
    const res = await instance({
      url: `/phoneCallLog/${id}`,
      method: 'DELETE'
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const searchPhoneCallLog = async (q: string) => {
  try {
    const res = await instance({
      url: '/phoneCallLog/search',
      method: 'GET',
      params: { q }
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}
