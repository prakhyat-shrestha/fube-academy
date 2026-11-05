import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { phoneCallLogTypes } from '@/types/phoneCallLog'
import { PaginationTypes } from '@/types/paginationTypes'
import {
  addPhoneCallLog,
  deletePhoneCallLog,
  listPhoneCallLog,
  searchPhoneCallLog,
  updatePhoneCallLog
} from '@/httpMethod/phoneCallLog'
import { alertSuccess, errorMessage } from '@/views/errorHandling/error'

interface phoneCallLogState {
  phoneCallLog: phoneCallLogTypes[]
  isLoading: boolean
  pagination: PaginationTypes

  listOfPhoneCallLog: (page?: number, limit?: number) => Promise<void>
  addPhoneCallLog: (formData: Partial<phoneCallLogTypes>) => Promise<void>
  updatePhoneCallLog: (id: number, formData: Partial<phoneCallLogTypes>) => Promise<void>
  deletePhoneCallLog: (id: number) => Promise<void>
  searchPhoneCallLog: (search: string) => Promise<phoneCallLogTypes[] | undefined>
}

export const usePhoneCallLogStore = create<phoneCallLogState>()(
  persist(
    (set, get) => ({
      pagination: { page: 1, limit: 100, total: 0, totalPages: 1 },
      phoneCallLog: [],
      isLoading: false,
      listOfPhoneCallLog: async (page = get().pagination.page, limit = get().pagination.limit) => {
        set({ isLoading: true })
        try {
          const res = await listPhoneCallLog(page, limit)
          set({ isLoading: false, phoneCallLog: res.data, pagination: res.pagination })
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      addPhoneCallLog: async formData => {
        set({ isLoading: true })
        try {
          const res = await addPhoneCallLog(formData)
          await get().listOfPhoneCallLog()
          set({ isLoading: false })
          alertSuccess(res.message || 'Phone call log added successfully.')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      updatePhoneCallLog: async (id, formData) => {
        set({ isLoading: true })
        try {
          const res = await updatePhoneCallLog(id, formData)
          await get().listOfPhoneCallLog()
          set({ isLoading: false })
          alertSuccess(res.message || 'Phone call log updated successfully.')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      deletePhoneCallLog: async id => {
        set({ isLoading: true })
        try {
          const res = await deletePhoneCallLog(id)
          await get().listOfPhoneCallLog()
          set({ isLoading: false })
          alertSuccess(res.message || 'Phone call log deleted successfully.')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong.')
        }
      },
      searchPhoneCallLog: async search => {
        set({ isLoading: true })
        try {
          const res = await searchPhoneCallLog(search)
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
      name: 'phone-call-log-storage',
      partialize: state => ({ phoneCallLog: state.phoneCallLog })
    }
  )
)
