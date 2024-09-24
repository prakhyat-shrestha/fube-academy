'use client'
import * as React from 'react'

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

import formData from './addbook'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black
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
    //Pagination

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

//function define variable type for table rows

function createData(
  sl: string,
  booktitle: string,
  isbn: string,
  catergory: string,
  publishername: string,
  authorname: string,
  quantity: string,
  price: string,
  action: string
) {
  return { sl, booktitle, isbn, catergory, publishername, authorname, quantity, price, action }
}

//dummy data for above function

const rows = [
  createData('Test', 'Astronomy', 72882, 'Science', 'Bright Vision', 'Stephen Hawking', 5, 450, 'nothing'),
  createData('Test', 'Astrophysics', 72883, 'Science', 'Bright Vision', 'Stephen Hawking', 5, 420, 'nothing'),
  createData(
    'Test',
    'Theory of Relativity',
    72842,
    'Science',
    'German Publication',
    'Albert Einstein',
    7,
    350,
    'nothing'
  ),
  createData(
    'Test',
    'Rise Against Feminism',
    11111,
    'Facts',
    'Brian Publication',
    'Brian Kaduwal',
    5000,
    10,
    'nothing'
  ),
  createData('Test', 'How to Steal', 72892, 'Art', 'Thinkbook', 'Dark Sighter', 2, 50, 'nothing'),
  createData('Test', 'Chemistry', 72812, 'Science', 'Bright Vision', 'Madam Curie', 50, 150, 'nothing'),
  createData('Test', 'Astronomy', 72222, 'Science', 'Bright Vision', 'Stephen Hawking', 5, 450, 'nothing')
]

//function for showing booklist

export default function Booklist() {
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
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 800 }} aria-label='custom pagination table'>
          <TableHead>
            <TableRow>
              <StyledTableCell align='left'> SL</StyledTableCell>
              <StyledTableCell align='left'>Book Title</StyledTableCell>
              <StyledTableCell align='left'>ISBN</StyledTableCell>
              <StyledTableCell align='left'>Catergory</StyledTableCell>
              <StyledTableCell align='left'>Publisher Name</StyledTableCell>
              <StyledTableCell align='left'>Authorname</StyledTableCell>
              <StyledTableCell align='left'>Quantity</StyledTableCell>
              <StyledTableCell align='left'>Price</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map(row => (
              <TableRow key={row.name}>
                <StyledTableCell align='left'>{row.sl}</StyledTableCell>
                <StyledTableCell align='left'>{row.booktitle}</StyledTableCell>
                <StyledTableCell align='left'>{row.isbn}</StyledTableCell>
                <StyledTableCell align='left'>{row.catergory}</StyledTableCell>
                <StyledTableCell align='left'>{row.publishername}</StyledTableCell>
                <StyledTableCell align='left'>{row.authorname}</StyledTableCell>
                <StyledTableCell align='left'>{row.quantity}</StyledTableCell>
                <StyledTableCell align='left'>{row.price}</StyledTableCell>
              </TableRow>
            ))}
            <TableRow key={formData.sl}>
              <StyledTableCell align='left'>{formData.booktitle}</StyledTableCell>
              <StyledTableCell align='left'>{formData.isbn}</StyledTableCell>
              <StyledTableCell align='left'>{formData.catergory}</StyledTableCell>
              <StyledTableCell align='left'>{formData.publishername}</StyledTableCell>
              <StyledTableCell align='left'>{formData.authorname}</StyledTableCell>
              <StyledTableCell align='left'>{formData.quantity}</StyledTableCell>
              <StyledTableCell align='left'>{formData.price}</StyledTableCell>
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
    </>
  )
}
