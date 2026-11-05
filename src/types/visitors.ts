export interface VisitorTypes {
  id: number
  purpose: string
  name: string
  phone: string
  typeOfId: 'CITIZENSHIP' | 'NID' | 'PASSPORT' | 'OTHER'
  idNumber: string
  NoOfPerson: string
  Date: string
  inTime: string
  OutTime: string
  isDeleted: boolean
  schoolId: number
  createdBy: number
  updatedBy: number
  createdAt: string
  updatedAt: string
}
