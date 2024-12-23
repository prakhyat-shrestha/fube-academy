'use client'
import * as React from 'react'
import {
  FormControlLabel,
  Switch,
  Typography,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material'
import Link from '@/components/Link'

// Generated switch components based on dynamic rules (i.e., alternate defaultChecked or others)
const generateSwitches = (numSwitches: number, checkedPattern: boolean[]) => {
  return Array.from({ length: numSwitches }, (_, index) => (
    <FormControlLabel
      control={<Switch defaultChecked={checkedPattern[index % checkedPattern.length]} />}
      label=''
      key={index}
    />
  ))
}

// Created dynamic rows based on the field names and their switch patterns
const fields = [
  { name: 'Session', checkedPattern: [true, false, true, false] },
  { name: 'Class', checkedPattern: [true, true, true, false] },
  { name: 'Section', checkedPattern: [true, false, false, true] },
  { name: 'Roll Number', checkedPattern: [true, true, false, true] },
  { name: 'IMEIS Number', checkedPattern: [true, true, true, false] },
  { name: 'First Name', checkedPattern: [true, false, true, true] },
  { name: 'Last Name', checkedPattern: [true, true, true, false] },
  { name: 'Gender', checkedPattern: [true, false, true, true] },
  { name: 'Date Of Birth', checkedPattern: [true, true, true, false] },
  { name: 'Blood Group', checkedPattern: [true, false, false, true] },
  { name: 'Email Address', checkedPattern: [true, true, false, false] },
  { name: 'Caste', checkedPattern: [true, true, true, true] },
  { name: 'Phone Number', checkedPattern: [true, true, false, false] },
  { name: 'Religion', checkedPattern: [true, false, true, true] },
  { name: 'Admission Date', checkedPattern: [true, true, true, false] },
  { name: 'Category', checkedPattern: [true, true, false, false] },
  { name: 'Group', checkedPattern: [true, false, true, false] },
  { name: 'Height', checkedPattern: [true, true, true, true] },
  { name: 'Weight', checkedPattern: [true, true, true, true] },
  { name: 'Photo', checkedPattern: [true, true, true, true] },
  { name: 'Father Name', checkedPattern: [true, true, true, true] },
  { name: 'Father Occupation', checkedPattern: [true, true, true, true] },
  { name: 'Father Phone', checkedPattern: [true, true, true, true] },
  { name: 'Father Photo', checkedPattern: [true, true, true, true] },
  { name: 'Mother Name', checkedPattern: [true, true, true, true] },
  { name: 'Mother Occupation', checkedPattern: [true, true, true, true] },
  { name: 'Mother Phone', checkedPattern: [true, true, true, true] },
  { name: 'Mother Photo', checkedPattern: [true, true, true, true] },
  { name: 'Guardian Name', checkedPattern: [true, true, true, true] },
  { name: 'Guardian Email', checkedPattern: [true, true, true, true] },
  { name: 'Guardian Photo', checkedPattern: [true, true, true, true] },
  { name: 'Guardian Phone', checkedPattern: [true, true, true, true] },
  { name: 'Guardian Occupation', checkedPattern: [true, true, true, true] },
  { name: 'Guardian Address', checkedPattern: [true, true, true, true] },
  { name: 'Current Address', checkedPattern: [true, true, true, true] },
  { name: 'Permanent Address', checkedPattern: [true, true, true, true] },
  { name: 'Route', checkedPattern: [true, true, true, true] },
  { name: 'Vechicle', checkedPattern: [true, true, true, true] },
  { name: 'Dormitory Name', checkedPattern: [true, true, true, true] },
  { name: 'Room Number', checkedPattern: [true, true, true, true] },
  { name: 'National Id Number', checkedPattern: [true, true, true, true] },
  { name: 'Local Id Number', checkedPattern: [true, true, true, true] },
  { name: 'Bank Account Number', checkedPattern: [true, true, true, true] },
  { name: 'Bank Name', checkedPattern: [true, true, true, true] },
  { name: 'Previous School Details', checkedPattern: [true, true, true, true] },
  { name: 'Additional Notes', checkedPattern: [true, true, true, true] },
  { name: 'IFSC Code', checkedPattern: [true, true, true, true] },
  { name: 'Document File 1', checkedPattern: [true, true, true, true] },
  { name: 'Document File 2', checkedPattern: [true, true, true, true] },
  { name: 'Document File 3', checkedPattern: [true, true, true, true] },
  { name: 'Document File 4', checkedPattern: [true, true, true, true] },
  { name: 'Custom Field', checkedPattern: [true, true, true, true] }
]

const createData = (name: string, switches: JSX.Element[]) => {
  return { name, switches }
}

const rows = fields.map(field => {
  const switches = generateSwitches(4, field.checkedPattern)
  return createData(field.name, switches)
})

const StudentSettingsLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Student Settings
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
            <Link href='#'>Student Settings</Link>
          </Typography>
        </nav>
      </div>
      <div className='studentSettings mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <Typography variant='h6' component='h3' style={{ textAlign: 'center' }}>
              Student Admission Field
            </Typography>
            <TableContainer className='mt-4' component={Paper}>
              <Table sx={{ minWidth: 650 }} stickyHeader aria-label='sticky table'>
                <TableHead>
                  <TableRow>
                    <TableCell>REGISTRATION FIELD</TableCell>
                    <TableCell align='right'>SHOW</TableCell>
                    <TableCell align='right'>STUDENT EDIT</TableCell>
                    <TableCell align='right'>PARENT EDIT</TableCell>
                    <TableCell align='right'>REQUIRE</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component='th' scope='row'>
                        {row.name}
                      </TableCell>
                      {row.switches.map((switchComponent, index) => (
                        <TableCell key={index} align='right'>
                          {switchComponent}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default StudentSettingsLayout
