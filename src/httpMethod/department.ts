import instance from '@/axiosInstance/axiosInstance'
import { useAcademicYearStore } from '@/stores/academicYearStore'
import { DepartmentTypes } from '@/types/department'

const getErrorMessage = (e: any) => {
  return e?.response?.data?.message || 'something went wrong.'
}

export const listDepartment = async (page: number, limit: number) => {
  try {
    const res = await instance({
      url: '/department',
      method: 'GET',
      params: { page, limit }
    })

    return res.data
  } catch (err) {
    const message = getErrorMessage(err)
    throw message
  }
}

export const addDepartment = async (formData: Partial<DepartmentTypes>) => {
  const data = {
    title: formData.title,
    activeStatus: formData.activeStatus,
    academicYearId: useAcademicYearStore.getState().selectedAcademicYearId
  }
  try {
    const res = await instance({
      url: '/department/create',
      method: 'POST',
      data
    })
    return res.data
  } catch (err) {
    const message = getErrorMessage(err)
    throw message
  }
}

export const updateDepartment = async (id: number, formData: Partial<DepartmentTypes>) => {
  const data = {
    title: formData.title,
    activeStatus: formData.activeStatus,
    academicYearId: useAcademicYearStore.getState().selectedAcademicYearId
  }
  try {
    const res = await instance({
      url: `/department/${id}`,
      method: 'PUT',
      data
    })
    return res.data
  } catch (err) {
    const message = getErrorMessage(err)
    throw message
  }
}

export const deleteDepartment = async (id: number) => {
  try {
    const res = await instance({
      url: `/department/${id}`,
      method: 'DELETE'
    })
    return res.data
  } catch (err) {
    const message = getErrorMessage(err)
    throw message
  }
}
