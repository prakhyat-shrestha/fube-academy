'use client'
import * as React from 'react'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import ButtonGroup from '@mui/material/ButtonGroup'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import AddSharpIcon from '@mui/icons-material/AddSharp'
import { useState } from 'react'
import {
  Button,
  Card,
  CardContent,
  Typography,
  TextField,
  InputAdornment,
  TableCell,
  TableContainer,
  Paper,
  TableHead,
  TableBody,
  TableRow,
  Pagination,
  Table,
  Stack,
  Box
} from '@mui/material'

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

const records = Array.from({ length: 40 }, (_, index) => ({
  SL: index + 1,
  Name: [
    'Leke',
    'Dollars',
    'Afghanis',
    'Euro',
    'Pound',
    'Yen',
    'Rupee',
    'Won',
    'Peso',
    'Franc',
    'Ringgit',
    'Rial',
    'Krone',
    'Rupiah',
    'Lira',
    'Dong',
    'Taka',
    'Baht',
    'Kuna',
    'Forint',
    'Kip',
    'Kwanza',
    'Sol',
    'Real',
    'Peso',
    'Colón',
    'Guarani',
    'Dirham',
    'Manat',
    'Tugrik',
    'Som',
    'Bolg',
    'Ringgit',
    'Kyat',
    'Shilling',
    'Kwanza',
    'Franc',
    'Kuna',
    'Shilling',
    'Dinar'
  ][index],
  Code: [
    'ALL',
    'USD',
    'AFN',
    'EUR',
    'GBP',
    'JPY',
    'INR',
    'KRW',
    'MXN',
    'CHF',
    'MYR',
    'IRR',
    'DKK',
    'IDR',
    'TRY',
    'VND',
    'BDT',
    'THB',
    'HRK',
    'HUF',
    'LAK',
    'AOA',
    'PEN',
    'BRL',
    'CLP',
    'CRC',
    'PYG',
    'AED',
    'AZN',
    'MNT',
    'KGS',
    'BGN',
    'MYR',
    'MMK',
    'KES',
    'AOA',
    'CDF',
    'HRK',
    'TZS',
    'TND'
  ][index],
  Symbol: [
    'L',
    '$',
    '؋',
    '€',
    '£',
    '¥',
    '₹',
    '₩',
    '$',
    'Fr.',
    'RM',
    '﷼',
    'kr.',
    'Rp',
    '₺',
    '₫',
    '৳',
    '฿',
    'kn',
    'Ft',
    '₭',
    'Kz',
    'S/',
    'R$',
    '$',
    '₡',
    '₲',
    'د.إ',
    '₼',
    '₮',
    'с',
    'лв.',
    'RM',
    'Ks',
    'KSh',
    'Kz',
    'FC',
    'kn',
    'TSh',
    'د.ت'
  ][index],
  Type: 'Symbol',
  'Currency Position': 'Suffix',
  Space: 'Yes',
  'Decimal Digit': [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2
  ][index],
  'Decimal Separator': '.',
  'Thousands Separator': ',',
  Action: createActionButton()
}))

const ManageCurrencyLayout = () => {
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
  const endIndex = Math.min(page * rowsPerPage, records.length)

  return (
    <>
      <div className='flex '>
        <Typography variant='h6' component='h3'>
          Manage Currency
        </Typography>
        <nav style={{ marginLeft: 'auto' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '25px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '25px' }}>
              General Settings
            </Link>
            <span style={{ marginRight: '25px' }}>|</span>
            <Link href='#'>Manage Currency</Link>
          </Typography>
        </nav>
      </div>

      {/* Button */}
      <Button
        variant='contained'
        startIcon={<AddSharpIcon />}
        style={{
          fontSize: '.7rem',
          width: '20px',
          marginTop: '8px',
          marginLeft: 'auto', // Pushes the button to the right
          alignItems: 'end',
          display: 'flex'
        }}
      >
        ADD
      </Button>

      {/* Currecny Table */}
      <div className='currecnyList mt-4 ' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: 'auto' }}>
          <CardContent>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '12%' }}>
                Currency List
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
                      'Code',
                      'Symbol',
                      'Type',
                      'Currency Position',
                      'Space',
                      'Decimal Digit',
                      'Decimal Separator',
                      'Thousands Separator',
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
                      <TableCell>{record.Name}</TableCell>
                      <TableCell>{record.Code}</TableCell>
                      <TableCell>{record.Symbol}</TableCell>
                      <TableCell>{record.Type}</TableCell>
                      <TableCell>{record['Currency Position']}</TableCell>
                      <TableCell>{record.Space}</TableCell>
                      <TableCell>{record['Decimal Digit']}</TableCell>
                      <TableCell>{record['Decimal Separator']}</TableCell>
                      <TableCell>{record['Thousands Separator']}</TableCell>
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
          {/* Pagination */}
        </Card>
      </div>
    </>
  )
}

export default ManageCurrencyLayout
