'use client'
import * as React from 'react'

import { useState } from 'react'

import Autocomplete from '@mui/material/Autocomplete'

import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Button,
  Typography,
  Box,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  alpha,
  IconButton,
  Toolbar,
  Tooltip,
  Paper,
  TableContainer
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import FilterListIcon from '@mui/icons-material/FilterList'
import TablePagination from '@mui/material/TablePagination'
import { visuallyHidden } from '@mui/utils'

import CustomTextField from '@/@core/components/mui/TextField'

interface Data {
  sl: number
  subject: string
  categoryname: string
  subjectcode: number
  action: string
}

function createData(sl: number, subject: string, categoryname: string, subjectcode: number, action: string): Data {
  return {
    sl,
    subject,
    categoryname,
    subjectcode,
    action
  }
}

const rows = [
  createData(1, 'Cupcake', 'Student', 3.7, 'done'),
  createData(2, 'Donut', 'Student', 25.0, 'done'),
  createData(3, 'Eclair', 'Student', 16.0, 'done'),
  createData(4, 'Frozen yoghurt', 'Student', 6.0, 'done'),
  createData(5, 'Gingerbread', 'Student', 16.0, 'done'),
  createData(6, 'Honeycomb', 'Student', 3.2, 'done'),
  createData(7, 'Ice cream sandwich', 'Teacher', 9.0, 'done'),
  createData(8, 'Jelly Bean', 'Teacher', 0.0, 'done'),
  createData(9, 'KitKat', 'Teacher', 26.0, 'done'),
  createData(10, 'Lollipop', 'Student', 0.2, 'done'),
  createData(11, 'Marshmallow', 'Teacher', 0, 'done'),
  createData(12, 'Nougat', 'Student', 19.0, 'done'),
  createData(13, 'Oreo', 'Student', 18.0, 'done')
]

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }

  if (b[orderBy] > a[orderBy]) {
    return 1
  }

  return 0
}

type Order = 'asc' | 'desc'

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number])

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])

    if (order !== 0) {
      return order
    }

    return a[1] - b[1]
  })

  return stabilizedThis.map(el => el[0])
}

interface HeadCell {
  disablePadding: boolean
  id: keyof Data
  label: string
  numeric: boolean
}

const headCells: readonly HeadCell[] = [
  {
    id: 'sl',
    numeric: false,
    disablePadding: true,
    label: 'SL'
  },
  {
    id: 'subject',
    numeric: true,
    disablePadding: false,
    label: 'Subject'
  },
  {
    id: 'categoryname',
    numeric: true,
    disablePadding: false,
    label: 'Member Type'
  },
  {
    id: 'subjectcode',
    numeric: true,
    disablePadding: false,
    label: 'Subject Code'
  },

  {
    id: 'action',
    numeric: true,
    disablePadding: false,
    label: 'Action'
  }
]

interface EnhancedTableProps {
  numSelected: number
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
  order: Order
  orderBy: string
  rowCount: number
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props

  const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component='span' sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

interface EnhancedTableToolbarProps {
  numSelected: number
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: theme => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity)
        })
      }}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: '1 1 100%' }} color='inherit' variant='subtitle1' component='div'>
          {numSelected} selected
        </Typography>
      ) : (
        <Typography sx={{ flex: '1 1 100%' }} variant='h5' id='tableTitle' component='div'>
          Book Issue
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title='Delete'>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title='Filter list'>
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  )
}

const BookSubjects = () => {
  const [order, setOrder] = React.useState<Order>('asc')
  const [orderBy, setOrderBy] = React.useState<keyof Data>('sl')
  const [selected, setSelected] = React.useState<readonly number[]>([])
  const [page, setPage] = React.useState(0)
  const [dense, setDense] = React.useState(false)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc'

    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map(n => n.sl)

      setSelected(newSelected)

      return
    }

    setSelected([])
  }

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id)
    let newSelected: readonly number[] = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1))
    }

    setSelected(newSelected)
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked)
  }

  const isSelected = (id: number) => selected.indexOf(id) !== -1

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  const visibleRows = React.useMemo(
    () => stableSort(rows, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage]
  )

  //dummy value for search in select tag
  const fruits = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' }
  ]

  return (
    <div>
      <h3>Subject</h3>
      <div className='flex gap-10'>
        <div>
          <Card sx={{ maxWidth: 280 }}>
            <CardContent>
              <h3>
                <b>Add Subject</b>
              </h3>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <CustomTextField required label='SUBJECT NAME' />
                </Grid>

                <Grid item xs={12}>
                  <Autocomplete
                    options={fruits}
                    getOptionLabel={option => option.label}
                    renderInput={params => <CustomTextField {...params} label='Select a fruit' />}
                    isOptionEqualToValue={(option, value) => option.value === value.value}
                    disableClearable
                  />
                </Grid>

                <Grid item xs={12}>
                  <CustomTextField required label='SUBJECT CODE' />
                </Grid>

                <CardActions>
                  <Button variant='contained'>Save Subject</Button>
                </CardActions>
              </Grid>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 800 }}>
            <CardContent>
              <div className='flex gap-8'>
                <h3>Subject List</h3>
                <Typography variant='body2'>
                  <CustomTextField required label='Search' />
                </Typography>
              </div>
              <div>
                <br />
              </div>
              <Box sx={{ width: '100%' }}>
                <Paper sx={{ width: '100%', mb: 2 }}>
                  <EnhancedTableToolbar numSelected={selected.length} />
                  <TableContainer>
                    <Table sx={{ minWidth: 750 }} aria-labelledby='tableTitle' size={dense ? 'small' : 'medium'}>
                      <EnhancedTableHead
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={rows.length}
                      />
                      <TableBody>
                        {visibleRows.map((row, index) => {
                          const isItemSelected = isSelected(row.sl)
                          const labelId = `enhanced-table-checkbox-${index}`

                          return (
                            <TableRow
                              hover
                              onClick={event => handleClick(event, row.sl)}
                              role='checkbox'
                              aria-checked={isItemSelected}
                              tabIndex={-1}
                              key={row.sl}
                              selected={isItemSelected}
                              sx={{ cursor: 'pointer' }}
                            >
                              <TableCell></TableCell>
                              <TableCell component='th' id={labelId} scope='row' padding='none'>
                                {row.sl}
                              </TableCell>
                              <TableCell align='right'>{row.subject}</TableCell>
                              <TableCell align='right'>{row.categoryname}</TableCell>
                              <TableCell align='right'>{row.subjectcode}</TableCell>
                              <TableCell align='right'>{row.action}</TableCell>
                            </TableRow>
                          )
                        })}
                        {emptyRows > 0 && (
                          <TableRow
                            style={{
                              height: (dense ? 33 : 53) * emptyRows
                            }}
                          >
                            <TableCell colSpan={6} />
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component='div'
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </Paper>
              </Box>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default BookSubjects
