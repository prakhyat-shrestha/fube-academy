export interface ClassTypes {
  id: number
  name: string
}

export interface SectionTypes {
  id: number
  name: string
}

export interface ClassSectionTypes {
  id: number
  class: ClassTypes
  section: SectionTypes
}

export interface ClassRoomTypes {
  id: number
  roomNumber: string
  capacity: number
  classSectionId: number
  academicYearId: number
  schoolId: number
  createdBy: number
  updatedBy: number
  createdAt: string
  updatedAt: string
  classSection: ClassSectionTypes
}
