'use client'
import * as React from 'react'
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
  Checkbox
} from '@mui/material'
import { useState } from 'react'
import Link from 'next/link'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Icon } from '@iconify/react/dist/iconify.js'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import CheckIcon from '@mui/icons-material/Check'
import CustomTextField from '@/@core/components/mui/TextField'

const records = Array.from({ length: 0 }, (_, index) => ({}))

const OnlineExamLayout = () => {
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
          Online Exam
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Online Exam
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Online Exam</Link>
          </Typography>
        </nav>
      </div>
      <div className='flex' style={{ display: 'flex' }}>
        {/* Online Exam first card */}
        <div className='onlineExam mt-4'>
          <Card sx={{ width: 350, height: 'auto' }}>
            <CardContent>
              <Typography variant='h6' component='h3'>
                Add Online Exam
              </Typography>

              <Typography variant='body2' component='div'>
                <CustomTextField required label='EXAM TITLE' style={{ marginTop: 20, width: '100%' }} />
              </Typography>
              <Typography variant='body2' component='div'>
                <CustomTextField
                  required
                  label='CLASS'
                  select
                  defaultValue={'class'}
                  style={{ marginTop: 20, width: '100%' }}
                >
                  <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                  <MenuItem value='class'>Select Class*</MenuItem>
                  <MenuItem value='ECED'>ECED</MenuItem>
                  <MenuItem value='1'>1</MenuItem>
                  <MenuItem value='2'>2</MenuItem>
                  <MenuItem value='3'>3</MenuItem>
                  <MenuItem value='4'>4</MenuItem>
                </CustomTextField>
              </Typography>
              <Typography variant='body2' component='div'>
                <CustomTextField
                  required
                  label='SUBJECT'
                  select
                  defaultValue={'subject'}
                  style={{ marginTop: 20, width: '100%' }}
                >
                  <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                  <MenuItem value='subject'>Select Subjects*</MenuItem>
                </CustomTextField>
              </Typography>

              <Typography variant='body2' component='div'>
                <CustomTextField
                  required
                  label='SECTION'
                  select
                  defaultValue={'section'}
                  style={{ marginTop: 20, width: '100%' }}
                >
                  <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                  <MenuItem value='section'>Select</MenuItem>
                  <MenuItem value='unselect'>Unselect All</MenuItem>
                </CustomTextField>
              </Typography>

              <Typography variant='body2' component='div'>
                <CustomTextField required type='date' label='DATE' style={{ marginTop: 20, width: '100%' }} />
              </Typography>
              <Typography variant='body2' component='div'>
                <CustomTextField required type='date' label='END DATE' style={{ marginTop: 20, width: '100%' }} />
              </Typography>
              <Typography variant='body2' component='div'>
                <CustomTextField required type='date' label='START TIME' style={{ marginTop: 20, width: '100%' }} />
              </Typography>
              <Typography variant='body2' component='div'>
                <CustomTextField required type='date' label='END TIME' style={{ marginTop: 20, width: '100%' }} />
              </Typography>
              <Typography variant='body2' component='div' style={{ display: 'flex', width: '100%', marginTop: '20px' }}>
                <CustomTextField label='MINIMUM PERCENTAGE' required variant='outlined' multiline rows={2} fullWidth />
              </Typography>
              <Typography variant='body2' component='div' style={{ display: 'flex', width: '100%', marginTop: '20px' }}>
                <CustomTextField required label='INSTRUCTION' variant='outlined' multiline rows={4} fullWidth />
              </Typography>
              <Typography variant='body2' component='div' style={{ display: 'flex', width: '100%', marginTop: '20px' }}>
                <FormControlLabel
                  label='Auto Mark Register'
                  control={
                    <Checkbox
                      icon={
                        <span
                          style={{
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            border: '2px solid #1976d2'
                          }}
                        />
                      }
                      checkedIcon={
                        <CheckIcon
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: '50%',
                            backgroundColor: '#1976d2',
                            color: '#fff'
                          }}
                        />
                      }
                      sx={{
                        padding: '9px' // Adjust padding to make it visually centered
                      }}
                      defaultChecked
                      name='color-secondary'
                      color='secondary'
                    />
                  }
                />
              </Typography>
              <Typography variant='h6' component='div' style={{ display: 'flex', width: '100%', marginTop: '5px' }}>
                (Online for Mulitple)
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

        {/* Online Exam list 2nd card */}
        <div className='onlineExamList mt-4 mx-6' style={{ flex: 1 }}>
          <Card sx={{ width: '102%', height: 'auto' }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '12%' }}>
                  Online Exam List
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
                        'Title',
                        'Class(Section)',
                        'Subject',
                        'Exam Date',
                        'Duration',
                        'Minimum Percentage',
                        'Status',
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
                    <TableRow>
                      <TableCell></TableCell>
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

export default OnlineExamLayout
