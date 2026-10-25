import instance from '@/axiosInstance/axiosInstance'
import { errorMessage, alertSuccess } from '@/views/errorHandling/error'
import { useAuthStore } from '@/stores/authStores'
import { SectionTypes } from '@/types/section'

const getErrorMessage = (e: any) => {
  return e?.response?.data?.message || 'something went wrong'
}

export const addSection = async (formData: Partial<SectionTypes>) => {
  const data = {
    name: formData.name,
    academicYearId: formData.academicYearId,
    activeStatus: formData?.activeStatus
  }
  try {
    const res = await instance({
      url: '/section/create',
      method: 'POST',
      data
    })
    return res.data
  } catch (e: any) {
    const message = getErrorMessage(e)
    throw message
  }
}

export const listSection = async (page: number, limit: number) => {
  try {
    const res = await instance({
      url: '/section',
      method: 'GET',
      params: { page, limit }
    })

    return res.data
  } catch (e: any) {
    const message = getErrorMessage(e)
    throw message
  }
}

export const updateSection = async (id: number, formData: Partial<SectionTypes>) => {
  const data = {
    name: formData.name,
    academicYearId: formData.academicYearId,
    activeStatus: formData.activeStatus
  }
  try {
    const res = await instance({
      url: `/section/${id}`,
      method: 'PUT',
      data
    })
    return res.data
  } catch (err: any) {
    const message = getErrorMessage(err)
    throw message
  }
}

export const deleteSection = async (id: number) => {
  try {
    const res = await instance({
      url: `/section/${id}`,
      method: 'DELETE'
    })
    return res.data
  } catch (err: any) {
    const message = getErrorMessage(err)
    throw message
  }
}
