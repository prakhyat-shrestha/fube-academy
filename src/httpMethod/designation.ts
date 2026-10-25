import Designation from '@/app/(dashboard)/(user)/designation/page'
import instance from '@/axiosInstance/axiosInstance'
import { DesignationTypes } from '@/types/designation'
import { useAcademicYearStore } from '@/stores/academicYearStore'

const getErrorMessage = (e: any) => {
  return e?.response?.data?.message || 'something went wrong.'
}

export const listDesignation = async (page: number, limit: number) => {
  try {
    const res = await instance({
      url: '/designation',
      method: 'GET',
      params: { page, limit }
    })
    return res.data
  } catch (err) {
    const message = getErrorMessage(err)
    throw message
  }
}

export const addDesignation = async (formData: Partial<DesignationTypes>) => {
  const data = {
    title: formData.title,
    activeStatus: formData.activeStatus,
    academicYearId: useAcademicYearStore.getState().selectedAcademicYearId
  }
  try {
    const res = await instance({
      url: '/designation/create',
      method: 'POST',
      data
    })
    return res.data
  } catch (err) {
    const message = getErrorMessage(err)
    throw message
  }
}

export const updateDesignation = async (id: number, formData: Partial<DesignationTypes>) => {
  const data = {
    title: formData.title,
    activeStatus: formData.activeStatus,
    academicYearId: useAcademicYearStore.getState().selectedAcademicYearId
  }
  try {
    const res = await instance({
      url: `/designation/${id}`,
      method: 'PUT',
      data
    })
    return res.data
  } catch (err) {
    const message = getErrorMessage(err)
    throw message
  }
}

export const deleteDesignation = async (id: number) => {
  try {
    const res = await instance({
      url: `/designation/${id}`,
      method: 'DELETE'
    })
    return res.data
  } catch (err) {
    const message = getErrorMessage(err)
    throw message
  }
}

//========================================================================
//this is only for entry multiple value
// let stored = []
// export const addDesignationValue = async () => {
//   for (let i = 0; i < 30; i++) {
//     const res = await instance({
//       url: '/designation/create',
//       method: 'POST',
//       data: {
//         title: `title${i}`
//       }
//     })
//     stored[i] = res.data
//   }
//   return stored
// }
