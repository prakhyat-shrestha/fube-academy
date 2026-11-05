import instance from '@/axiosInstance/axiosInstance'
import { idCardFormTypes } from '@/types/idCard'

const getErrorMessage = (error: any) => {
  return error?.response?.data?.message || 'something went wrong'
}

const getFormData = (formData: Partial<idCardFormTypes>) => {
  return {
    idCardTitle: formData.idCardTitle,
    adminLayout: formData.adminLayout,
    applicableUser: formData.applicableUser,
    profileImage: formData.profileImage,
    userPhotoStyle: formData.userPhotoStyle,
    logo: formData.logo,
    signatureFile: formData.signatureFile,
    admissionNo: formData.admissionNo,
    name: formData.name,
    class: formData.class,
    address: formData.address,
    photoFile: formData.photoFile,
    signature: formData.signature
  }
}

export const listIdCard = async (page: number, limit: number) => {
  try {
    const res = await instance({
      url: '/idCard',
      method: 'GET',
      params: { page, limit }
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const getIdCardById = async (id: number) => {
  try {
    const res = await instance({
      url: `/idCard/${id}`,
      method: 'GET'
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const addIdCard = async (formData: Partial<idCardFormTypes>) => {
  try {
    const data = getFormData(formData)
    const res = await instance({
      url: '/idCard/create',
      method: 'POST',
      data,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const updateIdCard = async (id: number, formData: idCardFormTypes) => {
  try {
    const data = getFormData(formData)
    const res = await instance({
      url: `/idCard/${id}`,
      method: 'PUT',
      data,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const deleteIdCard = async (id: number) => {
  try {
    const res = await instance({
      url: `/idCard/${id}`,
      method: 'DELETE'
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const searchIdCard = async (q: string) => {
  try {
    const res = await instance({
      url: '/idCard/search',
      method: 'GET',
      params: { q }
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}
