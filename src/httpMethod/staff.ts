import instance from '@/axiosInstance/axiosInstance'
import { staffTypes } from '@/types/staff'
import { errorMessage, alertSuccess } from '@/views/errorHandling/error'

const getErrorMessage = (e: any) => {
  return e?.response?.data?.message || 'something went wrong.'
}

export const listStaff = async (page: number, limit: number) => {
  try {
    const res = await instance({
      url: '/staff',
      method: 'GET',
      params: { page, limit }
    })

    return res.data
  } catch (err) {
    const message = getErrorMessage(err)
    throw message
  }
}

const getData = (formData: Partial<staffTypes>) => {
  return {
    empId: formData.empId,
    name: formData.name,
    fatherName: formData.fatherName,
    motherName: formData.motherName,
    gender: formData.gender,
    DOB: formData.DOB,
    email: formData.email,
    password: formData.password,
    phone: formData.phone,
    branch: formData.branch,
    photo: formData.photo,
    currentAddress: formData.currentAddress,
    permanentAddress: formData.permanentAddress,
    bankName: formData.bankName,
    accountNumber: formData.accountNumber,
    accountName: formData.accountName,
    twitterLink: formData.twitterLink,
    linkedinLink: formData.linkedinLink,
    qualification: formData.qualification,
    experience: formData.experience,
    joiningDate: formData.joiningDate,
    designationId: formData.designationId,
    departmentId: formData.departmentId,
    contractType: formData.contractType,
    NIDNumber: formData.NIDNumber,
    passportNumber: formData.passportNumber,
    drivingLicenseNumber: formData.drivingLicenseNumber,
    citizenshipNumber: formData.citizenshipNumber,
    citizenshipDoc: formData.citizenshipDoc,
    joiningLetterDoc: formData.joiningLetterDoc,
    experienceCertificateDoc: formData.experienceCertificateDoc,
    activeStatus: formData.activeStatus
  }
}

export const addStaff = async (formData: Partial<staffTypes>) => {
  const data = getData(formData)
  try {
    const res = await instance({
      url: '/staff/create',
      method: 'POST',
      data,
      headers: { 'Content-Type': 'multipart/form-data' }
    })

    return res.data
  } catch (err) {
    const message = getErrorMessage(err)
    throw message
  }
}

export const updateStaff = async (id: number, formData: Partial<staffTypes>) => {
  const data = getData(formData)
  try {
    const res = await instance({
      url: `/staff/${id}`,
      method: 'PUT',
      data
    })

    return res.data
  } catch (err) {
    const message = getErrorMessage(err)
    throw message
  }
}

export const deleteStaff = async (id: number) => {
  try {
    const res = await instance({
      url: `/staff/${id}`,
      method: 'DELETE'
    })

    return res.data
  } catch (err) {
    const message = getErrorMessage(err)
    throw message
  }
}
