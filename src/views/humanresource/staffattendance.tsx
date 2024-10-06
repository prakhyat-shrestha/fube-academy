'use client'
import React, { useRef } from 'react'

import Link from 'next/link'

import { Typography, MenuItem } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import Button from '@mui/material/Button'
import AddSharpIcon from '@mui/icons-material/AddSharp'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'

import CustomTextField from '@core/components/mui/TextField'

const StaffAttendanceLayout = () => {
  const textFieldRef = useRef<HTMLInputElement>(null)

  const handleFocus = () => {
    if (textFieldRef.current) {
      textFieldRef.current.placeholder = ''
    }
  }

  const handleBlur = () => {
    if (textFieldRef.current && textFieldRef.current.value === '') {
      textFieldRef.current.placeholder = 'SEARCH'
    }
  }

  return (
    <>
      <div className='flex'>
        <Typography variant='h5' component='h3'>
          Staff Attendance
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Human Resource
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Staff Attendance</Link>
          </Typography>
        </nav>
      </div>
      <div className='attend mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div className='container' style={{ display: 'flex', gap: '72%' }}>
              <Typography variant='h5' component='h4'>
                Select Criteria
              </Typography>
              <Button variant='contained' startIcon={<AddSharpIcon />}>
                ADD STAFF
              </Button>
            </div>

            <div className='container' style={{ display: 'flex' }}>
              <CustomTextField
                select
                fullWidth
                required
                defaultValue='role'
                label='ROLE'
                id='custom-select'
                style={{ margin: '20px 35px 0 0 ', width: '65%' }}
              >
                <CustomTextField required placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='role'>
                  <span style={{ fontStyle: 'normal' }}>Role</span>
                </MenuItem>
                <MenuItem value='accountant'>Accountant</MenuItem>
                <MenuItem value='admin'>Admin</MenuItem>
                <MenuItem value='administrator'>Administrator</MenuItem>
                <MenuItem value='driver'>Driver</MenuItem>
                <MenuItem value='librarian'>Librarian</MenuItem>
                <MenuItem value='receptionist'>Receptionist</MenuItem>
                <MenuItem value='superadmin'>Super Admin</MenuItem>
                <MenuItem value='teacher'>Teacher</MenuItem>
              </CustomTextField>
              <CustomTextField
                fullWidth
                required
                label='Attendance Date'
                id='custom-select'
                type='date'
                style={{ margin: '20px 35px 0 0 ', marginRight: '10px', width: '65%' }}
              />
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

export default StaffAttendanceLayout
