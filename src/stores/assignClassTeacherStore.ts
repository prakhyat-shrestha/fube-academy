import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { AssignClassTeacherTypes } from '@/types/assignClassTeacher'
import { errorMessage, alertSuccess } from '@/views/errorHandling/error'
import {
  addAssignClassTeacher,
  updateAssignClassTeacher,
  deleteAssignClassTeacher,
  listAssignClassTeacher
} from '@/httpMethod/assignClassTeacher'
import { PaginationTypes } from '@/types/paginationTypes'
interface assignClassTeacherState {
  assignClassTeacher: AssignClassTeacherTypes[]
  pagination: PaginationTypes
  isLoading: boolean
  error: null

  listOfAssignClassTeacher: (page?: number, limit?: number) => Promise<void>
  addAssignClassTeacher: (formData: Partial<AssignClassTeacherTypes>) => Promise<void>
  updateAssignClassTeacher: (id: number, formData: Partial<AssignClassTeacherTypes>) => Promise<void>
  deleteAssignClassTeacher: (id: number) => Promise<void>
}

export const useAssignClassTeacherStore = create<assignClassTeacherState>()(
  persist(
    (set, get) => ({
      assignClassTeacher: [],
      pagination: { page: 1, limit: 10, total: 0, totalPages: 1 },
      isLoading: false,
      error: null,

      listOfAssignClassTeacher: async (page = get().pagination.page, limit = get().pagination.limit) => {
        set({ isLoading: true, error: null })
        try {
          const res = await listAssignClassTeacher(page, limit)
          set({ isLoading: false, error: null, assignClassTeacher: res.data, pagination: res.pagination })
          return res
        } catch (err: any) {
          set({ isLoading: false, error: err?.message })
          errorMessage(err)
        }
      },

      addAssignClassTeacher: async formData => {
        set({ isLoading: true, error: null })
        try {
          const res = await addAssignClassTeacher(formData)
          set({ isLoading: false, error: null })
          await get().listOfAssignClassTeacher()
          alertSuccess(res.message || 'Successfully added AssignClassTeacher.')
          return res
        } catch (err: any) {
          set({ isLoading: false, error: err?.message })
          errorMessage(err)
        }
      },

      updateAssignClassTeacher: async (id, formData) => {
        set({ isLoading: false, error: null })
        try {
          const res = await updateAssignClassTeacher(id, formData)

          await get().listOfAssignClassTeacher()
          set({ isLoading: false, error: null })
          alertSuccess(res.message || 'successfully updated AssignClassTeacher.')
          return res
        } catch (err: any) {
          set({ isLoading: false, error: err?.message })
          errorMessage(err)
        }
      },

      deleteAssignClassTeacher: async id => {
        set({ isLoading: false, error: null })
        try {
          const res = await deleteAssignClassTeacher(id)

          await get().listOfAssignClassTeacher()
          set({ isLoading: false, error: null })
          alertSuccess(res.message || 'successfully deleted AssignClassTeacher.')
        } catch (err: any) {
          set({ isLoading: false, error: err?.message })
          errorMessage(err)
        }
      }
    }),
    {
      name: 'assignClassTeacher-storage',
      partialize: state => ({ assignClassTeacher: state.assignClassTeacher })
    }
  )
)
