import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { addSection, deleteSection, listSection, updateSection } from '@/httpMethod/section'
import { SectionTypes } from '@/types/section'
import { PaginationTypes } from '@/types/paginationTypes'
import { alertSuccess, errorMessage } from '@/views/errorHandling/error'

interface sectionState {
  section: SectionTypes[] | null
  isLoading: boolean
  pagination: PaginationTypes

  addSection: (formData: Partial<SectionTypes>) => Promise<any>
  listOfSection: (page?: number, limit?: number) => Promise<void>
  deleteSection: (id: number) => Promise<any>
  updateSection: (id: number, formData: Partial<SectionTypes>) => Promise<any>
}

export const useSectionStore = create<sectionState>()(
  persist(
    (set, get) => ({
      section: null,
      isLoading: false,
      pagination: { page: 1, limit: 100, total: 0, totalPages: 1 },

      addSection: async formData => {
        set({
          isLoading: true
        })
        try {
          const res = await addSection(formData)

          set({
            isLoading: false
          })
          await get().listOfSection()
          alertSuccess(res.message)
          return res
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err || 'failed to add')
        }
      },

      listOfSection: async (page = get().pagination.page, limit = get().pagination.limit) => {
        set({ isLoading: true })
        try {
          const res = await listSection(page, limit)
          set({
            section: res.data,
            pagination: res.pagination,
            isLoading: false
          })
        } catch (err: any) {
          set({
            isLoading: false
          })
          errorMessage(err || 'failed to fetch data')
        }
      },

      deleteSection: async (id: number) => {
        set({ isLoading: true })
        try {
          const res = await deleteSection(id)
          set({ isLoading: false })
          await get().listOfSection()
          alertSuccess(res.message)
          return res
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err || 'unable to delete')
        }
      },

      updateSection: async (id, formData) => {
        set({ isLoading: true })
        try {
          const res = await updateSection(id, formData)
          set({ isLoading: false })
          await get().listOfSection()
          alertSuccess(res.message)
          return res
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err || 'unable to update')
        }
      }
    }),
    {
      name: 'section-storage',
      partialize: state => ({ section: state.section })
    }
  )
)
