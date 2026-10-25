import Designation from '@/app/(dashboard)/(user)/designation/page'
import instance from '@/axiosInstance/axiosInstance'
import { useAcademicYearStore } from '@/stores/academicYearStore'
import { AssignClassTeacherTypes } from '@/types/assignClassTeacher'

const getErrorMessage = (e: any) => {
  return e?.response?.data?.message || 'something went wrong.'
}

export const listAssignClassTeacher = async (page: number, limit: number) => {
  try {
    // const value = addDesignationValue()
    // console.log(value)
    const res = await instance({
      url: '/assignClassTeacher',
      method: 'GET',
      params: { page, limit }
    })

    return res.data
  } catch (err) {
    throw getErrorMessage(err)
  }
}

export const addAssignClassTeacher = async (formData: Partial<AssignClassTeacherTypes>) => {
  const data = {
    classSectionId: formData.classSectionId,
    staffId: formData.staffId,
    academicYearId: useAcademicYearStore.getState().selectedAcademicYearId
  }
  try {
    const res = await instance({
      url: '/assignClassTeacher/create',
      method: 'POST',
      data
    })
    return res.data
  } catch (err) {
    throw getErrorMessage(err)
  }
}

export const updateAssignClassTeacher = async (id: number, formData: Partial<AssignClassTeacherTypes>) => {
  const data = {
    classSectionId: formData.classSectionId,
    staffId: formData.staffId,
    academicYearId: useAcademicYearStore.getState().selectedAcademicYearId
  }
  try {
    const res = await instance({
      url: `/assignClassTeacher/${id}`,
      method: 'PUT',
      data
    })
    return res.data
  } catch (err) {
    throw getErrorMessage(err)
  }
}

export const deleteAssignClassTeacher = async (id: number) => {
  try {
    const res = await instance({
      url: `/assignClassTeacher/${id}`,
      method: 'DELETE'
    })
    return res.data
  } catch (err) {
    throw getErrorMessage(err)
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
