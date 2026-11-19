import { generateIdCardPdf } from '@/httpMethod/generateIdCard'
import { generateIdCardTypes } from '@/types/generateIdCard'
import { alertSuccess, errorMessage } from '@/views/errorHandling/error'
import { create } from 'zustand'

interface generateIdCardState {
  isLoading: boolean

  generateIdCard: (idCardId: number, formData: Partial<generateIdCardTypes>, fileName?: string) => Promise<void>
}

export const useGenerateIdCardStore = create<generateIdCardState>()(set => ({
  isLoading: false,

  generateIdCard: async (idCardId, formData, fileName = 'id_cards') => {
    set({ isLoading: true })
    try {
      const blob = await generateIdCardPdf(idCardId, formData)
      const url = window.URL.createObjectURL(blob)

      // download the PDF
      const link = document.createElement('a')
      link.href = url
      link.download = `${fileName}.pdf`
      document.body.appendChild(link)
      link.click()
      link.remove()
      window.URL.revokeObjectURL(url)

      set({ isLoading: false })
      alertSuccess('ID card generated successfully.')
    } catch (err: any) {
      set({ isLoading: false })
      errorMessage(err?.message || 'Something went wrong.')
    }
  }
}))
