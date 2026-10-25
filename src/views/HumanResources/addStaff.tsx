'use client'

// React Imports
import { useEffect, useState } from 'react'
import type { ReactElement, SyntheticEvent } from 'react'

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
import { useDepartmentStore } from '@/stores/departmentStore'
import { useDesignationStore } from '@/stores/designationStore'
// Components Imports
import CustomTextField from '@core/components/mui/TextField'
import { useStaffStore } from '@/stores/staffStore'
import { DesignationTypes } from '@/types/designation'
import { DepartmentTypes } from '@/types/department'
import { staffTypes } from '@/types/staff'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
//import { File } from 'node:buffer'

const AddStaffLayout = () => {
  // States
  const [value, setValue] = useState('personal_info')
  const { addStaff, updateStaff, deleteStaff, listOfStaff, Staff, isLoading } = useStaffStore()
  const { listOfDepartment, department } = useDepartmentStore()
  const { listOfDesignation, designation } = useDesignationStore()
  const [formData, setFormData] = useState<Partial<staffTypes>>({})
  const router = useRouter()
  const searchParams = useSearchParams()

  const idFromUrl = searchParams.get('id')

  const handleTabChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  useEffect(() => {
    listOfStaff()
    listOfDepartment()
    listOfDesignation()
  }, [listOfStaff, listOfDepartment, listOfDesignation])

  const handleReset = () => {
    setFormData({
      empId: '',
      name: '',
      fatherName: '',
      motherName: '',
      gender: '',
      DOB: '',
      email: '',
      password: '',
      phone: '',
      branch: '',
      photo: null,
      currentAddress: '',
      permanentAddress: '',
      bankName: '',
      accountNumber: '',
      accountName: '',
      facebookLink: '',
      twitterLink: '',
      linkedinLink: '',
      qualification: '',
      experience: '',
      joiningDate: '',
      designationId: 1,
      departmentId: 1,
      contractType: '',
      NIDNumber: '',
      passportNumber: '',
      drivingLicenseNumber: '',
      citizenshipNumber: '',
      citizenshipDoc: null,
      joiningLetterDoc: null,
      experienceCertificateDoc: null,
      activeStatus: true
    })
  }

  useEffect(() => {
    if (!idFromUrl || !Staff?.length) return

    const found = Staff.find((s: staffTypes) => s.id === Number(idFromUrl))
    if (!found) return

    setFormData({
      empId: found.empId ?? '',
      name: found.name ?? '',
      fatherName: found.fatherName ?? '',
      motherName: found.motherName ?? '',
      gender: found.gender ?? '',
      DOB: found.DOB ? String(found.DOB).slice(0, 10) : '', // date input needs yyyy-mm-dd
      email: found.email ?? '',
      password: '', // never prefill
      phone: found.phone ?? '',
      branch: found.branch ?? '',
      currentAddress: found.currentAddress ?? '',
      permanentAddress: found.permanentAddress ?? '',
      bankName: found.bankName ?? '',
      accountNumber: found.accountNumber ?? '',
      accountName: found.accountName ?? '',
      facebookLink: found.facebookLink ?? '',
      twitterLink: found.twitterLink ?? '',
      linkedinLink: found.linkedinLink ?? '',
      qualification: found.qualification ?? '',
      experience: found.experience ?? '',
      joiningDate: found.joiningDate ? String(found.joiningDate).slice(0, 10) : '',
      designationId: found.designationId ?? 1,
      departmentId: found.departmentId ?? 1,
      contractType: found.contractType ?? '',
      NIDNumber: found.NIDNumber ?? '',
      passportNumber: found.passportNumber ?? '',
      drivingLicenseNumber: found.drivingLicenseNumber ?? '',
      citizenshipNumber: found.citizenshipNumber ?? '',
      activeStatus: found.activeStatus ?? true
    })
  }, [idFromUrl, Staff])
  const handleAddStaff = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (idFromUrl) {
      await updateStaff(Number(idFromUrl), formData)
      //router.push('/addStaff')
    } else {
      await addStaff(formData)
    }
    handleReset()
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList variant='scrollable' onChange={handleTabChange} className='border-be'>
          <Tab label='Personal Info' value='personal_info' />
          <Tab label='Account Details' value='account_details' />
          <Tab label='Social Links' value='social_links' />
          <Tab label='Educational & Experience' value='educational_&_experience' />
          <Tab label='Document' value='document' />
        </TabList>
        <form onSubmit={handleAddStaff}>
          <CardContent>
            <TabPanel value='personal_info'>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Employee Id'
                    placeholder='Emp_01'
                    required
                    value={formData.empId}
                    onChange={e => setFormData({ ...formData, empId: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Full Name'
                    name='name'
                    required
                    placeholder='Enter Your Full Name'
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Father Name'
                    placeholder='Mister'
                    required
                    value={formData.fatherName}
                    onChange={e => setFormData({ ...formData, fatherName: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Mother Name'
                    placeholder='Mistress'
                    required
                    value={formData.motherName}
                    onChange={e => setFormData({ ...formData, motherName: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    select
                    fullWidth
                    label='Gender'
                    required
                    value={formData.gender}
                    onChange={e => setFormData({ ...formData, gender: e.target.value })}
                  >
                    <MenuItem value=''>Select Your Gender</MenuItem>
                    <MenuItem value='MALE'>MALE</MenuItem>
                    <MenuItem value='FEMALE'>FEMALE</MenuItem>
                    <MenuItem value='OTHER'>OTHER</MenuItem>
                  </CustomTextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Date of Birth'
                    type='date'
                    required
                    value={formData.DOB}
                    onChange={e => setFormData({ ...formData, DOB: e.target.value })}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ max: new Date().toISOString().split('T')[0] }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Email'
                    type='email'
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Password'
                    type='password'
                    required
                    value={formData.password}
                    onChange={e => setFormData({ ...formData, password: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Phone Number'
                    type='tel'
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Enter Your Branch'
                    placeholder='Admin'
                    required
                    value={formData.branch}
                    onChange={e => setFormData({ ...formData, branch: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Enter Your Current Address'
                    placeholder='Current Address'
                    required
                    value={formData.currentAddress}
                    onChange={e => setFormData({ ...formData, currentAddress: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Enter Your permanent Address'
                    placeholder='Permanent Address'
                    required
                    value={formData.permanentAddress}
                    onChange={e => setFormData({ ...formData, permanentAddress: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Photo'
                    type='file'
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ accept: 'image/*, .pdf' }}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFormData({ ...formData, photo: e.target.files?.[0] ?? null })
                    }
                  />
                </Grid>
              </Grid>
              <CardActions>
                <Button
                  type='button'
                  variant='contained'
                  sx={{ marginLeft: 'auto' }}
                  onClick={() => setValue('account_details')}
                >
                  Next
                </Button>

                <Button type='reset' variant='tonal' color='secondary' onClick={() => handleReset()}>
                  Reset
                </Button>
              </CardActions>
            </TabPanel>
            <TabPanel value='account_details'>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Bank Name'
                    placeholder='Enter your Bank Name'
                    value={formData.bankName}
                    onChange={e => setFormData({ ...formData, bankName: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Account Name'
                    placeholder='Enter Your Account Holder Name'
                    value={formData.accountName}
                    onChange={e => setFormData({ ...formData, accountName: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Account Number'
                    placeholder='Enter Your Account Number'
                    value={formData.accountNumber}
                    onChange={e => setFormData({ ...formData, accountNumber: e.target.value })}
                  />
                </Grid>
              </Grid>
              <CardActions>
                <Button
                  type='button'
                  variant='contained'
                  sx={{ marginLeft: 'auto' }}
                  onClick={() => setValue('personal_info')}
                >
                  prev
                </Button>
                <Button
                  type='button'
                  variant='contained'
                  sx={{ marginLeft: 'auto' }}
                  onClick={() => setValue('social_links')}
                >
                  Next
                </Button>

                <Button type='reset' variant='tonal' color='secondary' onClick={() => handleReset()}>
                  Reset
                </Button>
              </CardActions>
            </TabPanel>
            <TabPanel value='social_links'>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Facebook'
                    placeholder='https://facebook.com/robin'
                    value={formData.facebookLink}
                    onChange={e => setFormData({ ...formData, facebookLink: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Facebook Link'
                    placeholder='https://twitter.com/robin'
                    value={formData.twitterLink}
                    onChange={e => setFormData({ ...formData, twitterLink: e.target.value })}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='LinkedIn'
                    placeholder='https://linkedin.com/robin'
                    value={formData.linkedinLink}
                    onChange={e => setFormData({ ...formData, linkedinLink: e.target.value })}
                  />
                </Grid>
              </Grid>
              <CardActions>
                <Button
                  type='button'
                  variant='contained'
                  sx={{ marginLeft: 'auto' }}
                  onClick={() => setValue('account_details')}
                >
                  prev
                </Button>
                <Button
                  type='button'
                  variant='contained'
                  sx={{ marginLeft: 'auto' }}
                  onClick={() => setValue('educational_&_experience')}
                >
                  Next
                </Button>

                <Button type='reset' variant='tonal' color='secondary' onClick={() => handleReset()}>
                  Reset
                </Button>
              </CardActions>
            </TabPanel>
            <TabPanel value='educational_&_experience'>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='qualification'
                    placeholder='B.Tech in Computer Science'
                    required
                    value={formData.qualification}
                    onChange={e => setFormData({ ...formData, qualification: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Experience'
                    placeholder='3 years of experience in software development'
                    value={formData.experience}
                    onChange={e => setFormData({ ...formData, experience: e.target.value })}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Joining Date'
                    type='date'
                    required
                    value={formData.joiningDate}
                    onChange={e => setFormData({ ...formData, joiningDate: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    select
                    fullWidth
                    label='Designation'
                    required
                    value={formData.designationId || ''}
                    onChange={e =>
                      setFormData({
                        ...formData,
                        designationId: Number(e.target.value)
                      })
                    }
                  >
                    <MenuItem value=''>Select Designation</MenuItem>

                    {designation?.map((item: DesignationTypes) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.title}
                      </MenuItem>
                    ))}
                  </CustomTextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    select
                    fullWidth
                    label='Department'
                    required
                    value={formData.departmentId || ''}
                    onChange={e => setFormData({ ...formData, departmentId: Number(e.target.value) })}
                  >
                    <MenuItem value=''>Select Department</MenuItem>
                    {department?.map((item: DepartmentTypes) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.title}
                      </MenuItem>
                    ))}
                  </CustomTextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    select
                    fullWidth
                    label='Contract Type'
                    required
                    value={formData.contractType}
                    onChange={e => setFormData({ ...formData, contractType: e.target.value })}
                  >
                    <MenuItem value=''>Select Contract Type</MenuItem>
                    <MenuItem value='TEMPORARY'>TEMPORARY</MenuItem>
                    <MenuItem value='PERMANENT'>PERMANENT</MenuItem>
                  </CustomTextField>
                </Grid>
              </Grid>
              {/* //at the end we don't need next button , we only need submit button */}
              <CardActions>
                <Button
                  type='button'
                  variant='contained'
                  sx={{ marginLeft: 'auto' }}
                  onClick={() => setValue('social_links')}
                >
                  prev
                </Button>
                <Button
                  type='button'
                  variant='contained'
                  sx={{ marginLeft: 'auto' }}
                  onClick={() => setValue('document')}
                >
                  Next
                </Button>

                <Button type='reset' variant='tonal' color='secondary' onClick={() => handleReset()}>
                  Reset
                </Button>
              </CardActions>
            </TabPanel>
            <TabPanel value='document'>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Nid Number'
                    placeholder='Enter Your Nid Number'
                    value={formData.NIDNumber}
                    onChange={e => setFormData({ ...formData, NIDNumber: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Passport Number'
                    placeholder='Enter Your Passport Number'
                    value={formData.passportNumber}
                    onChange={e => setFormData({ ...formData, passportNumber: e.target.value })}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Driving License Number'
                    placeholder='Enter Your Driving License Number'
                    value={formData.drivingLicenseNumber}
                    onChange={e => setFormData({ ...formData, drivingLicenseNumber: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Citizenship Number'
                    placeholder='Enter Your Citizenship Number'
                    required
                    value={formData.citizenshipNumber}
                    onChange={e => setFormData({ ...formData, citizenshipNumber: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Upload Citizenship'
                    type='file'
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ accept: 'image/*,.pdf' }}

                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const file = e.target.files?.[0] ?? null
                      setFormData({ ...formData, citizenshipDoc: file })
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Joining Letter '
                    type='file'
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ accept: 'image/*,.pdf' }}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFormData({ ...formData, joiningLetterDoc: e.target.files?.[0] ?? null })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Experience Certificate '
                    type='file'
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ accept: 'image/*,.pdf' }}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const file = e.target.files?.[0] ?? null
                      setFormData(prev => ({ ...prev, experienceCertificateDoc: file }))
                    }}
                  />
                </Grid>
              </Grid>
            </TabPanel>
          </CardContent>
          <Divider />
          <CardActions sx={{ display: value === 'document' ? 'flex' : 'none' }}>
            <Button
              type='button'
              variant='contained'
              sx={{ marginLeft: 'auto' }}
              onClick={() => setValue('educational_&_experience')}
            >
              prev
            </Button>
            <Button type='submit' variant='contained' sx={{ marginLeft: 'auto' }}>
              {idFromUrl ? 'Update' : 'Submit'}
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

export default AddStaffLayout
