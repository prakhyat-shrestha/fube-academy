export interface admissionQueryTypes {
  id: number
  name: string
  email: string
  phone: string
  address: string
  description: string
  nextFollowUpDate: string
  reference: string
  source: string
  numberOfChild: string
  activeStatus: boolean
  staffId: number
  classId: number
  createdAt: string
  updatedAt: string
  assigned: AssignedTypes
  class: ClassTypes
}

export interface AssignedTypes {
  id: number
  name: string
}

export interface ClassTypes {
  id: number
  name: string
}
