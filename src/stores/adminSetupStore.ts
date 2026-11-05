import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { adminSetupTypes } from '@/types/adminSetup'
import { PaginationTypes } from '@/types/paginationTypes'
import {
  addAdminSetup,
  deleteAdminSetup,
  listAdminSetup,
  searchAdminSetup,
  updateAdminSetup
} from '@/httpMethod/adminSetup'
import { alertSuccess, errorMessage } from '@/views/errorHandling/error'

interface adminSetupState {
  adminSetup: adminSetupTypes[]
  isLoading: boolean
  pagination: PaginationTypes

  listOfAdminSetup: (page?: number, limit?: number) => Promise<void>
  addAdminSetup: (formData: Partial<adminSetupTypes>) => Promise<void>
  updateAdminSetup: (id: number, formData: Partial<adminSetupTypes>) => Promise<void>
  deleteAdminSetup: (id: number) => Promise<void>
  searchAdminSetup: (search: string) => Promise<adminSetupTypes[] | undefined>
}

export const useAdminSetupStore = create<adminSetupState>()(
  persist(
    (set, get) => ({
      pagination: { page: 1, limit: 100, total: 0, totalPages: 1 },
      adminSetup: [],
      isLoading: false,
      listOfAdminSetup: async (page = get().pagination.page, limit = get().pagination.limit) => {
        set({ isLoading: true })
        try {
          const res = await listAdminSetup(page, limit)
          set({ isLoading: false, adminSetup: res.data, pagination: res.pagination })
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      addAdminSetup: async formData => {
        set({ isLoading: true })
        try {
          const res = await addAdminSetup(formData)
          await get().listOfAdminSetup()
          set({ isLoading: false })
          alertSuccess(res.message || 'Admin setup added successfully.')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      updateAdminSetup: async (id, formData) => {
        set({ isLoading: true })
        try {
          const res = await updateAdminSetup(id, formData)
          await get().listOfAdminSetup()
          set({ isLoading: false })
          alertSuccess(res.message || 'Admin setup updated successfully.')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      deleteAdminSetup: async id => {
        set({ isLoading: true })
        try {
          const res = await deleteAdminSetup(id)
          await get().listOfAdminSetup()
          set({ isLoading: false })
          alertSuccess(res.message || 'Admin setup deleted successfully.')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong.')
        }
      },
      searchAdminSetup: async search => {
        set({ isLoading: true })
        try {
          const res = await searchAdminSetup(search)
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
      name: 'admin-setup-storage',
      partialize: state => ({ adminSetup: state.adminSetup })
    }
  )
)
