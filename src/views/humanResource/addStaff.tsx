'use client'

// React Imports
import { useState } from 'react'
import type { SyntheticEvent } from 'react'

// MUI Imports
import React from 'react'

import Link from 'next/link'

import CheckIcon from '@mui/icons-material/Check'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Tab from '@mui/material/Tab'
import MenuItem from '@mui/material/MenuItem'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import CardContent from '@mui/material/CardContent'

import Divider from '@mui/material/Divider'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'

// Components Imports
import { FormControlLabel, InputAdornment, Radio, RadioGroup, Typography } from '@mui/material'

import AddSharpIcon from '@mui/icons-material/AddSharp'

import CustomTextField from '@core/components/mui/TextField'

type FormDataType = {
  firstName: string
  lastName: string
  country: string
  language: string[]
  dob: Date | null
  phoneNumber: number
  address1: string
  address2: string
  postal: string
  username: string
  studylevel: string
  iemisnumber: number
  admissiondate: string
  rollno: number
  group: string
  religion: string
  caste: string
  currentaddress: string
  permanentaddress: string
  bloodgroup: string
  medicalcategory: string
  medicalheight: number
  medicalweight: number
  gender: string
  email: string
  password: string
  isPasswordShown: boolean
  confirmPassword: string
  setIsConfirmPasswordShown: boolean
  twitter: string
  facebook: string
  google: string
  linkedin: string
  instagram: string
  quora: string
}

const AddStaffLayout = () => {
  // States
  const [value, setValue] = useState('basic_info')

  const [formData, setFormData] = useState<FormDataType>({
    firstName: '',
    lastName: '',
    country: '',
    language: [],
    dob: null,
    phoneNumber: 0,
    username: '',
    studylevel: '',
    iemisnumber: 0,
    admissiondate: '',
    rollno: 0,
    group: '',
    religion: '',
    caste: '',
    currentaddress: '',
    permanentaddress: '',
    bloodgroup: '',
    medicalcategory: '',
    medicalheight: 0,
    medicalweight: 0,
    gender: '',
    email: '',
    password: '',
    address1: '',
    address2: '',
    postal: '',
    isPasswordShown: false,
    confirmPassword: '',
    setIsConfirmPasswordShown: false,
    twitter: '',
    facebook: '',
    google: '',
    linkedin: '',
    instagram: '',
    quora: ''
  })

  const handleClickShowPassword = () => setFormData(show => ({ ...show, isPasswordShown: !show.isPasswordShown }))

  const handleClickShowConfirmPassword = () =>
    setFormData(show => ({ ...show, setIsConfirmPasswordShown: !show.setIsConfirmPasswordShown }))

  const handleTabChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      country: '',
      language: [],
      dob: null,
      phoneNumber: 0,
      address1: '',
      address2: '',
      postal: '',
      username: '',
      studylevel: '',
      iemisnumber: 0,
      admissiondate: '',
      rollno: 0,
      group: '',
      religion: '',
      caste: '',
      currentaddress: '',
      permanentaddress: '',
      bloodgroup: '',
      medicalcategory: '',
      medicalheight: 0,
      medicalweight: 0,
      gender: '',
      email: '',
      password: '',
      isPasswordShown: false,
      confirmPassword: '',
      setIsConfirmPasswordShown: false,
      twitter: '',
      facebook: '',
      google: '',
      linkedin: '',
      instagram: '',
      quora: ''
    })
  }

  return (
    <>
      <div className='flex '>
        <Typography variant='h6' component='h3'>
          Add New Staff
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Human Resource
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Add New Staff</Link>
          </Typography>
        </nav>
      </div>
      <Card
        sx={{
          mt: 2,
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100px',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='h6' style={{ margin: '20px' }}>
            Staff Information
          </Typography>

          <Button variant='contained' style={{ marginTop: '20px', height: '35px', marginRight: '20px' }}>
            <AddSharpIcon />
            Import Staff
          </Button>
        </div>
        <TabContext value={value}>
          <TabList
            variant='scrollable'
            onChange={handleTabChange}
            className='border-be'
            style={{ marginLeft: '20px', marginRight: '20px' }}
          >
            <Tab label='BASIC INFO' value='basicInfo' style={{ fontSize: '12px' }} />
            <Tab label='PAYROLL DETAILS' value='payRollDetails' style={{ fontSize: '12px' }} />
            <Tab label='BANK INFO DETAILS' value='bankDetails' style={{ fontSize: '12px' }} />
            <Tab label='SOCIAL LINKS DETAILS' value='socialDetails' style={{ fontSize: '12px' }} />
            <Tab label='DOCUMENT INFO' value='documentInfo' style={{ fontSize: '12px' }} />
            <Tab label='CUSTOM FIELD' value='customField' style={{ fontSize: '12px' }} />
            <Button
              variant='contained'
              style={{
                marginTop: '7px',
                height: '35px',
                marginLeft: '345px',
                marginBottom: '10px',
                width: '240px'
              }}
            >
              <CheckSharpIcon />
              Save Staff
            </Button>
          </TabList>
          <form onSubmit={e => e.preventDefault()}>
            <CardContent>
              <TabPanel value='basicInfo'>
                <div className='container' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className='basicInfo mx-4 mb-4 ' style={{ width: '50%' }}>
                    <div className='sectionOne' style={{ display: 'flex', width: '100%' }}>
                      <CustomTextField
                        required
                        fullWidth
                        label='STAFF NO'
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                      />

                      <CustomTextField
                        select
                        required
                        fullWidth
                        label='ROLE'
                        value={formData.studylevel}
                        onChange={e => setFormData({ ...formData, studylevel: e.target.value })}
                        style={{ marginTop: '20px', width: '200%' }}
                      >
                        <MenuItem value=''>Role*</MenuItem>
                        <MenuItem value='accountant'>Accountant</MenuItem>
                        <MenuItem value='admin'>Admin</MenuItem>
                        <MenuItem value='administrator'>Administrator</MenuItem>
                        <MenuItem value='driver'>Driver</MenuItem>
                        <MenuItem value='librarian'>Librarian</MenuItem>
                        <MenuItem value='receptionist'>Receptionist</MenuItem>
                        <MenuItem value='teacher'>Teacher</MenuItem>
                      </CustomTextField>
                    </div>

                    <div className='sectionTwo' style={{ display: 'flex' }}>
                      <CustomTextField
                        required
                        fullWidth
                        label='FIRST NAME'
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                      />

                      <CustomTextField fullWidth label='LAST NAME' style={{ marginTop: '20px', width: '200%' }} />
                    </div>

                    <div className='sectionThree' style={{ display: 'flex' }}>
                      <CustomTextField
                        required
                        label='EMAIL'
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                      />

                      <CustomTextField
                        select
                        defaultValue='gender'
                        fullWidth
                        label='GENDER'
                        style={{ marginTop: '20px', width: '200%' }}
                      >
                        <MenuItem value='gender'>Gender*</MenuItem>
                        <MenuItem value='male'>Male</MenuItem>
                        <MenuItem value='female'>Female</MenuItem>
                        <MenuItem value='others'>Others</MenuItem>
                      </CustomTextField>
                    </div>
                    <div className='sectionFour' style={{ display: 'flex' }}>
                      <CustomTextField label='MOBILE' style={{ marginTop: '20px', width: '200%', marginRight: '5%' }} />
                      <CustomTextField
                        label='MARTIAL STATUS'
                        defaultValue='marital'
                        fullWidth
                        select
                        style={{ marginTop: '20px', width: '200%' }}
                      >
                        <MenuItem value='marital'>Marital Status</MenuItem>
                        <MenuItem value='married'>Married</MenuItem>
                        <MenuItem value='unmarried'>Unmarried</MenuItem>
                      </CustomTextField>
                    </div>
                  </div>

                  <div className='academic mx-4 mb-4 ' style={{ width: '50%' }}>
                    <div className='sectionOne' style={{ display: 'flex', width: '100%' }}>
                      <CustomTextField
                        required
                        fullWidth
                        select
                        defaultValue={'department'}
                        label='DEPARTMENT'
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                      >
                        <CustomTextField
                          required
                          placeholder='Search...'
                          style={{ padding: '0 6px 8px 6px', width: '100%' }}
                        />

                        <MenuItem value='department'>Department</MenuItem>
                        <MenuItem value='admin'>Admin</MenuItem>
                      </CustomTextField>

                      <CustomTextField
                        required
                        select
                        defaultValue='designation'
                        fullWidth
                        label='DESIGNATION'
                        style={{ marginTop: '20px', width: '200%' }}
                      >
                        <CustomTextField
                          required
                          placeholder='Search...'
                          style={{ padding: '0 6px 8px 6px', width: '100%' }}
                        />
                        <MenuItem value='designation'>Designations</MenuItem>
                        <MenuItem value='accountant'>Accountant</MenuItem>
                        <MenuItem value='computerOperator'>Computer Operator</MenuItem>
                        <MenuItem value='otherStaff'>Other Staff</MenuItem>
                        <MenuItem value='principal'>Principal</MenuItem>
                        <MenuItem value='sportTeacher'>Sport Teacher</MenuItem>
                        <MenuItem value='teacher'>Teacher</MenuItem>
                        <MenuItem value='vicePrincipal'>Vice-Principal</MenuItem>
                      </CustomTextField>
                    </div>

                    <div className='sectionTwo' style={{ display: 'flex' }}>
                      <CustomTextField
                        fullWidth
                        label='FATHER NAME'
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                      />

                      <CustomTextField
                        fullWidth
                        type='date'
                        label='MOTHER NAME'
                        style={{ marginTop: '20px', width: '200%' }}
                      />
                    </div>

                    <div className='sectionThree' style={{ display: 'flex' }}>
                      <CustomTextField
                        type='date'
                        label='DATE'
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                      />

                      <CustomTextField
                        fullWidth
                        type='date'
                        label='DATE OF JOINING'
                        style={{ marginTop: '20px', width: '200%' }}
                      />
                    </div>
                    <div className='sectionFour' style={{ display: 'flex' }}>
                      <CustomTextField
                        label='EMERGENCY MOBILE'
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                      />

                      <CustomTextField fullWidth label='DRIVING LICENSE' style={{ marginTop: '20px', width: '200%' }} />
                    </div>
                  </div>
                </div>
                {/* //Upload Information */}
                <div className='container' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className='academic mx-4 mb-4 ' style={{ width: '50%' }}>
                    <div className='sectionOne' style={{ display: 'flex', width: '100%' }}>
                      <Typography variant='h5' style={{ width: '47.5%', marginRight: '5%' }}>
                        <CustomTextField
                          value='Staff Photo'
                          label='STAFF PHOTO'
                          style={{ marginTop: 20, width: '211%' }}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position='end'>
                                <Button
                                  variant='contained'
                                  style={{ height: '25px', width: '90px', fontSize: '0.75rem' }}
                                >
                                  BROWSE
                                </Button>
                              </InputAdornment>
                            )
                          }}
                        />
                      </Typography>
                      <Typography variant='h6' color={'blue'} style={{ marginTop: '80px', marginLeft: '30px' }}>
                        JPG, JPEG, PNG are allowed for upload.
                      </Typography>
                    </div>
                  </div>

                  <div className='departmentGroup mt-4 mx-4 mb-4 ' style={{ width: '50%' }}>
                    <Typography variant='h6'>Show As Expert Staff</Typography>

                    <div className='sectionOne' style={{ display: 'flex', width: '100%' }}>
                      <RadioGroup row aria-label='custom-radio' name='customized-radios'>
                        <FormControlLabel
                          value='option1'
                          control={
                            <Radio
                              icon={<div style={{ border: '2px solid', borderRadius: '50%', width: 24, height: 24 }} />}
                              checkedIcon={<CheckIcon style={{ color: 'green', fontSize: 24 }} />}
                            />
                          }
                          label='Yes'
                          sx={{ mr: 20, mt: 2, mb: 2 }}
                        />
                        <FormControlLabel
                          value='option2'
                          control={
                            <Radio
                              icon={<div style={{ border: '2px solid', borderRadius: '50%', width: 24, height: 24 }} />}
                              checkedIcon={<CheckIcon style={{ color: 'green', fontSize: 24 }} />}
                            />
                          }
                          label='No'
                        />
                      </RadioGroup>
                    </div>

                    <div className='sectionTwo' style={{ display: 'flex' }}>
                      <CustomTextField
                        fullWidth
                        label='PERMANENT ADDRESS'
                        multiline
                        rows={4}
                        style={{ marginTop: '20px', width: '200%' }}
                      />
                    </div>
                    <div className='sectionThree' style={{ display: 'flex', width: '100%' }}>
                      <CustomTextField
                        fullWidth
                        multiline
                        rows={4}
                        label='EXPERIENCE'
                        style={{ marginTop: '10px', width: '100%' }}
                      />
                    </div>
                  </div>
                </div>
                {/* //Current Address Info */}
                <div className='academic  mx-4 mb-4 ' style={{ width: '66%', marginTop: '-22%' }}>
                  <div className='sectionOne' style={{ display: 'flex', width: '72%' }}>
                    <CustomTextField
                      fullWidth
                      multiline
                      rows={4}
                      label='CURRENT ADDRESS'
                      style={{ marginTop: '10px', width: '120%' }}
                    />
                  </div>
                  <div className='sectiontwo' style={{ display: 'flex', width: '72%' }}>
                    <CustomTextField
                      fullWidth
                      multiline
                      rows={4}
                      label='QUALIFICATIONS'
                      style={{ marginTop: '10px', width: '120%' }}
                    />
                  </div>
                </div>
              </TabPanel>
              {/* PAYROLL PANEL */}
              <TabPanel value='payRollDetails'>
                <div className='container' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className='payRollDetails mx-4 mb-4 ' style={{ width: '50%' }}>
                    <div className='sectionOne' style={{ display: 'flex', width: '100%' }}>
                      <CustomTextField
                        fullWidth
                        label='EPF NO'
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                      />

                      <CustomTextField fullWidth label='BASIC SALARY' style={{ marginTop: '20px', width: '200%' }} />
                    </div>
                  </div>
                  {/* CONTRACT INFO*/}
                  <div className='academic mt-0 mx-6 mb-4 ' style={{ width: '50%' }}>
                    <div className='sectionOne' style={{ display: 'flex', width: '100%' }}>
                      <CustomTextField
                        fullWidth
                        select
                        label='CONTRACT TYPE'
                        defaultValue='ctype'
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                      >
                        <MenuItem value='ctype'>Contract Type</MenuItem>
                        <MenuItem value='permanent'>Permanent</MenuItem>
                        <MenuItem value='contract'>Contract</MenuItem>
                      </CustomTextField>

                      <CustomTextField fullWidth label='LOCATION' style={{ marginTop: '20px', width: '200%' }} />
                    </div>
                  </div>
                </div>
              </TabPanel>
              {/* BANK INFO */}
              <TabPanel value='bankDetails'>
                <div className='container' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className='bankDetails mx-4 mb-4 ' style={{ width: '50%' }}>
                    <div className='sectionOne' style={{ display: 'flex', width: '100%' }}>
                      <CustomTextField
                        fullWidth
                        label='BANK ACCOUNT NAME'
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                      />

                      <CustomTextField fullWidth label='ACCOUNT NO' style={{ marginTop: '20px', width: '200%' }} />
                    </div>
                  </div>

                  <div className=' mt-0 mx-6 mb-4 ' style={{ width: '50%' }}>
                    <div className='sectionOne' style={{ display: 'flex', width: '100%' }}>
                      <CustomTextField
                        fullWidth
                        label='BANK NAME'
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                      />

                      <CustomTextField fullWidth label='BRANCH NAME' style={{ marginTop: '20px', width: '200%' }} />
                    </div>
                  </div>
                </div>
              </TabPanel>
              {/* SOCIAL LINKS INFORMATION */}
              <TabPanel value='socialDetails'>
                <div className='container' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className='socialDetails mx-4 mb-4 ' style={{ width: '50%' }}>
                    <div className='sectionOne' style={{ display: 'flex', width: '100%' }}>
                      <CustomTextField
                        fullWidth
                        label='FACEBOOK URL'
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                      />

                      <CustomTextField fullWidth label='TWITTER URL' style={{ marginTop: '20px', width: '200%' }} />
                    </div>
                  </div>

                  <div className=' mt-0 mx-6 mb-4 ' style={{ width: '50%' }}>
                    <div className='sectionOne' style={{ display: 'flex', width: '100%' }}>
                      <CustomTextField
                        fullWidth
                        label='LINKEDIN URL'
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                      />

                      <CustomTextField fullWidth label='INSTAGRAM URL' style={{ marginTop: '20px', width: '200%' }} />
                    </div>
                  </div>
                </div>
              </TabPanel>
              {/* DOCUMENT INFORMATION */}
              <TabPanel value='documentInfo'>
                <div className='container'>
                  <div className='documentInfo mx-4 mb-4 '>
                    <div className='sectionOne' style={{ display: 'flex', width: '100%', gap: '2%' }}>
                      <CustomTextField
                        placeholder='Resume'
                        label='RESUME'
                        style={{ marginTop: 20, width: '100%' }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position='end'>
                              <Button
                                variant='contained'
                                style={{ height: '25px', width: '90px', fontSize: '0.75rem' }}
                              >
                                BROWSE
                              </Button>
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomTextField
                        placeholder='Joining Letter'
                        label='JOINING LETTER'
                        style={{ marginTop: 20, width: '100%' }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position='end'>
                              <Button
                                variant='contained'
                                style={{ height: '25px', width: '90px', fontSize: '0.75rem' }}
                              >
                                BROWSE
                              </Button>
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomTextField
                        placeholder='Other Document'
                        label='OTHER DOCUMENT'
                        style={{ marginTop: 20, width: '100%' }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position='end'>
                              <Button
                                variant='contained'
                                style={{ height: '25px', width: '90px', fontSize: '0.75rem' }}
                              >
                                BROWSE
                              </Button>
                            </InputAdornment>
                          )
                        }}
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value='customField'>
                <div className='container' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className='customField mt-4 mx-4 mb-4 ' style={{ width: '50%' }}>
                    <Typography variant='h6'>CUSTOM FIELD</Typography>
                    <Divider sx={{ borderBottomWidth: 1, borderColor: '#D3D3D3', marginTop: 1, width: '95%' }} />

                    <div className='sectionOne' style={{ display: 'flex', width: '100%' }}>
                      <CustomTextField
                        fullWidth
                        label='Name (Nepali)'
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>
            </CardContent>
          </form>
        </TabContext>
      </Card>
    </>
  )
}

export default AddStaffLayout
