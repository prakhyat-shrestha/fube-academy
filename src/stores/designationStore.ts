import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { DesignationTypes } from '@/types/designation'
import { errorMessage, alertSuccess } from '@/views/errorHandling/error'
import { addDesignation, deleteDesignation, listDesignation, updateDesignation } from '@/httpMethod/designation'
import { PaginationTypes } from '@/types/paginationTypes'
interface designationState {
  designation: DesignationTypes[]
  pagination: PaginationTypes
  isLoading: boolean
  error: null

  listOfDesignation: (page?: number, limit?: number) => Promise<void>
  addDesignation: (formData: Partial<DesignationTypes>) => Promise<void>
  updateDesignation: (id: number, formData: Partial<DesignationTypes>) => Promise<void>
  deleteDesignation: (id: number) => Promise<void>
}

export const useDesignationStore = create<designationState>()(
  persist(
    (set, get) => ({
      designation: [],
      pagination: { page: 1, limit: 100, total: 0, totalPages: 1 },
      isLoading: false,
      error: null,

      listOfDesignation: async (page = get().pagination.page, limit = get().pagination.limit) => {
        set({ isLoading: true, error: null })
        try {
          const res = await listDesignation(page, limit)
          set({ isLoading: false, error: null, designation: res.data, pagination: res.pagination })
          return res
        } catch (err: any) {
          set({ isLoading: false, error: err?.message })
          errorMessage(err)
        }
      },

      addDesignation: async formData => {
        set({ isLoading: true, error: null })
        try {
          const res = await addDesignation(formData)
          set({ isLoading: false, error: null })
          await get().listOfDesignation()
          alertSuccess(res.message)
          return res
        } catch (err: any) {
          set({ isLoading: false, error: err?.message })
          errorMessage(err?.message)
        }
      },

      updateDesignation: async (id, formData) => {
        set({ isLoading: false, error: null })
        try {
          const res = await updateDesignation(id, formData)

          await get().listOfDesignation()
          set({ isLoading: false, error: null })
          alertSuccess(res.message ?? 'successfully updated Designation.')
          return res
        } catch (err: any) {
          set({ isLoading: false, error: err?.message })
          errorMessage(err?.message)
        }
      },

      deleteDesignation: async id => {
        set({ isLoading: false, error: null })
        try {
          const res = await deleteDesignation(id)

          await get().listOfDesignation()
          set({ isLoading: false, error: null })
          alertSuccess(res.message || 'successfully deleted Designation.')
        } catch (err: any) {
          set({ isLoading: false, error: err?.message })
          errorMessage(err?.message)
        }
      }
    }),
    {
      name: 'designation-storage',
      partialize: state => ({ designation: state.designation })
    }
  )
)
