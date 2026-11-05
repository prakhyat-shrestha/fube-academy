export type AdminType =
  | 'SUPER_ADMIN'
  | 'SCHOOL_ADMIN'
  | 'PRINCIPAL'
  | 'VICE_PRINCIPAL'
  | 'ACADEMIC_ADMIN'
  | 'ACCOUNTANT'
  | 'HR_ADMIN'
  | 'ADMISSION_ADMIN'
  | 'EXAM_CONTROLLER'
  | 'LIBRARIAN'
  | 'TRANSPORT_ADMIN'
  | 'HOSTEL_ADMIN'

export interface adminSetupTypes {
  id: number
  type: AdminType
  name: string
  Description: string
  isDeleted: boolean
  schoolId: number
  createdBy: number | null
  updatedBy: number | null
  createdAt: string
  updatedAt: string
}
