'use client'

// React Imports
import { useEffect, useState } from 'react'
import type { ClassType, SyntheticEvent } from 'react'

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
import { useClassStore } from '@/stores/classStore'
import { useParentsStore } from '@/stores/parentStore'
import { useStudentStore } from '@/stores/studentStores'
// Components Imports
import CustomTextField from '@core/components/mui/TextField'
import { studentTypes } from '@/types/student'
import { ParentsTypes } from '@/types/parents'
import { ClassTypes, SecTypes } from '@/types/class'
import {
  Autocomplete,
  MenuList,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import Parents_and_guardian_Info from './parents_and_guardian_Info'
import { useFullscreen } from 'react-use'
import { useSearchParams } from 'next/navigation'

const studentInitialForm: Partial<studentTypes> = {
  IEMISNumber: '',
  classSectionId: undefined,
  admissionNumber: '',
  admissionDate: '',
  rollNumber: '',
  group: '',
  name: '',
  gender: '',
  DOB: '',
  religion: '',
  caste: '',
  studentPhoto: null,
  email: '',
  phoneNumber: '',
  currentAddress: '',
  permanentAddress: '',
  bloodGroup: '',
  category: '',
  height: '',
  weight: '',
  NID: null,
  nidNumber: '',
  birthCertificateNumber: '',
  citizenship: null,
  citizenshipNumber: '',
  additionalNotes: '',
  bankName: '',
  bankAccountNumber: '',
  IFSCcode: '',
  previousSchoolDetails: '',
  RouteList: '',
  vehicleNumber: '',
  dormitoryName: '',
  roomNumber: '',
  parentId: undefined
}

const AddStudent = () => {
  // States
  const [value, setValue] = useState('academic')

  const [formData, setFormData] = useState<Partial<studentTypes>>(studentInitialForm)
  const searchParams = useSearchParams()
  const [classId, setClassId] = useState<number | 'selectClass'>('selectClass')
  const { classes, listOfClass } = useClassStore()
  const { student, isLoading, addStudent, listOfStudent, updateStudent } = useStudentStore()

  const { searchParents, listOfParents, updateParents, addParents, parents } = useParentsStore()
  // const handleClickShowPassword = () => setFormData(show => ({ ...show, isPasswordShown: !show.isPasswordShown }))

  // const handleClickShowConfirmPassword = () =>
  //   setFormData(show => ({ ...show, setIsConfirmPasswordShown: !show.setIsConfirmPasswordShown }))
  const idFromUrl = searchParams.get('id')
  useEffect(() => {
    listOfClass()
    listOfParents()
    listOfStudent()
  }, [listOfClass, listOfParents, listOfStudent])

  useEffect(() => {
    if (!idFromUrl || !student?.length) return
    const editStudent = (student ?? []).find((s: studentTypes) => s.id === Number(idFromUrl))
    if (!editStudent) return

    setClassId(editStudent.classSection.class.id)
    setFormData({
      IEMISNumber: editStudent.IEMISNumber,
      classSectionId: editStudent.classSectionId,
      admissionNumber: editStudent.admissionNumber,
      admissionDate: editStudent.admissionDate.split('T')[0],
      rollNumber: editStudent.rollNumber,
      group: editStudent.group,
      name: editStudent.name,
      gender: editStudent.gender,
      DOB: editStudent.DOB.split('T')[0],
      religion: editStudent.religion,
      caste: editStudent.caste,
      studentPhoto: editStudent.studentPhoto,
      email: editStudent.email,
      phoneNumber: editStudent.phoneNumber,
      currentAddress: editStudent.currentAddress,
      permanentAddress: editStudent.permanentAddress,
      bloodGroup: editStudent.bloodGroup,
      category: editStudent.category,
      height: editStudent.height,
      weight: editStudent.weight,
      NID: editStudent.NID,
      nidNumber: editStudent.nidNumber,
      birthCertificateNumber: editStudent.birthCertificateNumber,
      citizenship: editStudent.citizenship,
      citizenshipNumber: editStudent.citizenshipNumber,
      additionalNotes: editStudent.additionalNotes,
      bankName: editStudent.bankName,
      bankAccountNumber: editStudent.bankAccountNumber,
      IFSCcode: editStudent.IFSCcode,
      previousSchoolDetails: editStudent.previousSchoolDetails,
      RouteList: editStudent.RouteList,
      vehicleNumber: editStudent.vehicleNumber,
      dormitoryName: editStudent.dormitoryName,
      roomNumber: editStudent.roomNumber,
      parentId: editStudent.parentId
    })
  }, [idFromUrl, student])

  const handleTabChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const handleReset = () => {
    setFormData(studentInitialForm)

    setClassId('selectClass')
  }

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
    }
  }))

  const handleClassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value)
    setClassId(v)
    setFormData(prev => ({ ...prev, classSectionId: '' }))
  }
  const handleSectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value === '' ? undefined : Number(e.target.value)
    setFormData(prev => ({ ...formData, classSectionId: v }))
  }

  const sections: SecTypes[] = (classes ?? []).find((cls: ClassTypes) => cls.id === classId)?.sections ?? []

  const handleAddStudent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formData.parentId) {
      alert('please add your parents. ')
      return
    }
    if (idFromUrl) {
      await updateStudent(Number(idFromUrl), formData)
    } else {
      const res = await addStudent(formData)
    }

    handleReset()
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList variant='scrollable' onChange={handleTabChange} className='border-be'>
          <Tab label='Academic' value='academic' />
          <Tab label='Personal & Contact' value='personal_&_contact' />
          <Tab label='Medical & Documents' value='medical_&_documents' />
          <Tab label='Parents' value='parents' />

          <Tab label='Other Info' value='other_info' />
        </TabList>
        <form onSubmit={handleAddStudent}>
          <CardContent>
            <TabPanel value='academic'>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Enter Your IEMISNumber'
                    required
                    value={formData.IEMISNumber}
                    onChange={e => setFormData({ ...formData, IEMISNumber: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    select
                    fullWidth
                    label='Select Class'
                    required
                    value={classId}
                    onChange={handleClassChange}
                  >
                    <MenuItem value='selectClass'>Select Class</MenuItem>
                    {(classes ?? []).map((cls: ClassTypes) => (
                      <MenuItem key={cls.id} value={cls.id}>
                        {cls.name}
                      </MenuItem>
                    ))}
                  </CustomTextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    select
                    required
                    fullWidth
                    label='Select Section'
                    disabled={classId === 'selectClass'}
                    value={formData.classSectionId ?? ''}
                    onChange={handleSectionChange}
                  >
                    <MenuItem value=''>Select Section</MenuItem>
                    {sections.map((sec: SecTypes) => (
                      <MenuItem value={sec.classSectionId} key={sec.id}>
                        {sec.name}
                      </MenuItem>
                    ))}
                  </CustomTextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    required
                    label='Enter Your Admission Number'
                    value={formData.admissionNumber}
                    onChange={e => setFormData({ ...formData, admissionNumber: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    required
                    label='Enter Your Admission Date'
                    type='date'
                    value={formData.admissionDate}
                    onChange={e => setFormData({ ...formData, admissionDate: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Enter you Roll Number'
                    value={formData.rollNumber}
                    onChange={e => setFormData({ ...formData, rollNumber: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Group'
                    value={formData.group}
                    onChange={e => setFormData({ ...formData, group: e.target.value })}
                  />
                </Grid>
              </Grid>

              <CardActions>
                <Button
                  type='button'
                  variant='contained'
                  sx={{ marginLeft: 'auto' }}
                  onClick={() => setValue('personal_&_contact')}
                >
                  Next
                </Button>

                <Button type='reset' variant='tonal' color='secondary' onClick={() => handleReset()}>
                  Reset
                </Button>
              </CardActions>
            </TabPanel>
            <TabPanel value='personal_&_contact'>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    required
                    label='Enter Your Full Name'
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    select
                    fullWidth
                    required
                    label='Select Your Gender'
                    value={formData.gender}

                    onChange={e => setFormData({ ...formData, gender: e.target.value })}
                  >
                    <MenuItem value=''>Select Gender</MenuItem>
                    <MenuItem value='MALE'>Male</MenuItem>
                    <MenuItem value='FEMALE'>FEMALE</MenuItem>
                    <MenuItem value='OTHER'>OTHER</MenuItem>
                  </CustomTextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    required
                    label='Select Your Date of Birth'
                    type='date'
                    value={formData.DOB}
                    onChange={e => setFormData({ ...formData, DOB: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    select
                    fullWidth

                    label='Select Your Religion'
                    placeholder='Select You Religion'
                    value={formData.religion ?? ''}
                    onChange={e => setFormData({ ...formData, religion: e.target.value })}
                  >
                    <MenuItem value='HINDUISM'>HINDUISM</MenuItem>
                    <MenuItem value='ISLAM'>ISLAM</MenuItem>
                    <MenuItem value='SIKHISM'>SIKHISM</MenuItem>
                    <MenuItem value='BUDDHISM'>BUDDHISM</MenuItem>
                    <MenuItem value='PROTESTANTISM'>PROTESTANTISM</MenuItem>
                    <MenuItem value='OTHERS'>OTHERS</MenuItem>
                  </CustomTextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Enter Your Caste'
                    value={formData.caste}
                    onChange={e => setFormData({ ...formData, caste: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Photo'
                    type='file'
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ accept: 'image/*,.pdf' }}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFormData({ ...formData, studentPhoto: e.target.files?.[0] ?? null })
                    }
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
                    fullWidth
                    label='Phone Number'
                    value={formData.phoneNumber}
                    onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Current Address'
                    value={formData.currentAddress}
                    onChange={e => setFormData({ ...formData, currentAddress: e.target.value })}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  fullWidth
                  label='permanent Address'
                  value={formData.permanentAddress}
                  onChange={e => setFormData({ ...formData, permanentAddress: e.target.value })}
                />
              </Grid>
              <CardActions>
                <Button
                  type='button'
                  variant='contained'
                  sx={{ marginLeft: 'auto' }}
                  onClick={() => setValue('medical_&_documents')}
                >
                  Next
                </Button>

                <Button type='reset' variant='tonal' color='secondary' onClick={() => handleReset()}>
                  Reset
                </Button>
              </CardActions>
            </TabPanel>
            <TabPanel value='medical_&_documents'>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Blood Group'

                    value={formData.bloodGroup}
                    onChange={e => setFormData({ ...formData, bloodGroup: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Category'
                    placeholder='Enter your category'
                    value={formData.category}
                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='height'
                    placeholder='Enter Your actual Height'
                    value={formData.height}
                    onChange={e => setFormData({ ...formData, height: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='weight'
                    placeholder='Enter you actual weight'
                    value={formData.weight}
                    onChange={e => setFormData({ ...formData, weight: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='NID'
                    type='file'
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ accept: 'image/*,.pdf' }}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFormData({ ...formData, NID: e.target.files?.[0] ?? null })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Nid Number'
                    value={formData.nidNumber}
                    onChange={e => setFormData({ ...formData, nidNumber: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Enter Your Birth Certificate Number'
                    value={formData.birthCertificateNumber}
                    onChange={e => setFormData({ ...formData, birthCertificateNumber: e.target.value })}
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
                      setFormData({ ...formData, citizenship: file })
                    }}
                  />
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Citizenship'
                    type='file'

                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFormData({ ...formData, citizenship: e.target.files?.[0] ?? null })
                    }
                  />
                </Grid> */}
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Citizenship Number'
                    value={formData.citizenshipNumber}
                    onChange={e => setFormData({ ...formData, citizenshipNumber: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='additional Notes'
                    value={formData.additionalNotes}
                    onChange={e => setFormData({ ...formData, additionalNotes: e.target.value })}
                  />
                </Grid>
              </Grid>
              <CardActions>
                <Button
                  type='button'
                  variant='contained'
                  sx={{ marginLeft: 'auto' }}
                  onClick={() => setValue('parents')}
                >
                  Next
                </Button>
                <Button type='reset' variant='tonal' color='secondary' onClick={() => handleReset()}>
                  Reset
                </Button>
              </CardActions>
            </TabPanel>
            <TabPanel value='parents'>
              {!formData.parentId ? (
                <Parents_and_guardian_Info onParentSaved={id => setFormData(prev => ({ ...prev, parentId: id }))} />
              ) : (
                <div>
                  <TableContainer component={Paper}>
                    <Table sx={{ maxWidth: '100%' }} aria-label='customized table'>
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>Guardian Name</StyledTableCell>
                          <StyledTableCell>Guardian Email</StyledTableCell>
                          <StyledTableCell>Guardian Phone</StyledTableCell>
                          <StyledTableCell>Guardian Occupation</StyledTableCell>
                          <StyledTableCell>Guardian Address</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {(parents ?? [])
                          .filter((p: ParentsTypes) => p.id === formData.parentId)
                          .map((parent: ParentsTypes) => (
                            <TableRow key={parent.id}>
                              <StyledTableCell component='th' scope='row'>
                                {parent.guardianName}
                              </StyledTableCell>
                              <StyledTableCell>{parent.guardianEmail}</StyledTableCell>
                              <StyledTableCell>{parent.guardianPhone}</StyledTableCell>
                              <StyledTableCell>{parent.guardianOccupation}</StyledTableCell>
                              <StyledTableCell>{parent.guardianAddress}</StyledTableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              )}

              <CardActions>
                <Button
                  type='button'
                  variant='contained'
                  sx={{ marginLeft: 'auto' }}
                  onClick={() => setValue('other_info')}
                >
                  Next
                </Button>
                <Button type='reset' variant='tonal' color='secondary' onClick={() => handleReset()}>
                  Reset
                </Button>
              </CardActions>
            </TabPanel>
            <TabPanel value='other_info'>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='bank Name'
                    value={formData.bankName}
                    onChange={e => setFormData({ ...formData, bankName: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='bank Account Number'
                    value={formData.bankAccountNumber}
                    onChange={e => setFormData({ ...formData, bankAccountNumber: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='IFSC code'
                    value={formData.IFSCcode}
                    onChange={e => setFormData({ ...formData, IFSCcode: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Previous School Details'
                    value={formData.previousSchoolDetails}
                    onChange={e => setFormData({ ...formData, previousSchoolDetails: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='RouteList'
                    value={formData.RouteList}
                    onChange={e => setFormData({ ...formData, RouteList: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='vehicleNumber'
                    value={formData.vehicleNumber}
                    onChange={e => setFormData({ ...formData, vehicleNumber: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='dormitoryName'
                    value={formData.dormitoryName}
                    onChange={e => setFormData({ ...formData, dormitoryName: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='roomNumber'
                    value={formData.roomNumber}
                    onChange={e => setFormData({ ...formData, roomNumber: e.target.value })}
                  />
                </Grid>
              </Grid>
            </TabPanel>
          </CardContent>

          <Divider />
          <CardActions sx={{ display: value === 'other_info' ? 'flex' : 'none' }}>
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

export default AddStudent
