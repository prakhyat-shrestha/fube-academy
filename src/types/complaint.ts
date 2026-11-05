export interface complaintTypes {
  id: number
  complaintBy: string
  complainType: string
  complaintSource: string
  phone: string
  date: string
  actionTaken: string
  staffId: number
  Description: string
  fileName: string
  isDeleted: boolean
  schoolId: number
  createdBy: number
  updatedBy: number | null
  createdAt: string
  updatedAt: string
  assigned: AssignedTypes
}

export interface AssignedTypes {
  id: number
  name: string
}
