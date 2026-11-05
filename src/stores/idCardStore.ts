import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { idCardTypes, idCardFormTypes } from '@/types/idCard'
import { PaginationTypes } from '@/types/paginationTypes'
import { addIdCard, deleteIdCard, listIdCard, searchIdCard, updateIdCard } from '@/httpMethod/idCard'
import { alertSuccess, errorMessage } from '@/views/errorHandling/error'

interface idCardState {
  idCards: idCardTypes[]
  isLoading: boolean
  pagination: PaginationTypes

  listOfIdCard: (page?: number, limit?: number) => Promise<void>
  addIdCard: (formData: Partial<idCardFormTypes>) => Promise<void>
  updateIdCard: (id: number, formData: Partial<idCardFormTypes>) => Promise<void>
  deleteIdCard: (id: number) => Promise<void>
  searchIdCard: (search: string) => Promise<idCardTypes[] | undefined>
}

export const useIdCardStore = create<idCardState>()(
  persist(
    (set, get) => ({
      pagination: { page: 1, limit: 100, total: 0, totalPages: 1 },
      idCards: [],
      isLoading: false,
      listOfIdCard: async (page = get().pagination.page, limit = get().pagination.limit) => {
        set({ isLoading: true })
        try {
          const res = await listIdCard(page, limit)
          set({ isLoading: false, idCards: res.data, pagination: res.pagination })
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      addIdCard: async formData => {
        set({ isLoading: true })
        try {
          const res = await addIdCard(formData)
          await get().listOfIdCard()
          set({ isLoading: false })
          alertSuccess(res.message || 'ID card added successfully.')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      updateIdCard: async (id, formData) => {
        set({ isLoading: true })
        try {
          const res = await updateIdCard(id, formData)
          await get().listOfIdCard()
          set({ isLoading: false })
          alertSuccess(res.message || 'ID card updated successfully.')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      deleteIdCard: async id => {
        set({ isLoading: true })
        try {
          const res = await deleteIdCard(id)
          await get().listOfIdCard()
          set({ isLoading: false })
          alertSuccess(res.message || 'ID card deleted successfully.')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong.')
        }
      },
      searchIdCard: async search => {
        set({ isLoading: true })
        try {
          const res = await searchIdCard(search)
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
      name: 'id-card-storage',
      partialize: state => ({ idCards: state.idCards })
    }
  )
)
