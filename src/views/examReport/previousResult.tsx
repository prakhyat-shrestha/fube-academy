import { Typography, MenuItem } from '@mui/material'
import Link from 'next/link'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CustomTextField from '@core/components/mui/TextField'
import Button from '@mui/material/Button'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'

const PreviousResultLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Previous Result
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
            <Link href='#'>Previous Result</Link>
          </Typography>
        </nav>
      </div>
      <div className='previousResult mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div className='container' style={{ display: 'flex', gap: '75.25%' }}>
              <Typography variant='h6' component='h4'>
                Select Criteria
              </Typography>
            </div>

            <div className='container' style={{ display: 'flex' }}>
              <CustomTextField
                fullWidth
                label='IEMIS NUMBER'
                required
                style={{ margin: '20px 40px 0 0 ', width: '60%' }}
              />
              <CustomTextField
                select
                fullWidth
                defaultValue='record'
                label='SELECT RECORD'
                required
                id='custom-select'
                style={{ margin: '20px 0 0 0 ', width: '60%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='record'>
                  <span style={{ fontStyle: 'normal' }}>Select Record *</span>
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

export default PreviousResultLayout
