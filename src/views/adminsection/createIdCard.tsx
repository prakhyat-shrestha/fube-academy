'use client'
import * as React from 'react'
import {
  Typography,
  TextField,
  InputAdornment,
  Table,
  TableContainer,
  TableRow,
  Paper,
  TableHead,
  TableBody,
  TableCell,
  Box,
  Stack,
  Pagination,
  Card,
  Button,
  CardContent,
  CardActions,
  ButtonGroup,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel
} from '@mui/material'
import CustomTextField from '@/@core/components/mui/TextField'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

const CreateIDCard = () => {
  const styles = {
    centeredContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Centers the card vertically and horizontally on the page
      backgroundColor: '#f4f4f4' // Background color for the page
    },
    logo: {
      width: '50px',
      height: '50px'
    },
    infoSection: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: '15px'
    },
    details: {
      flex: 1
    },
    studentName: {
      fontWeight: 'bold',
      fontSize: '18px',
      color: '#333',
      marginBottom: '10px'
    },
    info: {
      marginBottom: '8px',
      fontSize: '14px',
      color: '#555'
    },
    address: {
      fontSize: '14px',
      color: '#555'
    }
  }
  return (
    <>
      <div className='flex '>
        <Typography variant='h6' component='h3'>
          Create ID Card
        </Typography>
        <nav style={{ marginLeft: 'auto' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '25px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '25px' }}>
              Admin Section
            </Link>
            <span style={{ marginRight: '25px' }}>|</span>
            <Link href='#' style={{ marginRight: '25px' }}>
              ID Card
            </Link>
            <span style={{ marginRight: '25px' }}>|</span>
            <Link href='#'>Create ID Card</Link>
          </Typography>
        </nav>
      </div>
      <div className='flex' style={{ display: 'flex' }}>
        {/* Add ID Card first card */}
        <div className='lesson mt-4'>
          <Card sx={{ width: '800px', height: 'auto' }}>
            <CardContent>
              <Typography variant='h6' component='h3'>
                Add Id Card
              </Typography>
              <CustomTextField
                fullWidth
                label='ID CARD TITLE'
                required
                id='custom-select'
                style={{ margin: '20px 40px 0 0 ', width: '100%' }}
              />
              <CustomTextField
                select
                fullWidth
                defaultValue='vertical'
                label='ADMIN LAYOUT'
                id='custom-select'
                style={{ margin: '20px 40px 0 0 ', width: '100%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='vertical'>
                  <span style={{ fontStyle: 'normal' }}>Vertical</span>
                </MenuItem>
                <MenuItem value='horizontal'>
                  <span style={{ fontStyle: 'normal' }}>Horizontal</span>
                </MenuItem>
              </CustomTextField>

              <div style={{ display: 'flex', marginTop: '20px', justifyContent: 'space-between' }}>
                <CustomTextField
                  label='BACKGROUND IMAGE'
                  style={{ width: '100%', marginRight: '20px' }}
                  placeholder='Background Image'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <Button
                          variant='contained'
                          sx={{
                            height: '25px',
                            width: '100px',
                            fontSize: '0.75rem'
                          }}
                        >
                          BROWSE
                        </Button>
                      </InputAdornment>
                    )
                  }}
                />
                <Button
                  variant='contained'
                  style={{
                    borderRadius: '15%',
                    width: '40px',
                    height: '35px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '25px',
                    padding: '0',
                    minWidth: '0',
                    minHeight: '0',
                    cursor: 'pointer',
                    margin: '6px ',
                    marginTop: '20px',
                    marginRight: '0px'
                  }}
                >
                  {<i className='tabler-trash' />}
                </Button>
              </div>

              <CustomTextField
                select
                fullWidth
                defaultValue='select'
                label='APPLICABLE USER'
                id='custom-select'
                style={{ margin: '20px 40px 0 0 ', width: '100%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='select'>
                  <span style={{ fontStyle: 'normal' }}>Applicable User *</span>
                </MenuItem>
                <MenuItem value='student'>
                  <span style={{ fontStyle: 'normal' }}>Student</span>
                </MenuItem>
                <MenuItem value='guardian'>
                  <span style={{ fontStyle: 'normal' }}>Guardian</span>
                </MenuItem>
              </CustomTextField>

              <div className='container' style={{ display: 'flex' }}>
                <CustomTextField
                  label='PAGE LAYOUT WIDTH (DEFAULT 57 MM)'
                  fullWidth
                  style={{ margin: '20px 20px 0 0 ', width: '60%' }}
                />

                <CustomTextField
                  fullWidth
                  label='PAGE LAYOUT HEIGHT (DEFAULT 89 MM)'
                  style={{ margin: '20px 0 0 0 ', width: '60%' }}
                />
              </div>

              <div style={{ display: 'flex', marginTop: '20px', justifyContent: 'space-between' }}>
                <CustomTextField
                  label='PROFILE IMAGE'
                  style={{ width: '100%', marginRight: '20px' }}
                  placeholder='Profile Image'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <Button
                          variant='contained'
                          sx={{
                            height: '25px',
                            width: '100px',
                            fontSize: '0.75rem'
                          }}
                        >
                          BROWSE
                        </Button>
                      </InputAdornment>
                    )
                  }}
                />
                <Button
                  variant='contained'
                  style={{
                    borderRadius: '15%',
                    width: '40px',
                    height: '35px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '25px',
                    padding: '0',
                    minWidth: '0',
                    minHeight: '0',
                    cursor: 'pointer',
                    margin: '6px ',
                    marginTop: '20px',
                    marginRight: '0px'
                  }}
                >
                  {<i className='tabler-trash' />}
                </Button>
              </div>

              <div
                className='photoStyle'
                style={{ marginTop: '25px', display: 'flex', justifyContent: 'space-between' }}
              >
                <Typography component='h3' variant='h6' style={{ fontSize: '.85rem', fontWeight: 'bold' }}>
                  USER PHOTO STYLE
                </Typography>

                <CustomTextField select fullWidth defaultValue='select' id='custom-select' style={{ width: '50%' }}>
                  <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                  <MenuItem value='select'>
                    <span style={{ fontStyle: 'normal' }}>User Photo Style</span>
                  </MenuItem>
                  <MenuItem value='student'>
                    <span style={{ fontStyle: 'normal' }}>Square</span>
                  </MenuItem>
                  <MenuItem value='guardian'>
                    <span style={{ fontStyle: 'normal' }}>Round</span>
                  </MenuItem>
                </CustomTextField>
              </div>

              <div className='containerSecond' style={{ display: 'flex', marginTop: '10px' }}>
                <CustomTextField
                  label='USER PHOTO SIZE WIDTH (DEFAULT 21 MM)'
                  fullWidth
                  style={{ margin: '20px 20px 0 0 ', width: '60%' }}
                />

                <CustomTextField
                  fullWidth
                  label='USER PHOTO SIZE HEIGHT (DEFAULT 21 MM)'
                  style={{ margin: '20px 0 0 0 ', width: '60%' }}
                />
              </div>

              <div
                className='layoutSpacing'
                style={{ marginTop: '25px', display: 'flex', justifyContent: 'space-between' }}
              >
                <Typography
                  component='h3'
                  variant='h6'
                  style={{ fontSize: '.85rem', fontWeight: 'bold', marginRight: '60px' }}
                >
                  LAYTOUT SPACING
                </Typography>

                <CustomTextField label='TOP SPACE (DEFAULT 2.5 MM)' style={{ margin: '0 5px 0 0 ', width: '35%' }} />
                <CustomTextField label='BOTTOM SPACE (DEFAULT 2.5 MM)' style={{ width: '35%' }} />
              </div>

              <div style={{ marginTop: '25px', display: 'flex' }}>
                <CustomTextField label='LEFT SPACE (DEFAULT 3 MM)' style={{ margin: '0 20px 0 27% ', width: '40%' }} />
                <CustomTextField label='RIGHT SPACE (DEFAULT 3 MM)' style={{ width: '40%' }} />
              </div>

              <div style={{ display: 'flex', marginTop: '20px', justifyContent: 'space-between' }}>
                <CustomTextField
                  label='LOGO'
                  style={{ width: '100%', marginRight: '20px' }}
                  placeholder='Logo'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <Button
                          variant='contained'
                          sx={{
                            height: '25px',
                            width: '100px',
                            fontSize: '0.75rem'
                          }}
                        >
                          BROWSE
                        </Button>
                      </InputAdornment>
                    )
                  }}
                />
                <Button
                  variant='contained'
                  style={{
                    borderRadius: '15%',
                    width: '40px',
                    height: '35px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '25px',
                    padding: '0',
                    minWidth: '0',
                    minHeight: '0',
                    cursor: 'pointer',
                    margin: '6px ',
                    marginTop: '20px',
                    marginRight: '0px'
                  }}
                >
                  {<i className='tabler-trash' />}
                </Button>
              </div>

              <div style={{ display: 'flex', marginTop: '20px', justifyContent: 'space-between' }}>
                <CustomTextField
                  label='SIGNATURE'
                  style={{ width: '100%', marginRight: '20px' }}
                  placeholder='Signature *'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <Button
                          variant='contained'
                          sx={{
                            height: '25px',
                            width: '100px',
                            fontSize: '0.75rem'
                          }}
                        >
                          BROWSE
                        </Button>
                      </InputAdornment>
                    )
                  }}
                />
                <Button
                  variant='contained'
                  style={{
                    borderRadius: '15%',
                    width: '40px',
                    height: '35px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '25px',
                    padding: '0',
                    minWidth: '0',
                    minHeight: '0',
                    cursor: 'pointer',
                    margin: '6px ',
                    marginTop: '20px',
                    marginRight: '0px'
                  }}
                >
                  {<i className='tabler-trash' />}
                </Button>
              </div>

              {[
                'EMIS No',
                'Name',
                'Class',
                'Father Name',
                'Mother Name',
                'Address',
                'Date Of Birth',
                'Blood Group'
              ].map((field, index) => (
                <FormControl key={index} sx={{ mt: 2, mb: 1, width: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <FormLabel style={{ flex: '1' }}>{field}</FormLabel>
                    <RadioGroup row defaultValue='yes' style={{ flex: '2' }}>
                      <FormControlLabel value='yes' control={<Radio />} label='Yes' />
                      <FormControlLabel value='no' control={<Radio />} label='No' />
                    </RadioGroup>
                  </div>
                </FormControl>
              ))}
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant='contained'>
                <CheckSharpIcon style={{ marginRight: 5 }} />
                SAVE ID CARD
              </Button>
            </CardActions>
          </Card>
        </div>

        {/* Lesson List 2nd card */}
        <div className='lessonList mt-4 mx-6' style={{ flex: 1 }}>
          <Card sx={{ width: '104.5%', height: 'auto' }}>
            <CardContent>
              <Typography variant='h6' component='h3'>
                Preview Id Card
              </Typography>

              <Typography
                variant='h6'
                component='h3'
                style={{
                  background: '#7b6df7',
                  padding: '5px',
                  marginTop: '20px',
                  color: 'white',
                  fontSize: '1.2rem',
                  textAlign: 'center'
                }}
              >
                User Id Card
              </Typography>
              {/* Card Content */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                {/* Logo Section */}
                <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                  <img
                    src='logo-placeholder.png' // Replace with actual logo URL
                    alt='School Logo'
                    style={styles.logo}
                  />
                </div>

                {/* Student Info Section */}
                <div style={styles.infoSection}>
                  {/* Student Photo */}
                  <div>
                    <img
                      src='student-photo-placeholder.jpg' // Replace with actual student photo
                      alt='Student'
                      style={{
                        width: '100px',
                        height: '120px',
                        borderRadius: '5px',
                        objectFit: 'cover',
                        textAlign: 'center'
                      }}
                    />
                  </div>

                  {/* Student Details */}
                  <div style={styles.details}>
                    <Typography variant='h6' style={styles.studentName}>
                      STUDENT NAME
                    </Typography>
                    <Typography style={styles.info}>Admission No: 001</Typography>
                    <Typography style={styles.info}>Class: One (A)</Typography>
                    <Typography style={styles.info}>Father Name: Mr. Father</Typography>
                    <Typography style={styles.info}>Mother Name: Mrs. Mother</Typography>
                    <Typography style={styles.info}>Date of Birth: Dec 25, 2022</Typography>
                    <Typography style={styles.info}>Blood Group: B+</Typography>
                  </div>
                </div>

                {/* Address Section */}
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                  <Typography variant='body2' style={styles.address}>
                    LekhnathMarg, Thamel, Kathmandu, Nepal
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

export default CreateIDCard
