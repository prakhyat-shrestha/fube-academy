'use client'
import * as React from 'react'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow
} from '@mui/material'
import Link from 'next/link'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
})

function createData(name: string, calories: string) {
  return { name, calories }
}

const rows = [
  createData('School Name', 'Fube Edu'),
  createData('Site Title', 'Fube Education Software'),
  createData('Address', 'LekhnathMarg, Thamel, Kathmandu, Nepal'),
  createData('Phone Number', '+9779808049567'),
  createData('Email Address', 'admin@chandrodayaschool.edu.np'),
  createData('Fees Income Head', 'Fees Collection'),
  createData('School Code ', '12345678'),
  createData('Academic Year', '2081  - [ Baishak - Chaitra]'),
  createData('Language', 'English'),
  createData('Date Format', '2080-05-17'),
  createData('Week Start Day', 'Sunday'),
  createData('Time Zone', 'Asia/Kathmandu'),
  createData('Currency', 'NPR'),
  createData('Currency Symbol', 'Rs'),
  createData('Max Upload File Size', '102400 MB'),
  createData('Multi Roll Number', 'Disable'),
  createData('Promotion Without Exam', 'Enable'),
  createData('Subject Attendance Layout', 'Images'),
  createData('New Fees Module', 'Enable'),
  createData('Result Type', 'GPA'),
  createData('Student Admission', 'With Guardian'),
  createData('Due Fees Login Restriction', 'Disable'),
  createData('In News Auto Approval Comment', 'Disable'),
  createData('In News Can Comment', 'Disable'),
  createData('Blog Search', 'Disable'),
  createData('Recent Blog', 'Disable'),
  createData('Queue Connection', 'SYNC'),
  createData('Copyright Text', 'Copyright © 2080 All rights reserved | This application is made by Fube Technologies')
]

const GeneralSettingsLayout = () => {
  return (
    <>
      <div className='flex '>
        <Typography variant='h6' component='h3'>
          General Settings
        </Typography>
        <nav style={{ marginLeft: 'auto' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '25px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '25px' }}>
              System Settings
            </Link>
            <span style={{ marginRight: '25px' }}>|</span>
            <Link href='#'>General Settings</Link>
          </Typography>
        </nav>
      </div>
      <div className='flex' style={{ display: 'flex' }}>
        {/* Logo and Favivon Section*/}
        <div className='changeLogo mt-4'>
          <Card sx={{ width: 400, height: 'auto' }}>
            <CardContent>
              <Typography variant='h6' component='h3'>
                Change Logo
              </Typography>

              <div className='uploadFile' style={{ justifyContent: 'center', display: 'flex', marginTop: '20px' }}>
                <Button
                  component='label'
                  role={undefined}
                  variant='contained'
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                >
                  Upload
                  <VisuallyHiddenInput type='file' onChange={event => console.log(event.target.files)} multiple />
                </Button>
              </div>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant='contained'>
                <CheckSharpIcon style={{ marginRight: 5 }} />
                SAVE
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ width: 400, height: 'auto', marginTop: '25px' }}>
            <CardContent>
              <Typography variant='h6' component='h3'>
                Change Favicon
              </Typography>

              <div className='uploadFile' style={{ justifyContent: 'center', display: 'flex', marginTop: '20px' }}>
                <Button
                  component='label'
                  role={undefined}
                  variant='contained'
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                >
                  Upload
                  <VisuallyHiddenInput type='file' onChange={event => console.log(event.target.files)} multiple />
                </Button>
              </div>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant='contained'>
                <CheckSharpIcon style={{ marginRight: 5 }} />
                SAVE
              </Button>
            </CardActions>
          </Card>
        </div>

        {/* General Settings List View */}
        <div className='generalSettingsView mt-4 mx-6' style={{ flex: 1 }}>
          <Card sx={{ width: '102.3%', height: 'auto' }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '16%' }}>
                  General Settings View
                </Typography>
                <Button variant='contained' sx={{ width: '70px', height: '30px', fontSize: '15px' }}>
                  <BorderColorIcon style={{ marginRight: 5, fontSize: '15px' }} />
                  EDIT
                </Button>
              </div>

              <TableContainer>
                <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
                  <TableBody>
                    {rows.map(row => (
                      <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component='th' scope='row'>
                          {row.name}
                        </TableCell>
                        <TableCell sx={{ paddingLeft: '250px' }}>{row.calories}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

export default GeneralSettingsLayout
