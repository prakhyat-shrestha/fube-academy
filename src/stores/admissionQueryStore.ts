import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { admissionQueryTypes } from '@/types/admissionQuery'
import { PaginationTypes } from '@/types/paginationTypes'
import {
  addAdmissionQuery,
  deleteAdmissionQuery,
  listAdmissionQuery,
  searchAdmissionQuery,
  updateAdmissionQuery
} from '@/httpMethod/admissionQuery'
import { alertSuccess, errorMessage } from '@/views/errorHandling/error'

interface admissionQueryState {
  admissionQuery: admissionQueryTypes[]
  isLoading: boolean
  pagination: PaginationTypes

  listOfAdmissionQuery: (page?: number, limit?: number) => Promise<void>
  addAdmissionQuery: (formData: Partial<admissionQueryTypes>) => Promise<void>
  updateAdmissionQuery: (id: number, formData: Partial<admissionQueryTypes>) => Promise<void>
  deleteAdmissionQuery: (id: number) => Promise<void>
  searchAdmissionQuery: (
    startDate: string,
    endDate: string,
    activeStatus: string
  ) => Promise<Partial<admissionQueryTypes>>
}

export const useAdmissionQueryStore = create<admissionQueryState>()(
  persist(
    (set, get) => ({
      pagination: { page: 1, limit: 100, total: 0, totalPages: 1 },
      admissionQuery: [],
      isLoading: false,
      listOfAdmissionQuery: async (page = get().pagination.page, limit = get().pagination.limit) => {
        set({ isLoading: true })
        try {
          const res = await listAdmissionQuery(page, limit)
          set({ isLoading: false, admissionQuery: res.data, pagination: res.pagination })
          return res
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      addAdmissionQuery: async formData => {
        set({ isLoading: false })
        try {
          const res = await addAdmissionQuery(formData)
          set({ isLoading: false })
          await get().listOfAdmissionQuery()
          alertSuccess(res.message || 'something went wrong after successful.')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      updateAdmissionQuery: async (id, formData) => {
        set({ isLoading: true })
        try {
          const res = await updateAdmissionQuery(id, formData)
          await get().listOfAdmissionQuery()
          set({ isLoading: false })
          alertSuccess(res.message || 'Something went wrong')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      deleteAdmissionQuery: async id => {
        set({ isLoading: true })
        try {
          const res = await deleteAdmissionQuery(id)
          set({ isLoading: false })
          await get().listOfAdmissionQuery()
          alertSuccess(res.message || 'something went wrong')
          return res
        } catch (err: any) {
          errorMessage(err?.message || 'Something went wrong.')
        }
      },
      searchAdmissionQuery: async (startDate, endDate, activeStatus) => {
        set({ isLoading: false })
        try {
          const res = await searchAdmissionQuery(startDate, endDate, activeStatus)
          set({ isLoading: false })
          alertSuccess(res.message || 'Successfully Searched.')
          return res.data
        } catch (err: any) {
          errorMessage(err?.message || 'something went wrong.')
        }
      }
    }),
    {
      name: 'admissionQuery-storage',
      partialize: state => ({ admissionQuery: state.admissionQuery })
    }
  )
)
