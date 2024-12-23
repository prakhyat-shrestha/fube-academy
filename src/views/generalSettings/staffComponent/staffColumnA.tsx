import * as React from 'react'
import {
  FormControlLabel,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material'

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

const fields = [
  { name: 'Staff No', checkedPattern: [true, false] },
  { name: 'Role', checkedPattern: [true, true] },
  { name: 'Department', checkedPattern: [true, false] },
  { name: 'Designation', checkedPattern: [true, true] },
  { name: 'First Name', checkedPattern: [true, false] },
  { name: 'Last Name', checkedPattern: [true, true] },
  { name: 'Fathers Name', checkedPattern: [true, true] },
  { name: 'Mothers Name', checkedPattern: [true, true] },
  { name: 'Email', checkedPattern: [true, true] },
  { name: 'Gender', checkedPattern: [true, true] },
  { name: 'Date Of Birth', checkedPattern: [true, true] },
  { name: 'Date of Joining', checkedPattern: [true, true] },
  { name: 'Mobile', checkedPattern: [true, true] },
  { name: 'Martial Status', checkedPattern: [true, true] },
  { name: 'Emergency Mobile', checkedPattern: [true, true] },
  { name: 'Driving License', checkedPattern: [true, true] },
  { name: 'Current Address', checkedPattern: [true, true] },
  { name: 'Permanent Address', checkedPattern: [true, true] },
  { name: 'Qualification', checkedPattern: [true, true] }
]

const createData = (name: string, switches: JSX.Element[]) => {
  return { name, switches }
}

const rows = fields.map(field => {
  const switches = generateSwitches(2, field.checkedPattern)
  return createData(field.name, switches)
})

const StaffColumnA = () => {
  return (
    <>
      <TableContainer className='mt-4' component={Paper}>
        <Table sx={{ minWidth: 650 }} stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              <TableCell>REGISTRATION FIELD</TableCell>
              <TableCell align='right'>STAFF EDIT</TableCell>
              <TableCell align='right'>REQUIRED</TableCell>
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
    </>
  )
}

export default StaffColumnA
