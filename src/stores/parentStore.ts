import { addParents, deleteParents, listParent, searchParents, updateParents } from '@/httpMethod/parents'
import { PaginationTypes } from '@/types/paginationTypes'
import { ParentsTypes } from '@/types/parents'
import { alertSuccess, errorMessage } from '@/views/errorHandling/error'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface parentState {
  parents: []
  isLoading: boolean
  pagination: PaginationTypes

  listOfParents: (page?: number, limit?: number) => Promise<void>
  addParents: (formData: Partial<ParentsTypes>) => Promise<Partial<ParentsTypes>>
  updateParents: (id: number, formData: Partial<ParentsTypes>) => Promise<Partial<ParentsTypes>>
  deleteParents: (id: number) => Promise<void>
  searchParents: (guardianPhone: string) => Promise<ParentsTypes>
}

export const useParentsStore = create<parentState>()(
  persist(
    (set, get) => ({
      parents: [],
      isLoading: false,
      pagination: { page: 1, limit: 100, total: 0, totalPages: 1 },

      listOfParents: async (page = get().pagination.page, limit = get().pagination.limit) => {
        set({ isLoading: true })
        try {
          const res = await listParent(page, limit)
          set({ isLoading: false, pagination: res.pagination, parents: res.data })
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      addParents: async formData => {
        set({ isLoading: true })
        try {
          const res = await addParents(formData)
          set({ isLoading: false })
          await get().listOfParents()
          alertSuccess(res.message)

          return res.data
        } catch (err: any) {
          errorMessage(err?.message || 'something went wrong')
        }
      },
      updateParents: async (id, formData) => {
        set({ isLoading: true })
        try {
          const res = await updateParents(id, formData)
          set({ isLoading: false })
          await get().listOfParents()
          alertSuccess(res.message)

          return res.data
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'something went wrong')
        }
      },
      deleteParents: async id => {
        set({ isLoading: true })
        try {
          const res = await deleteParents(id)
          set({ isLoading: false })
          await get().listOfParents()
          alertSuccess(res.message)
          return res.data
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'something went wrong')
        }
      },
      searchParents: async guardianPhone => {
        set({ isLoading: true })
        try {
          const res = await searchParents(guardianPhone)

          set({ isLoading: false })
          alertSuccess(res.message)

          return res.data[0]
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message)
        }
      }
    }),
    {
      name: 'parents-storage',
      partialize: state => ({ parents: state.parents })
    }
  )
)
