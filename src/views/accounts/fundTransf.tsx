'use client'
import React, { useState } from 'react'
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
  CardActions,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel
} from '@mui/material'
import Link from 'next/link'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import CheckIcon from '@mui/icons-material/Check'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import CustomTextField from '@core/components/mui/TextField'

const records = Array.from({ length: 0 }, (_, index) => ({}))

const FundTransferLayout = () => {
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
          Fund Transfer
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Accounts
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Fund Transfer</Link>
          </Typography>
        </nav>
      </div>
      <div className='fundTransfer mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: 'auto' }}>
          <CardContent>
            <div className='container' style={{ display: 'flex', gap: '79.5%' }}>
              <Typography variant='h6' component='h4'>
                Select Criteria
              </Typography>
            </div>

            <div className='container' style={{ display: 'flex' }}>
              <div>
                <CustomTextField fullWidth required label='AMOUNT' style={{ margin: '20px 35px 0 0 ', width: '84%' }} />
                <CustomTextField
                  fullWidth
                  required
                  label='PURPOSE'
                  style={{ margin: '20px 35px 0 0 ', width: '84%' }}
                />
              </div>
              {/* From Radio Button */}
              <div style={{ display: 'flex', marginRight: '250px' }}>
                <FormControl component='fieldset'>
                  <div>
                    <Typography variant='h6'>From</Typography>
                    <RadioGroup aria-label='custom-radio' name='customized-radios'>
                      <FormControlLabel
                        value='cash'
                        control={
                          <Radio
                            icon={<div style={{ border: '2px solid', borderRadius: '50%', width: 24, height: 24 }} />}
                            checkedIcon={<CheckIcon style={{ color: 'green', fontSize: 24 }} />}
                          />
                        }
                        label='Cash (100)'
                      />
                      <FormControlLabel
                        value='cheque'
                        control={
                          <Radio
                            icon={<div style={{ border: '2px solid', borderRadius: '50%', width: 24, height: 24 }} />}
                            checkedIcon={<CheckIcon style={{ color: 'green', fontSize: 24 }} />}
                          />
                        }
                        label='Cheque (0)'
                      />
                      <FormControlLabel
                        value='bank'
                        control={
                          <Radio
                            icon={<div style={{ border: '2px solid', borderRadius: '50%', width: 24, height: 24 }} />}
                            checkedIcon={<CheckIcon style={{ color: 'green', fontSize: 24 }} />}
                          />
                        }
                        label='Bank (0)'
                      />
                    </RadioGroup>
                  </div>
                </FormControl>
              </div>

              {/* To Radio Button */}
              <div>
                <FormControl component='fieldset'>
                  <div>
                    <Typography variant='h6'>To</Typography>
                    <RadioGroup aria-label='custom-radio' name='customized-radios'>
                      <FormControlLabel
                        value='cash'
                        control={
                          <Radio
                            icon={<div style={{ border: '2px solid', borderRadius: '50%', width: 24, height: 24 }} />}
                            checkedIcon={<CheckIcon style={{ color: 'green', fontSize: 24 }} />}
                          />
                        }
                        label='Cash (100)'
                      />
                      <FormControlLabel
                        value='cheque'
                        control={
                          <Radio
                            icon={<div style={{ border: '2px solid', borderRadius: '50%', width: 24, height: 24 }} />}
                            checkedIcon={<CheckIcon style={{ color: 'green', fontSize: 24 }} />}
                          />
                        }
                        label='Cheque (0)'
                      />
                      <FormControlLabel
                        value='bank'
                        control={
                          <Radio
                            icon={<div style={{ border: '2px solid', borderRadius: '50%', width: 24, height: 24 }} />}
                            checkedIcon={<CheckIcon style={{ color: 'green', fontSize: 24 }} />}
                          />
                        }
                        label='Bank (0)'
                      />
                    </RadioGroup>
                  </div>
                </FormControl>
              </div>
            </div>
            <div
              className='container'
              style={{ display: 'flex', marginLeft: '45.5%', marginTop: '20px', height: '35px' }}
            >
              <Button variant='contained' startIcon={<SearchSharpIcon />}>
                SEARCH
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Fund Transfer List Table */}
      <div className='fundTransferList mt-7' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: 'auto' }}>
          <CardContent>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '12%' }}>
                Amount Transfer List
              </Typography>
            </div>
            {/* Table */}

            <TableContainer className='mt-4' component={Paper}>
              <Table sx={{ minWidth: 650 }} stickyHeader aria-label='sticky table'>
                <TableHead>
                  <TableRow>
                    {['PURPOSE ', 'AMOUNT', 'FROM', 'TO'].map(header => (
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
                  <TableRow>
                    <TableCell>Total</TableCell>
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

export default FundTransferLayout
