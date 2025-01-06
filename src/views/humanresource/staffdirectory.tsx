'use client'
import React, { useState } from 'react'
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
  MenuItem,
  FormGroup,
  FormControlLabel,
  Switch
} from '@mui/material'
import AddSharpIcon from '@mui/icons-material/AddSharp'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { Icon } from '@iconify/react/dist/iconify.js'
import CustomTextField from '@core/components/mui/TextField'

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

const createSwitchButton = () => (
  <FormGroup>
    <FormControlLabel control={<Switch defaultChecked />} label='' />
  </FormGroup>
)
const records = Array.from({ length: 3 }, (_, index) => ({
  SL: index + 1,
  StaffNo: ['1', '1001', '1002'][index],
  Name: ['System Administrator', '	Jidhraj Dhakal', 'Brajkishor Gupta'],
  Role: ['Super Admin', 'Admin', 'Admin'][index],
  Department: 'Admin',
  Designation: ['Principal', 'Principal', 'Vice-Principal'][index],
  Mobile: '9876543210',
  Email: 'test@gmail.com',
  Status: createSwitchButton(),
  Action: createActionButton()
}))

const StaffDirectoryLayout = () => {
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
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Staff List
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Human Resource
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Staff List</Link>
          </Typography>
        </nav>
      </div>
      <div className='attend mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: 'auto' }}>
          <CardContent>
            <div className='container' style={{ display: 'flex', gap: '80%' }}>
              <Typography variant='h6' component='h3'>
                Select Criteria
              </Typography>

              <Button variant='contained' startIcon={<AddSharpIcon />}>
                ADD STAFF
              </Button>
            </div>

            <div className='container' style={{ display: 'flex' }}>
              <CustomTextField
                select
                fullWidth
                defaultValue='role'
                label='ROLE'
                id='custom-select'
                style={{ margin: '20px 35px 0 0 ', width: '65%' }}
              >
                <CustomTextField required placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='role'>
                  <span style={{ fontStyle: 'normal' }}>Role</span>
                </MenuItem>
                <MenuItem value='accountant'>Accountant</MenuItem>
                <MenuItem value='admin'>Admin</MenuItem>
                <MenuItem value='administrator'>Administrator</MenuItem>
                <MenuItem value='driver'>Driver</MenuItem>
                <MenuItem value='librarian'>Librarian</MenuItem>
                <MenuItem value='receptionist'>Receptionist</MenuItem>
                <MenuItem value='superadmin'>Super Admin</MenuItem>
                <MenuItem value='teacher'>Teacher</MenuItem>
              </CustomTextField>
              <CustomTextField
                fullWidth
                label='SEARCH BY STAFF ID '
                style={{ margin: '20px 35px 0 0 ', marginRight: '30px', width: '65%' }}
              />
              <CustomTextField
                defaultValue='subject'
                label='SEARCH BY NAME'
                style={{ margin: '20px 35px 0 0 ', marginRight: '10px', width: '65%' }}
              />
            </div>
            <div className='container' style={{ display: 'flex', marginLeft: '90%', marginTop: '20px' }}>
              <Button variant='contained' startIcon={<SearchSharpIcon />}>
                SEARCH
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* ---- Table Section ----*/}
      <div className='allstaffList mt-4 ' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: 'auto' }}>
          <CardContent>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '16%' }}>
                Staff List
              </Typography>
              <div style={{ flexGrow: 1 }}>
                <TextField
                  id='standard-search'
                  variant='standard'
                  placeholder='QUICK SEARCH'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <SearchSharpIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </div>
              {/*---------- Button Group Section ----------- */}
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
                    {[
                      'Staff No',
                      'Name',
                      'Role',
                      'Department',
                      'Designation',
                      'Mobile',
                      'Email',
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
                  {records.slice((page - 1) * rowsPerPage, page * rowsPerPage).map(record => (
                    <TableRow key={record.SL}>
                      <TableCell>{record.StaffNo}</TableCell>
                      <TableCell>{record.Name}</TableCell>
                      <TableCell>{record.Role}</TableCell>
                      <TableCell>{record.Department}</TableCell>
                      <TableCell>{record.Designation}</TableCell>
                      <TableCell>{record.Mobile}</TableCell>
                      <TableCell>{record.Email}</TableCell>
                      <TableCell>{record.Status}</TableCell>
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
    </>
  )
}

export default StaffDirectoryLayout
