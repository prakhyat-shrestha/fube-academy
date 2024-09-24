import { Card, CardContent, Button, MenuItem, Typography } from '@mui/material'
import CustomTextField from '@/@core/components/mui/TextField'
import Link from 'next/link'
import PrintIcon from '@mui/icons-material/Print'

const FeesInvoiceBulkLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h4'>
          Fees Invoice Bulk Print
        </Typography>
        <nav style={{ marginLeft: 'auto' }}>
          <Typography variant='h6' component='h4' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '25px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '25px' }}>
              Bulk Print
            </Link>
            <span style={{ marginRight: '25px' }}>|</span>
            <Link href='#'>Fees Invoice Bulk Print</Link>
          </Typography>
        </nav>
      </div>
      <div className='payroll mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div
              className='container'
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}
            >
              <Typography variant='h6' component='h4'>
                Select Criteria
              </Typography>
            </div>

            <div className='container' style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
              <Typography variant='body2' component='div' style={{ width: '40%' }}>
                <CustomTextField label='CLASS' defaultValue='class' select fullWidth>
                  <CustomTextField placeholder='Search' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                  <MenuItem value='class'>
                    <span>Select Class</span>
                  </MenuItem>
                  <MenuItem value='one'>
                    <span>ECED</span>
                  </MenuItem>
                  <MenuItem value='two'>
                    <span>One</span>
                  </MenuItem>
                  <MenuItem value='three'>
                    <span>Two</span>
                  </MenuItem>
                  <MenuItem value='four'>
                    <span>Three</span>
                  </MenuItem>
                </CustomTextField>
              </Typography>

              <Typography variant='body2' component='div' style={{ width: '40%' }}>
                <CustomTextField label='SECTION' defaultValue='section' fullWidth select>
                  <CustomTextField placeholder='Search' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                  <MenuItem value='section'>
                    <span>Select Section</span>
                  </MenuItem>
                </CustomTextField>
              </Typography>

              <Typography variant='body2' component='div' style={{ width: '40%' }}>
                <CustomTextField label='STUDENT' defaultValue='student' fullWidth select>
                  <CustomTextField placeholder='Search' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                  <MenuItem value='student'>
                    <span>Select Student</span>
                  </MenuItem>
                </CustomTextField>
              </Typography>
            </div>

            <div
              className='container mt-6'
              style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}
            >
              <Button variant='contained' startIcon={<PrintIcon />}>
                PRINT
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default FeesInvoiceBulkLayout
