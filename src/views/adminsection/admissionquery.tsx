'use client'
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
  Pagination
} from '@mui/material'
import Link from 'next/link'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CustomTextField from '@core/components/mui/TextField'
import Button from '@mui/material/Button'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import AddSharpIcon from '@mui/icons-material/AddSharp'
import { Icon } from '@iconify/react/dist/iconify.js'
import ButtonGroup from '@mui/material/ButtonGroup'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { useState } from 'react'

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

const records = Array.from({ length: 0 }, (_, index) => ({}))

const AdmissionQueryLayout = () => {
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
          Admission Query
        </Typography>
        <nav style={{ marginLeft: 'auto' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Admin Section
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Admission Query </Link>
          </Typography>
        </nav>
      </div>
      <div className='flex mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div
              className='container'
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}
            >
              <Typography variant='h6' component='h4'>
                Select Criteria
              </Typography>
              <Button variant='contained' startIcon={<AddSharpIcon />}>
                ADD
              </Button>
            </div>

            <div
              className='container'
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <Typography variant='body2' component='div' style={{ width: '24%' }}>
                <CustomTextField
                  label='DATE FROM'
                  type='date'
                  style={{ width: '100%' }}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Typography>

              <Typography variant='body2' component='div' style={{ width: '24%' }}>
                <CustomTextField
                  label='DATE TO'
                  type='date'
                  style={{ width: '100%' }}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Typography>

              <CustomTextField
                select
                fullWidth
                defaultValue='Select'
                label='SOURCE*'
                id='custom-select'
                style={{ width: '24%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='Select'>
                  <span style={{ fontStyle: 'normal' }}>Select Source *</span>
                </MenuItem>
              </CustomTextField>

              <CustomTextField
                select
                fullWidth
                defaultValue='status'
                label='STATUS*'
                id='custom-select'
                style={{ width: '24%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='status'>
                  <span style={{ fontStyle: 'normal' }}>Select Status*</span>
                </MenuItem>
                <MenuItem value={'School Fee'}>Active</MenuItem>
                <MenuItem value={'School Fee'}>In Active</MenuItem>
              </CustomTextField>
            </div>

            <div
              className='container mt-6'
              style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}
            >
              <Button variant='contained' startIcon={<SearchSharpIcon />}>
                SEARCH
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ---- Table Section ----*/}
      <div className='queryList mt-4 ' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: 'auto' }}>
          <CardContent>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '12%' }}>
                Query List
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
                      'Name',
                      'Phone',
                      'Source',
                      'Query Date',
                      'Last Follow Up Date',
                      'Next Follow Up Date',
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
    </>
  )
}

export default AdmissionQueryLayout
