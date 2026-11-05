'use client'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  MenuItem,
  Pagination,
  PaginationItem,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import SearchIcon from '@mui/icons-material/Search'
import { useStudentStore } from '@/stores/studentStores'
import { studentTypes } from '@/types/student'

import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { useRouter } from 'next/navigation'
import CustomTextField from '@/@core/components/mui/TextField'
import { useClassStore } from '@/stores/classStore'
import { ClassTypes, SecTypes } from '@/types/class'

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
const ListOfStudents = () => {
  const { isLoading, student, listOfStudent, updateStudent, deleteStudent, pagination } = useStudentStore()
  const { classes, listOfClass } = useClassStore()
  const router = useRouter()
  const [classId, setClassId] = useState<number | 'selectClass'>('selectClass')
  const [classSectionId, setClassSectionId] = useState<number | 'selectSection'>('selectSection')

  useEffect(() => {
    listOfStudent()
    listOfClass()
  }, [listOfStudent, listOfClass])

  const { page, limit, total, totalPages } = pagination
  const startEntry = total === 0 ? 0 : (page - 1) * limit + 1
  const endEntry = Math.min(page * limit, total)

  const handlePageChange = (_: React.ChangeEvent<unknown>, newPage: number) => {
    if (newPage === page) return
    listOfStudent(newPage, limit) // adjust to your store's signature
  }

  const handleClassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value
    setClassId(v === 'selectClass' ? 'selectClass' : Number(v))
    setClassSectionId('selectSection')
  }

  const sections: SecTypes[] = (classes ?? []).find((cls: ClassTypes) => cls.id === classId)?.sections ?? []

  const handleSectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClassSectionId(Number(e.target.value))
  }

  const handleEditStudent = async (id: number) => {
    router.push(`/studentAdd/?id=${id}`)
  }
  const handleDeleteStudent = async (id: number) => {
    if (!window.confirm('Are you sure want to delete this student')) return
    await deleteStudent(id)
  }
  return (
    <div className='flex-col'>
      {/* first Card */}
      <Typography sx={{ marginBottom: '20px', fontSize: '20px' }}>List Of students</Typography>
      <Card sx={{ width: '100%', marginBottom: '20px' }}>
        <CardContent>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={6}>
              <CustomTextField select fullWidth value={classId} onChange={handleClassChange} label='Select Class'>
                <MenuItem value='selectClass'>
                  <span style={{ fontStyle: 'normal' }}>Select Class</span>
                </MenuItem>
                {(classes ?? []).map((cls: ClassTypes) => (
                  <MenuItem value={cls.id} key={cls.id}>
                    {cls.name}
                  </MenuItem>
                ))}
              </CustomTextField>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <CustomTextField
                select
                fullWidth
                value={classSectionId}
                disabled={classId === 'selectClass'}
                onChange={handleSectionChange}
                label='Select Section'
              >
                <MenuItem value='selectSection'>
                  <span style={{ fontStyle: 'normal' }}>Select Section</span>
                </MenuItem>
                {sections.map((sec: SecTypes) => (
                  <MenuItem value={sec.classSectionId} key={sec.id}>
                    {sec.name}
                  </MenuItem>
                ))}
              </CustomTextField>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions style={{ justifyContent: 'flex-end', padding: '0 20px 20px' }}>
          <Button variant='contained' disabled={isLoading} startIcon={<SearchIcon />}>
            Search
          </Button>
        </CardActions>
      </Card>
      {/* 2nd Card */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>IEMISNumber</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Class</StyledTableCell>
              <StyledTableCell>Section</StyledTableCell>
              <StyledTableCell>Admission Date</StyledTableCell>
              <StyledTableCell>Religion</StyledTableCell>
              <StyledTableCell>Phone Number</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Current Address</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(student ?? []).map((s: studentTypes) => (
              <StyledTableRow key={s.id}>
                <StyledTableCell component='th' scope='row'>
                  {s.IEMISNumber}
                </StyledTableCell>
                <StyledTableCell>{s.name}</StyledTableCell>
                <StyledTableCell>{s.classSection.class.name}</StyledTableCell>
                <StyledTableCell>{s.classSection.section.name}</StyledTableCell>
                <StyledTableCell>{s.admissionDate}</StyledTableCell>
                <StyledTableCell>{s.religion}</StyledTableCell>

                <StyledTableCell>{s.phoneNumber}</StyledTableCell>
                <StyledTableCell>{s.email}</StyledTableCell>
                <StyledTableCell>{s.currentAddress}</StyledTableCell>
                <StyledTableCell>
                  <Button variant='contained' sx={{ margin: '4px' }} onClick={() => handleEditStudent(s.id)}>
                    Edit
                  </Button>

                  <Button
                    variant='contained'
                    sx={{ margin: '4px', backgroundColor: 'red' }}
                    onClick={() => handleDeleteStudent(s.id)}
                  >
                    <DeleteForeverIcon />
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* pagination */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
        <Typography variant='body2'>
          Showing {startEntry} to {endEntry} of {total} entries
        </Typography>

        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          disabled={isLoading}
          shape='rounded'
          color='primary'
          siblingCount={1}
          boundaryCount={1}
          renderItem={item => <PaginationItem slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />}
        />
      </div>
    </div>
  )
}

export default ListOfStudents
