import instance from '@/axiosInstance/axiosInstance'
import { errorMessage, alertSuccess } from '@/views/errorHandling/error'
import { useAcademicYearStore } from '@/stores/academicYearStore'
import { SubjectTypes } from '@/types/subjectTypes'

const getErrorMessage = (e: any) => {
  return e?.response?.data?.message || 'something went wrong.'
}

export const listSubject = async (page: number, limit: number) => {
  try {
    const res = await instance({
      url: '/subject',
      method: 'GET',
      params: { page, limit }
    })
    return res.data
  } catch (err: any) {
    const message = getErrorMessage(err)
    throw message
  }
}

export const addSubject = async (formData: Partial<SubjectTypes>) => {
  const data = {
    name: formData.name,
    subjectType: formData.subjectType,
    code: formData.code,
    creditHour: formData.creditHour,
    academicYearId: useAcademicYearStore.getState().selectedAcademicYearId
  }
  try {
    const res = await instance({
      url: '/subject/create',
      method: 'POST',
      data
    })
    return res.data
  } catch (err) {
    const message = getErrorMessage(err)
    throw message
  }
}

export const updateSubject = async (id: number, formData: Partial<SubjectTypes>) => {
  const data = {
    name: formData.name,
    subjectType: formData.subjectType,
    code: formData.code,
    creditHour: formData.creditHour,
    academicYearId: useAcademicYearStore.getState().selectedAcademicYearId
  }
  try {
    const res = await instance({
      url: `/subject/${id}`,
      method: 'PUT',
      data
    })
    return res.data
  } catch (err) {
    const message = getErrorMessage(err)
    throw message
  }
}

export const deleteSubject = async (id: number) => {
  try {
    const res = await instance({
      url: `/subject/${id}`,
      method: 'DELETE'
    })
    return res.data
  } catch (err) {
    const message = getErrorMessage(err)
    throw message
  }
}
