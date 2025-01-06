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
  CardActions
} from '@mui/material'
import Link from 'next/link'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import CustomTextField from '@/@core/components/mui/TextField'
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined'
import { useState } from 'react'

const records = Array.from({ length: 0 }, (_, index) => ({}))

const BackupSettingsLayout = () => {
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
          Backup
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              General Settings
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Backup</Link>
          </Typography>
        </nav>
      </div>
      <div className='flex' style={{ display: 'flex' }}>
        <div className='backupSetting mt-4 '>
          {/* Upload From Local Directory Card */}
          <Card sx={{ width: 350, height: 'auto' }}>
            <CardContent>
              <div className='container'>
                <Typography variant='h6' component='h4'>
                  Upload From Local Directory
                </Typography>
              </div>
              <CustomTextField
                required
                value='Attach File*'
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
              {/* Button */}
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button variant='contained'>
                  <CheckSharpIcon sx={{ mr: 1 }} />
                  UPDATE
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </div>

        {/* Database Backup List Card */}
        <div className='backupList mt-4 mx-6' style={{ flex: 1 }}>
          <Card sx={{ width: '102.4%', height: 'auto' }}>
            <CardContent>
              <div style={{ display: 'flex', gap: '45%' }}>
                <Typography variant='h6' component='h4'>
                  Database Backup List
                </Typography>
                <div className='btns' style={{ display: 'flex', width: 'auto', gap: '5px', marginLeft: '34px' }}>
                  <Button
                    variant='contained'
                    style={{
                      fontSize: '.7rem',
                      height: '25px'
                    }}
                  >
                    <ExpandCircleDownOutlinedIcon sx={{ mr: 1, fontSize: '.9rem' }} />
                    UPLOAD FILE BACKUP
                  </Button>

                  <Button
                    variant='contained'
                    style={{
                      fontSize: '.7rem',
                      height: '25px'
                    }}
                  >
                    <ExpandCircleDownOutlinedIcon sx={{ mr: 1, fontSize: '.9rem' }} />
                    DATABASE BACKUP
                  </Button>
                </div>
              </div>
              {/* Table */}
              <TableContainer className='mt-4' component={Paper}>
                <Table sx={{ minWidth: 650 }} stickyHeader aria-label='sticky table'>
                  <TableHead>
                    <TableRow>
                      {['SIZE', 'CREATED DATE TIME', 'BACKUP FILES', 'FILE TYPE', 'ACTIONS'].map(header => (
                        <TableCell align='left' sx={{ padding: 2, fontSize: '.8rem' }} key={header}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>{header}</Box>
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  {/* <TableBody>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>No Data Available In Table</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody> */}
                </Table>
              </TableContainer>

              {/* Pagination Section */}
              {/* <Stack spacing={2} direction='row' style={{ display: 'flex', marginTop: '20px' }}>
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
            </Stack> */}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

export default BackupSettingsLayout
