import instance from '@/axiosInstance/axiosInstance'
import { certificateTypes } from '@/types/certificate'

const getErrorMessage = (error: any) => {
  return error?.response?.data?.message || 'something went wrong'
}

// Backend zod schema uses .optional() (not .nullable()), so null values
// coming from an existing record must be sent as undefined.
const orUndefined = <T>(value: T | null | undefined) => (value === null ? undefined : value)

const getFormData = (formData: Partial<certificateTypes>) => {
  return {
    certificateName: formData.certificateName,
    HeaderLeftText: orUndefined(formData.HeaderLeftText),
    date: formData.date,
    body: orUndefined(formData.body),
    bodyFont: orUndefined(formData.bodyFont),
    fontSize: formData.fontSize,
    footerLeftText: orUndefined(formData.footerLeftText),
    FooterCenterText: orUndefined(formData.FooterCenterText),
    FooterRightText: orUndefined(formData.FooterRightText),
    pageLayout: formData.pageLayout,
    studentPhoto: formData.studentPhoto,
    studentImage: orUndefined(formData.studentImage)
  }
}

export const listCertificate = async (page: number, limit: number) => {
  try {
    const res = await instance({
      url: '/certificate',
      method: 'GET',
      params: { page, limit }
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const addCertificate = async (formData: Partial<certificateTypes>) => {
  try {
    const data = getFormData(formData)
    const res = await instance({
      url: '/certificate/create',
      method: 'POST',
      data
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const updateCertificate = async (id: number, formData: Partial<certificateTypes>) => {
  try {
    const data = getFormData(formData)
    const res = await instance({
      url: `/certificate/${id}`,
      method: 'PUT',
      data
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const deleteCertificate = async (id: number) => {
  try {
    const res = await instance({
      url: `/certificate/${id}`,
      method: 'DELETE'
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const searchCertificate = async (q: string) => {
  try {
    const res = await instance({
      url: '/certificate/search',
      method: 'GET',
      params: { q }
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}
