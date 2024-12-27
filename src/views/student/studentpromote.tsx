import Link from 'next/link'

import { Typography, MenuItem } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import Button from '@mui/material/Button'

import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import AddSharpIcon from '@mui/icons-material/AddSharp'

import CustomTextField from '@core/components/mui/TextField'

const MultiClassLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Student Promote
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
            <Link href='#'>Student Promote</Link>
          </Typography>
        </nav>
      </div>
      <div className='multiclass mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div className='container' style={{ display: 'flex', gap: '73%' }}>
              <Typography variant='h6' component='h4'>
                Select Criteria
              </Typography>
            </div>

            <div className='container' style={{ display: 'flex' }}>
              <CustomTextField
                select
                required
                fullWidth
                defaultValue='year'
                label='ACADEMIC YEAR'
                id='custom-select'
                style={{ margin: '20px 35px 0 0 ', width: '65%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='year'>
                  <span style={{ fontStyle: 'normal' }}>Academic Year*</span>
                </MenuItem>
                <MenuItem value={'2080'}>2080[Baishakh-Chaitra]</MenuItem>
                <MenuItem value={'2081'}>2081[Session]</MenuItem>
              </CustomTextField>
              <CustomTextField
                select
                fullWidth
                required
                defaultValue='class'
                label='PROMOTE SESSION'
                id='custom-select'
                style={{ margin: '20px 35px 0 0 ', width: '65%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='class'>
                  <span style={{ fontStyle: 'normal' }}>Promote Academic Year*</span>
                </MenuItem>
                <MenuItem value='2080'>2080[Baishakh-Chaitra]</MenuItem>
                <MenuItem value='2081'>2081[Session]</MenuItem>
              </CustomTextField>
              <CustomTextField
                select
                fullWidth
                required
                defaultValue='section'
                label='CURRENT CLASS'
                id='custom-select'
                style={{ margin: '20px 35px 0 0 ', width: '65%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='section'>
                  <span style={{ fontStyle: 'normal' }}>Select Current Class*</span>
                </MenuItem>
              </CustomTextField>
              <CustomTextField
                select
                fullWidth
                required
                defaultValue='student'
                label='SECTION'
                id='custom-select'
                style={{ margin: '20px 35px 0 0 ', marginRight: '10px', width: '65%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='student'>
                  <span style={{ fontStyle: 'normal' }}>Select Section*</span>
                </MenuItem>
              </CustomTextField>
            </div>
            <div className='container' style={{ display: 'flex', marginLeft: '90%', marginTop: '20px' }}>
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

export default MultiClassLayout
