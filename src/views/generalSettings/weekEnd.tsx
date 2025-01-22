'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Typography,
  Switch,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableContainer,
  TableCell,
  Paper,
  Card,
  CardContent,
  Button
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const WeekendLayout = () => {
  const [switchState, setSwitchState] = useState({
    saturday: true,
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false
  })

  const handleSwitchChange = (day: string) => {
    setSwitchState(prevState => ({
      ...prevState,
      [day]: !prevState[day as keyof typeof prevState]
    }))
  }

  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Weekend
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='div' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              System Settings
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Weekend</Link>
          </Typography>
        </nav>
      </div>

      <div className='weekendList mt-4 ' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: 'auto' }}>
          <CardContent>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '16%' }}>
                Day List
              </Typography>
            </div>
            <TableContainer className='mt-4' component={Paper}>
              <Table sx={{ minWidth: 650 }} stickyHeader aria-label='sticky table'>
                <TableHead>
                  <TableRow>
                    <TableCell>NAME</TableCell>
                    <TableCell>WEEKEND</TableCell>
                    <TableCell>ACTION</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {['saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'].map(day => (
                    <TableRow key={day} style={{ borderBottom: '1px solid #ddd' }}>
                      <TableCell style={{ padding: '8px' }}>
                        <Typography variant='h6'>{day.charAt(0).toUpperCase() + day.slice(1)}</Typography>
                      </TableCell>
                      <TableCell style={{ padding: '8px' }}>
                        <Typography variant='h6'>
                          {switchState[day as keyof typeof switchState] ? (
                            <Button
                              variant='contained'
                              sx={{ height: '25px', minWidth: 'auto', padding: '2px 8px', width: 'auto' }}
                            >
                              Yes
                            </Button>
                          ) : (
                            'No'
                          )}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Switch
                          checked={switchState[day as keyof typeof switchState]}
                          onChange={() => handleSwitchChange(day)}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
            <Typography variant='body2' style={{ marginLeft: '16px' }}>
              Showing 0 to 0 of 0 entries
            </Typography>
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

export default WeekendLayout
