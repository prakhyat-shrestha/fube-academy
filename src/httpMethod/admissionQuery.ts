import instance from '@/axiosInstance/axiosInstance'
import { admissionQueryTypes } from '@/types/admissionQuery'

const getErrorMessage = (error: any) => {
  return error?.response?.data?.message || 'something went wrong'
}

const getFormData = (formData: Partial<admissionQueryTypes>) => {
  return {
    name: formData.name,
    phone: formData.phone,
    email: formData.email,
    address: formData.address,
    description: formData.description,
    nextFollowUpDate: formData.nextFollowUpDate,
    reference: formData.reference,
    source: formData.source,
    numberOfChild: formData.numberOfChild,
    activeStatus: formData.activeStatus,
    staffId: formData.staffId,
    classId: formData.classId
  }
}

export const listAdmissionQuery = async (page: number, limit: number) => {
  try {
    const res = await instance({
      url: '/admissionQuery',
      method: 'GET',
      params: { page, limit }
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const addAdmissionQuery = async (formData: Partial<admissionQueryTypes>) => {
  try {
    const data = getFormData(formData)
    const res = await instance({
      url: '/admissionQuery/create',
      method: 'POST',
      data
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const updateAdmissionQuery = async (id: number, formData: Partial<admissionQueryTypes>) => {
  try {
    const data = getFormData(formData)
    const res = await instance({
      url: `/admissionQuery/${id}`,
      method: 'PUT',
      data
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const deleteAdmissionQuery = async (id: number) => {
  try {
    const res = await instance({
      url: `/admissionQuery/${id}`,
      method: 'DELETE'
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const searchAdmissionQuery = async (startDate: string, endDate: string, activeStatus?: string) => {
  try {
    console.log(startDate, endDate, activeStatus)
    const res = await instance({
      url: '/admissionQuery/search',
      method: 'GET',
      params: { startDate, endDate, activeStatus }
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}
