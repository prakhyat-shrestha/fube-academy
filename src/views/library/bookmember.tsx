'use client'
import * as React from 'react'

import { useState } from 'react'

import { styled, useTheme } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import FirstPageIcon from '@mui/icons-material/FirstPage'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import LastPageIcon from '@mui/icons-material/LastPage'
import TableFooter from '@mui/material/TableFooter'
import TablePagination from '@mui/material/TablePagination'

import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'

import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import Card from '@mui/material/Card'

import CustomTextField from '@/@core/components/mui/TextField'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },

  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

interface TablePaginationActionsProps {
  count: number
  page: number
  rowsPerPage: number
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme()
  const { count, page, rowsPerPage, onPageChange } = props

  const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, 0)
  }

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1)
  }

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1)
  }

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
  }

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label='first page'>
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label='previous page'>
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='next page'
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='last page'
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  )
}

//formDatatype

type FormDataType = {
  sl: string
  name: string
  membertype: string
  memberid: number
  email: string
  mobile: number
  action: string
}

//function define variable type for table rows

function createData(
  sl: string,
  name: string,
  membertype: string,
  memberid: number,
  email: string,
  mobile: number,
  action: string
) {
  return { sl, name, membertype, memberid, email, mobile, action }
}

//dummy data for above function

const rows = [
  createData('Test', 'Astronomy', 'Student', 3455, 'a@outlook.com', 5, 'nothing'),
  createData('Test', 'Astrophysics', 'Teacher', 2423, 'b@outlook.com', 5, 'nothing'),

  createData('Test', 'How to Steal', 'Teacher', 1212, 'c@outlook.com', 2, 'nothing'),
  createData('Test', 'Chemistry', 'Student', 2412, 'd@outlook.com', 50, 'nothing'),
  createData('Test', 'Astronomy', 'Student', 2313, 'e@outlook.com', 5, 'nothing')
]

//function for showing booklist

export default function BookMember() {
  const [formData, setFormData] = useState<FormDataType>({
    sl: '',
    name: '',
    membertype: '',
    memberid: 0,
    email: '',
    mobile: 0,
    action: ''
  })

  const handleSubmit = e => {
    e.preventDefault()

    // const { name, value } = e.target;
    setFormData(formData)
    console.log(formData)
  }

  // Retrieve form data from localStorage or state management

  const [page, setPage] = React.useState(0)

  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <div className='flex gap-10'>
      <div>
        <Card sx={{ maxWidth: 345 }}>
          {/* <CardMedia sx={{ height: 14 }} /> */}
          <CardContent>
            <h3>Add Member</h3>
            <Typography variant='body2'>
              <CustomTextField required label='Member Type' />
            </Typography>
            <Typography variant='body2'>
              <CustomTextField required label='Member ID' />
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant='contained'>Save Member</Button>
          </CardActions>
        </Card>
      </div>

      <Card sx={{ maxWidth: 800 }}>
        <div className='flex gap-8 '>
          <h2>Member List</h2>
          <Typography variant='body2'>
            <CustomTextField required label='Search' />
          </Typography>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 800 }} aria-label='custom pagination table'>
            <TableHead>
              <TableRow></TableRow>
              <TableRow>
                <StyledTableCell align='left'> SL</StyledTableCell>
                <StyledTableCell align='left'>Name</StyledTableCell>
                <StyledTableCell align='left'>Member Type</StyledTableCell>
                <StyledTableCell align='left'>Member ID</StyledTableCell>
                <StyledTableCell align='left'>Email</StyledTableCell>
                <StyledTableCell align='left'>Mobile</StyledTableCell>
                <StyledTableCell align='left'>Action</StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map(row => (
                <TableRow key={row.name}>
                  <StyledTableCell align='left'>{row.sl}</StyledTableCell>
                  <StyledTableCell align='left'>{row.name}</StyledTableCell>
                  <StyledTableCell align='left'>{row.membertype}</StyledTableCell>
                  <StyledTableCell align='left'>{row.memberid}</StyledTableCell>
                  <StyledTableCell align='left'>{row.email}</StyledTableCell>
                  <StyledTableCell align='left'>{row.mobile}</StyledTableCell>
                  <StyledTableCell align='left'>{row.action}</StyledTableCell>
                </TableRow>
              ))}
              <TableRow key={formData.sl}>
                <StyledTableCell align='left'>{formData.name}</StyledTableCell>
                <StyledTableCell align='left'>{formData.membertype}</StyledTableCell>
                <StyledTableCell align='left'>{formData.memberid}</StyledTableCell>
                <StyledTableCell align='left'>{formData.email}</StyledTableCell>
                <StyledTableCell align='left'>{formData.mobile}</StyledTableCell>
                <StyledTableCell align='left'>{formData.action}</StyledTableCell>
              </TableRow>

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={3}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  slotProps={{
                    select: {
                      inputProps: {
                        'aria-label': 'rows per page'
                      },
                      native: true
                    }
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Card>
    </div>
  )
}
