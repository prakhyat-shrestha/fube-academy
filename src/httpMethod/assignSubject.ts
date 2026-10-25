import instance from '@/axiosInstance/axiosInstance'
import { useAcademicYearStore } from '@/stores/academicYearStore'
import { AssignSubjectTypes } from '@/types/assignSubject'

const getErrorMessage = (e: any) => {
  return e?.response?.data?.message || 'something went wrong.'
}

export const listAssignSubject = async (page: number, limit: number) => {
  try {
    const res = await instance({
      url: '/assignSubject',
      method: 'GET',
      params: { page, limit }
    })

    return res.data
  } catch (err) {
    throw new Error(getErrorMessage(err))
  }
}

export const addAssignSubject = async (formData: Partial<AssignSubjectTypes>) => {
  const data = {
    assignClassTeacherId: formData.assignClassTeacherId,
    subjectId: formData.subjectId,
    academicYearId: useAcademicYearStore.getState().selectedAcademicYearId
  }
  try {
    const res = await instance({
      url: '/assignSubject/create',
      method: 'POST',
      data
    })
    return res.data
  } catch (err) {
    throw new Error(getErrorMessage(err))
  }
}

export const updateAssignSubject = async (id: number, formData: Partial<AssignSubjectTypes>) => {
  const data = {
    assignClassTeacherId: formData.assignClassTeacherId,
    subjectId: formData.subjectId,
    academicYearId: useAcademicYearStore.getState().selectedAcademicYearId
  }
  try {
    const res = await instance({
      url: `/assignSubject/${id}`,
      method: 'PUT',
      data
    })
    return res.data
  } catch (err) {
    throw new Error(getErrorMessage(err))
  }
}

export const deleteAssignSubject = async (id: number) => {
  try {
    const res = await instance({
      url: `/assignSubject/${id}`,
      method: 'DELETE'
    })
    return res.data
  } catch (err) {
    throw new Error(getErrorMessage(err))
  }
}

export const searchAssignSubject = async (classSectionId: number) => {
  try {
    const res = await instance({
      url: '/assignSubject/search',
      method: 'GET',
      params: { classSectionId }
    })
    return res.data
  } catch (err) {
    throw new Error(getErrorMessage(err))
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
