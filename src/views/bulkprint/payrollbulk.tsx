import { Card, CardContent, Button, MenuItem, Typography } from '@mui/material'
import CustomTextField from '@/@core/components/mui/TextField'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import Link from 'next/link'

const PayrollBulkLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h4'>
          Payroll Bulk Print
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
            <Link href='#'>Payroll Bulk Print</Link>
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
                <CustomTextField defaultValue='role' select required fullWidth>
                  <CustomTextField placeholder='Search' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                  <MenuItem value='role'>
                    <span>Role</span>
                  </MenuItem>
                  <MenuItem value='one'>
                    <span>Teacher</span>
                  </MenuItem>
                  <MenuItem value='two'>
                    <span>Admin</span>
                  </MenuItem>
                  <MenuItem value='three'>
                    <span>Accountant</span>
                  </MenuItem>
                  <MenuItem value='four'>
                    <span>Driver</span>
                  </MenuItem>
                </CustomTextField>
              </Typography>

              <Typography variant='body2' component='div' style={{ width: '40%' }}>
                <CustomTextField required defaultValue='one' fullWidth select>
                  <CustomTextField placeholder='Search' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                  <MenuItem value='one'>
                    <span>Baisakh</span>
                  </MenuItem>
                  <MenuItem value='two'>
                    <span>Jestha</span>
                  </MenuItem>
                  <MenuItem value='three'>
                    <span>Ashad</span>
                  </MenuItem>
                  <MenuItem value='four'>
                    <span>Shrawan</span>
                  </MenuItem>
                  <MenuItem value='five'>
                    <span>Bhadra</span>
                  </MenuItem>
                  <MenuItem value='six'>
                    <span>Aswin</span>
                  </MenuItem>
                  <MenuItem value='seven'>
                    <span>Kartik</span>
                  </MenuItem>
                  <MenuItem value='eight'>
                    <span>Mangsir</span>
                  </MenuItem>
                  <MenuItem value='nine'>
                    <span>Poush</span>
                  </MenuItem>
                  <MenuItem value='ten'>
                    <span>Magh</span>
                  </MenuItem>
                  <MenuItem value='eleven'>
                    <span>Falgun</span>
                  </MenuItem>
                  <MenuItem value='twelve'>
                    <span>Chaitra</span>
                  </MenuItem>
                </CustomTextField>
              </Typography>

              <Typography variant='body2' component='div' style={{ width: '40%' }}>
                <CustomTextField required defaultValue='year' fullWidth select>
                  <CustomTextField placeholder='Search' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                  <MenuItem value='year'>
                    <span>Select Year</span>
                  </MenuItem>
                  <MenuItem value='two'>
                    <span>2081</span>
                  </MenuItem>
                  <MenuItem value='three'>
                    <span>2080</span>
                  </MenuItem>
                  <MenuItem value='four'>
                    <span>2079</span>
                  </MenuItem>
                  <MenuItem value='five'>
                    <span>2078</span>
                  </MenuItem>
                  <MenuItem value='six'>
                    <span>2077</span>
                  </MenuItem>
                  <MenuItem value='seven'>
                    <span>2076</span>
                  </MenuItem>
                </CustomTextField>
              </Typography>
            </div>

            <div
              className='container mt-6'
              style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}
            >
              <Button variant='contained' startIcon={<SearchSharpIcon />}>
                SEARCH
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default PayrollBulkLayout
