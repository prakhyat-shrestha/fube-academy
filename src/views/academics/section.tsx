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
  Card,
  Button,
  CardActions,
  CardContent
} from '@mui/material'
import CustomTextField from '@/@core/components/mui/TextField'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import ButtonGroup from '@mui/material/ButtonGroup'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
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

const records = Array.from({ length: 6 }, (_, index) => ({
  SL: index + 1,
  Name: ['A', 'B', 'EM', 'KG', 'NM', 'Nursery'][index],
  Action: createActionButton()
}))

const SectionLayout = () => {
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
          Section
        </Typography>
        <nav style={{ marginLeft: '74.5%' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '25px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '25px' }}>
              Academics
            </Link>
            <span style={{ marginRight: '25px' }}>|</span>
            <Link href='#'>Section</Link>
          </Typography>
        </nav>
      </div>
      <div className='flex' style={{ display: 'flex' }}>
        {/* Add section first card */}
        <div className='section mt-4'>
          <Card sx={{ width: 450, height: 200 }}>
            <CardContent>
              <Typography variant='h6' component='h3'>
                Add Section
              </Typography>
              <Typography variant='body2' component='div'>
                <CustomTextField required label='NAME' style={{ marginTop: 20 }} />
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant='contained'>
                <CheckSharpIcon style={{ marginRight: 5 }} />
                SAVE SECTION
              </Button>
            </CardActions>
          </Card>
        </div>

        {/* Section list 2nd card */}
        <div className='sectionList mt-4 mx-6' style={{ flex: 1 }}>
          <Card sx={{ width: '102.3%', height: 'auto' }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '16%' }}>
                  Section List
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
                      {['Section', 'Action'].map(header => (
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
                        <TableCell>{record.Name}</TableCell>
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

export default SectionLayout
