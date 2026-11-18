'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  Card,
  CardContent,
  Button,
  MenuItem,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  CircularProgress
} from '@mui/material'
import CustomTextField from '@/@core/components/mui/TextField'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import Link from 'next/link'
import { useClassStore } from '@/stores/classStore'
import { useStudentStore } from '@/stores/studentStores'
import { useCertificateStore } from '@/stores/certificateStores'
import { useGenerateCertificateStore } from '@/stores/generateCeritificateStore'
import { errorMessage } from '@/views/errorHandling/error'

const GenerateCertificateLayout = () => {
  const { classes, listOfClass } = useClassStore()
  const { student, listOfStudent } = useStudentStore()
  const { certificate, listOfCertificate } = useCertificateStore()
  const { generateCertificate, isLoading } = useGenerateCertificateStore()

  const [classId, setClassId] = useState('')
  const [classSectionId, setClassSectionId] = useState('')
  const [certificateId, setCertificateId] = useState('')
  const [subject, setSubject] = useState('')

  const [searched, setSearched] = useState(false)
  const [searchedIds, setSearchedIds] = useState<number[]>([]) // students found on search
  const [selectedIds, setSelectedIds] = useState<number[]>([]) // students ticked for the PDF

  useEffect(() => {
    listOfClass()
    listOfStudent()
    listOfCertificate()
  }, [])

  // sections come from the selected class (classStore)
  const selectedClass = useMemo(() => classes?.find(c => c.id === Number(classId)), [classes, classId])
  const selectedCertificate = useMemo(
    () => certificate.find(c => c.id === Number(certificateId)),
    [certificate, certificateId]
  )

  // students shown in the table
  const students = useMemo(() => student.filter(s => searchedIds.includes(s.id)), [student, searchedIds])

  const handleClassChange = (value: string) => {
    setClassId(value)
    setClassSectionId('') // reset section when class changes
    setSearched(false)
  }

  const handleSearch = () => {
    if (!classId || !certificateId) {
      errorMessage('Please select class and certificate.')
      return
    }

    // one section selected -> that section only, otherwise every section of the class
    const sectionIds = classSectionId
      ? [Number(classSectionId)]
      : (selectedClass?.sections ?? []).map(sec => sec.classSectionId)

    const found = student.filter(s => sectionIds.includes(Number(s.classSectionId))).map(s => s.id)

    setSearchedIds(found)
    setSelectedIds(found) // select all by default
    setSearched(true)
  }

  const allSelected = students.length > 0 && selectedIds.length === students.length

  const toggleAll = () => setSelectedIds(allSelected ? [] : students.map(s => s.id))

  const toggleOne = (id: number) =>
    setSelectedIds(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]))

  const handleGenerate = async () => {
    if (selectedIds.length === 0) {
      errorMessage('Please select at least one student.')
      return
    }

    // keep the table order so pages follow the list
    const orderedIds = students.filter(s => selectedIds.includes(s.id)).map(s => s.id)

    await generateCertificate(
      Number(certificateId),
      { studentIds: orderedIds, subject },
      selectedCertificate?.certificateName?.replace(/[^a-z0-9]+/gi, '_')
    )
  }

  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h4'>
          Generate Certificate
        </Typography>
        <nav style={{ marginLeft: 'auto' }}>
          <Typography variant='h6' component='h4' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '25px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '25px' }}>
              Admin Section
            </Link>
            <span style={{ marginRight: '25px' }}>|</span>
            <Link href='#'>Generate Certificate</Link>
          </Typography>
        </nav>
      </div>

      <div className='generateCertificate mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%' }}>
          <CardContent>
            <div
              className='container'
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}
            >
              <Typography variant='h6' component='h4'>
                Select Criteria
              </Typography>
            </div>

            <div className='container' style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
              <CustomTextField
                select
                required
                fullWidth
                label='CLASS'
                value={classId}
                onChange={e => handleClassChange(e.target.value)}
                style={{ width: '40%' }}
              >
                <MenuItem value=''>
                  <span>Select Class*</span>
                </MenuItem>
                {classes?.map(c => (
                  <MenuItem key={c.id} value={String(c.id)}>
                    {c.name}
                  </MenuItem>
                ))}
              </CustomTextField>

              <CustomTextField
                select
                fullWidth
                label='SECTION'
                value={classSectionId}
                onChange={e => {
                  setClassSectionId(e.target.value)
                  setSearched(false)
                }}
                disabled={!selectedClass}
                style={{ width: '40%' }}
              >
                <MenuItem value=''>
                  <span>All Sections</span>
                </MenuItem>
                {(selectedClass?.sections ?? []).map(sec => (
                  // students link to classSectionId, not the section id
                  <MenuItem key={sec.classSectionId} value={String(sec.classSectionId)}>
                    {sec.name}
                  </MenuItem>
                ))}
              </CustomTextField>

              <CustomTextField
                select
                required
                fullWidth
                label='CERTIFICATE*'
                value={certificateId}
                onChange={e => {
                  setCertificateId(e.target.value)
                  setSearched(false)
                }}
                style={{ width: '40%' }}
              >
                <MenuItem value=''>
                  <span>Select Certificate*</span>
                </MenuItem>
                {certificate.map(c => (
                  <MenuItem key={c.id} value={String(c.id)}>
                    {c.certificateName}
                  </MenuItem>
                ))}
              </CustomTextField>
            </div>

            <div
              className='container mt-6'
              style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}
            >
              <Button variant='contained' startIcon={<SearchSharpIcon />} onClick={handleSearch}>
                SEARCH
              </Button>
            </div>
          </CardContent>
        </Card>

        {searched && (
          <Card sx={{ width: '100%', marginTop: '20px' }}>
            <CardContent>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '20px',
                  marginBottom: '15px'
                }}
              >
                <Typography variant='h6' component='h4'>
                  Student List ({selectedIds.length} of {students.length} selected)
                </Typography>

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <CustomTextField
                    label='SUBJECT'
                    placeholder='Optional, used for {{subject}}'
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                  />
                  <Button
                    variant='contained'
                    color='success'
                    startIcon={isLoading ? <CircularProgress size={18} color='inherit' /> : <PictureAsPdfIcon />}
                    onClick={handleGenerate}
                    disabled={isLoading || selectedIds.length === 0}
                  >
                    GENERATE PDF
                  </Button>
                </div>
              </div>

              <Table size='small'>
                <TableHead>
                  <TableRow>
                    <TableCell padding='checkbox'>
                      <Checkbox
                        checked={allSelected}
                        indeterminate={selectedIds.length > 0 && !allSelected}
                        onChange={toggleAll}
                      />
                    </TableCell>
                    <TableCell>ADMISSION NO</TableCell>
                    <TableCell>NAME</TableCell>
                    <TableCell>ROLL NO</TableCell>
                    <TableCell>CLASS</TableCell>
                    <TableCell>SECTION</TableCell>
                    <TableCell>GUARDIAN</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {students.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} align='center'>
                        No students found.
                      </TableCell>
                    </TableRow>
                  ) : (
                    students.map(s => (
                      <TableRow key={s.id} hover>
                        <TableCell padding='checkbox'>
                          <Checkbox checked={selectedIds.includes(s.id)} onChange={() => toggleOne(s.id)} />
                        </TableCell>
                        <TableCell>{s.admissionNumber}</TableCell>
                        <TableCell>{s.name}</TableCell>
                        <TableCell>{s.rollNumber}</TableCell>
                        <TableCell>{s.classSection?.class?.name}</TableCell>
                        <TableCell>{s.classSection?.section?.name}</TableCell>
                        <TableCell>{s.parents?.guardianName}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  )
}

export default GenerateCertificateLayout
