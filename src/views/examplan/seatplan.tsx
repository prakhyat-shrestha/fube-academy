import Link from 'next/link'

import { Typography, MenuItem } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import Button from '@mui/material/Button'

import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import AddSharpIcon from '@mui/icons-material/AddSharp'

import CustomTextField from '@core/components/mui/TextField'

const SeatPlanLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h5' component='h3'>
          Generate Seat Plan
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Exam Plan
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Generate Seat Plan</Link>
          </Typography>
        </nav>
      </div>
      <div className='attend mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div className='container' style={{ display: 'flex', gap: '72%' }}>
              <Typography variant='h6' component='h4'>
                Select Criteria
              </Typography>
            </div>

            <div className='container' style={{ display: 'flex' }}>
              <CustomTextField
                select
                required
                fullWidth
                defaultValue='select'
                id='custom-select'
                style={{ margin: '20px 35px 0 0 ', width: '65%' }}
              >
                <CustomTextField required placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='select'>
                  <span style={{ fontStyle: 'normal' }}>Select Exam*</span>
                </MenuItem>

                <MenuItem value='Final Examination'>Final Examination</MenuItem>
                <MenuItem value='First Terminal Examination'>First Terminal Examination</MenuItem>
                <MenuItem value='Second Terminal Examination'>Second Terminal Examination</MenuItem>
                <MenuItem value='First Terminal Examination-2081'>First Terminal Examination-2081</MenuItem>
              </CustomTextField>
              <CustomTextField
                select
                fullWidth
                defaultValue='class'
                id='custom-select'
                style={{ margin: '20px 35px 0 0 ', marginRight: '30px', width: '65%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='class'>
                  <span style={{ fontStyle: 'normal' }}>Select Class*</span>
                </MenuItem>
                <MenuItem value='ECED'>ECED</MenuItem>
                <MenuItem value='1'>1</MenuItem>
                <MenuItem value='2'>2</MenuItem>
                <MenuItem value='3'>3</MenuItem>
                <MenuItem value='4'>4</MenuItem>
                <MenuItem value='5'>5</MenuItem>
              </CustomTextField>
              <CustomTextField
                required
                select
                defaultValue={'section'}
                style={{ margin: '20px 35px 0 0 ', marginRight: '10px', width: '65%' }}
              >
                <MenuItem value='section'>Select Section*</MenuItem>
              </CustomTextField>
            </div>
            <div className='container' style={{ display: 'flex', marginLeft: '89%', marginTop: '20px' }}>
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

export default SeatPlanLayout
