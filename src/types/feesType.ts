export interface feesTypeTypes {
  id: number
  name: string
  feesGroupId: number
  description: string | null
  isDeleted: boolean
  schoolId: number
  createdBy: number | null
  updatedBy: number | null
  createdAt: string
  updatedAt: string
  feesGroup: feesGroupType
}

export interface feesGroupType {
  id: number
  name: string
}
