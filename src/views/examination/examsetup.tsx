'use client'
import * as React from 'react'
import {
  Typography,
  TextField,
  InputAdornment,
  Table,
  MenuItem,
  Divider,
  TableContainer,
  TableRow,
  Paper,
  TableHead,
  TableBody,
  TableCell,
  Box,
  Stack,
  Pagination,
  Card,
  Button,
  CardActions,
  CardContent,
  ButtonGroup
} from '@mui/material'
import CustomTextField from '@/@core/components/mui/TextField'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import { useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

const createActionButton = () => (
  <Button
    variant='outlined'
    startIcon={<ArrowDownwardIcon />}
    sx={{
      fontSize: '.8rem',
      borderRadius: '20px',
      padding: '4px 8px',
      minWidth: 'auto',
      '& .MuiButton-startIcon': {
        marginRight: 0
      }
    }}
  >
    SELECT
  </Button>
)

const records = Array.from({ length: 3 }, (_, index) => ({
  SL: index + 1,
  ExamTitle: ['First Term', 'Second Term', 'Third Term'][index],
  Class: 'ECED',
  Section: 'Nursery',
  Subject: ['English', 'Math', 'Nepali'][index],
  TotalMark: '100.00',
  Distribution: 'Theory  100.00',
  Action: createActionButton()
}))

const ExamSetupLayout = () => {
  const [page, setPage] = useState(1) // Page starts at 1
  const [rowsPerPage, setRowsPerPage] = useState(5) // Show 5 rows per page

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  const handleRowsPerPageChange = (event: React.ChangeEvent<{ value: string }>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(1) // Reset to first page when changing rows per page
  }

  const startIndex = (page - 1) * rowsPerPage + 1
  // const startIndex = (page - 1) * rowsPerPage
  const endIndex = Math.min(page * rowsPerPage, records.length)

  return (
    <>
      <div className='flex '>
        <Typography variant='h6' component='h3'>
          Exam Setup
        </Typography>
        <nav style={{ marginLeft: 'auto' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '25px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '25px' }}>
              Examination
            </Link>
            <span style={{ marginRight: '25px' }}>|</span>
            <Link href='#'>Exam Setup</Link>
          </Typography>
        </nav>
      </div>
      <div className='flex' style={{ display: 'flex' }}>
        {/* Exam  first card */}
        <div className='exam mt-4'>
          <Card sx={{ width: 350, height: 'auto' }}>
            <CardContent>
              <Typography variant='h6' component='h3'>
                Add Exam
              </Typography>
              <CustomTextField
                select
                fullWidth
                defaultValue='exam'
                label='EXAM SYSTEM *'
                id='custom-select'
                style={{ margin: '20px 40px 0 0 ', width: '100%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='exam'>
                  <span style={{ fontStyle: 'normal' }}>Exam System *</span>
                </MenuItem>
                <MenuItem value='one'>
                  <span style={{ fontStyle: 'normal' }}>Single Exam</span>
                </MenuItem>
                <MenuItem value='two'>
                  <span style={{ fontStyle: 'normal' }}>Multi Exam</span>
                </MenuItem>
              </CustomTextField>
              <CustomTextField
                label='EXAM MARK *'
                id='custom-select'
                style={{ margin: '20px 40px 0 0 ', width: '100%' }}
              />
              <div className='title'>
                <div className='combo' style={{ display: 'flex', marginTop: '20px', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 'bolder' }}>Add Mark Distributions</span>
                  <Button
                    variant='contained'
                    style={{
                      borderRadius: '50%',
                      width: '25px',
                      height: '25px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '25px',
                      padding: '0',
                      minWidth: '0',
                      minHeight: '0',
                      cursor: 'pointer'
                    }}
                  >
                    +
                  </Button>
                </div>
                <div
                  className='subTitle'
                  style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}
                >
                  <Typography variant='h6' component='h3' style={{ fontSize: '11px' }}>
                    EXAM TITLE
                  </Typography>
                  <Typography variant='h6' component='h3' style={{ fontSize: '11px', marginLeft: '60px' }}>
                    EXAM MARK
                  </Typography>
                  <Typography variant='h6' component='h3' style={{ fontSize: '11px', marginLeft: '10px' }}>
                    ACTION
                  </Typography>
                </div>
                <Divider style={{ marginTop: '10px' }} />
                <div style={{ display: 'flex', marginTop: '20px', justifyContent: 'space-between' }}>
                  <CustomTextField
                    style={{ width: '50%' }}
                    value='' //Exam Title Value
                    InputLabelProps={{ style: { fontSize: '20px' } }}
                  />
                  <CustomTextField
                    style={{ width: '30%' }}
                    value='' //Exam Mark Value
                  />
                  <Button
                    variant='contained'
                    style={{
                      borderRadius: '15%',
                      width: '25px',
                      height: '25px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '25px',
                      padding: '0',
                      minWidth: '0',
                      minHeight: '0',
                      cursor: 'pointer',
                      margin: '6px '
                    }}
                  >
                    {<i className='tabler-trash' />}
                  </Button>
                </div>
                <Divider style={{ marginTop: '20px' }} />
              </div>
              <div className='total' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                <Typography variant='h6' component='h3' style={{ marginTop: '10px' }}>
                  Total
                </Typography>
                <CustomTextField
                  style={{ width: '60%' }}
                  value='' //Total Value
                />
              </div>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant='contained'>
                <CheckSharpIcon style={{ marginRight: 5 }} />
                SAVE
              </Button>
            </CardActions>
          </Card>
        </div>

        {/* Exam List 2nd card */}
        <div className='examSetUpList mt-4 mx-6' style={{ flex: 1 }}>
          <Card sx={{ width: '102.3%', height: 'auto' }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '10%' }}>
                  Exam List
                </Typography>
                <div style={{ flexGrow: 1 }}>
                  <TextField
                    id='standard-search'
                    variant='standard'
                    placeholder='SEARCH'
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
                      {[
                        'SL',
                        'Exam Title',
                        'Class',
                        'Section',
                        'Subject',
                        'Total Mark',
                        'Mark Distribution',
                        'Action'
                      ].map(header => (
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
                    {records.slice((page - 1) * rowsPerPage, page * rowsPerPage).map(record => (
                      <TableRow key={record.SL}>
                        <TableCell>{record.SL}</TableCell>
                        <TableCell>{record.ExamTitle}</TableCell>
                        <TableCell>{record.Class}</TableCell>
                        <TableCell>{record.Section}</TableCell>
                        <TableCell>{record.Subject}</TableCell>
                        <TableCell>{record.TotalMark}</TableCell>
                        <TableCell>{record.Distribution}</TableCell>
                        <TableCell>{record.Action}</TableCell>
                      </TableRow>
                    ))}
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
                  style={{ marginTop: '-10px', marginLeft: '25%' }}
                />
              </Stack>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

export default ExamSetupLayout
