import { Typography, MenuItem } from '@mui/material'
import Link from 'next/link'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CustomTextField from '@core/components/mui/TextField'
import Button from '@mui/material/Button'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'

const PayRollReportLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Payroll Report
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Staff Report
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Payroll Report</Link>
          </Typography>
        </nav>
      </div>
      <div className='payRollReport mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div className='container' style={{ display: 'flex', gap: '75.25%' }}>
              <Typography variant='h6' component='h4'>
                Select Criteria
              </Typography>
            </div>

            <div className='container' style={{ display: 'flex' }}>
              <CustomTextField
                select
                fullWidth
                defaultValue='role'
                id='custom-select'
                style={{ margin: '20px 40px 0 0 ', width: '60%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='role'>
                  <span style={{ fontStyle: 'normal' }}>Select Role *</span>
                </MenuItem>
                <MenuItem value='one'>Accountant</MenuItem>
                <MenuItem value='two'>Admin</MenuItem>
                <MenuItem value='three'>Teacher</MenuItem>
              </CustomTextField>
              <CustomTextField
                select
                fullWidth
                defaultValue='month'
                id='custom-select'
                style={{ margin: '20px 40px 0 0 ', width: '60%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='month'>
                  <span style={{ fontStyle: 'normal' }}>Select Month </span>
                </MenuItem>
                <MenuItem value='one'>Kartik</MenuItem>
                <MenuItem value='two'>Mangsir</MenuItem>
                <MenuItem value='three'>Poush</MenuItem>
              </CustomTextField>
              <CustomTextField
                select
                fullWidth
                defaultValue='year'
                id='custom-select'
                style={{ margin: '20px 0 0 0 ', width: '60%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='year'>
                  <span style={{ fontStyle: 'normal' }}>Select Year </span>
                </MenuItem>
                <MenuItem value='one'>2080 - [Baisakh-Chaitra]</MenuItem>
                <MenuItem value='two'>2081 - [Session]</MenuItem>
              </CustomTextField>
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

export default PayRollReportLayout
