import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { AssignSubjectTypes } from '@/types/assignSubject'
import { errorMessage, alertSuccess } from '@/views/errorHandling/error'
import {
  addAssignSubject,
  updateAssignSubject,
  deleteAssignSubject,
  listAssignSubject,
  searchAssignSubject
} from '@/httpMethod/assignSubject'
import { PaginationTypes } from '@/types/paginationTypes'
interface assignSubjectState {
  assignSubject: AssignSubjectTypes[]
  pagination: PaginationTypes
  isLoading: boolean
  error: null

  listOfAssignSubject: (page?: number, limit?: number) => Promise<void>
  addAssignSubject: (formData: Partial<AssignSubjectTypes>) => Promise<void>
  updateAssignSubject: (id: number, formData: Partial<AssignSubjectTypes>) => Promise<void>
  deleteAssignSubject: (id: number) => Promise<void>
  searchAssignSubject: (classSectionId: number) => Promise<void>
}

export const useAssignSubjectStore = create<assignSubjectState>()(
  persist(
    (set, get) => ({
      assignSubject: [],
      pagination: { page: 1, limit: 10, total: 0, totalPages: 1 },
      isLoading: false,
      error: null,

      listOfAssignSubject: async (page = get().pagination.page, limit = get().pagination.limit) => {
        set({ isLoading: true, error: null })
        try {
          const res = await listAssignSubject(page, limit)
          set({ isLoading: false, error: null, assignSubject: res.data, pagination: res.pagination })
          return res
        } catch (err: any) {
          set({ isLoading: false, error: err?.message })
          errorMessage(err?.message)
        }
      },

      addAssignSubject: async formData => {
        set({ isLoading: true, error: null })
        try {
          const res = await addAssignSubject(formData)
          set({ isLoading: false, error: null })
          await get().listOfAssignSubject()
          alertSuccess('Successfully added AssignSubject.')
          return res
        } catch (err: any) {
          set({ isLoading: false, error: err?.message })
          errorMessage(err?.message)
        }
      },

      updateAssignSubject: async (id, formData) => {
        set({ isLoading: false, error: null })
        try {
          const res = await updateAssignSubject(id, formData)

          await get().listOfAssignSubject()
          set({ isLoading: false, error: null })
          alertSuccess('successfully updated AssignSubject.')
          return res
        } catch (err: any) {
          set({ isLoading: false, error: err?.message })
          errorMessage(err?.message)
        }
      },

      deleteAssignSubject: async id => {
        set({ isLoading: false, error: null })
        try {
          const res = await deleteAssignSubject(id)

          await get().listOfAssignSubject()
          set({ isLoading: false, error: null })
          alertSuccess(res.message || 'successfully deleted AssignSubject.')
        } catch (err: any) {
          set({ isLoading: false, error: err?.message })
          errorMessage(err?.message)
        }
      },

      searchAssignSubject: async classSectionId => {
        set({ isLoading: true, error: null })
        try {
          const res = await searchAssignSubject(classSectionId)
          set({ isLoading: false, error: null, assignSubject: res.data })
          alertSuccess(res.message)
        } catch (err: any) {
          set({ isLoading: false, error: err?.message })
          errorMessage(err?.message)
        }
      }
    }),
    {
      name: 'assignSubject-storage',
      partialize: state => ({ assignSubject: state.assignSubject })
    }
  )
)
