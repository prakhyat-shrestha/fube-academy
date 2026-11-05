export type PageLayout = 'A4_PORTRAIT' | 'A4_LANDSCAPE' | 'CUSTOM'

export interface certificateTypes {
  id: number
  certificateName: string
  HeaderLeftText: string | null
  date: string
  body: string | null
  bodyFont: string | null
  fontSize: number
  footerLeftText: string | null
  FooterCenterText: string | null
  FooterRightText: string | null
  pageLayout: PageLayout
  studentPhoto: boolean
  studentImage: string | null
  isDeleted: boolean
  schoolId: number
  createdBy: number | null
  updatedBy: number | null
  createdAt: string
  updatedAt: string
}
