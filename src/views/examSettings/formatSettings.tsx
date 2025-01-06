'use client'
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
  MenuItem
} from '@mui/material'
import Link from 'next/link'
import CustomTextField from '@/@core/components/mui/TextField'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

const records = Array.from({ length: 0 }, (_, index) => ({}))

const FormatSettingsLayout = () => {
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
      <div className='flex'>
        <Typography variant='h6' component='h4'>
          Format Settings
        </Typography>
        <nav style={{ marginLeft: 'auto' }}>
          <Typography variant='h6' component='h4' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '25px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '25px' }}>
              Exam Settings
            </Link>
            <span style={{ marginRight: '25px' }}>|</span>
            <Link href='#'>Format Settings</Link>
          </Typography>
        </nav>
      </div>
      <div className='flex' style={{ display: 'flex' }}>
        {/* Add Format Settings card */}
        <div className='formatSettings mt-4'>
          <Card sx={{ width: 350, height: 'auto' }}>
            <CardContent>
              <Typography variant='h6' component='h4'>
                Add Exam Format
              </Typography>
              <div
                className='note mt-4'
                style={{
                  width: '100%',
                  background: '#ffedd4',
                  color: '#966e24',
                  borderRadius: '3px',
                  padding: '10px 6px 10px 10px'
                }}
              >
                <p>
                  For term exam type, Controller title and signature will shows on mark sheet report and merit list
                  report. And Result publication date shows on mark sheet report and merit list report and tabulation
                  sheet report. For progress card type publication date shows on progress card, 100 percent progress
                  card report.
                </p>
              </div>

              <CustomTextField label='TYPE' defaultValue='select' select required fullWidth sx={{ marginTop: '20px' }}>
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='select'>
                  <span style={{ fontStyle: 'normal' }}>Term Exam *</span>
                </MenuItem>
              </CustomTextField>

              <CustomTextField label='EXAM' select defaultValue='exam' required fullWidth sx={{ marginTop: '20px' }}>
                <CustomTextField placeholder='Search' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='exam'>
                  <span>Select Exam *</span>
                </MenuItem>
              </CustomTextField>

              <CustomTextField label='CONTROLLER TITLE' required fullWidth sx={{ marginTop: '20px' }} />

              <CustomTextField
                required
                label='SIGNATURE'
                value='Signature'
                fullWidth
                sx={{ marginTop: '20px' }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <Button variant='contained' sx={{ height: '25px', width: '90px', fontSize: '0.75rem' }}>
                        BROWSE
                      </Button>
                    </InputAdornment>
                  )
                }}
              />
              <Typography variant='body2' sx={{ mt: 2 }}>
                (Allow file jpg, png, jpeg, svg)
              </Typography>

              <CustomTextField
                label='RESULT PUBLICATION DATE '
                required
                type='date'
                fullWidth
                sx={{ marginTop: '20px' }}
              />

              <Typography variant='h6' component='h4' style={{ fontWeight: 'bold', marginTop: '20px' }}>
                Attendance
              </Typography>

              <CustomTextField label='START DATE' required type='date' fullWidth sx={{ marginTop: '20px' }} />

              <CustomTextField label='END DATE' required type='date' fullWidth sx={{ marginTop: '20px' }} />
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant='contained'>
                <CheckSharpIcon sx={{ mr: 1 }} />
                SAVE CONTENT
              </Button>
            </CardActions>
          </Card>
        </div>

        {/*  2nd card */}
        <div className='examFormatList mt-4 mx-6' style={{ flex: 1 }}>
          <Card sx={{ width: '102.3%', height: 'auto' }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '16%' }}>
                  Exam Format List
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
                      {['Exam', 'Title', 'Signature', 'Publish Date', 'Start Date', 'End Date', 'Actions'].map(
                        header => (
                          <TableCell align='left' sx={{ padding: 2, fontSize: '.8rem' }} key={header}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <ArrowDownwardIcon style={{ fontSize: '1rem' }} />
                              {header}
                            </Box>
                          </TableCell>
                        )
                      )}
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

export default FormatSettingsLayout
