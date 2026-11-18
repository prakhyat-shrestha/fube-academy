import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { feesGroupTypes } from '@/types/feesGroup'
import { PaginationTypes } from '@/types/paginationTypes'
import { addFeesGroup, deleteFeesGroup, listFeesGroup, searchFeesGroup, updateFeesGroup } from '@/httpMethod/feesGroup'
import { alertSuccess, errorMessage } from '@/views/errorHandling/error'

interface feesGroupState {
  feesGroup: feesGroupTypes[]
  isLoading: boolean
  pagination: PaginationTypes

  listOfFeesGroup: (page?: number, limit?: number) => Promise<void>
  addFeesGroup: (formData: Partial<feesGroupTypes>) => Promise<boolean>
  updateFeesGroup: (id: number, formData: Partial<feesGroupTypes>) => Promise<boolean>
  deleteFeesGroup: (id: number) => Promise<boolean>
  searchFeesGroup: (search: string) => Promise<feesGroupTypes[] | undefined>
}

export const useFeesGroupStore = create<feesGroupState>()(
  persist(
    (set, get) => ({
      pagination: { page: 1, limit: 100, total: 0, totalPages: 1 },
      feesGroup: [],
      isLoading: false,
      listOfFeesGroup: async (page = get().pagination.page, limit = get().pagination.limit) => {
        set({ isLoading: true })
        try {
          const res = await listFeesGroup(page, limit)
          set({ isLoading: false, feesGroup: res.data, pagination: res.pagination })
        } catch (err: any) {
          // The API answers "Empty Data" when there are no records, so clear the stale list
          if (err?.message === 'Empty Data') {
            set(state => ({
              isLoading: false,
              feesGroup: [],
              pagination: { ...state.pagination, page: 1, total: 0, totalPages: 1 }
            }))
            return
          }
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      addFeesGroup: async formData => {
        set({ isLoading: true })
        try {
          const res = await addFeesGroup(formData)
          await get().listOfFeesGroup()
          set({ isLoading: false })
          alertSuccess(res.message || 'Fees group added successfully.')
          return true
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
          return false
        }
      },
      updateFeesGroup: async (id, formData) => {
        set({ isLoading: true })
        try {
          const res = await updateFeesGroup(id, formData)
          await get().listOfFeesGroup()
          set({ isLoading: false })
          alertSuccess(res.message || 'Fees group updated successfully.')
          return true
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
          return false
        }
      },
      deleteFeesGroup: async id => {
        set({ isLoading: true })
        try {
          const res = await deleteFeesGroup(id)
          // If the last row of a later page was deleted, step back one page
          const { feesGroup, pagination } = get()
          const page = feesGroup.length === 1 && pagination.page > 1 ? pagination.page - 1 : pagination.page
          await get().listOfFeesGroup(page)
          set({ isLoading: false })
          alertSuccess(res.message || 'Fees group deleted successfully.')
          return true
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong.')
          return false
        }
      },
      searchFeesGroup: async search => {
        set({ isLoading: true })
        try {
          const res = await searchFeesGroup(search)
          set({ isLoading: false })
          return res.data
        } catch (err: any) {
          set({ isLoading: false })
          // "Empty Data" just means no matches, so no error toast
          if (err?.message === 'Empty Data') return []
          errorMessage(err?.message || 'Something went wrong.')
        }
      }
    }),
    {
      name: 'fees-group-storage',
      partialize: state => ({ feesGroup: state.feesGroup })
    }
  )
)
