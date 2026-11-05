export interface postalDispatchTypes {
  id: number
  toTitle: string
  referenceNo: string
  address: string
  note: string
  fromTitle: string
  date: string
  fileName: string | null
  isDeleted: boolean
  schoolId: number
  createdBy: number | null
  updatedBy: number | null
  createdAt: string
  updatedAt: string
}
