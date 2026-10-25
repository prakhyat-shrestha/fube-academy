import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { addAcademicYear, listAcademicYear, updateAcademicYear, deleteAcademicYear } from '@/httpMethod/academicYear'
import { AcademicYearTypes } from '@/types/academicYear'

interface academicYearState {
  academicYear: AcademicYearTypes[] | null
  selectedAcademicYearId: number | null
  isLoading: boolean

  listOfAcademicYear: () => Promise<void>

  addAcademicYear: (year: string, title: string, startingDate: string, endingDate: string) => Promise<any>
  updateAcademicYear: (
    id: number,
    year: string,
    title: string,
    startingDate: string,
    endingDate: string
  ) => Promise<any>
  deleteAcademicYear: (id: number) => Promise<void>
  setSelectedAcademicYearId: (id: number) => void
}

export const useAcademicYearStore = create<academicYearState>()(
  persist(
    (set, get) => ({
      academicYear: null,
      selectedAcademicYearId: null,
      isLoading: false,

      setSelectedAcademicYearId: id => set({ selectedAcademicYearId: id }),

      listOfAcademicYear: async () => {
        set({ isLoading: true })
        try {
          const res = await listAcademicYear()
          set({ isLoading: false, academicYear: res.data })
          return res
        } catch (err: any) {
          set({
            isLoading: false
          })
        }
      },

      addAcademicYear: async (year: string, title: string, startingDate: string, endingDate: string) => {
        set({ isLoading: true })

        try {
          const res = await addAcademicYear(year, title, startingDate, endingDate)
          if (res.success) {
            await get().listOfAcademicYear()
            set({ isLoading: false })
          }

          return res
        } catch (e: any) {
          set({ isLoading: false })
        }
      },

      updateAcademicYear: async (id: number, year: string, title: string, startingDate: string, endingDate: string) => {
        set({ isLoading: false })
        const res = await updateAcademicYear(id, year, title, startingDate, endingDate)
        if (res.success) {
          await get().listOfAcademicYear()
          set({ isLoading: false })
        } else {
          set({ isLoading: false })
        }
      },

      deleteAcademicYear: async (id: number) => {
        set({ isLoading: false })
        const res = await deleteAcademicYear(id)
        if (res.success) {
          await get().listOfAcademicYear()
          set({ isLoading: false })
        } else {
          set({ isLoading: false })
        }
        return res
      }
    }),
    {
      name: 'academicYear-storage',
      partialize: state => ({ academicYear: state.academicYear, selectedAcademicYearId: state.selectedAcademicYearId })
    }
  )
)
