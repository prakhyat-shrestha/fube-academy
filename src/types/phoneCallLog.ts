export type CallType = 'INCOMING' | 'OUTGOING'

export interface phoneCallLogTypes {
  id: number
  name: string
  phone: string
  date: string
  followUpDate: string
  callDuration: string
  Description: string
  type: CallType
  isDeleted: boolean
  schoolId: number
  createdBy: number | null
  updatedBy: number | null
  createdAt: string
  updatedAt: string
}
