import instance from '@/axiosInstance/axiosInstance'
import { complaintTypes } from '@/types/complaint'

const getErrorMessage = (error: any) => {
  return error?.response?.data?.message || 'something went wrong'
}

const getFormData = (formData: Partial<complaintTypes>) => {
  return {
    complaintBy: formData.complaintBy,
    complainType: formData.complainType,
    complaintSource: formData.complaintSource,
    phone: formData.phone,
    date: formData.date,
    actionTaken: formData.actionTaken,
    staffId: formData.staffId,
    Description: formData.Description,
    fileName: formData.fileName
  }
}

export const listComplaint = async (page: number, limit: number) => {
  try {
    const res = await instance({
      url: '/complaint',
      method: 'GET',
      params: { page, limit }
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const addComplaint = async (formData: Partial<complaintTypes>) => {
  try {
    const data = getFormData(formData)
    const res = await instance({
      url: '/complaint/create',
      method: 'POST',
      data
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const updateComplaint = async (id: number, formData: Partial<complaintTypes>) => {
  try {
    const data = getFormData(formData)
    const res = await instance({
      url: `/complaint/${id}`,
      method: 'PUT',
      data
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const deleteComplaint = async (id: number) => {
  try {
    const res = await instance({
      url: `/complaint/${id}`,
      method: 'DELETE'
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const searchComplaint = async (search: string) => {
  try {
    const res = await instance({
      url: '/complaint/search',
      method: 'GET',
      params: { search }
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}
