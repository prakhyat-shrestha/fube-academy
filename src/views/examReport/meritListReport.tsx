import { Typography, MenuItem } from '@mui/material'
import Link from 'next/link'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CustomTextField from '@core/components/mui/TextField'
import Button from '@mui/material/Button'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'

const MeritListReportLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Merit List Report
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Exam Report
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Merit List Report</Link>
          </Typography>
        </nav>
      </div>
      <div className='meritListReport mt-4' style={{ flex: 1 }}>
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
                defaultValue='exam'
                label='EXAM'
                required
                id='custom-select'
                style={{ margin: '20px 40px 0 0 ', width: '60%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='exam'>
                  <span style={{ fontStyle: 'normal' }}>Select Exam *</span>
                </MenuItem>
                <MenuItem value='one'>First Terminal</MenuItem>
                <MenuItem value='two'>Second Terminal</MenuItem>
                <MenuItem value='three'>Final Exam</MenuItem>
              </CustomTextField>
              <CustomTextField
                select
                fullWidth
                defaultValue='class'
                label='CLASS'
                required
                id='custom-select'
                style={{ margin: '20px 40px 0 0 ', width: '60%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='class'>
                  <span style={{ fontStyle: 'normal' }}>Select Class *</span>
                </MenuItem>
                <MenuItem value='one'>ECED</MenuItem>
                <MenuItem value='two'>1</MenuItem>
                <MenuItem value='three'>2</MenuItem>
              </CustomTextField>
              <CustomTextField
                select
                fullWidth
                defaultValue='section'
                label='SECTION'
                required
                id='custom-select'
                style={{ margin: '20px 0 0 0 ', width: '60%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='section'>
                  <span style={{ fontStyle: 'normal' }}>Select Section * </span>
                </MenuItem>
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

export default MeritListReportLayout
