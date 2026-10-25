import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ClassRoomTypes } from '@/types/classRoom'
import { errorMessage, alertSuccess } from '@/views/errorHandling/error'
import { addClassRoom, updateClassRoom, deleteClassRoom, listClassRoom } from '@/httpMethod/classRoom'
import { PaginationTypes } from '@/types/paginationTypes'

interface classRoomState {
  classRoom: ClassRoomTypes[]
  isLoading: boolean
  pagination: PaginationTypes

  listOfClassRoom: (page?: number, limit?: number) => Promise<void>
  addClassRoom: (formData: Partial<ClassRoomTypes>) => Promise<void>
  updateClassRoom: (id: number, formData: Partial<ClassRoomTypes>) => Promise<void>
  deleteClassRoom: (id: number) => Promise<void>
}

export const useClassRoomStore = create<classRoomState>()(
  persist(
    (set, get) => ({
      classRoom: [],
      isLoading: false,
      pagination: { page: 1, limit: 100, total: 0, totalPages: 1 },

      listOfClassRoom: async (page, limit) => {
        set({ isLoading: true })
        try {
          const res = await listClassRoom((page = get().pagination.page), (limit = get().pagination.limit))
          set({ isLoading: false, classRoom: res.data })
          return res
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err)
        }
      },

      addClassRoom: async formData => {
        set({ isLoading: true })
        try {
          const res = await addClassRoom(formData)
          set({ isLoading: false })
          await get().listOfClassRoom()
          alertSuccess('Successfully added class room.')
          return res
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err)
        }
      },

      updateClassRoom: async (id, formData) => {
        set({ isLoading: false })
        try {
          const res = await updateClassRoom(id, formData)

          await get().listOfClassRoom()
          set({ isLoading: false })
          alertSuccess('successfully updated class Room.')
          return res
        } catch (err: any) {
          set({ isLoading: false, error: err?.message })
          errorMessage(err)
        }
      },

      deleteClassRoom: async id => {
        set({ isLoading: false })
        try {
          const res = await deleteClassRoom(id)

          await get().listOfClassRoom()
          set({ isLoading: false })
          alertSuccess('successfully deleted')
        } catch (err: any) {
          set({ isLoading: false })
          errorMessage(err)
        }
      }
    }),
    {
      name: 'classRoom-storage',
      partialize: state => ({ classRoom: state.classRoom })
    }
  )
)
