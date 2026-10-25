export interface User {
  id: string
  name: string
  email: string
  phone?: string
  isActive: boolean
  schoolId: number
  createdAt: string
  updatedAt: string
}

export interface School {
  id: string
  schoolCode: string
  name: string
  email: string
  phone?: string
  address?: string
  domain?: string
  activeStatus: boolean
  isEmailVerified: boolean
  isEnabled: boolean
  createdBy: string
  updatedBy: string
  createdAt: string
  updatedAt: string
}
