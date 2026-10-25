import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ClassTypes } from '@/types/class'
import { addClass, deleteClass, listClassSection, updateClassSection } from '@/httpMethod/class'
import { PaginationTypes } from '@/types/paginationTypes'
import { alertSuccess, errorMessage } from '@/views/errorHandling/error'

interface classState {
  classes: ClassTypes[] | null
  isLoading: boolean
  pagination: PaginationTypes

  addClass: (formData: Partial<ClassTypes>, sectionId: number[]) => Promise<any>
  listOfClass: (page?: number, limit?: number) => Promise<void>
  deleteClass: (id: number) => Promise<void>
  updateClass: (id: number, formData: Partial<ClassTypes>, SectionId: number[]) => Promise<any>
}

export const useClassStore = create<classState>()(
  persist(
    (set, get) => ({
      classes: null,
      isLoading: false,
      pagination: { page: 1, limit: 10, total: 0, totalPages: 1 },

      addClass: async (formData, sectionId) => {
        set({ isLoading: true })
        try {
          const res = await addClass(formData, sectionId)
          await get().listOfClass()
          set({
            isLoading: false
          })
          alertSuccess(res.message)
          return res.data
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err || 'failed to add')
        }
      },

      listOfClass: async (page = get().pagination.page, limit = get().pagination.limit) => {
        set({ isLoading: true })
        try {
          const res = await listClassSection(page, limit)
          set({
            classes: res.data,
            pagination: res.pagination,
            isLoading: false
          })
          return res.data
        } catch (err: any) {
          set({
            isLoading: false
          })
          errorMessage(err)
        }
      },

      deleteClass: async (id: number) => {
        set({ isLoading: true })
        try {
          const res = await deleteClass(id)
          set({ isLoading: false })
          await get().listOfClass()
          alertSuccess(res.message)
          return res
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err || 'successfully deleted')
        }
      },

      updateClass: async (id, formData, sectionId) => {
        set({ isLoading: true })
        try {
          const res = await updateClassSection(id, formData, sectionId)
          set({ isLoading: false })
          await get().listOfClass()
          alertSuccess(res.message)
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err || 'unable to update')
        }
      }
    }),
    {
      name: 'class-storage',
      partialize: state => ({ classes: state.classes })
    }
  )
)
