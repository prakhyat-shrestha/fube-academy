import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { VisitorTypes } from '@/types/visitors'
import { PaginationTypes } from '@/types/paginationTypes'
import { addVisitor, deleteVisitor, listVisitor, updateVisitor } from '@/httpMethod/visitor'
import { alertSuccess, errorMessage } from '@/views/errorHandling/error'

interface visitorState {
  visitor: VisitorTypes[]
  isLoading: boolean
  pagination: PaginationTypes

  listOfVisitor: (page?: number, limit?: number) => Promise<void>
  addVisitor: (formData: Partial<VisitorTypes>) => Promise<void>
  updateVisitor: (id: number, formData: Partial<VisitorTypes>) => Promise<void>
  deleteVisitor: (id: number) => Promise<void>
}

export const useVisitorStore = create<visitorState>()(
  persist(
    (set, get) => ({
      pagination: { page: 1, limit: 100, total: 0, totalPages: 1 },
      visitor: [],
      isLoading: false,
      listOfVisitor: async (page = get().pagination.page, limit = get().pagination.limit) => {
        set({ isLoading: true })
        try {
          const res = await listVisitor(page, limit)
          set({ isLoading: false, visitor: res.data, pagination: res.pagination })
          return res
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      addVisitor: async formData => {
        set({ isLoading: true })
        try {
          const res = await addVisitor(formData)
          set({ isLoading: false })
          await get().listOfVisitor()
          alertSuccess(res.message || 'something went wrong after successful.')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      updateVisitor: async (id, formData) => {
        set({ isLoading: true })
        try {
          const res = await updateVisitor(id, formData)
          await get().listOfVisitor()
          set({ isLoading: false })
          alertSuccess(res.message || 'Something went wrong')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      deleteVisitor: async id => {
        set({ isLoading: true })
        try {
          const res = await deleteVisitor(id)
          set({ isLoading: false })
          await get().listOfVisitor()
          alertSuccess(res.message || 'something went wrong')
          return res
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong.')
        }
      }
    }),
    {
      name: 'visitor-storage',
      partialize: state => ({ visitor: state.visitor })
    }
  )
)
