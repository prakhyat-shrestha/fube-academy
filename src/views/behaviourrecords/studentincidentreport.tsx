import * as React from 'react'
import { Button, Card, CardContent, Typography, MenuItem } from '@mui/material'
import Link from 'next/link'
import CustomTextField from '@core/components/mui/TextField'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'

const StudentIncidentReportLayout = () => {
  return (
    <>
      {/* StudentIncident List First Card*/}
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Student Incident Report
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Behaviour Records
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Student Incident Report </Link>
          </Typography>
        </nav>
      </div>
      <div className='studentincident mt-4' style={{ flex: 1 }}>
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
                required
                defaultValue='academic'
                label='ACADEMIC YEAR'
                id='custom-select'
                style={{ margin: '20px 10px 0 0', width: '100%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='academic'>
                  <span style={{ fontStyle: 'normal' }}>Academic Year*</span>
                </MenuItem>
                <MenuItem value='one'>
                  <span style={{ fontStyle: 'normal' }}>2080[Baisakh-Chaitra]</span>
                </MenuItem>
                <MenuItem value='two'>
                  <span style={{ fontStyle: 'normal' }}>2081[Session]</span>
                </MenuItem>
              </CustomTextField>
              <CustomTextField
                select
                fullWidth
                required
                defaultValue='class'
                label='CLASS'
                id='custom-select'
                style={{ margin: '20px 10px 0 0', width: '100%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='class'>
                  <span style={{ fontStyle: 'normal' }}>Select Class</span>
                </MenuItem>
                <MenuItem value='one'>
                  <span style={{ fontStyle: 'normal' }}>ECED</span>
                </MenuItem>
                <MenuItem value='three'>
                  <span style={{ fontStyle: 'normal' }}>1</span>
                </MenuItem>
                <MenuItem value='four'>
                  <span style={{ fontStyle: 'normal' }}>2</span>
                </MenuItem>
                <MenuItem value='five'>
                  <span style={{ fontStyle: 'normal' }}>3</span>
                </MenuItem>
              </CustomTextField>
              <CustomTextField
                select
                fullWidth
                required
                defaultValue='section'
                label='SECTION'
                id='custom-select'
                style={{ margin: '20px 10px 0 0', width: '100%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='section'>
                  <span style={{ fontStyle: 'normal' }}>Select Section</span>
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

export default StudentIncidentReportLayout
