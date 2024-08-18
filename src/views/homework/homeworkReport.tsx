import { Typography, MenuItem, TextField, InputAdornment } from '@mui/material'
import Link from 'next/link'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CustomTextField from '@core/components/mui/TextField'
import Button from '@mui/material/Button'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import AddSharpIcon from '@mui/icons-material/AddSharp'

const HomeworkReportList = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Homework Report
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Homework
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Homework Report</Link>
          </Typography>
        </nav>
      </div>
      <div className='feesList mt-7' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div className='container mb-5' style={{ display: 'flex', gap: '75.25%' }}>
              <Typography variant='h6' component='h4'>
                Select Criteria
              </Typography>
            </div>

            <div className='container' style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <CustomTextField
                select
                fullWidth
                defaultValue='Fees Group'
                label='CLASS*'
                id='custom-select'
                style={{ flex: '1', minWidth: '200px' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='Fees Group'>
                  <span style={{ fontStyle: 'normal' }}>Fees Group</span>
                </MenuItem>
                <MenuItem value='School Fee'>School Fee</MenuItem>
                <MenuItem value='Plus Two Fee'>Plus Two Fee</MenuItem>
                <MenuItem value='Bachelor Fee'>Bachelor Fee</MenuItem>
              </CustomTextField>

              <CustomTextField
                select
                fullWidth
                defaultValue='Fees Group'
                label='SUBJECT*'
                id='custom-select'
                style={{ flex: '1', minWidth: '200px' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='Fees Group'>
                  <span style={{ fontStyle: 'normal' }}>Fees Group</span>
                </MenuItem>
              </CustomTextField>

              <CustomTextField
                select
                fullWidth
                defaultValue='Fees Group'
                label='SECTION*'
                id='custom-select'
                style={{ flex: '1', minWidth: '200px' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='Fees Group'>
                  <span style={{ fontStyle: 'normal' }}>UNSELECT ALL</span>
                </MenuItem>
              </CustomTextField>

              <Typography variant='body2' component='div' style={{ flex: '1', minWidth: '200px' }}>
                <CustomTextField
                  label='HOMEWORK DATE'
                  type='date'
                  style={{ width: '100%' }}
                  InputLabelProps={{ shrink: true }}
                />
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

export default HomeworkReportList
