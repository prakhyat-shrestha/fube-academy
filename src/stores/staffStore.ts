import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { staffTypes } from '@/types/staff'
import { errorMessage, alertSuccess } from '@/views/errorHandling/error'
import { addStaff, updateStaff, deleteStaff, listStaff } from '@/httpMethod/staff'
import { PaginationTypes } from '@/types/paginationTypes'

interface StaffState {
  Staff: staffTypes[]
  isLoading: boolean
  pagination: PaginationTypes
  error: null

  listOfStaff: (page?: number, limit?: number) => Promise<void>
  addStaff: (formdata: Partial<staffTypes>) => Promise<void>
  updateStaff: (id: number, formData: Partial<staffTypes>) => Promise<void>
  deleteStaff: (id: number) => Promise<void>
}

export const useStaffStore = create<StaffState>()(
  persist(
    (set, get) => ({
      Staff: [],
      isLoading: false,
      pagination: { page: 1, limit: 100, total: 0, totalPages: 1 },
      error: null,

      listOfStaff: async (page, limit) => {
        set({ isLoading: true, error: null })
        try {
          const res = await listStaff((page = get().pagination.page), (limit = get().pagination.limit))
          set({ isLoading: false, error: null, Staff: res.data, pagination: res.pagination })
          return res
        } catch (err: any) {
          set({ isLoading: false, error: err })
          errorMessage(err)
        }
      },

      addStaff: async formData => {
        set({ isLoading: true, error: null })
        try {
          const res = await addStaff(formData)
          set({ isLoading: false, error: null })
          await get().listOfStaff()
          alertSuccess(res.message || 'Successfully added class room.')
          return res
        } catch (err: any) {
          set({ isLoading: false, error: err })
          errorMessage(err)
        }
      },

      updateStaff: async (id, formData) => {
        set({ isLoading: false, error: null })
        try {
          const res = await updateStaff(id, formData)

          await get().listOfStaff()
          set({ isLoading: false, error: null })
          alertSuccess(res.message || 'successfully updated staff.')
          return res
        } catch (err: any) {
          set({ isLoading: false, error: err })
          errorMessage(err)
        }
      },

      deleteStaff: async id => {
        set({ isLoading: false, error: null })
        try {
          const res = await deleteStaff(id)
          set({ isLoading: false, error: null })
          await get().listOfStaff()
        } catch (err: any) {
          set({ isLoading: false, error: err })
          errorMessage(err)
        }
      }
    }),
    {
      name: 'Staff-storage',
      partialize: state => ({ Staff: state.Staff })
    }
  )
)
