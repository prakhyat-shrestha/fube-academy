import instance from '@/axiosInstance/axiosInstance'
import { postalDispatchTypes } from '@/types/addPostalDispatch'

const getErrorMessage = (error: any) => {
  return error?.response?.data?.message || 'something went wrong'
}

const getFormData = (formData: Partial<postalDispatchTypes>) => {
  return {
    toTitle: formData.toTitle,
    referenceNo: formData.referenceNo,
    address: formData.address,
    note: formData.note,
    fromTitle: formData.fromTitle,
    date: formData.date,
    fileName: formData.fileName || undefined
  }
}

export const listPostalDispatch = async (page: number, limit: number) => {
  try {
    const res = await instance({
      url: '/addPostalDispatch',
      method: 'GET',
      params: { page, limit }
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const addPostalDispatch = async (formData: Partial<postalDispatchTypes>) => {
  try {
    const data = getFormData(formData)
    const res = await instance({
      url: '/addPostalDispatch/create',
      method: 'POST',
      data
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const updatePostalDispatch = async (id: number, formData: Partial<postalDispatchTypes>) => {
  try {
    const data = getFormData(formData)
    const res = await instance({
      url: `/addPostalDispatch/${id}`,
      method: 'PUT',
      data
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const deletePostalDispatch = async (id: number) => {
  try {
    const res = await instance({
      url: `/addPostalDispatch/${id}`,
      method: 'DELETE'
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const searchPostalDispatch = async (q: string) => {
  try {
    const res = await instance({
      url: '/addPostalDispatch/search',
      method: 'GET',
      params: { q }
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}
