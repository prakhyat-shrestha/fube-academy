'use client'
import * as React from 'react'
import {
  Typography,
  MenuItem,
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
  Card,
  Button,
  CardActions,
  CardContent,
  ButtonGroup,
  FormControlLabel,
  Radio,
  RadioGroup
} from '@mui/material'
import CustomTextField from '@/@core/components/mui/TextField'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { useState } from 'react'

const records = Array.from({ length: 0 }, (_, index) => ({}))

const UploadContentLayout = () => {
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
          Upload Content List
        </Typography>
        <nav style={{ marginLeft: '60.1%' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '25px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '25px' }}>
              Study Material
            </Link>
            <span style={{ marginRight: '25px' }}>|</span>
            <Link href='#'>Upload Content List</Link>
          </Typography>
        </nav>
      </div>
      <div className='flex' style={{ display: 'flex' }}>
        {/* Upload content first card */}
        <div className='upLoadContent mt-4'>
          <Card sx={{ width: 350, height: 940 }}>
            <CardContent>
              <Typography variant='h6' component='h3'>
                Upload Content
              </Typography>
              <CustomTextField
                fullWidth
                label='CONTENT TITLE*'
                id='custom-select'
                style={{ margin: '20px 40px 0 0 ', width: '100%' }}
              />
              <CustomTextField
                select
                fullWidth
                defaultValue='contenttype'
                label='CONTENT TYPE*'
                id='custom-select'
                style={{ margin: '20px 40px 0 0 ', width: '100%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='contenttype'>
                  <span style={{ fontStyle: 'normal' }}>CONTENT TYPE *</span>
                </MenuItem>
                <MenuItem value='assignment'>
                  <span style={{ fontStyle: 'normal' }}>Assignment</span>
                </MenuItem>
                <MenuItem value='syllabus'>
                  <span style={{ fontStyle: 'normal' }}>Syllabus</span>
                </MenuItem>
                <MenuItem value='other'>
                  <span style={{ fontStyle: 'normal' }}>Other Downloads</span>
                </MenuItem>
              </CustomTextField>
              <div style={{ marginTop: '20px' }}>
                <span>AVAILABLE FOR *</span>
                <RadioGroup row aria-label='sizes' name='sizes' defaultValue='one' style={{ flexDirection: 'column' }}>
                  <FormControlLabel value='one' control={<Radio />} label='All Admin' />
                  <FormControlLabel value='two' control={<Radio />} label='Student' />
                  <FormControlLabel value='three' control={<Radio />} label='Available for all classes' disabled />
                </RadioGroup>
              </div>
              <CustomTextField
                select
                fullWidth
                defaultValue='class'
                required
                label='CLASS '
                id='custom-select'
                style={{ margin: '20px 40px 0 0 ', width: '100%' }}
                disabled
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='class'>
                  <span style={{ fontStyle: 'normal' }}>CLASS *</span>
                </MenuItem>
                <MenuItem value='eced'>
                  <span style={{ fontStyle: 'normal' }}>ECED</span>
                </MenuItem>
                <MenuItem value='one'>
                  <span style={{ fontStyle: 'normal' }}>1</span>
                </MenuItem>
                <MenuItem value='two'>
                  <span style={{ fontStyle: 'normal' }}>2</span>
                </MenuItem>
              </CustomTextField>
              <CustomTextField
                select
                fullWidth
                defaultValue='section'
                label='SECTION '
                required
                id='custom-select'
                style={{ margin: '20px 40px 0 0 ', width: '100%' }}
                disabled
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='section'>
                  <span style={{ fontStyle: 'normal' }}>SECTION *</span>
                </MenuItem>
              </CustomTextField>
              <CustomTextField
                label='DATE'
                type='date'
                style={{ margin: '20px 40px 0 0 ', width: '100%' }}
                InputLabelProps={{ shrink: true }}
              />
              <CustomTextField
                label='DESCRIPTION'
                multiline
                rows={2}
                disabled
                style={{ margin: '20px 40px 0 0 ', width: '100%' }}
              />
              <CustomTextField
                fullWidth
                label='SOURCE URL'
                id='custom-select'
                style={{ margin: '20px 40px 0 0 ', width: '100%' }}
              />
              <CustomTextField
                required
                value='File'
                style={{ margin: '20px 40px 0 0 ', width: '100%' }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <Button variant='contained' style={{ height: '25px', width: '90px', fontSize: '0.75rem' }}>
                        BROWSE
                      </Button>
                    </InputAdornment>
                  )
                }}
              />
              <span>(jpg,png,jpeg,pdf,doc,docx,mp4,mp3, txt are allowed for upload)</span>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant='contained'>
                <CheckSharpIcon style={{ marginRight: 5 }} />
                SAVE
              </Button>
            </CardActions>
          </Card>
        </div>

        {/* Upload Content List 2nd card */}
        <div className='uploadContentList mt-4 mx-6' style={{ flex: 1 }}>
          <Card sx={{ width: '102.3%', height: 'auto' }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '10%' }}>
                  Upload Content List
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
                      {['SL', 'Content Title', 'Type', 'Date', 'Available For', 'Class(Section)', 'Action'].map(
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

export default UploadContentLayout
