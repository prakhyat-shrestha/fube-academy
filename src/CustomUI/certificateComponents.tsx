import { Card, Divider, Typography } from '@mui/material'
import { useCertificateStore } from '@/stores/certificateStores'
import { useEffect } from 'react'
import list from '@/@core/theme/overrides/list'
import { certificateTypes } from '@/types/certificate'
const CertificateComponent = () => {
  const { listOfCertificate, certificate } = useCertificateStore()
  let singleData: certificateTypes = certificate[0]
  useEffect(() => {
    listOfCertificate()
  }, [listOfCertificate])
  let height, width
  //const height = singleData.pageLayout === 'A4_PORTRAIT' ? '297mm' : '210mm'
  if (singleData.pageLayout === 'A4_PORTRAIT') {
    width: '210mm'
    height: '297mm'
  } else {
    width: '210mm'
    height: '297mm'
  }
  return (
    <>
      <Card
        sx={{
          width: '210mm',
          height: '297mm'
        }}
      >
        <div className='flex justify-around mt-60'>
          <Typography>header left text</Typography>
          <Typography>Date</Typography>
        </div>
        <Typography sx={{ textAlign: 'center', marginTop: '40px' }}>body Character</Typography>
        <div className='flex justify-around mt-96'>
          <Typography sx={{ marginBottom: '30px' }}>
            Footer Left Text
            <Divider />
          </Typography>
          <Typography sx={{ marginBottom: '30px' }}>
            Footer Left Text
            <Divider />
          </Typography>
          <Typography sx={{ marginBottom: '30px' }}>
            Footer Left Text
            <Divider />
          </Typography>
        </div>
      </Card>
    </>
  )
}

export default CertificateComponent
