import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { certificateTypes } from '@/types/certificate'
import { PaginationTypes } from '@/types/paginationTypes'
import {
  addCertificate,
  deleteCertificate,
  listCertificate,
  searchCertificate,
  updateCertificate
} from '@/httpMethod/certificate'
import { alertSuccess, errorMessage } from '@/views/errorHandling/error'

interface certificateState {
  certificate: certificateTypes[]
  isLoading: boolean
  pagination: PaginationTypes

  listOfCertificate: (page?: number, limit?: number) => Promise<void>
  addCertificate: (formData: Partial<certificateTypes>) => Promise<void>
  updateCertificate: (id: number, formData: Partial<certificateTypes>) => Promise<void>
  deleteCertificate: (id: number) => Promise<void>
  searchCertificate: (search: string) => Promise<certificateTypes[] | undefined>
}

export const useCertificateStore = create<certificateState>()(
  persist(
    (set, get) => ({
      pagination: { page: 1, limit: 100, total: 0, totalPages: 1 },
      certificate: [],
      isLoading: false,
      listOfCertificate: async (page = get().pagination.page, limit = get().pagination.limit) => {
        set({ isLoading: true })
        try {
          const res = await listCertificate(page, limit)
          set({ isLoading: false, certificate: res.data, pagination: res.pagination })
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      addCertificate: async formData => {
        set({ isLoading: true })
        try {
          const res = await addCertificate(formData)
          await get().listOfCertificate()
          set({ isLoading: false })
          alertSuccess(res.message || 'Certificate added successfully.')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      updateCertificate: async (id, formData) => {
        set({ isLoading: true })
        try {
          const res = await updateCertificate(id, formData)
          await get().listOfCertificate()
          set({ isLoading: false })
          alertSuccess(res.message || 'Certificate updated successfully.')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      deleteCertificate: async id => {
        set({ isLoading: true })
        try {
          const res = await deleteCertificate(id)
          await get().listOfCertificate()
          set({ isLoading: false })
          alertSuccess(res.message || 'Certificate deleted successfully.')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong.')
        }
      },
      searchCertificate: async search => {
        set({ isLoading: true })
        try {
          const res = await searchCertificate(search)
          set({ isLoading: false })
          alertSuccess(res.message || 'Successfully searched.')
          return res.data
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong.')
        }
      }
    }),
    {
      name: 'certificate-storage',
      partialize: state => ({ certificate: state.certificate })
    }
  )
)
