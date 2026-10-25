 export interface AssignSubjectTypes {
  id: number
  assignClassTeacherId: number
  subjectId: number
  schoolId: number
  createdBy: number
  updatedBy: number | null
  createdAt: string
  updatedAt: string
  assignClassTeacher: AssignClassTeacherTypes
  subject: SubjectTypes
}

export interface AssignClassTeacherTypes {
  id: number
  classSection: ClassSectionTypes
  staff: StaffTypes
}

export interface ClassSectionTypes {
  id: number
  class: ClassTypes
  section: SectionTypes
}

export interface ClassTypes {
  id: number
  name: string
}

export interface SectionTypes {
  id: number
  name: string
}

export interface StaffTypes {
  id: number
  name: string
}

export interface SubjectTypes {
  id: number
  name: string
}
