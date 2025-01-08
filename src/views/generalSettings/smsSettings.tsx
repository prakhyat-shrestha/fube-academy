'use client'

// React Imports
import { useState } from 'react'
import type { SyntheticEvent } from 'react'

// MUI Imports
import Link from 'next/link'

import Card from '@mui/material/Card'

import Button from '@mui/material/Button'
import Tab from '@mui/material/Tab'
import MenuItem from '@mui/material/MenuItem'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import CardContent from '@mui/material/CardContent'

// Components Imports
import { Typography } from '@mui/material'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

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

function srcset(image: any, size: any, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`
  }
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 2
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger'
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera'
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    cols: 2
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball'
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern'
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    rows: 2,
    cols: 2
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil'
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star'
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    cols: 2
  }
]

const SmsSettingsLayout = () => {
  // States
  const [value, setValue] = useState('select_a_sms_service')

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
          SMS Settings
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              System Settings
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>SMS Settings</Link>
          </Typography>
        </nav>
      </div>
      <div className='smsSettings mt-4 ' style={{ flex: 1 }}></div>
      <Card>
        <TabContext value={value}>
          <TabList
            variant='scrollable'
            onChange={handleTabChange}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              p: 1,
              '& .MuiTab-root': {
                textTransform: 'none',
                fontSize: '12px',
                fontWeight: 'bold',
                color: '#666',
                px: 2,
                py: 1,
                borderRadius: '6px',
                '&:hover': {
                  color: '#1976d2',
                  bgcolor: '#f0f8ff'
                },
                '&.Mui-selected': {
                  color: '#ffffff',
                  bgcolor: '#1976d2'
                }
              }
            }}
          >
            <Tab
              label='SELECT A SMS SERVICE'
              value='select_a_sms_service'
              style={{ fontSize: '14px', marginLeft: '10px', marginTop: '5px' }}
            />
            <Tab label='TWILIO' value='twilio' style={{ fontSize: '14px', marginLeft: '10px' }} />
            <Tab label='MSG91' value='msg91' style={{ fontSize: '14px', marginLeft: '10px' }} />
            <Tab label='TEXTLOCAL' value='text_local' style={{ fontSize: '14px', marginLeft: '10px' }} />
            <Tab label='AFRICATALKING' value='africa_talking' style={{ fontSize: '14px', marginLeft: '10px' }} />
            <Tab label='MOBILE SMS' value='mobile_sms' style={{ fontSize: '14px', marginLeft: '10px' }} />
            <Tab label='CUSTOM SMS' value='custom_sms' style={{ fontSize: '14px', marginLeft: '10px' }} />
          </TabList>
          <form onSubmit={e => e.preventDefault()}>
            <CardContent>
              <TabPanel value='select_a_sms_service'>
                <div className='container' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className='academic mt-8 mx-4 mb-4' style={{ width: '100%' }}>
                    <div
                      className='sectionOne'
                      style={{ marginTop: '-30px', display: 'flex', width: '100%', height: 'auto' }}
                    >
                      <CustomTextField
                        required
                        select
                        defaultValue={'select_a_sms_service'}
                        label='SELECT A SMS SERVICE'
                        style={{ marginTop: '10px', width: '300%', marginRight: '5%' }}
                        InputProps={{
                          style: {
                            height: '56px',
                            padding: '10px'
                          }
                        }}
                      >
                        <MenuItem value='select_a_sms_service'>Select a SMS Service.</MenuItem>
                        <MenuItem value='twilio'>Twilio</MenuItem>
                        <MenuItem value='msg91'>Msg91</MenuItem>
                        <MenuItem value='textlocal'>Text Local</MenuItem>
                        <MenuItem value='africatalking'>Africa Talking</MenuItem>
                        <MenuItem value='mobilesms'>Mobile SMS</MenuItem>
                      </CustomTextField>

                      <CustomTextField
                        required
                        fullWidth
                        label='RECEIVER NUMBER'
                        style={{ marginTop: '10px', width: '300%', marginRight: '5%' }}
                        InputProps={{
                          style: {
                            height: '56px',
                            padding: '10px'
                          }
                        }}
                      ></CustomTextField>
                      <Button variant='contained' style={{ marginTop: '37px', width: '50%', height: '56px' }}>
                        SEND TEST SMS
                      </Button>
                    </div>
                  </div>
                </div>
              </TabPanel>
              {/* TWILIO PANEL */}
              <TabPanel value='twilio'>
                <div className='container' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className='academic mt-4 mx-6 mb-4 ' style={{ width: '50%' }}>
                    <div className='sectionOne' style={{ display: 'flex', width: '100%' }}>
                      <CustomTextField
                        required
                        fullWidth
                        label='TWILIO ACCOUNT SID'
                        style={{ width: '200%', marginRight: '5%' }}
                        InputProps={{
                          style: {
                            height: '56px'
                          }
                        }}
                      />
                    </div>
                    <div className='sectionOne' style={{ display: 'flex', width: '100%' }}>
                      <CustomTextField
                        fullWidth
                        required
                        label='AUTHENTICATION TOKEN'
                        style={{ marginTop: '20px', width: '100%', marginRight: '5%' }}
                        InputProps={{
                          style: {
                            height: '56px',
                            padding: '10px'
                          }
                        }}
                      />
                    </div>

                    <div className='sectionTwo' style={{ display: 'flex', width: '100%' }}>
                      <CustomTextField
                        fullWidth
                        label='REGISTERED PHONE NUMBER'
                        style={{ marginTop: '20px', width: '200%', marginRight: '5%' }}
                        InputProps={{
                          style: {
                            height: '56px',
                            padding: '10px'
                          }
                        }}
                      />
                    </div>
                    <Button variant='contained' style={{ marginTop: '20px', marginRight: '5%' }}>
                      <CheckSharpIcon /> Update
                    </Button>
                  </div>
                  {/* RIGHT INFO */}
                  <div className='academic mt-4 mx-6 mb-4 ' style={{ width: '50%' }}>
                    <ImageList sx={{ width: 500, height: 400 }} variant='quilted' cols={4} rowHeight={121}>
                      {itemData.map(item => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                          <img {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading='lazy' />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </div>
                </div>
              </TabPanel>
              {/* MSG91 INFO */}
              <TabPanel value='msg91'>
                <div className='container' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className='academic mt-1 mx-4 mb-4 ' style={{ width: '50%' }}>
                    <CustomTextField label='Test box' />
                  </div>
                </div>
              </TabPanel>
              {/* TEXT LOCAL  */}
              <TabPanel value='text_local'>
                <div className='container' style={{}}>
                  <div className='academic mt-2 mx-4 mb-4 ' style={{ width: '100%' }}>
                    <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <CustomTextField
                        required
                        label='TEXTLOCAL USERNAME'
                        style={{ width: '37%' }}
                        InputProps={{
                          style: {
                            height: '56px'
                          }
                        }}
                      />
                      <CustomTextField
                        required
                        label='TEXTLOCAL HASH'
                        style={{ width: '37%' }}
                        InputProps={{
                          style: {
                            height: '56px'
                          }
                        }}
                      />
                      <CustomTextField
                        required
                        label='TEXTLOCAL SENDER'
                        defaultValue='TXTCL'
                        style={{ width: '37%' }}
                        InputProps={{
                          style: {
                            height: '56px'
                          }
                        }}
                      />
                      <CustomTextField
                        required
                        select
                        label='TYPE'
                        style={{ width: '37%' }}
                        InputProps={{
                          style: {
                            height: '56px'
                          }
                        }}
                        defaultValue={'select'}
                      >
                        <MenuItem value='select'>Select Type</MenuItem>
                        <MenuItem value='com'>com</MenuItem>
                        <MenuItem value='in'>in</MenuItem>
                      </CustomTextField>
                    </div>
                  </div>
                </div>
              </TabPanel>
              {/* AFRICA TALKING */}
              <TabPanel value='africa_talking'>
                <div className='container' style={{}}>
                  <div className='academic mt-2 mx-4 mb-4 ' style={{ width: '100%' }}>
                    <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <CustomTextField
                        required
                        label='AFRICATALKING USERNAME'
                        style={{ width: '37%' }}
                        InputProps={{
                          style: {
                            height: '56px'
                          }
                        }}
                      />
                      <CustomTextField
                        required
                        label='AFRICATALKING API KEY'
                        style={{ width: '37%' }}
                        InputProps={{
                          style: {
                            height: '56px'
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value='mobile_sms'>
                <div className='container' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className='academic mt-2 mx-4 mb-4 ' style={{ width: '50%' }}>
                    <Typography variant='h6'>No Device Connected!</Typography>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value='custom_sms'>
                <div className='container' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className='academic mt-2 mx-4 mb-4 ' style={{ width: '50%' }}>
                    <Button variant='contained' style={{ marginLeft: '160%', width: '40%', height: '45px' }}>
                      Add Gateway
                    </Button>
                    <div style={{ marginTop: '20px' }}>
                      <table style={{ width: '200%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
                        <thead>
                          <tr>
                            <th
                              style={{
                                padding: '8px',
                                textAlign: 'left',
                                backgroundColor: 'lightgray',
                                borderRadius: '5px 0 0 5px',
                                position: 'relative' // Required for rounded corners
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span>Status</span>
                              </div>
                            </th>
                            <th
                              style={{
                                padding: '8px',
                                textAlign: 'left',
                                backgroundColor: 'lightgray'
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span>Gateway Name</span>
                              </div>
                            </th>
                            <th
                              style={{
                                padding: '8px',
                                textAlign: 'left',
                                backgroundColor: 'lightgray',
                                borderRadius: '0 5px 5px 0'
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span>Action</span>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <Typography variant='h5'>No Data Available</Typography>
                        </tbody>
                      </table>
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

export default SmsSettingsLayout
