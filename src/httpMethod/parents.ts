import instance from '@/axiosInstance/axiosInstance'
import { ParentsTypes } from '@/types/parents'

const getErrorMessage = (err: any) => {
  return err?.response?.data?.message || 'Some thing went wrong'
}

const getData = (formData: Partial<ParentsTypes>) => {
  return {
    fatherName: formData.fatherName,
    fatherOccupation: formData.fatherOccupation,
    fatherPhoneNumber: formData.fatherPhoneNumber,
    photo: formData.photo,
    motherName: formData.motherName,
    motherOccupation: formData.motherOccupation,
    motherPhoneNumber: formData.motherPhoneNumber,
    motherPhoto: formData.motherPhoto,
    relationWithGuardian: formData.relationWithGuardian,
    guardianName: formData.guardianName,
    guardianEmail: formData.guardianEmail,
    guardianPhoto: formData.guardianPhoto,
    guardianPhone: formData.guardianPhone,
    guardianOccupation: formData.guardianOccupation,
    guardianAddress: formData.guardianAddress,
    activeStatus: formData.activeStatus
  }
}

export const listParent = async (page: number, limit: number) => {
  try {
    const res = await instance({
      url: '/parents',
      method: 'GET',
      params: { page, limit }
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const addParents = async (formData: Partial<ParentsTypes>) => {
  try {
    const data = getData(formData)
    const res = await instance({
      url: '/parents/create',
      method: 'POST',
      data
    })

    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const updateParents = async (id: number, FormData: Partial<ParentsTypes>) => {
  try {
    const res = await instance({
      url: `/parents/${id}`,
      method: 'PUT',
      data: getData(FormData)
    })
    return res.data
  } catch (err) {
    throw new Error(getErrorMessage(err))
  }
}

export const deleteParents = async (id: number) => {
  try {
    const res = await instance({
      url: `/parents/${id}`,
      method: 'DELETE'
    })
    return res.data
  } catch (err) {
    throw new Error(getErrorMessage(err))
  }
}

export const searchParents = async (guardianPhone: string) => {
  try {
    const q = guardianPhone.trim()
    const res = await instance({
      url: `/parents/search`,
      method: 'GET',
      params: { q }
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}
