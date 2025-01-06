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
  MenuItem
} from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import { Icon } from '@iconify/react/dist/iconify.js'

const records = Array.from({ length: 0 }, (_, index) => ({}))

const UserLogLayout = () => {
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
          User Log
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Student Report
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>User Log</Link>
          </Typography>
        </nav>
      </div>

      {/* ---- Table Section ----*/}
      <div className='userLog mt-4 ' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: 'auto' }}>
          <CardContent>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant='h6' component='h3' style={{ marginRight: '25%' }}>
                User Log Report
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
                    {['User', 'Role', 'IP Address', 'Login Time', 'User Agent'].map(header => (
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

export default UserLogLayout
