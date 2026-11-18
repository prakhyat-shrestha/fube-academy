import instance from '@/axiosInstance/axiosInstance'
import { generateCertificateTypes } from '@/types/generateCertificate'

// With responseType 'blob', error bodies also arrive as a Blob, so read the message from it
const getErrorMessage = async (err: any) => {
  const data = err?.response?.data
  if (data instanceof Blob) {
    try {
      const json = JSON.parse(await data.text())
      return json?.message || 'Something went wrong'
    } catch {
      return 'Something went wrong'
    }
  }
  return data?.message || 'Something went wrong'
}

const getData = (formData: Partial<generateCertificateTypes>) => {
  return {
    studentIds: formData.studentIds,
    subject: formData.subject || undefined
  }
}

export const generateCertificatePdf = async (certificateId: number, formData: Partial<generateCertificateTypes>) => {
  try {
    const res = await instance({
      url: `/generateCertificates/${certificateId}/pdf`,
      method: 'POST',
      data: getData(formData),
      responseType: 'blob'
    })
    return res.data as Blob
  } catch (err: any) {
    throw new Error(await getErrorMessage(err))
  }
}
