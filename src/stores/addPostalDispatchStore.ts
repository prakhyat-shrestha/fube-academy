import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { postalDispatchTypes } from '@/types/addPostalDispatch'
import { PaginationTypes } from '@/types/paginationTypes'
import {
  addPostalDispatch,
  deletePostalDispatch,
  listPostalDispatch,
  searchPostalDispatch,
  updatePostalDispatch
} from '@/httpMethod/addPostalDispatch'
import { alertSuccess, errorMessage } from '@/views/errorHandling/error'

interface postalDispatchState {
  postalDispatch: postalDispatchTypes[]
  isLoading: boolean
  pagination: PaginationTypes

  listOfPostalDispatch: (page?: number, limit?: number) => Promise<void>
  addPostalDispatch: (formData: Partial<postalDispatchTypes>) => Promise<void>
  updatePostalDispatch: (id: number, formData: Partial<postalDispatchTypes>) => Promise<void>
  deletePostalDispatch: (id: number) => Promise<void>
  searchPostalDispatch: (search: string) => Promise<postalDispatchTypes[] | undefined>
}

export const usePostalDispatchStore = create<postalDispatchState>()(
  persist(
    (set, get) => ({
      pagination: { page: 1, limit: 100, total: 0, totalPages: 1 },
      postalDispatch: [],
      isLoading: false,
      listOfPostalDispatch: async (page = get().pagination.page, limit = get().pagination.limit) => {
        set({ isLoading: true })
        try {
          const res = await listPostalDispatch(page, limit)
          set({ isLoading: false, postalDispatch: res.data, pagination: res.pagination })
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      addPostalDispatch: async formData => {
        set({ isLoading: true })
        try {
          const res = await addPostalDispatch(formData)
          await get().listOfPostalDispatch()
          set({ isLoading: false })
          alertSuccess(res.message || 'Postal dispatch added successfully.')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      updatePostalDispatch: async (id, formData) => {
        set({ isLoading: true })
        try {
          const res = await updatePostalDispatch(id, formData)
          await get().listOfPostalDispatch()
          set({ isLoading: false })
          alertSuccess(res.message || 'Postal dispatch updated successfully.')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      deletePostalDispatch: async id => {
        set({ isLoading: true })
        try {
          const res = await deletePostalDispatch(id)
          await get().listOfPostalDispatch()
          set({ isLoading: false })
          alertSuccess(res.message || 'Postal dispatch deleted successfully.')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong.')
        }
      },
      searchPostalDispatch: async search => {
        set({ isLoading: true })
        try {
          const res = await searchPostalDispatch(search)
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
      name: 'postal-dispatch-storage',
      partialize: state => ({ postalDispatch: state.postalDispatch })
    }
  )
)
