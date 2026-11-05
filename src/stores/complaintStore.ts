import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { complaintTypes } from '@/types/complaint'
import { PaginationTypes } from '@/types/paginationTypes'
import { addComplaint, deleteComplaint, listComplaint, searchComplaint, updateComplaint } from '@/httpMethod/complaint'
import { alertSuccess, errorMessage } from '@/views/errorHandling/error'

interface complaintState {
  complaint: complaintTypes[]
  isLoading: boolean
  pagination: PaginationTypes

  listOfComplaint: (page?: number, limit?: number) => Promise<void>
  addComplaint: (formData: Partial<complaintTypes>) => Promise<void>
  updateComplaint: (id: number, formData: Partial<complaintTypes>) => Promise<void>
  deleteComplaint: (id: number) => Promise<void>
  searchComplaint: (search: string) => Promise<complaintTypes[] | undefined>
}

export const useComplaintStore = create<complaintState>()(
  persist(
    (set, get) => ({
      pagination: { page: 1, limit: 100, total: 0, totalPages: 1 },
      complaint: [],
      isLoading: false,
      listOfComplaint: async (page = get().pagination.page, limit = get().pagination.limit) => {
        set({ isLoading: true })
        try {
          const res = await listComplaint(page, limit)
          set({ isLoading: false, complaint: res.data, pagination: res.pagination })
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      addComplaint: async formData => {
        set({ isLoading: true })
        try {
          const res = await addComplaint(formData)
          await get().listOfComplaint()
          set({ isLoading: false })
          alertSuccess(res.message || 'Complaint added successfully.')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      updateComplaint: async (id, formData) => {
        set({ isLoading: true })
        try {
          const res = await updateComplaint(id, formData)
          await get().listOfComplaint()
          set({ isLoading: false })
          alertSuccess(res.message || 'Complaint updated successfully.')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong')
        }
      },
      deleteComplaint: async id => {
        set({ isLoading: true })
        try {
          const res = await deleteComplaint(id)
          await get().listOfComplaint()
          set({ isLoading: false })
          alertSuccess(res.message || 'Complaint deleted successfully.')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err?.message || 'Something went wrong.')
        }
      },
      searchComplaint: async search => {
        set({ isLoading: true })
        try {
          const res = await searchComplaint(search)
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
      name: 'complaint-storage',
      partialize: state => ({ complaint: state.complaint })
    }
  )
)
