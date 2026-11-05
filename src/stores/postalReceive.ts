import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { postalReceiveTypes } from '@/types/postalReceive'
import { PaginationTypes } from '@/types/paginationTypes'
import {
  addPostalReceive,
  deletePostalReceive,
  listPostalReceive,
  searchPostalReceive,
  updatePostalReceive
} from '@/httpMethod/postalReceive'
import { alertSuccess, errorMessage } from '@/views/errorHandling/error'

interface postalReceiveState {
  postalReceive: postalReceiveTypes[]
  isLoading: boolean
  pagination: PaginationTypes

  listOfPostalReceive: (page?: number, limit?: number) => Promise<void>
  addPostalReceive: (formData: Partial<postalReceiveTypes>) => Promise<void>
  updatePostalReceive: (id: number, formData: Partial<postalReceiveTypes>) => Promise<void>
  deletePostalReceive: (id: number) => Promise<void>
  searchPostalReceive: (search: string) => Promise<postalReceiveTypes[] | undefined>
}

export const usePostalReceiveStore = create<postalReceiveState>()(
  persist(
    (set, get) => ({
      pagination: { page: 1, limit: 100, total: 0, totalPages: 1 },
      postalReceive: [],
      isLoading: false,
      listOfPostalReceive: async (page = get().pagination.page, limit = get().pagination.limit) => {
        set({ isLoading: true })
        try {
          const res = await listPostalReceive(page, limit)
          set({ isLoading: false, postalReceive: res.data, pagination: res.pagination })
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      addPostalReceive: async formData => {
        set({ isLoading: true })
        try {
          const res = await addPostalReceive(formData)
          await get().listOfPostalReceive()
          set({ isLoading: false })
          alertSuccess(res.message || 'Postal receive added successfully.')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      updatePostalReceive: async (id, formData) => {
        set({ isLoading: true })
        try {
          const res = await updatePostalReceive(id, formData)
          await get().listOfPostalReceive()
          set({ isLoading: false })
          alertSuccess(res.message || 'Postal receive updated successfully.')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      deletePostalReceive: async id => {
        set({ isLoading: true })
        try {
          const res = await deletePostalReceive(id)
          await get().listOfPostalReceive()
          set({ isLoading: false })
          alertSuccess(res.message || 'Postal receive deleted successfully.')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong.')
        }
      },
      searchPostalReceive: async search => {
        set({ isLoading: true })
        try {
          const res = await searchPostalReceive(search)
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
      name: 'postal-receive-storage',
      partialize: state => ({ postalReceive: state.postalReceive })
    }
  )
)
