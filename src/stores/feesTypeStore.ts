import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { feesTypeTypes } from '@/types/feesType'
import { PaginationTypes } from '@/types/paginationTypes'
import { addFeesType, deleteFeesType, listFeesType, searchFeesType, updateFeesType } from '@/httpMethod/feesType'
import { alertSuccess, errorMessage } from '@/views/errorHandling/error'

interface feesTypeState {
  feesType: feesTypeTypes[]
  isLoading: boolean
  pagination: PaginationTypes

  listOfFeesType: (page?: number, limit?: number) => Promise<void>
  addFeesType: (formData: Partial<feesTypeTypes>) => Promise<void>
  updateFeesType: (id: number, formData: Partial<feesTypeTypes>) => Promise<void>
  deleteFeesType: (id: number) => Promise<void>
  searchFeesType: (search: string) => Promise<feesTypeTypes[] | undefined>
}

export const useFeesTypeStore = create<feesTypeState>()(
  persist(
    (set, get) => ({
      pagination: { page: 1, limit: 100, total: 0, totalPages: 1 },
      feesType: [],
      isLoading: false,
      listOfFeesType: async (page = get().pagination.page, limit = get().pagination.limit) => {
        set({ isLoading: true })
        try {
          const res = await listFeesType(page, limit)
          set({ isLoading: false, feesType: res.data, pagination: res.pagination })
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      addFeesType: async formData => {
        set({ isLoading: true })
        try {
          const res = await addFeesType(formData)
          await get().listOfFeesType()
          set({ isLoading: false })
          alertSuccess(res.message || 'Fees type added successfully.')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      updateFeesType: async (id, formData) => {
        set({ isLoading: true })
        try {
          const res = await updateFeesType(id, formData)
          await get().listOfFeesType()
          set({ isLoading: false })
          alertSuccess(res.message || 'Fees type updated successfully.')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      deleteFeesType: async id => {
        set({ isLoading: true })
        try {
          const res = await deleteFeesType(id)
          await get().listOfFeesType()
          set({ isLoading: false })
          alertSuccess(res.message || 'Fees type deleted successfully.')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong.')
        }
      },
      searchFeesType: async search => {
        set({ isLoading: true })
        try {
          const res = await searchFeesType(search)
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
      name: 'fees-type-storage',
      partialize: state => ({ feesType: state.feesType })
    }
  )
)
