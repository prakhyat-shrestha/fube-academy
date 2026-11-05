export interface studentTypes {
  id: number
  IEMISNumber: string
  academicYearId: number
  classSectionId: number | string
  admissionNumber: string
  admissionDate: string
  rollNumber: string
  group: string
  name: string
  gender: string
  DOB: string
  religion: string
  caste: string
  studentPhoto: File | null
  email: string
  phoneNumber: string
  currentAddress: string
  permanentAddress: string
  bloodGroup: string
  category: string
  height: string
  weight: string
  NID: File | null
  nidNumber: string
  birthCertificateNumber: string
  citizenship: File | null
  citizenshipNumber: string
  additionalNotes: string
  bankName: string
  bankAccountNumber: string
  IFSCcode: string
  previousSchoolDetails: string
  RouteList: string
  vehicleNumber: string
  dormitoryName: string
  roomNumber: string
  activeStatus: boolean
  parentId: number
  classSection: ClassSectionTypes
  parents: ParentsTypes
}

export interface ClassSectionTypes {
  id: number
  class: ClassTypes
  section: SectionTypes
}

export interface ClassTypes {
  id: number
  name: string
}

export interface SectionTypes {
  id: number
  name: string
}
export interface ParentsTypes {
  id: number
  guardianPhone: string
  guardianName: string
}
