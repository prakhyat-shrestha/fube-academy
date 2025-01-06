import Link from 'next/link'

import { Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import Button from '@mui/material/Button'

const StudentExportLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Student Export
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Student Info
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Student Export</Link>
          </Typography>
        </nav>
      </div>
      <div className='studentExport mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div className='container' style={{ display: 'flex', gap: '73%' }}>
              <Typography variant='h6' component='h4'>
                All Student Export
              </Typography>
            </div>

            <div
              className='container'
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2px' }}
            >
              <Button variant='contained' color='success' style={{ margin: '25px 35px 0 0 ', width: '15%' }}>
                EXPORT TO CSV
              </Button>

              <Button variant='contained' color='success' style={{ margin: '25px 35px 0 0 ', width: '15%' }}>
                EXPORT TO PDF
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default StudentExportLayout
