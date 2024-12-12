'use client'

import Link from 'next/link'

import { Typography, Switch } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import Button from '@mui/material/Button'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const WeekendLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h4' component='h3'>
          Weekend
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
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

      {/* ---- Table Section ----*/}
      <div className='weekendList mt-4 ' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant='h5' component='h3' style={{ flex: 1, marginRight: '16%' }}>
                Day List
              </Typography>
            </div>
            {/*--------- Table section --------*/}
            <div style={{ marginTop: '20px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th
                      style={{
                        padding: '8px',
                        textAlign: 'left',
                        backgroundColor: 'lightgray',
                        position: 'relative',
                        borderRadius: '5px 0 0 5px'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span>NAME </span>
                      </div>
                    </th>
                    <th
                      style={{
                        padding: '8px',
                        textAlign: 'left',
                        backgroundColor: 'lightgray',
                        position: 'relative'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span>WEEKEND </span>
                      </div>
                    </th>
                    <th
                      style={{
                        padding: '8px',
                        textAlign: 'left',
                        backgroundColor: 'lightgray',
                        position: 'relative'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span> Actions </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                {/*----- Table body section ----- */}
                <tbody>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>
                      <Typography variant='h6'>Saturday</Typography>
                    </td>
                    <td style={{ padding: '8px' }}>
                      <Typography variant='h6'>
                        <Button variant='contained' style={{ width: '18%' }}>
                          Yes
                        </Button>
                      </Typography>
                    </td>
                    <td>
                      <Switch defaultChecked />
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>
                      <Typography variant='h6'>Sunday</Typography>
                    </td>
                    <td style={{ padding: '8px' }}>
                      <Typography variant='h6'>No</Typography>
                    </td>
                    <td>
                      <Switch />
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>
                      <Typography variant='h6'>Monday</Typography>
                    </td>
                    <td style={{ padding: '8px' }}>
                      <Typography variant='h6'>No</Typography>
                    </td>{' '}
                    <td>
                      <Switch />
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>
                      <Typography variant='h6'>Tuesday</Typography>
                    </td>
                    <td style={{ padding: '8px' }}>
                      <Typography variant='h6'>No</Typography>
                    </td>{' '}
                    <td>
                      <Switch />
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>
                      <Typography variant='h6'>Wednesday</Typography>
                    </td>
                    <td style={{ padding: '8px' }}>
                      <Typography variant='h6'>No</Typography>
                    </td>{' '}
                    <td>
                      <Switch />
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>
                      <Typography variant='h6'>Thursday</Typography>
                    </td>
                    <td style={{ padding: '8px' }}>
                      <Typography variant='h6'>No</Typography>
                    </td>{' '}
                    <td>
                      <Switch />
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>
                      <Typography variant='h6'>Friday</Typography>
                    </td>
                    <td style={{ padding: '8px' }}>
                      <Typography variant='h6'>No</Typography>
                    </td>{' '}
                    <td>
                      <Switch />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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

export default WeekendLayout
