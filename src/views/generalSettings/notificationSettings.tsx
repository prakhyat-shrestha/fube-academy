/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import type { ChangeEvent } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Card,
  CardContent,
  Button,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormLabel
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

type Notification = {
  event: string
  destinations: string[]
  recipients: string[]
}

const notificationData: Notification[] = [
  {
    event: 'Assign Class Teacher',
    destinations: ['email', 'sms', 'web', 'app'],
    recipients: ['STUDENT', 'PARENT', 'TEACHER']
  },
  { event: 'Contact Us', destinations: ['email', 'sms', 'web', 'app'], recipients: ['SUPER ADMIN'] },
  {
    event: 'Assign Subject',
    destinations: ['email', 'sms', 'web', 'app'],
    recipients: ['STUDENT', 'PARENT', 'TEACHER']
  },
  { event: 'Assignment', destinations: ['email', 'sms', 'web', 'app'], recipients: ['STUDENT', 'PARENT'] },
  { event: 'Syllabus', destinations: ['email', 'sms', 'web', 'app'], recipients: ['STUDENT', 'PARENT'] },
  { event: 'Lesson Plan', destinations: ['email', 'sms', 'web', 'app'], recipients: ['STUDENT', 'PARENT', 'TEACHER'] },
  { event: 'Other Downloads', destinations: ['email', 'sms', 'web', 'app'], recipients: ['STUDENT', 'PARENT'] },
  {
    event: 'Student Admission',
    destinations: ['email', 'sms', 'web', 'app'],
    recipients: ['STUDENT', 'PARENT', 'TEACHER', 'SUPER ADMIN']
  },
  { event: 'Multi Class', destinations: ['email', 'sms', 'web', 'app'], recipients: ['STUDENT', 'PARENT', 'TEACHER'] },
  { event: 'Student Attendance', destinations: ['email', 'sms', 'web', 'app'], recipients: ['STUDENT', 'PARENT'] },
  { event: 'Fees Assign', destinations: ['email', 'sms', 'web', 'app'], recipients: ['STUDENT', 'PARENT'] },
  {
    event: 'Fees Payment',
    destinations: ['email', 'sms', 'web', 'app'],
    recipients: ['STUDENT', 'PARENT', 'SUPER ADMIN']
  },
  {
    event: 'Fees Reminder',
    destinations: ['email', 'sms', 'web', 'app'],
    recipients: ['STUDENT', 'PARENT', 'SUPER ADMIN']
  },
  { event: 'Assign homework', destinations: ['email', 'sms', 'web', 'app'], recipients: ['STUDENT', 'PARENT'] },
  { event: 'Add Library Member', destinations: ['email', 'sms', 'web', 'app'], recipients: ['STUDENT', 'PARENT'] },
  {
    event: 'Issue/Return Book',
    destinations: ['email', 'sms', 'web', 'app'],
    recipients: ['STUDENT', 'PARENT', 'SUPER ADMIN']
  },
  {
    event: 'Assign Vehicle',
    destinations: ['email', 'sms', 'web', 'app'],
    recipients: ['STUDENT', 'PARENT', 'SUPER ADMIN']
  },
  { event: 'Exam Schedule', destinations: ['email', 'sms', 'web', 'app'], recipients: ['STUDENT', 'PARENT'] },
  { event: 'Exam Attendance', destinations: ['email', 'sms', 'web', 'app'], recipients: ['STUDENT', 'PARENT'] },
  { event: 'Exam Admit Card', destinations: ['email', 'sms', 'web', 'app'], recipients: ['STUDENT', 'PARENT'] },
  { event: 'Online Exam Publish', destinations: ['email', 'sms', 'web', 'app'], recipients: ['STUDENT', 'PARENT'] },
  { event: 'Online Exam Result', destinations: ['email', 'sms', 'web', 'app'], recipients: ['STUDENT', 'PARENT'] },
  { event: 'Staff Attendance', destinations: ['email', 'sms', 'web', 'app'], recipients: ['SUPER ADMIN', 'PARENT'] },
  { event: 'Staff Payroll', destinations: ['email', 'sms', 'web', 'app'], recipients: ['SUPER ADMIN', 'PARENT'] },
  {
    event: 'Leave Apply',
    destinations: ['email', 'sms', 'web', 'app'],
    recipients: ['STUDENT', 'PARENT', 'SUPER ADMIN', 'TEACHER']
  },
  {
    event: 'Leave Approved',
    destinations: ['email', 'sms', 'web', 'app'],
    recipients: ['STUDENT', 'PARENT', 'SUPER ADMIN', 'TEACHER']
  },
  {
    event: 'Leave Declined',
    destinations: ['email', 'sms', 'web', 'app'],
    recipients: ['STUDENT', 'PARENT', 'SUPER ADMIN', 'TEACHER']
  },
  {
    event: 'Approve Deposit',
    destinations: ['email', 'sms', 'web', 'app'],
    recipients: ['STUDENT', 'PARENT', 'SUPER ADMIN']
  },
  {
    event: 'Reject Deposit',
    destinations: ['email', 'sms', 'web', 'app'],
    recipients: ['STUDENT', 'PARENT', 'SUPER ADMIN']
  },
  {
    event: 'Wallet Add',
    destinations: ['email', 'sms', 'web', 'app'],
    recipients: ['STUDENT', 'PARENT', 'SUPER ADMIN']
  },
  { event: 'Fund Transfer', destinations: ['email', 'sms', 'web', 'app'], recipients: ['SUPER ADMIN'] },
  { event: 'Item Received', destinations: ['email', 'sms', 'web', 'app'], recipients: ['SUPER ADMIN'] },
  { event: 'Item Sell', destinations: ['email', 'sms', 'web', 'app'], recipients: ['SUPER ADMIN'] },
  {
    event: 'Notice',
    destinations: ['email', 'sms', 'web', 'app'],
    recipients: ['STUDENT', 'PARENT', 'SUPER ADMIN', 'TEACHER']
  },
  { event: 'Assign Dormitory', destinations: ['email', 'sms', 'web', 'app'], recipients: ['STUDENT', 'PARENT'] },
  { event: 'Exam Seat Plan', destinations: ['email', 'sms', 'web', 'app'], recipients: ['STUDENT', 'PARENT'] }
]

type StateType = {
  [key: string]: boolean
}

const NotificationSettingsLayout = () => {
  const [state, setState] = useState<StateType>({
    email: true,
    sms: false,
    web: false,
    app: false
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  const NotificationRow = ({ row }: { row: Notification }) => {
    const { event, destinations, recipients } = row

    const recipientCards = recipients.map((recipient, index) => (
      <Card
        key={index}
        style={{
          flex: `1 1 calc(100% / ${recipients.length})`, // Ensure equal width for all cards
          height: '150px',
          margin: '10px', // Equal margin on all sides
          boxSizing: 'border-box'
        }}
      >
        <CardContent>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControl>
              <FormGroup>
                <FormControlLabel label={recipient} control={<Checkbox />} />
              </FormGroup>
            </FormControl>
            <Button variant='contained' color='primary'>
              Edit
            </Button>
          </div>
          <Typography>{recipient} Info</Typography>
        </CardContent>
      </Card>
    ))

    return (
      <TableRow sx={{ borderBottom: '1px solid #ddd' }}>
        <TableCell sx={{ padding: '8px', width: '15%' }}>{event}</TableCell>
        <TableCell sx={{ padding: '8px' }}>
          <FormControl component='fieldset' variant='standard'>
            <FormLabel component='legend'>Select options</FormLabel>
            <FormGroup>
              {destinations.map(destination => (
                <FormControlLabel
                  key={destination}
                  control={
                    <Checkbox
                      checked={state[destination.toLowerCase()] || false}
                      onChange={handleChange}
                      name={destination.toLowerCase()}
                    />
                  }
                  label={destination.toUpperCase()}
                />
              ))}
            </FormGroup>
          </FormControl>
        </TableCell>
        <TableCell sx={{ padding: '8px' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'nowrap', // Prevent wrapping
              gap: '10px', // Space between cards
              alignItems: 'center',
              overflowX: 'auto' // Allow horizontal scrolling if needed
            }}
          >
            {recipientCards}
          </div>
        </TableCell>
      </TableRow>
    )
  }

  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Notification Settings
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              General Settings
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Notification Settings</Link>
          </Typography>
        </nav>
      </div>

      {/* ---- Table Section ----*/}
      <div className='notificationList mt-4 ' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '16%' }}>
                Notification Settings
              </Typography>
            </div>
            {/*--------- Table section --------*/}
            <TableContainer className='mt-4' component={Paper}>
              <Table sx={{ minWidth: 650 }} stickyHeader aria-label='sticky table'>
                <TableHead>
                  <TableRow>
                    <TableCell>EVENT</TableCell>
                    <TableCell>DESTINATION</TableCell>
                    <TableCell>RECIPIENT</TableCell>
                  </TableRow>
                </TableHead>

                {/*----- Table body section ----- */}
                <TableBody>
                  {notificationData.map((row, index) => (
                    <NotificationRow key={index} row={row} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
          {/* Pagination */}
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
            <Typography variant='body2' style={{ marginLeft: '16px' }}>
              Showing 0 to 0 of 0 entries
            </Typography>
            {/*----- Page number section ----- */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 'auto',
                cursor: 'pointer',
                marginRight: '50%'
              }}
            >
              <Button
                size='small'
                style={{
                  color: 'black',
                  padding: '4px 8px',
                  width: '30px',
                  minWidth: 'auto',
                  border: 'none'
                }}
              >
                <ArrowBackIcon style={{ transform: 'scale(0.8)' }} />
              </Button>
              <Button
                size='small'
                style={{
                  color: 'black',
                  padding: '4px 8px',
                  width: '30px',
                  minWidth: 'auto',
                  border: 'none'
                }}
              >
                <ArrowForwardIcon style={{ transform: 'scale(0.8)' }} />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

export default NotificationSettingsLayout
