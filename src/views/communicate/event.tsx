'use client'
import * as React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import {
  Typography,
  TextField,
  InputAdornment,
  Table,
  TableContainer,
  TableRow,
  Paper,
  TableHead,
  TableBody,
  TableCell,
  Box,
  Stack,
  Pagination,
  CardContent,
  Card,
  Button,
  ButtonGroup,
  CardActions,
  MenuItem,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup
} from '@mui/material'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import { Icon } from '@iconify/react/dist/iconify.js'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import CustomTextField from '@/@core/components/mui/TextField'

const records = Array.from({ length: 0 }, (_, index) => ({}))

const EventLayout = () => {
  const [page, setPage] = useState(1) // Page starts at 1
  const [rowsPerPage, setRowsPerPage] = useState(5) // Show 5 rows per page

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  const handleRowsPerPageChange = (event: React.ChangeEvent<{ value: string }>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(1) // Reset to first page when changing rows per page
  }

  // const startIndex = (page - 1) * rowsPerPage + 1
  const startIndex = (page - 1) * rowsPerPage
  const endIndex = Math.min(page * rowsPerPage, records.length)

  return (
    <>
      <div className='flex '>
        <Typography variant='h6' component='h3'>
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
          <Card sx={{ width: 350, height: 'auto' }}>
            <CardContent>
              <Typography variant='h6' component='h3'>
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
                SAVE
              </Button>
            </CardActions>
          </Card>
        </div>

        {/* Event Group list 2nd card */}
        <div className='EventList mt-4 mx-6' style={{ flex: 1 }}>
          <Card sx={{ width: '102%', height: 'auto' }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '12%' }}>
                  Event List
                </Typography>
                <div style={{ flexGrow: 1 }}>
                  <TextField
                    id='standard-search'
                    variant='standard'
                    placeholder='Quick Search'
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
              <TableContainer className='mt-4' component={Paper}>
                <Table sx={{ minWidth: 650 }} stickyHeader aria-label='sticky table'>
                  <TableHead>
                    <TableRow>
                      {['SL', 'Event Title', 'Role', 'Date', 'Location', 'Actions'].map(header => (
                        <TableCell align='left' sx={{ padding: 2, fontSize: '.8rem' }} key={header}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <ArrowDownwardIcon style={{ fontSize: '1rem' }} />
                            {header}
                          </Box>
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell>No Data Available In Table</TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              {/* Pagination Section */}
              <Stack spacing={2} direction='row' style={{ display: 'flex', marginTop: '20px' }}>
                <Typography component='h3' variant='h6' style={{ fontSize: '.8rem' }}>
                  Showing {startIndex} to {endIndex} of {records.length} entries
                </Typography>
                <Pagination
                  count={Math.ceil(records.length / rowsPerPage)} // Calculate number of pages based on total records and rows per page
                  page={page}
                  onChange={handlePageChange}
                  shape='rounded'
                  style={{ marginTop: '-10px', marginLeft: '35%' }}
                />
              </Stack>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

export default EventLayout
