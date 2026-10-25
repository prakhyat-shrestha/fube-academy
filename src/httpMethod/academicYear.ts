import instance from '@/axiosInstance/axiosInstance'
import { errorMessage, alertSuccess } from '@/views/errorHandling/error'

const getErrorMessage = (e: any) => {
  return e?.response?.data?.message || 'something went wrong'
}

export const addAcademicYear = async (year: string, title: string, startingDate: string, endingDate: string) => {
  const data = {
    year,
    title,
    startingDate,
    endingDate
  }
  try {
    const res = await instance({
      url: '/academicYear/create',
      method: 'POST',
      data
    })
    alertSuccess('Successfully created')
    return res.data
  } catch (e: any) {
    const message = getErrorMessage(e)
    errorMessage(message)
  }
}

export const listAcademicYear = async () => {
  try {
    const res = await instance({
      url: '/academicYear',
      method: 'GET'
    })
    return res.data
  } catch (e: any) {
    errorMessage(getErrorMessage(e))
  }
}

export const updateAcademicYear = async (
  id: number,
  year: string,
  title: string,
  startingDate: string,
  endingDate: string
) => {
  const data = {
    year,
    title,
    startingDate,
    endingDate
  }
  try {
    const res = await instance({
      url: `/academicYear/${id}`,
      method: 'PUT',
      data
    })
    alertSuccess('SuccessFully updated')
    return res.data
  } catch (e: any) {
    errorMessage(getErrorMessage(e))
  }
}

export const deleteAcademicYear = async (id: number) => {
  try {
    const res = await instance({
      url: `/academicYear`,
      method: 'DELETE'
    })
    alertSuccess('SuccessFully deleted')
    return res.data
  } catch (e) {
    const message = getErrorMessage(e)
    errorMessage(message)
  }
}
