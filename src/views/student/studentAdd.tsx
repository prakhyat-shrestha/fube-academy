'use client'

// React Imports
import { useState } from 'react'
import type { SyntheticEvent } from 'react'

// MUI Imports
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
import Link from 'next/link'

// Components Imports
import { FormControl, FormControlLabel, InputAdornment, Radio, RadioGroup, Typography } from '@mui/material'

import AddSharpIcon from '@mui/icons-material/AddSharp'

import CustomTextField from '@core/components/mui/TextField'

// Styled Component Imports
// import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

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

const AddStudent = () => {
  // States
  const [value, setValue] = useState('personal_info')

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
          Student Admission
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Student Info
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Student Admission</Link>
          </Typography>
        </nav>
      </div>
      <Card className='mt-4'>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='h6' style={{ margin: '20px' }}>
            Add Student
          </Typography>

          <Button variant='contained' style={{ marginTop: '20px', height: '35px', marginRight: '1.7%' }}>
            <AddSharpIcon />
            Import Student
          </Button>
        </div>
        <TabContext value={value}>
          <TabList variant='scrollable' onChange={handleTabChange} className='border-be' style={{ marginLeft: '20px' }}>
            <Tab label='PERSONAL INFO' value='personalInfo' style={{ fontSize: '12px' }} />
            <Tab label='PARENTS & GUARDIAN INFO' value='parentsAndGuardianInfo' style={{ fontSize: '12px' }} />
            <Tab label='DOCUMENT INFO' value='documentInfo' style={{ fontSize: '12px' }} />
            <Tab label='PREVIOUS SCHOOL INFORMATION' value='previousSchoolInformation' style={{ fontSize: '12px' }} />
            <Tab label='OTHER INFO' value='otherInfo' style={{ fontSize: '12px' }} />
            <Tab label='CUSTOM FIELD' value='customField' style={{ fontSize: '12px' }} />
            <Button
              variant='contained'
              style={{ marginTop: '7px', height: '35px', marginLeft: '16%', marginBottom: '10px' }}
            >
              <CheckSharpIcon />
              Save Student
            </Button>
          </TabList>
          <form onSubmit={e => e.preventDefault()}>
            <CardContent>
              <TabPanel value='personalInfo'>
                <div className='container' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className='academic mt-4 mx-4 mb-4 ' style={{ width: '50%' }}>
                    <Typography variant='h6'>ACADEMIC INFORMATION</Typography>
                    <Divider sx={{ borderBottomWidth: 1, borderColor: '#D3D3D3', marginTop: 1 }} />

                    <div className='sectionOne' style={{ display: 'flex', width: '100%' }}>
                      <CustomTextField
                        required
                        fullWidth
                        select
                        label='ACADEMIC YEAR'
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                      >
                        <MenuItem value=''>Select the year.</MenuItem>
                        <MenuItem value='2080'>2080[Baishakh-Chaitra]</MenuItem>
                      </CustomTextField>

                      <CustomTextField
                        select
                        required
                        fullWidth
                        label='CLASS'
                        value={formData.studylevel}
                        onChange={e => setFormData({ ...formData, studylevel: e.target.value })}
                        style={{ marginTop: '20px', width: '200%' }}
                      >
                        <MenuItem value=''>Class*</MenuItem>
                        <MenuItem value='ECED'>ECED</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                      </CustomTextField>
                    </div>

                    <div className='sectiontwo' style={{ display: 'flex' }}>
                      <CustomTextField
                        select
                        required
                        fullWidth
                        label='SECTION'
                        value={formData.studylevel}
                        onChange={e => setFormData({ ...formData, studylevel: e.target.value })}
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                      >
                        <MenuItem value=''>Section*</MenuItem>
                        <MenuItem value='A'>A</MenuItem>
                      </CustomTextField>

                      <CustomTextField
                        fullWidth
                        label='IEMIS NUMBER'
                        placeholder='IEMIS NUMBER'
                        value={formData.iemisnumber}
                        onChange={e => setFormData({ ...formData, gender: e.target.value })}
                        style={{ marginTop: '20px', width: '200%' }}
                      />
                    </div>

                    <div className='sectionthree' style={{ display: 'flex' }}>
                      <CustomTextField
                        type='date'
                        label='ADMISSION DATE'
                        id='admissiondate'
                        value={formData.admissiondate}
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                      />

                      <CustomTextField
                        fullWidth
                        label='Roll Number'
                        placeholder='············'
                        id='rollno'
                        value={formData.rollno}
                        style={{ marginTop: '20px', width: '200%' }}
                      />
                    </div>
                    <div className='sectionfour' style={{ display: 'flex' }}>
                      <CustomTextField
                        label='GROUP'
                        select
                        value={formData.group}
                        style={{ marginTop: '20px', width: '48%', marginRight: '5%' }}
                      >
                        <MenuItem value=''>Select Group</MenuItem>
                        <MenuItem value='Janajati'>Janajati</MenuItem>
                        <MenuItem value='Dalit'>Dalit</MenuItem>
                      </CustomTextField>
                    </div>
                  </div>

                  <div className='academic mt-4 mx-4 mb-4 ' style={{ width: '50%' }}>
                    <Typography variant='h6'>PERSONAL INFO</Typography>
                    <Divider sx={{ borderBottomWidth: 1, borderColor: '#D3D3D3', marginTop: 1 }} />

                    <div className='sectionOne' style={{ display: 'flex', width: '100%' }}>
                      <CustomTextField
                        required
                        fullWidth
                        label='FIRST NAME'
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                        onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                      />

                      <CustomTextField
                        required
                        fullWidth
                        label='LAST NAME'
                        value={formData.studylevel}
                        onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                        style={{ marginTop: '20px', width: '200%' }}
                      />
                    </div>

                    <div className='sectiontwo' style={{ display: 'flex' }}>
                      <CustomTextField
                        select
                        required
                        fullWidth
                        label='GENDER'
                        value={formData.studylevel}
                        onChange={e => setFormData({ ...formData, gender: e.target.value })}
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                      >
                        <MenuItem value=''>Select Gender*</MenuItem>
                        <MenuItem value='Male'>Male</MenuItem>
                        <MenuItem value='Female'>Female</MenuItem>
                        <MenuItem value='Other'>Other</MenuItem>
                      </CustomTextField>

                      <CustomTextField
                        fullWidth
                        type='date'
                        label='DATE OF BIRTH'
                        value={formData.dob}
                        style={{ marginTop: '20px', width: '200%' }}
                      />
                    </div>

                    <div className='sectionthree' style={{ display: 'flex' }}>
                      <CustomTextField
                        select
                        label='RELIGION'
                        placeholder='Select religion'
                        value={formData.religion}
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                      ></CustomTextField>

                      <CustomTextField
                        fullWidth
                        label='CASTE'
                        value={formData.caste}
                        style={{ marginTop: '20px', width: '200%' }}
                      />
                    </div>
                    <div className='sectionfour' style={{ display: 'flex' }}>
                      <Typography variant='h5' style={{ width: '47.5%', marginRight: '5%' }}>
                        <CustomTextField
                          required
                          value='Student Photo'
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
                      </Typography>
                    </div>
                  </div>
                </div>
                {/* //Contact Information */}
                <div className='container' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className='academic mt-4 mx-4 mb-4 ' style={{ width: '50%' }}>
                    <Typography variant='h6'>CONTACT INFORMATION</Typography>
                    <Divider sx={{ borderBottomWidth: 1, borderColor: '#D3D3D3', marginTop: 1 }} />

                    <div className='sectionOne' style={{ display: 'flex', width: '100%' }}>
                      <CustomTextField
                        fullWidth
                        label='EMAIL ADDRESS'
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                      />

                      <CustomTextField
                        required
                        fullWidth
                        label='PHONE NUMBER'
                        value={formData.phoneNumber}
                        onChange={e => setFormData({ ...formData, studylevel: e.target.value })}
                        style={{ marginTop: '20px', width: '200%' }}
                      />
                    </div>
                  </div>

                  <div className='academic mt-4 mx-4 mb-4 ' style={{ width: '50%' }}>
                    <Typography variant='h6'>MEDICAL RECORD</Typography>
                    <Divider sx={{ borderBottomWidth: 1, borderColor: '#D3D3D3', marginTop: 1 }} />

                    <div className='sectionOne' style={{ display: 'flex', width: '100%' }}>
                      <CustomTextField
                        required
                        fullWidth
                        select
                        label='BLOOD GROUP'
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                      >
                        <MenuItem value=''>Blood Group.</MenuItem>
                        <MenuItem value='A+'>A+</MenuItem>
                        <MenuItem value='O+'>O+</MenuItem>
                        <MenuItem value='B+'>B+</MenuItem>
                        <MenuItem value='AB+'>AB+</MenuItem>
                        <MenuItem value='A-'>A-</MenuItem>
                        <MenuItem value='O-'>O-</MenuItem>
                        <MenuItem value='B-'>B-</MenuItem>
                        <MenuItem value='AB-'>AB-</MenuItem>
                      </CustomTextField>

                      <CustomTextField
                        select
                        required
                        fullWidth
                        label='CATEGORY'
                        // value={formData.studylevel}
                        // onChange={e => setFormData({ ...formData, studylevel: e.target.value })}
                        style={{ marginTop: '20px', width: '200%' }}
                      >
                        <MenuItem value=''>Class*</MenuItem>

                        <MenuItem value={1}>1</MenuItem>
                      </CustomTextField>
                    </div>

                    <div className='sectiontwo' style={{ display: 'flex' }}>
                      <CustomTextField
                        required
                        fullWidth
                        label='HEIGHT (INCHES)'
                        value={formData.medicalheight}
                        onChange={e => setFormData({ ...formData, medicalheight: e.target.value })}
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                      />

                      <CustomTextField
                        fullWidth
                        label='WEIGHT (KILOGRAMS)'
                        value={formData.medicalweight}
                        onChange={e => setFormData({ ...formData, medicalweight: e.target.value })}
                        style={{ marginTop: '20px', width: '200%' }}
                      />
                    </div>
                  </div>
                </div>
                {/* //Student Address Info */}
                <div className='academic  mx-4 mb-4 ' style={{ width: '66%', marginTop: '-7%' }}>
                  <Typography variant='h6'>STUDENT ADDRESS INFO</Typography>
                  <Divider sx={{ borderBottomWidth: 1, borderColor: '#D3D3D3', marginTop: 1, width: '72%' }} />

                  <div className='sectionOne' style={{ display: 'flex', width: '72%' }}>
                    <CustomTextField
                      fullWidth
                      label='CURRENT ADDRESS'
                      style={{ marginTop: '20px', width: '100%', marginRight: '5%' }}
                    />

                    <CustomTextField
                      fullWidth
                      label='PERMANENT ADDRESS'
                      // value={formData.phoneNumber}
                      onChange={e => setFormData({ ...formData, studylevel: e.target.value })}
                      style={{ marginTop: '20px', width: '100%' }}
                    />
                  </div>
                </div>
              </TabPanel>
              {/* NEXT PANEL */}
              <TabPanel value='parentsAndGuardianInfo'>
                <div className='container' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className='academic mt-4 mx-4 mb-4 ' style={{ width: '50%' }}>
                    <Typography variant='h6'>FATHERS INFO</Typography>
                    <Divider sx={{ borderBottomWidth: 1, borderColor: '#D3D3D3', marginTop: 1 }} />

                    <div className='sectionOne' style={{ display: 'flex', width: '100%' }}>
                      <CustomTextField
                        fullWidth
                        label='FATHER NAME'
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                      />

                      <CustomTextField
                        fullWidth
                        label='OCCUPATION'
                        value={formData.studylevel}
                        // onChange={e => setFormData({ ...formData, studylevel: e.target.value })}
                        style={{ marginTop: '20px', width: '200%' }}
                      />
                    </div>
                    <div className='sectionOne' style={{ display: 'flex', width: '100%' }}>
                      <CustomTextField
                        fullWidth
                        label='FATHER PHONE'
                        style={{ marginTop: '20px', width: '100%', marginRight: '5%' }}
                      />

                      <CustomTextField
                        required
                        value='Photo'
                        style={{ marginTop: 20, width: '100%' }}
                        label='FATHERS PHOTO'
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

                    <div className='sectionOne' style={{ display: 'flex', width: '100%' }}>
                      <CustomTextField
                        fullWidth
                        label='MOTHERS NAME'
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                      />

                      <CustomTextField
                        fullWidth
                        label='OCCUPATION'
                        value={formData.studylevel}
                        // onChange={e => setFormData({ ...formData, studylevel: e.target.value })}
                        style={{ marginTop: '20px', width: '200%' }}
                      />
                    </div>
                    <div className='sectionOne' style={{ display: 'flex', width: '100%' }}>
                      <CustomTextField
                        fullWidth
                        label='MOTHER PHONE'
                        style={{ marginTop: '20px', width: '100%', marginRight: '5%' }}
                      />

                      <CustomTextField
                        required
                        value='Photo'
                        label='MOTHERS PHOTO'
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
                  {/* GUARDIAN INFO */}
                  <div className='academic mt-4 mx-6 mb-4 ' style={{ width: '50%' }}>
                    <Typography variant='h6'>GUARDIAN INFO</Typography>
                    <Divider sx={{ borderBottomWidth: 1, borderColor: '#D3D3D3', marginTop: 1 }} />
                    <div className='sectionTop' style={{ display: 'flex', width: '100%' }}>
                      <FormControl className='flex-wrap flex-row'>
                        <Typography variant='h6' style={{ marginTop: '15px', marginRight: '20px' }}>
                          RELATION WITH GUARDIAN
                        </Typography>
                        <RadioGroup
                          row
                          defaultValue='checked'
                          name='basic-radio'
                          aria-label='basic-radio'
                          style={{ marginTop: '8px' }}
                        >
                          <FormControlLabel value='checked' control={<Radio />} label='Father' />
                          <FormControlLabel value='unchecked' control={<Radio />} label='Mother' />
                          <FormControlLabel value='unchecked' control={<Radio />} label='Others' />
                        </RadioGroup>
                      </FormControl>
                    </div>

                    <div className='sectionOne' style={{ display: 'flex', width: '100%' }}>
                      <CustomTextField
                        fullWidth
                        label='GUARDIANS NAME'
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                      />

                      <CustomTextField
                        fullWidth
                        label='RELATION WITH GUARDIAN'
                        // value={formData.studylevel}
                        // onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                        style={{ marginTop: '20px', width: '200%' }}
                      />
                    </div>

                    <div className='sectionOne' style={{ display: 'flex', width: '100%' }}>
                      <CustomTextField
                        fullWidth
                        label='GUARDIANS EMAIL'
                        style={{ marginTop: '20px', width: '100%', marginRight: '5%' }}
                      />

                      <CustomTextField
                        required
                        value='Photo'
                        style={{ marginTop: 20, width: '100%' }}
                        label='GUARDIAN PHOTO'
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

                    <div className='sectionthree' style={{ display: 'flex' }}>
                      <CustomTextField
                        label='GUARDIANS PHONE'
                        // value={formData.religion}
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                      />

                      <CustomTextField
                        fullWidth
                        label='GUARDIANS OCCUPATION'
                        // value={formData.caste}
                        style={{ marginTop: '20px', width: '200%' }}
                      />
                    </div>
                    <div className='sectionfour' style={{ marginTop: '20px' }}>
                      <CustomTextField fullWidth label='GUARDIANS ADDRESS' />
                    </div>
                  </div>
                </div>
              </TabPanel>
              {/* DOCUMENT INFO */}
              <TabPanel value='documentInfo'>
                <div className='container' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className='academic mt-4 mx-4 mb-4 ' style={{ width: '50%' }}>
                    <Typography variant='h6'>DOCUMENT INFO</Typography>
                    <Divider sx={{ borderBottomWidth: 1, borderColor: '#D3D3D3', marginTop: 1 }} />

                    <div className='sectionOne' style={{ display: 'flex', width: '100%' }}>
                      <CustomTextField
                        fullWidth
                        label='NATIONAL ID CARD'
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                      />

                      <CustomTextField
                        fullWidth
                        label='Birth Certificate Number'
                        value={formData.studylevel}
                        // onChange={e => setFormData({ ...formData, studylevel: e.target.value })}
                        style={{ marginTop: '20px', height: '80%', width: '200%' }}
                      />
                    </div>

                    <div className='sectiontwo'>
                      <CustomTextField
                        fullWidth
                        label='ADDITIONAL NOTES'
                        // value={formData.studylevel}
                        // onChange={e => setFormData({ ...formData, studylevel: e.target.value })}
                        style={{ marginTop: '20px', width: '100%', marginRight: '5%' }}
                      />
                    </div>
                  </div>
                  {/* BANK INFORMATION */}
                  <div className='academic mt-4 mx-4 mb-4 ' style={{ width: '50%' }}>
                    <Typography variant='h6'>BANK INFORMATION</Typography>
                    <Divider sx={{ borderBottomWidth: 1, borderColor: '#D3D3D3', marginTop: 1 }} />

                    <div className='sectionOne' style={{ display: 'flex', width: '100%' }}>
                      <CustomTextField
                        fullWidth
                        label='BANK NAME'
                        // value={formData.studylevel}
                        // onChange={e => setFormData({ ...formData, studylevel: e.target.value })}
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                      />

                      <CustomTextField
                        fullWidth
                        label='BANK ACCOUNT NUMBER'
                        // value={formData.studylevel}
                        // onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                        style={{ marginTop: '20px', width: '200%' }}
                      />
                    </div>

                    <div className='sectiontwo'>
                      <CustomTextField
                        fullWidth
                        label='ISFC CODE'
                        // value={formData.studylevel}
                        // onChange={e => setFormData({ ...formData, gender: e.target.value })}
                        style={{ marginTop: '20px', width: '47.5%', marginRight: '5%' }}
                      />
                    </div>
                  </div>
                </div>
                {/* DOCUMENT ATTACHMENT */}
                <div className='container'>
                  <div className='academic mt-4 mx-4 mb-4 ' style={{ width: '100%' }}>
                    <Typography variant='h6'>DOCUMENT ATTACHMENT</Typography>
                    <Divider sx={{ borderBottomWidth: 1, borderColor: '#D3D3D3', marginTop: 1, width: '97.5%' }} />

                    <div className='sectionOne' style={{ display: 'flex', width: '100%', gap: '35px' }}>
                      <div>
                        <CustomTextField
                          fullWidth
                          label='DOCUMENT 1'
                          // value={formData.studylevel}
                          // onChange={e => setFormData({ ...formData, studylevel: e.target.value })}
                          style={{ marginTop: '20px', width: '100%', marginRight: '5%' }}
                        />
                        <CustomTextField
                          required
                          value='Photo'
                          style={{ width: '100%', marginTop: '10px' }}
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
                      <div>
                        <CustomTextField
                          fullWidth
                          label='DOCUMENT 2'
                          // value={formData.studylevel}
                          // onChange={e => setFormData({ ...formData, studylevel: e.target.value })}
                          style={{ marginTop: '20px', width: '100%', marginRight: '5%' }}
                        />
                        <CustomTextField
                          required
                          value='Photo'
                          style={{ width: '100%', marginTop: '10px' }}
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
                      <div>
                        <CustomTextField
                          fullWidth
                          label='DOCUMENT 3'
                          // value={formData.studylevel}
                          // onChange={e => setFormData({ ...formData, studylevel: e.target.value })}
                          style={{ marginTop: '20px', width: '100%', marginRight: '5%' }}
                        />
                        <CustomTextField
                          required
                          value='Photo'
                          style={{ width: '100%', marginTop: '10px' }}
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
                      <div style={{ marginRight: '30px' }}>
                        <CustomTextField
                          fullWidth
                          label='DOCUMENT 4'
                          // value={formData.studylevel}
                          // onChange={e => setFormData({ ...formData, studylevel: e.target.value })}
                          style={{ marginTop: '20px', width: '100%' }}
                        />
                        <CustomTextField
                          required
                          value='Photo'
                          style={{ width: '100%', marginTop: '10px' }}
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
                </div>
              </TabPanel>
              {/* PREVIOUS SCHOOL INFORMATION */}
              <TabPanel value='previousSchoolInformation'>
                <div className='container' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className='academic mt-4 mx-4 mb-4 ' style={{ width: '100%' }}>
                    <Typography variant='h6'>PREVIOUS SCHOOL DETAILS</Typography>
                    <CustomTextField multiline rows={5} style={{ marginTop: 5, width: '100%' }} />
                  </div>
                </div>
              </TabPanel>
              <TabPanel value='otherInfo'>
                <div className='container' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className='academic mt-4 mx-4 mb-4 ' style={{ width: '50%' }}>
                    <Typography variant='h6'>TRANSPORT</Typography>
                    <Divider sx={{ borderBottomWidth: 1, borderColor: '#D3D3D3', marginTop: 1 }} />

                    <div className='sectionOne' style={{ display: 'flex', width: '100%' }}>
                      <CustomTextField
                        fullWidth
                        select
                        label='Route List'
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                      >
                        <MenuItem value=''>Select Route</MenuItem>
                      </CustomTextField>

                      <CustomTextField
                        fullWidth
                        select
                        label='Vehicle Number'
                        // value={formData.studylevel}
                        // onChange={e => setFormData({ ...formData, studylevel: e.target.value })}
                        style={{ marginTop: '20px', height: '80%', width: '200%' }}
                      >
                        <MenuItem value=''>Select Vehicle</MenuItem>
                      </CustomTextField>
                    </div>
                  </div>
                  {/* BANK INFORMATION */}
                  <div className='academic mt-4 mx-4 mb-4 ' style={{ width: '50%' }}>
                    <Typography variant='h6'>OTHER INFO</Typography>
                    <Divider sx={{ borderBottomWidth: 1, borderColor: '#D3D3D3', marginTop: 1 }} />

                    <div className='sectionOne' style={{ display: 'flex', width: '100%' }}>
                      <CustomTextField
                        fullWidth
                        select
                        label='DORMITARY'
                        // value={formData.studylevel}
                        // onChange={e => setFormData({ ...formData, studylevel: e.target.value })}
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                      >
                        <MenuItem value=''>Select Dormitory</MenuItem>
                      </CustomTextField>

                      <CustomTextField
                        required
                        fullWidth
                        label='ROOM NUMBER'
                        // value={formData.studylevel}
                        // onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                        style={{ marginTop: '20px', width: '200%' }}
                      >
                        <MenuItem value=''>Select Room</MenuItem>
                      </CustomTextField>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value='customField'>
                <div className='container' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className='academic mt-4 mx-4 mb-4 ' style={{ width: '50%' }}>
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

export default AddStudent
