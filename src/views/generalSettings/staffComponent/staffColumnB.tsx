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
  { name: 'Experience', checkedPattern: [true, false] },
  { name: 'EPF NO', checkedPattern: [true, true] },
  { name: 'Basic Salary', checkedPattern: [true, false] },
  { name: 'Contract Type', checkedPattern: [true, true] },
  { name: 'Location', checkedPattern: [true, true] },
  { name: 'Bank Account Name', checkedPattern: [true, false] },
  { name: 'Bank Account No', checkedPattern: [true, true] },
  { name: 'Bank Name', checkedPattern: [false, false] },
  { name: 'Bank Branch', checkedPattern: [false, true] },
  { name: 'Facebook ', checkedPattern: [false, false] },
  { name: 'Twitter', checkedPattern: [true, true] },
  { name: 'Linkedin', checkedPattern: [true, true] },
  { name: 'Instagram', checkedPattern: [true, true] },
  { name: 'Staff Photo', checkedPattern: [true, false] },
  { name: 'Resume', checkedPattern: [true, true] },
  { name: 'Joining Letter', checkedPattern: [true, true] },
  { name: 'Other Document', checkedPattern: [true, false] },
  { name: 'Custom Field', checkedPattern: [true, true] }
]

const createData = (name: string, switches: JSX.Element[]) => {
  return { name, switches }
}

const rows = fields.map(field => {
  const switches = generateSwitches(2, field.checkedPattern)
  return createData(field.name, switches)
})

const StaffColumnB = () => {
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

export default StaffColumnB
