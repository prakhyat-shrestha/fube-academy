'use client'

// React Imports
import { useState } from 'react'
import type { SyntheticEvent } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Tab from '@mui/material/Tab'
import MenuItem from '@mui/material/MenuItem'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Divider from '@mui/material/Divider'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'

// Components Imports
import CustomTextField from '@core/components/mui/TextField'

// Styled Component Imports
// import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

type FormDataType = {
  firstName: string
  lastName: string
  country: string
  language: string[]
  date: Date | null
  phoneNumber: string
  address1:string,
  address2:string,
  postal:string,
  username: string
  studylevel:string,
  gender:string,
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
    date: null,
    phoneNumber: '',
    username: '',
    studylevel:'',
    gender:'',
    email: '',
    password: '',
    address1:'',
    address2:'',
    postal:'',
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
      date: null,
      phoneNumber: '',
      address1:'',
      address2:'',
      postal:'',
      username: '',
      studylevel:'',
      gender:'',
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
    <Card>
      <TabContext value={value}>
        <TabList variant='scrollable' onChange={handleTabChange} className='border-be'>
          <Tab label='Personal Info' value='personal_info' />
          <Tab label='Account Details' value='account_details' />
          <Tab label='Social Links' value='social_links' />
        </TabList>
        <form onSubmit={e => e.preventDefault()}>
          <CardContent>
            <TabPanel value='personal_info'>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='First Name'
                    placeholder='Mister'
                    value={formData.firstName}
                    onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Last Name'
                    placeholder='Cat'
                    value={formData.lastName}
                    onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    select
                    fullWidth
                    label='Country'
                    value={formData.country}
                    onChange={e => setFormData({ ...formData, country: e.target.value })}
                  >
                    <MenuItem value=''>Select Country</MenuItem>
                    <MenuItem value='UK'>UK</MenuItem>
                    <MenuItem value='USA'>USA</MenuItem>
                    <MenuItem value='Nepal'>Nepal</MenuItem>
                    <MenuItem value='Australia'>Australia</MenuItem>
                    <MenuItem value='Germany'>Germany</MenuItem>
                  </CustomTextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    select
                    fullWidth
                    label='Language'
                    value={formData.language}
                    SelectProps={{
                      multiple: true,
                      onChange: e => setFormData({ ...formData, language: e.target.value as string[] })
                    }}>
                    
                    <MenuItem value=''>Select Language</MenuItem>
                    <MenuItem value='English'>English</MenuItem>
                    <MenuItem value='Nepali'>Nepali</MenuItem>
                    <MenuItem value='Spanish'>Spanish</MenuItem>
                    <MenuItem value='Chinese'>Chinese</MenuItem>
                    <MenuItem value='Italian'>Italian</MenuItem>
                    <MenuItem value='German'>German</MenuItem>
                    <MenuItem value='Arabic'>Arabic</MenuItem>
                  </CustomTextField>
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                  <AppReactDatepicker
                    selected={formData.date}
                    showYearDropdown
                    showMonthDropdown
                    onChange={(date: Date) => setFormData({ ...formData, date })}
                    placeholderText='MM/DD/YYYY'
                    customInput={<CustomTextField fullWidth label='Birth Date' placeholder='MM-DD-YYYY' />}
                  />
                </Grid> */}
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Phone Number'
                    type='number'
                    placeholder='123-456-7890'
                    value={formData.phoneNumber}
                    onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Address 1'
                    type='number'
                    placeholder='Enter address 1'
                    value={formData.address1}
                    onChange={e => setFormData({ ...formData, address1: e.target.value })}
                  />
                </Grid> <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Address 2'
                    type='number'
                    placeholder='Enter address 2'
                    value={formData.address2}
                    onChange={e => setFormData({ ...formData, address2: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Postal code'
                    type='number'
                    placeholder='Enter postal code'
                    value={formData.postal}
                    onChange={e => setFormData({ ...formData, postal: e.target.value })}
                  />
                </Grid>

              </Grid>
            </TabPanel>
            <TabPanel value='account_details'>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Username'
                    placeholder='Enter username'
                    value={formData.username}
                    onChange={e => setFormData({ ...formData, username: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    type='email'
                    label='Email'
                    placeholder='user@domain.com'
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    select
                    fullWidth
                    label='Study level'
                    value={formData.studylevel}
                    onChange={e => setFormData({ ...formData, studylevel: e.target.value })}
                  >
                    <MenuItem value=''>Select Study</MenuItem>
                    <MenuItem value='PrePrimary'>Pre Primary</MenuItem>
                    <MenuItem value='Primary'>Primary</MenuItem>
                    <MenuItem value='LowerSecondary'>Lower Secondary</MenuItem>
                    <MenuItem value='HighSecondary'>High Secondary</MenuItem>
                    
                  </CustomTextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    select
                    fullWidth
                    label='Gender'
                    value={formData.gender}
                    onChange={e => setFormData({ ...formData, gender: e.target.value })}
                  >
                    <MenuItem value=''>Select Gender</MenuItem>
                    <MenuItem value='Male'>Male</MenuItem>
                    <MenuItem value='Female'>Female</MenuItem>
                
                    
                  </CustomTextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Password'
                    placeholder='············'
                    id='form-layout-tabs-password'
                    type={formData.isPasswordShown ? 'text' : 'password'}
                    value={formData.password}
                    onChange={e => setFormData({ ...formData, password: e.target.value })}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onClick={handleClickShowPassword}
                            onMouseDown={e => e.preventDefault()}
                            aria-label='toggle password visibility'
                          >
                            <i className={formData.isPasswordShown ? 'tabler-eye-off' : 'tabler-eye'} />
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Confirm Password'
                    placeholder='············'
                    id='form-layout-tabs-confirm-password'
                    type={formData.setIsConfirmPasswordShown ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onClick={handleClickShowConfirmPassword}
                            onMouseDown={e => e.preventDefault()}
                            aria-label='toggle password visibility'
                          >
                            <i className={formData.setIsConfirmPasswordShown ? 'tabler-eye-off' : 'tabler-eye'} />
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value='social_links'>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Twitter'
                    placeholder='https://twitter.com/robin'
                    value={formData.twitter}
                    onChange={e => setFormData({ ...formData, twitter: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Facebook'
                    placeholder='https://facebook.com/robin'
                    value={formData.facebook}
                    onChange={e => setFormData({ ...formData, facebook: e.target.value })}
                  />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='LinkedIn'
                    placeholder='https://linkedin.com/robin'
                    value={formData.linkedin}
                    onChange={e => setFormData({ ...formData, linkedin: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Instagram'
                    placeholder='https://instagram.com/robin'
                    value={formData.instagram}
                    onChange={e => setFormData({ ...formData, instagram: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Quora'
                    placeholder='https://quora.com/robin'
                    value={formData.quora}
                    onChange={e => setFormData({ ...formData, quora: e.target.value })}
                  />
                </Grid>
              </Grid>
            </TabPanel>
          </CardContent>
          <Divider />

          <CardActions>

            <Button type='submit' variant='contained' sx={{ marginLeft: 'auto' }}>
              Submit
            </Button>

            <Button type='reset' variant='tonal' color='secondary' onClick={() => handleReset()}>
              Reset
            </Button>

          </CardActions>

        </form>

      </TabContext>
    </Card>
  )
}

export default AddStudent;
