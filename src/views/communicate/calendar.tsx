'use client'
import * as React from 'react'

import Link from 'next/link'

import { Button, Card, CardContent, Typography } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import AddIcon from '@mui/icons-material/Add'

const CalendarLayout = () => {
  return (
    <>
      <div className='flex '>
        <Typography variant='h5'>Calendar</Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '15px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '15px' }}>
              Communicate
            </Link>
            <span style={{ marginRight: '15px' }}>|</span>
            <Link href='#'> Calendar</Link>
          </Typography>
        </nav>
      </div>
      <Card sx={{ width: 'auto' }}>
        <CardContent>
          <Button variant='contained' style={{ marginLeft: '82.95%' }}>
            <AddIcon />
            CALENDAR SETTINGS
          </Button>
        </CardContent>
      </Card>
      <Card sx={{ marginTop: '3%', width: 'auto' }}>
        <CardContent>
          <Typography variant='h5'>Calendar</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
          </LocalizationProvider>
        </CardContent>
      </Card>
    </>
  )
}

export default CalendarLayout
