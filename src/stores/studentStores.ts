import { addStudent, deleteStudent, listStudent, updateStudent } from '@/httpMethod/student'
import { PaginationTypes } from '@/types/paginationTypes'
import { studentTypes } from '@/types/student'
import { alertSuccess, errorMessage } from '@/views/errorHandling/error'
import { promises } from 'dns'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface studentState {
  student: studentTypes[]
  isLoading: boolean
  pagination: PaginationTypes

  listOfStudent: (page?: number, limit?: number) => Promise<void>
  addStudent: (formData: Partial<studentTypes>) => Promise<void>
  updateStudent: (id: number, formData: Partial<studentTypes>) => Promise<void>
  deleteStudent: (id: number) => Promise<void>
}

export const useStudentStore = create<studentState>()(
  persist(
    (set, get) => ({
      student: [],
      isLoading: false,
      pagination: { page: 1, limit: 100, total: 0, totalPages: 1 },

      listOfStudent: async (page = get().pagination.page, limit = get().pagination.limit) => {
        set({ isLoading: true })
        try {
          const res = await listStudent(page, limit)
          set({ isLoading: false, pagination: res.pagination, student: res.data })
          return res
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong.')
        }
      },
      addStudent: async formData => {
        set({ isLoading: true })
        try {
          const res = await addStudent(formData)
          set({ isLoading: false })
          await get().listOfStudent()
          alertSuccess(res.message)
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'something went wrong')
        }
      },
      updateStudent: async (id, formData) => {
        set({ isLoading: true })
        try {
          const res = await updateStudent(id, formData)
          set({ isLoading: false })
          await get().listOfStudent()
          alertSuccess(res.message || 'something went wrong')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },

      deleteStudent: async id => {
        set({ isLoading: true })
        try {
          const res = await deleteStudent(id)
          set({ isLoading: false })
          await get().listOfStudent()
          alertSuccess(res.message || 'something went wrong')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      }
    }),
    {
      name: 'student-storage',
      partialize: state => ({ student: state.student })
    }
  )
)
