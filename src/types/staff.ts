export interface staffTypes {
  id: number
  empId: string
  name: string
  fatherName: string
  motherName: string
  gender: string
  DOB: string
  email: string
  password: string
  phone: string
  branch: string
  photo: File | null
  currentAddress: string
  permanentAddress: string
  bankName: string
  accountNumber: string
  accountName: string
  facebookLink: string
  twitterLink: string
  linkedinLink: string
  qualification: string
  experience: string
  joiningDate: string
  designationId: number
  departmentId: number
  contractType: string
  NIDNumber: string
  passportNumber: string
  drivingLicenseNumber: string
  citizenshipNumber: string
  citizenshipDoc: File | null
  joiningLetterDoc: File | null
  experienceCertificateDoc: File | null
  activeStatus: Boolean
  createdAt: string
  updatedAt: string
  designation: designationType
  department: departmentTypes
}

export interface designationType {
  id: number
  title: string
}

export interface departmentTypes {
  id: number
  title: string
}
