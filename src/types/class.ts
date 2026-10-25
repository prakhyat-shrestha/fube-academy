export interface ClassTypes {
  id: number
  name: string
  activeStatus: boolean
  sections: SecTypes[]
}

export interface SecTypes {
  classSectionId: number
  id: number
  name: string
  capacity: number | null
  activeStatus: boolean
  studentCount: number
}
