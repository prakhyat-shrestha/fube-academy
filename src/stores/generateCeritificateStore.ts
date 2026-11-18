import { generateCertificatePdf } from '@/httpMethod/generateCertificate'
import { generateCertificateTypes } from '@/types/generateCertificate'
import { alertSuccess, errorMessage } from '@/views/errorHandling/error'
import { create } from 'zustand'

interface generateCertificateState {
  isLoading: boolean

  generateCertificate: (
    certificateId: number,
    formData: Partial<generateCertificateTypes>,
    fileName?: string
  ) => Promise<void>
}

export const useGenerateCertificateStore = create<generateCertificateState>()(set => ({
  isLoading: false,

  generateCertificate: async (certificateId, formData, fileName = 'certificates') => {
    set({ isLoading: true })
    try {
      const blob = await generateCertificatePdf(certificateId, formData)
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
      alertSuccess('Certificate generated successfully.')
    } catch (err: any) {
      set({ isLoading: false })
      errorMessage(err?.message || 'Something went wrong.')
    }
  }
}))
