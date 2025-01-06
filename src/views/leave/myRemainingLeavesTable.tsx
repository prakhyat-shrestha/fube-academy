'use client'
import {
  Typography,
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
import { useState } from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

const records = Array.from({ length: 0 }, (_, index) => ({}))

const ReamainingLeaveTables = () => {
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
      <TableContainer className='mt-4' component={Paper}>
        <Table sx={{ minWidth: 650 }} stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {['TYPE', 'REMAINING DAYS', 'EXTRA TAKEN', 'LEAVE TAKEN', 'LEAVE DAYS'].map(header => (
                <TableCell align='left' sx={{ padding: 2, fontSize: '.8rem' }} key={header}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <ArrowDownwardIcon style={{ fontSize: '1rem' }} />
                    {header}
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
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
    </>
  )
}

export default ReamainingLeaveTables
