import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { SubjectTypes } from '@/types/subjectTypes'
import { addSubject, deleteSubject, listSubject, updateSubject } from '@/httpMethod/subject'
import { PaginationTypes } from '@/types/paginationTypes'
import { alertSuccess, errorMessage } from '@/views/errorHandling/error'
interface subjectState {
  subject: SubjectTypes[]
  isLoading: boolean
  pagination: PaginationTypes

  listOfSubject: (page?: number, limit?: number) => Promise<void>
  addSubject: (formData: Partial<SubjectTypes>) => Promise<void>
  updateSubject: (id: number, formData: Partial<SubjectTypes>) => Promise<void>
  deleteSubject: (id: number) => Promise<void>
}

export const useSubjectStore = create<subjectState>()(
  persist(
    (set, get) => ({
      subject: [],
      isLoading: false,
      error: null,
      pagination: { page: 1, limit: 100, total: 0, totalPages: 1 },

      listOfSubject: async (page = get().pagination.page, limit = get().pagination.limit) => {
        set({ isLoading: true })
        try {
          const res = await listSubject(page, limit)
          set({ isLoading: false, subject: res.data, pagination: res.pagination })
          return res
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err || 'failed to fetch data.')
        }
      },

      addSubject: async formData => {
        set({ isLoading: false })

        try {
          const res = await addSubject(formData)
          await get().listOfSubject()
          set({ isLoading: false })
          alertSuccess(res.message || 'successfully added.')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err || 'failed to add.')
        }
      },

      updateSubject: async (id, formData) => {
        set({ isLoading: false })
        try {
          const res = await updateSubject(id, formData)

          await get().listOfSubject()
          set({ isLoading: false })
          alertSuccess(res.message || 'successfully updated')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err || 'failed to update')
        }
      },
      deleteSubject: async (id: number) => {
        set({ isLoading: false })
        try {
          const res = await deleteSubject(id)
          await get().listOfSubject()
          set({ isLoading: false })
          alertSuccess(res.message || 'successfully deleted')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err || 'failed to delete')
        }
      }
    }),
    {
      name: 'subject-storage',
      partialize: state => ({ subject: state.subject })
    }
  )
)
