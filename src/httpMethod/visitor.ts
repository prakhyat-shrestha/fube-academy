import instance from '@/axiosInstance/axiosInstance'
import { VisitorTypes } from '@/types/visitors'

const getErrorMessage = (error: any) => {
  return error?.response?.data?.message || 'something went wrong'
}

const getFormData = (formData: Partial<VisitorTypes>) => {
  return {
    purpose: formData.purpose,
    name: formData.name,
    phone: formData.phone,
    typeOfId: formData.typeOfId,
    idNumber: formData.idNumber,
    NoOfPerson: formData.NoOfPerson,
    Date: formData.Date,
    inTime: formData.inTime,
    OutTime: formData.OutTime
  }
}

export const listVisitor = async (page: number, limit: number) => {
  try {
    const res = await instance({
      url: '/visitors',
      method: 'GET',
      params: { page, limit }
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const addVisitor = async (formData: Partial<VisitorTypes>) => {
  try {
    const data = getFormData(formData)
    const res = await instance({
      url: '/visitors/create',
      method: 'POST',
      data
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const updateVisitor = async (id: number, formData: Partial<VisitorTypes>) => {
  try {
    const data = getFormData(formData)
    const res = await instance({
      url: `/visitors/${id}`,
      method: 'PUT',
      data
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const deleteVisitor = async (id: number) => {
  try {
    const res = await instance({
      url: `/visitors/${id}`,
      method: 'DELETE'
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

// export const searchVisitor = async (startDate: string, endDate: string) => {
//   try {
//     const res = await instance({
//       url: '/visitors/search',
//       method: 'GET',
//       params: { startDate, endDate }
//     })
//     return res.data
//   } catch (err: any) {
//     throw new Error(getErrorMessage(err))
//   }
// }
