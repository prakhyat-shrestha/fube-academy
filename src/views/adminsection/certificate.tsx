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
  CardActions,
  MenuItem,
  ButtonGroup
} from '@mui/material'
import Link from 'next/link'
import CustomTextField from '@/@core/components/mui/TextField'
import { RadioGroup, FormControlLabel, Radio, FormLabel } from '@mui/material'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useState } from 'react'

const records = Array.from({ length: 0 }, (_, index) => ({}))

const CertificateLayout = () => {
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
        <Typography variant='h6' component='h3'>
          Certificate
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Admin Section
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Certificate </Link>
          </Typography>
        </nav>
      </div>

      <div className='flex' style={{ display: 'flex' }}>
        {/* Add certificate first card */}
        <div className='certificate mt-4'>
          <Card sx={{ width: 550, height: '100%' }}>
            <CardContent>
              <Typography variant='h6' component='h4'>
                Add Certificate
              </Typography>
              <CustomTextField label='Certificate Name' required style={{ width: '100%', marginTop: '20px' }} />
              <CustomTextField label='Header Left Text' style={{ marginTop: '20px', width: '100%' }} />

              <CustomTextField label='DATE ' type='date' style={{ width: '100%', marginTop: '20px' }} />
              <CustomTextField
                label='Body(Max character length 500)'
                multiline
                rows={2}
                style={{ marginTop: '20px', width: '100%' }}
              />
              <p>
                [name] [dob] [present_address] [guardian] [created_at] [admission_no] [roll_no] [gender]
                [admission_date] [category] [cast] [father_name] [mother_name] [religion] [email] [phone] [class]
                [section]
              </p>
              <div className='flex' style={{ display: 'flex', gap: 10 }}>
                <CustomTextField select label='Body Font' style={{ marginTop: '20px', width: '100%' }}>
                  <CustomTextField placeholder='Search' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                  <MenuItem value='arial'>
                    <span>Arial</span>
                  </MenuItem>
                  <MenuItem value='arial-black'>
                    <span>Arial Black</span>
                  </MenuItem>
                  <MenuItem value='comic'>
                    <span>Comic Sans MS</span>
                  </MenuItem>
                </CustomTextField>
                <CustomTextField
                  label='Font Size'
                  required
                  placeholder='Ex:2em'
                  style={{ marginTop: '20px', width: '100%' }}
                />
              </div>
              <CustomTextField label='Footer Left Text' style={{ marginTop: '20px', width: '100%' }} />
              <CustomTextField label='Footer Center Text' style={{ marginTop: '20px', width: '100%' }} />
              <CustomTextField label='Footer Right Text' style={{ marginTop: '20px', width: '100%' }} />
              <CustomTextField
                label='Page Layout'
                select
                defaultValue='page'
                required
                style={{ marginTop: '20px', width: '100%' }}
              >
                <CustomTextField placeholder='Search' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='page'>
                  <span>Page Layout</span>
                </MenuItem>
                <MenuItem value='A4P'>
                  <span>A4(Potrait)</span>
                </MenuItem>
                <MenuItem value='A4L'>
                  <span>A4(Landscape)</span>
                </MenuItem>
                <MenuItem value='custom'>
                  <span>Custom</span>
                </MenuItem>
              </CustomTextField>
              <div className='flex' style={{ display: 'flex', gap: 10 }}>
                <CustomTextField required label='Height(mm)' style={{ marginTop: '20px', width: '100%' }} />
                <CustomTextField label='Width(mm)' required style={{ marginTop: '20px', width: '100%' }} />
              </div>
              <div style={{ display: 'flex' }}>
                <span style={{ marginRight: '20px', marginTop: '20px' }}>STUDENT PHOTO</span>
                <div style={{ display: 'flex', marginTop: '12px' }}>
                  <RadioGroup row aria-label='sizes' name='sizes' defaultValue='yes'>
                    <FormControlLabel value='yes' control={<Radio />} label='Yes' />
                    <FormControlLabel value='none' control={<Radio />} label='None' />
                  </RadioGroup>
                </div>
              </div>
              <CustomTextField
                required
                placeholder='Image (1100 X 850)px*'
                style={{ marginTop: 20, width: '100%' }}
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
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant='contained'>
                <CheckSharpIcon style={{ marginRight: 5 }} />
                SAVE CERTIFICATE
              </Button>
            </CardActions>
          </Card>
        </div>

        {/* ---- Table Section ----*/}
        <div className='certificateList mt-4 mx-6 ' style={{ flex: 1 }}>
          <Card sx={{ width: '102.7%', height: 'auto' }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' component='h3' style={{ marginRight: '10%' }}>
                  Certificate List
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
                        backgroundColor: 'tansparent',
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
              {/*--------- Table section --------*/}
              <TableContainer className='mt-4' component={Paper}>
                <Table sx={{ minWidth: 650 }} stickyHeader aria-label='sticky table'>
                  <TableHead>
                    <TableRow>
                      {['Name', 'Background Image', 'Default For', 'Action'].map(header => (
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
                      <TableCell>No Data Available In Table</TableCell>
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

export default CertificateLayout
