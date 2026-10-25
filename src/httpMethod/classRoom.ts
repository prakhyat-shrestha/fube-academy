import instance from '@/axiosInstance/axiosInstance'
import { errorMessage, alertSuccess } from '@/views/errorHandling/error'
import { useAcademicYearStore } from '@/stores/academicYearStore'
import { ClassRoomTypes } from '@/types/classRoom'

const getErrorMessage = (e: any) => {
  return e?.response?.data?.message || 'something went wrong.'
}

export const listClassRoom = async (page: number, limit: number) => {
  try {
    const res = await instance({
      url: '/classRoom',
      method: 'GET',
      params: { page, limit }
    })
    return res.data
  } catch (err) {
    const message = getErrorMessage(err)
    throw message
  }
}

export const addClassRoom = async (formData: Partial<ClassRoomTypes>) => {
  const data = {
    roomNumber: formData.roomNumber,
    capacity: formData.capacity,
    classSectionId: formData.classSectionId,
    academicYearId: useAcademicYearStore.getState().selectedAcademicYearId
  }
  try {
    const res = await instance({
      url: '/classRoom/create',
      method: 'POST',
      data
    })
    return res.data
  } catch (err) {
    const message = getErrorMessage(err)
    throw message
  }
}

export const updateClassRoom = async (id: number, formData: Partial<ClassRoomTypes>) => {
  const data = {
    roomNumber: formData.roomNumber,
    capacity: formData.capacity,
    classSectionId: formData.classSectionId,
    academicYearId: useAcademicYearStore.getState().selectedAcademicYearId
  }
  try {
    const res = await instance({
      url: `/classRoom/${id}`,
      method: 'PUT',
      data
    })
    return res.data
  } catch (err) {
    const message = getErrorMessage(err)
    throw message
  }
}

export const deleteClassRoom = async (id: number) => {
  try {
    const res = await instance({
      url: `/classRoom/${id}`,
      method: 'DELETE'
    })
    return res.data
  } catch (err) {
    //throw new Error(getErrorMessage(err))
    const message = getErrorMessage(err)
    throw message
  }
}
