import instance from '@/axiosInstance/axiosInstance'
import { useAcademicYearStore } from '@/stores/academicYearStore'
import { studentTypes } from '@/types/student'

const getErrorMessage = (err: any) => {
  return err?.response?.data?.message || 'Something went wrong'
}

const getData = (formData: Partial<studentTypes>) => {
  return {
    IEMISNumber: formData.IEMISNumber,
    academicYearId: useAcademicYearStore.getState().selectedAcademicYearId,
    classSectionId: formData.classSectionId,
    admissionNumber: formData.admissionNumber,
    admissionDate: formData.admissionDate,
    rollNumber: formData.rollNumber,
    group: formData.group,
    name: formData.name,
    gender: formData.gender,
    DOB: formData.DOB,
    religion: formData.religion,
    caste: formData.caste,
    studentPhoto: formData.studentPhoto,
    email: formData.email,
    phoneNumber: formData.phoneNumber,
    currentAddress: formData.currentAddress,
    permanentAddress: formData.permanentAddress,
    bloodGroup: formData.bloodGroup,
    category: formData.category,
    height: formData.height,
    weight: formData.weight,
    NID: formData.NID,
    nidNumber: formData.nidNumber,
    birthCertificateNumber: formData.birthCertificateNumber,
    citizenship: formData.citizenship,
    citizenshipNumber: formData.citizenshipNumber,
    additionalNotes: formData.additionalNotes,
    bankName: formData.bankName,
    bankAccountNumber: formData.bankAccountNumber,
    IFSCcode: formData.IFSCcode,
    previousSchoolDetails: formData.previousSchoolDetails,
    RouteList: formData.RouteList,
    vehicleNumber: formData.vehicleNumber,
    dormitoryName: formData.dormitoryName,
    roomNumber: formData.roomNumber,
    activeStatus: formData.activeStatus,
    parentId: formData.parentId
  }
}

export const listStudent = async (page: number, limit: number) => {
  try {
    const res = await instance({
      url: '/studentInfo',
      method: 'GET',
      params: { page, limit }
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const addStudent = async (formData: Partial<studentTypes>) => {
  try {
    const data = getData(formData)
    console.log(data)
    const res = await instance({
      url: '/studentInfo/create',
      method: 'POST',
      data,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    console.log(res)
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const updateStudent = async (id: number, formData: Partial<studentTypes>) => {
  try {
    const res = await instance({
      url: `/studentInfo/${id}`,
      method: 'PUT',
      data: getData(formData),
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}

export const deleteStudent = async (id: number) => {
  try {
    const res = await instance({
      url: `/studentInfo/${id}`,
      method: 'DELETE'
    })
    return res.data
  } catch (err: any) {
    throw new Error(getErrorMessage(err))
  }
}
