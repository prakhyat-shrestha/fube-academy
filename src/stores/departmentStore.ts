import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { DesignationTypes } from '@/types/designation'
import { errorMessage, alertSuccess } from '@/views/errorHandling/error'
import { addDepartment, deleteDepartment, listDepartment, updateDepartment } from '@/httpMethod/department'
import { DepartmentTypes } from '@/types/department'
import { PaginationTypes } from '@/types/paginationTypes'

interface departmentState {
  department: DepartmentTypes[]
  isLoading: boolean
  pagination: PaginationTypes
  error: null

  listOfDepartment: (page?: number, limit?: number) => Promise<void>
  addDepartment: (formData: Partial<DepartmentTypes>) => Promise<void>
  updateDepartment: (id: number, formData: Partial<DepartmentTypes>) => Promise<void>
  deleteDepartment: (id: number) => Promise<void>
}

export const useDepartmentStore = create<departmentState>()(
  persist(
    (set, get) => ({
      department: [],
      isLoading: false,
      pagination: { page: 1, limit: 100, total: 0, totalPages: 1 },
      error: null,

      listOfDepartment: async (page = get().pagination.page, limit = get().pagination.limit) => {
        set({ isLoading: true, error: null })
        try {
          const res = await listDepartment(page, limit)
          set({ isLoading: false, error: null, department: res.data })
          return res
        } catch (err: any) {
          set({ isLoading: false, error: err?.message })

          errorMessage(err)
        }
      },

      addDepartment: async formData => {
        set({ isLoading: true, error: null })
        try {
          const res = await addDepartment(formData)
          set({ isLoading: false, error: null })
          await get().listOfDepartment()
          alertSuccess(res.message ?? 'Successfully added Department.')
          return res
        } catch (err: any) {
          set({ isLoading: false, error: err?.message })
          errorMessage(err)
        }
      },

      updateDepartment: async (id, formData) => {
        set({ isLoading: false, error: null })
        try {
          const res = await updateDepartment(id, formData)

          await get().listOfDepartment()
          set({ isLoading: false, error: null })
          alertSuccess(res.message ?? 'successfully updated Department.')
          return res
        } catch (err: any) {
          set({ isLoading: false, error: err?.message })
          errorMessage(err)
        }
      },

      deleteDepartment: async id => {
        set({ isLoading: false, error: null })
        try {
          const res = await deleteDepartment(id)

          await get().listOfDepartment()
          set({ isLoading: false, error: null })
          alertSuccess(res.message ?? 'successfully deleted Department.')
        } catch (err: any) {
          set({ isLoading: false, error: err?.message })
          errorMessage(err)
        }
      }
    }),
    {
      name: 'department-storage',
      partialize: state => ({ designation: state.department })
    }
  )
)
