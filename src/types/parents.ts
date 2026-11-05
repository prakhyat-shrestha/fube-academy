export interface ParentsTypes {
  id: number
  fatherName: string
  fatherOccupation: string
  fatherPhoneNumber: string
  photo: File | null
  motherName: string
  motherOccupation: string
  motherPhoneNumber: string
  motherPhoto: File | null
  relationWithGuardian: string
  guardianName: string
  guardianEmail: string
  guardianPhoto: File | null
  guardianPhone: string
  guardianOccupation: string
  guardianAddress: string
  activeStatus: string
}
