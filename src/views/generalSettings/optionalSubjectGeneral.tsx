'use client'
import {
  Typography,
  TextField,
  InputAdornment,
  Table,
  TableContainer,
  FormGroup,
  TableRow,
  Checkbox,
  FormControlLabel,
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
  ButtonGroup
} from '@mui/material'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import CustomTextField from '@/@core/components/mui/TextField'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { useState } from 'react'

const records = Array.from({ length: 0 }, (_, index) => ({}))

const OptionalSubjectGeneralLayout = () => {
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
        <Typography variant='h6' component='h4'>
          Assign Optional Subject
        </Typography>
        <nav style={{ marginLeft: 'auto' }}>
          <Typography variant='h6' component='h4' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '25px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '25px' }}>
              General Settings
            </Link>
            <span style={{ marginRight: '25px' }}>|</span>
            <Link href='#'>Assign Optional Subject </Link>
          </Typography>
        </nav>
      </div>

      {/*  1st card */}
      <div className='assignOptionalSubject mt-4  ' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: 'auto' }}>
          <CardContent>
            <Typography variant='h6' component='h4'>
              Assign Optional Subject
            </Typography>
            <div className='flex' style={{ gap: 30, marginTop: '10px' }}>
              <Typography variant='h6' component='h3' style={{ fontWeight: 'lighter', fontSize: '14px' }}>
                SELECT CLASS*
              </Typography>
              <div style={{ marginTop: '30px', marginLeft: '-10%' }}>
                <FormGroup defaultValue='eced'>
                  <Box mr={2}>
                    <FormControlLabel
                      label='ECED '
                      value='eced'
                      control={
                        <Checkbox
                          defaultChecked={false}
                          name='size-small'
                          checkedIcon={<i className='tabler-circle-check-filled' />}
                          icon={<i className='tabler-circle' />}
                        />
                      }
                    />
                  </Box>
                  <Box mr={2}>
                    <FormControlLabel
                      label='1 '
                      control={
                        <Checkbox
                          defaultChecked
                          name='size-small'
                          checkedIcon={<i className='tabler-circle-check-filled' />}
                          icon={<i className='tabler-circle' />}
                        />
                      }
                    />
                  </Box>
                  <Box mr={2}>
                    <FormControlLabel
                      label='2 '
                      control={
                        <Checkbox
                          defaultChecked
                          name='size-small'
                          checkedIcon={<i className='tabler-circle-check-filled' />}
                          icon={<i className='tabler-circle' />}
                        />
                      }
                    />
                  </Box>
                  <Box mr={2}>
                    <FormControlLabel
                      label='All Select '
                      control={
                        <Checkbox
                          defaultChecked
                          name='size-small'
                          checkedIcon={<i className='tabler-circle-check-filled' />}
                          icon={<i className='tabler-circle' />}
                        />
                      }
                    />
                  </Box>
                </FormGroup>
              </div>

              <CustomTextField
                defaultValue={'0'}
                label='GPA ABOVE'
                required
                style={{ marginTop: '4px', marginLeft: '15%', width: '35%' }}
              />

              <Button
                variant='contained'
                style={{ width: 'auto', height: '38px', marginLeft: '50px', marginTop: '22.5px' }}
              >
                SAVE
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* ---- Table Section ----*/}
      <div className='optionalSubjectList mt-7 ' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: 'auto' }}>
          <CardContent>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '16%' }}>
                Optional Subject
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
                    {['Year', 'Title', 'Starting Date', 'Ending Date', 'Actions'].map(header => (
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

export default OptionalSubjectGeneralLayout
