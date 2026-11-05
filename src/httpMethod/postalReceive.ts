import instance from '@/axiosInstance/axiosInstance'
import { postalReceiveTypes } from '@/types/postalReceive'

const getErrorMessage = (error: any) => {
  return error?.response?.data?.message || 'something went wrong'
}

const getFormData = (formData: Partial<postalReceiveTypes>) => {
  return {
    formTitle: formData.formTitle,
    referenceNo: formData.referenceNo,
    address: formData.address,
    note: formData.note,
    toTitle: formData.toTitle,
    date: formData.date,
    fileName: formData.fileName
  }
}

export const listPostalReceive = async (page: number, limit: number) => {
  try {
    const res = await instance({
      url: '/postalReceive',
      method: 'GET',
      params: { page, limit }
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const addPostalReceive = async (formData: Partial<postalReceiveTypes>) => {
  try {
    const data = getFormData(formData)
    const res = await instance({
      url: '/postalReceive/create',
      method: 'POST',
      data
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const updatePostalReceive = async (id: number, formData: Partial<postalReceiveTypes>) => {
  try {
    const data = getFormData(formData)
    const res = await instance({
      url: `/postalReceive/${id}`,
      method: 'PUT',
      data
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const deletePostalReceive = async (id: number) => {
  try {
    const res = await instance({
      url: `/postalReceive/${id}`,
      method: 'DELETE'
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const searchPostalReceive = async (q: string) => {
  try {
    const res = await instance({
      url: '/postalReceive/search',
      method: 'GET',
      params: { q }
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}
