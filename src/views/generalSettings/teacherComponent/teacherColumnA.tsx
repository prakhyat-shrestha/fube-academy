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

const fields = [{ name: 'Email', checkedPattern: [false] }]

const createData = (name: string, switches: JSX.Element[]) => {
  return { name, switches }
}

const rows = fields.map(field => {
  const switches = generateSwitches(1, field.checkedPattern)
  return createData(field.name, switches)
})

const TeacherColumnA = () => {
  return (
    <>
      <TableContainer className='mt-4' component={Paper}>
        <Table sx={{ minWidth: 650 }} stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              <TableCell>FIELD</TableCell>
              <TableCell align='right'>VIEW</TableCell>
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

export default TeacherColumnA
