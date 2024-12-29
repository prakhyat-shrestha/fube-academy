'use client'
import * as React from 'react'

import { useRef } from 'react'

import Link from 'next/link'

import Typography from '@mui/material/Typography'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import { TextField, InputAdornment, MenuItem, Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import ButtonGroup from '@mui/material/ButtonGroup'

import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Card from '@mui/material/Card'
import { Icon } from '@iconify/react/dist/iconify.js'
import { createTheme } from '@mui/material/styles'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import CustomTextField from '@/@core/components/mui/TextField'

const EventLayout = () => {
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

  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2'
      }
    }
  })

  return (
    <>
      <div className='flex '>
        <Typography variant='h5' component='h3'>
          Event List
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Communicate
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Event List</Link>
          </Typography>
        </nav>
      </div>
      <div className='flex' style={{ display: 'flex' }}>
        {/* Add category first card */}
        <div className='eventGroup mt-4'>
          <Card sx={{ width: 'auto', height: 'auto' }}>
            <CardContent>
              <Typography variant='h5' component='h3'>
                Add Event
              </Typography>
              <Typography variant='body2' component='div'>
                <CustomTextField
                  required
                  label='EVENT TITLE'
                  style={{ marginTop: 10, marginBottom: '10px', width: '100%' }}
                  InputProps={{
                    style: {
                      height: '45px'
                    }
                  }}
                />
              </Typography>
              <Typography variant='body2' component='div'>
                <CustomTextField
                  required
                  fullWidth
                  select
                  defaultValue={'select'}
                  label='ROLE'
                  style={{ width: '100%', marginBottom: '10px' }}
                  InputProps={{
                    style: {
                      height: '45px'
                    }
                  }}
                >
                  <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                  <MenuItem value='select'>Select</MenuItem>
                  <MenuItem value='selectall'>Select All</MenuItem>
                  <FormControl className='ml-1 mbs-4 mie-4'>
                    <FormGroup>
                      <FormControlLabel
                        label='Role'
                        control={
                          <Checkbox
                            name='student'
                            sx={{ marginLeft: '12px' }}
                            icon={
                              <span
                                style={{
                                  width: 20,
                                  height: 20,
                                  border: '2px solid gray',
                                  borderRadius: '50%',
                                  display: 'inline-block'
                                }}
                              />
                            }
                            checkedIcon={
                              <span
                                style={{
                                  width: 20,
                                  height: 20,
                                  backgroundColor: 'blue',
                                  borderRadius: '50%',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  color: 'white',
                                  fontSize: '16px',
                                  fontWeight: 'bold'
                                }}
                              >
                                ✓
                              </span>
                            }
                          />
                        }
                      />
                      <FormControlLabel
                        label='Parents'
                        control={
                          <Checkbox
                            name='parents'
                            sx={{ marginLeft: '12px' }}
                            icon={
                              <span
                                style={{
                                  width: 20,
                                  height: 20,
                                  border: '2px solid gray',
                                  borderRadius: '50%',
                                  display: 'inline-block'
                                }}
                              />
                            }
                            checkedIcon={
                              <span
                                style={{
                                  width: 20,
                                  height: 20,
                                  backgroundColor: 'blue',
                                  borderRadius: '50%',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  color: 'white',
                                  fontSize: '16px',
                                  fontWeight: 'bold'
                                }}
                              >
                                ✓
                              </span>
                            }
                          />
                        }
                      />
                      <FormControlLabel
                        label='Teacher'
                        control={
                          <Checkbox
                            name='teacher'
                            sx={{ marginLeft: '12px' }}
                            icon={
                              <span
                                style={{
                                  width: 20,
                                  height: 20,
                                  border: '2px solid gray',
                                  borderRadius: '50%',
                                  display: 'inline-block'
                                }}
                              />
                            }
                            checkedIcon={
                              <span
                                style={{
                                  width: 20,
                                  height: 20,
                                  backgroundColor: 'blue',
                                  borderRadius: '50%',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  color: 'white',
                                  fontSize: '16px',
                                  fontWeight: 'bold'
                                }}
                              >
                                ✓
                              </span>
                            }
                          />
                        }
                      />
                    </FormGroup>
                  </FormControl>
                </CustomTextField>
              </Typography>

              <Typography variant='body2' component='div'>
                <CustomTextField
                  required
                  label='EVENT LOCATION'
                  style={{ marginTop: 5, width: '100%' }}
                  InputProps={{
                    style: {
                      height: '45px'
                    }
                  }}
                />
              </Typography>

              <Typography variant='body2' component='div'>
                <CustomTextField
                  type='date'
                  required
                  label='FROM DATE'
                  style={{ margin: '10px 35px 0 0 ', marginRight: '10px', width: '100%' }}
                />
              </Typography>
              <Typography variant='body2' component='div' style={{ display: 'flex', width: '100%', marginTop: '20px' }}>
                <CustomTextField
                  type='date'
                  required
                  label='TO DATE'
                  style={{ margin: '0px 35px 0 0 ', marginRight: '10px', width: '100%' }}
                />
              </Typography>
              <Typography variant='body2' component='div' style={{ display: 'flex', width: '100%', marginTop: '7px' }}>
                <CustomTextField
                  multiline
                  rows={4}
                  required
                  label='DESCRIPTION'
                  style={{ marginTop: 10, width: '100%' }}
                />
              </Typography>
              <Typography variant='body2' component='div' style={{ display: 'flex', width: '100%', marginTop: '7px' }}>
                <CustomTextField multiline rows={4} label='MARKS' style={{ marginTop: 10, width: '100%' }} />
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant='contained'>
                <CheckSharpIcon style={{ marginRight: 5 }} />
                SAVE QUESTION
              </Button>
            </CardActions>
          </Card>
        </div>

        {/* Event Group list 2nd card */}
        <div className='EventList mt-4 mx-6' style={{ flex: 1 }}>
          <Card sx={{ width: '102%', height: 270 }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h5' component='h3' style={{ flex: 1, marginRight: '12%' }}>
                  Event List
                </Typography>
                <div style={{ flexGrow: 1 }}>
                  <TextField
                    id='standard-search'
                    variant='standard'
                    placeholder='Quick Search'
                    inputRef={textFieldRef}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <SearchSharpIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <ButtonGroup
                    variant='outlined'
                    aria-label='Basic button group'
                    sx={{
                      '& .MuiButton-root': {
                        fontSize: '1.2rem',
                        padding: '4px 8px',
                        backgroundColor: 'transparent',
                        borderColor: 'currentColor',
                        color: 'currentColor',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 0, 0, 0.08)',
                          borderColor: 'currentColor'
                        },
                        boxShadow: 'none'
                      }
                    }}
                  >
                    <Button title='Copy Table'>
                      <Icon icon='material-symbols:file-copy-outline-sharp' />
                    </Button>
                    <Button title='Export to Excel'>
                      <Icon icon='mdi:file-excel-outline' />
                    </Button>
                    <Button title='Export to CSV'>
                      <Icon icon='mdi:file-document-outline' />
                    </Button>
                    <Button title='Export to PDF'>
                      <Icon icon='mdi:file-pdf-outline' />
                    </Button>
                    <Button title='Print'>
                      <Icon icon='fa:print' style={{ fontSize: '1rem' }} />
                    </Button>
                    <Button title='Action'>
                      <Icon
                        icon='mdi:table'
                        style={{
                          fontSize: '1.3rem'
                        }}
                      />
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
              {/* Table */}
              <div style={{ marginTop: '20px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      <th
                        style={{
                          padding: '8px',
                          textAlign: 'left',
                          backgroundColor: 'lightgray',
                          borderRadius: '5px 0 0 5px'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                          <span>SL</span>
                        </div>
                      </th>
                      <th
                        style={{
                          padding: '8px',
                          textAlign: 'left',
                          backgroundColor: 'lightgray'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                          <span>Event Title</span>
                        </div>
                      </th>
                      <th
                        style={{
                          padding: '8px',
                          textAlign: 'left',
                          backgroundColor: 'lightgray'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                          <span>Role</span>
                        </div>
                      </th>
                      <th
                        style={{
                          padding: '8px',
                          textAlign: 'left',
                          backgroundColor: 'lightgray'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                          <span>Date</span>
                        </div>
                      </th>

                      <th
                        style={{
                          padding: '8px',
                          textAlign: 'left',
                          backgroundColor: 'lightgray',
                          borderRadius: '0 5px 5px 0'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                          <span>Action</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>No Data Available</td>
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
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 'auto',
                  cursor: 'pointer'
                }}
              >
                <Button
                  size='small'
                  style={{
                    color: 'black',
                    marginRight: '10px',
                    padding: '4px 8px',
                    width: '30px',
                    minWidth: 'auto',
                    border: 'none'
                  }}
                >
                  <ArrowBackIcon style={{ fontSize: '16px' }} />
                </Button>
                <Typography
                  variant='body2'
                  sx={{
                    color: 'white',
                    padding: '4px 16px',
                    borderRadius: '4px',
                    background: theme.palette.primary.main,
                    cursor: 'pointer'
                  }}
                >
                  1
                </Typography>
                <Button
                  size='small'
                  style={{
                    color: 'black',
                    marginLeft: '10px',
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
      </div>
    </>
  )
}

export default EventLayout
