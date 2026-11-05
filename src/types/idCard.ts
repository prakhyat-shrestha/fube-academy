export type IdCardLayout = 'VERTICAL' | 'HORIZONTAL'

export type IdCardApplicableUser = 'STUDENT' | 'STAFF' | 'GUARDIAN' | 'VIP' | 'OTHER'

export type IdCardPhotoStyle = 'ROUND' | 'SQUARE'

export interface idCardTypes {
  id: number
  idCardTitle: string
  adminLayout: IdCardLayout
  applicableUser: IdCardApplicableUser
  profileImage: string | null
  userPhotoStyle: IdCardPhotoStyle
  logo: string | null
  signatureFile: string | null
  admissionNo: boolean
  name: boolean
  class: boolean
  address: boolean
  photoFile: boolean
  signature: boolean
  isDeleted: boolean
  schoolId: number
  createdBy: number | null
  updatedBy: number | null
  createdAt: string
  updatedAt: string
}

// Form values: file fields accept a File (new upload) or a string (existing path from the server)
export type idCardFormTypes = Omit<Partial<idCardTypes>, 'profileImage' | 'logo' | 'signatureFile'> & {
  profileImage?: File | string | null
  logo?: File | string | null
  signatureFile?: File | string | null
}
