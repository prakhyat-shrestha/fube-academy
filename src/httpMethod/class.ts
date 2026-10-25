import instance from '@/axiosInstance/axiosInstance'
import { ClassTypes } from '@/types/class'

import { useAcademicYearStore } from '@/stores/academicYearStore'

const getErrorMessage = (e: any) => {
  return e?.response?.data?.message || 'something went wrong'
}
export const addClass = async (formData: Partial<ClassTypes>, sectionId: number[]) => {
  const data = {
    name: formData.name,
    activeStatus: formData?.activeStatus || true,
    academicYearId: useAcademicYearStore.getState().selectedAcademicYearId,
    sectionId
  }

  try {
    const res = await instance({
      url: '/class/create',
      method: 'POST',
      data
    })
    return res.data
  } catch (e: any) {
    const message = getErrorMessage(e)
    throw message
  }
}

export const listClassSection = async (page: number, limit: number) => {
  try {
    const res = await instance({
      url: '/class',
      method: 'GET',
      params: { page, limit }
    })

    return res.data
  } catch (e: any) {
    const message = getErrorMessage(e)
    throw message
  }
}

export const updateClassSection = async (id: number, formData: Partial<ClassTypes>, sectionId: number[]) => {
  const data = {
    name: formData.name,
    activeStatus: formData?.activeStatus,
    academicYearId: useAcademicYearStore.getState().selectedAcademicYearId,
    sectionId
  }

  try {
    const res = await instance({
      url: `/class/${id}`,
      method: 'PUT',
      data
    })
    return res.data
  } catch (err: any) {
    const message = getErrorMessage(err)
    throw message
  }
}

export const deleteClass = async (id: number) => {
  try {
    const res = await instance({
      url: `/class/${id}`,
      method: 'DELETE'
    })
    return res.data
  } catch (err: any) {
    const message = getErrorMessage(err)
    throw message
  }
}
