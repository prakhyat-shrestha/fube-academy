'use client'
import * as React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  InputAdornment,
  ButtonGroup,
  createTheme,
  FormControlLabel,
  Radio,
  RadioGroup,
  MenuItem
} from '@mui/material'
import CustomTextField from '@/@core/components/mui/TextField'
import Typography from '@mui/material/Typography'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useClassStore } from '@/stores/classStore'
import { useAssignClassTeacherStore } from '@/stores/assignClassTeacherStore'
import { AssignClassTeacherTypes } from '@/types/assignClassTeacher'
import { ClassTypes, SecTypes } from '@/types/class'
import { useStaffStore } from '@/stores/staffStore'
import { useDesignationStore } from '@/stores/designationStore'
import { DesignationTypes } from '@/types/designation'
import { staffTypes } from '@/types/staff'
import { red } from '@mui/material/colors'

const initialForm: Partial<AssignClassTeacherTypes> = {
  classSectionId: undefined,
  staffId: undefined
}

const AssignClassTeacherLayout = () => {
  const textFieldRef = useRef<HTMLInputElement>(null)
  const { listOfClass, classes } = useClassStore()
  const {
    listOfAssignClassTeacher,
    updateAssignClassTeacher,
    deleteAssignClassTeacher,
    assignClassTeacher,
    addAssignClassTeacher,
    isLoading,
    pagination
  } = useAssignClassTeacherStore()
  const { listOfStaff, Staff } = useStaffStore()
  const { listOfDesignation, designation } = useDesignationStore()
  const [formData, setFormData] = useState<Partial<AssignClassTeacherTypes>>(initialForm)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [classId, setClassId] = useState<number | string>('selectClass')
  // const [sectionId, setSectionId] = useState<number | string>('selectSection')
  const handleFocus = () => {
    if (textFieldRef.current) {
      textFieldRef.current.placeholder = ''
    }
  }

  const handleBlur = () => {
    if (textFieldRef.current && textFieldRef.current.value === '') {
      textFieldRef.current.placeholder = 'SEARCH'
    }
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2'
      }
    }
  })
  useEffect(() => {
    listOfClass()
    listOfAssignClassTeacher()
    listOfStaff()
    listOfDesignation()
  }, [listOfClass, listOfAssignClassTeacher, listOfStaff, listOfDesignation])

  const resetForm = () => {
    setFormData(initialForm)
    setEditingId(null)
    setClassId('selectClass')
    // setSectionId('selectSection')
  }
  //finding designationId whose designation is teacher from designation
  const DesignationTeacherId = (designation ?? []).find(
    (desig: DesignationTypes) => desig.title?.trim().toUpperCase() === 'TEACHER'
  )?.id

  //finding list of staff whose designation is teacher i.e matched with designationId
  const TeacherList = (Staff ?? []).filter((staff: staffTypes) => staff.designationId === DesignationTeacherId)

  //finding list of section from the selected classId
  const sections: SecTypes[] = (classes ?? []).find((cls: ClassTypes) => cls.id === classId)?.sections ?? []

  const handleClassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value
    setClassId(v === 'selectClass' ? 'selectClass' : Number(v))
    // setSectionId('selectSection')
    setFormData(prev => ({ ...prev, classSectionId: undefined }))
  }

  const handleSectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setSectionId(val || 'selectSection')
    setFormData(prev => ({ ...prev, classSectionId: Number(e.target.value) || undefined }))
  }

  const handleTeacherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, staffId: Number(e.target.value) || undefined }))
  }

  const handleAssignClassTeacher = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // if (!formData.classSectionId || !formData.staffId) {
    //   alert('Please select class, section and teacher')
    //   return
    // }

    if (editingId !== null) {
      await updateAssignClassTeacher(editingId, formData)
    } else {
      await addAssignClassTeacher(formData)
    }
    resetForm()
  }

  const handleEdit = async (act: AssignClassTeacherTypes) => {
    setEditingId(act.id)
    setClassId(act.classSection.class.id)
    // setSectionId(act.classSectionId)
    setFormData({
      classSectionId: act.classSectionId,
      staffId: act.staffId
    })
  }

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this Assigned Class Teacher. ')) return
    await deleteAssignClassTeacher(id)
  }

  return (
    <>
      <div className='flex '>
        <Typography variant='h6' component='h3'>
          Assign Class Teacher
        </Typography>
        <nav style={{ marginLeft: '55%' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '25px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '25px' }}>
              Academics
            </Link>
            <span style={{ marginRight: '25px' }}>|</span>
            <Link href='#'>Assign Class Teacher</Link>
          </Typography>
        </nav>
      </div>
      <div className='flex' style={{ display: 'flex' }}>
        {/* Add assign class teacher first card */}
        <div className='classTeacher mt-4'>
          <Card sx={{ width: 300, height: 500 }}>
            <CardContent>
              <Typography variant='h6' component='h3'>
                Assign Class Teacher
              </Typography>

              <CustomTextField
                select
                fullWidth
                value={classId}
                onChange={handleClassChange}
                label='CLASS*'
                id='class-select'
                style={{ margin: '20px 40px 0 0 ', width: '100%' }}
              >
                <MenuItem value='selectClass'>
                  <span style={{ fontStyle: 'normal' }}>Select Class *</span>
                </MenuItem>
                {(classes ?? []).map((cls: ClassTypes) => (
                  <MenuItem value={cls.id} key={cls.id}>
                    {cls.name}
                  </MenuItem>
                ))}
              </CustomTextField>
              <CustomTextField
                select
                fullWidth
                value={formData.classSectionId ?? 'selectSection'}
                onChange={handleSectionChange}
                label='SECTION*'
                id='section-select'
                disabled={classId === 'selectClass'}
                style={{ margin: '20px 40px 0 0 ', width: '100%' }}
              >
                {/* <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} /> */}
                <MenuItem value='selectSection'>
                  <span style={{ fontStyle: 'normal' }}>Select Section *</span>
                </MenuItem>
                {sections.map((sec: SecTypes) => (
                  <MenuItem value={sec.classSectionId} key={sec.id}>
                    {sec.name}
                  </MenuItem>
                ))}
              </CustomTextField>
              <CustomTextField
                select
                fullWidth
                value={formData.staffId ?? ''}
                onChange={handleTeacherChange}
                label='Teacher*'
                id='teacher-select'
                // disabled={}
                style={{ margin: '20px 40px 0 0 ', width: '100%' }}
              >
                {/* <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} /> */}
                <MenuItem value=''>
                  <span style={{ fontStyle: 'normal' }}>Select Teacher *</span>
                </MenuItem>
                {(TeacherList ?? []).map((t: staffTypes) => (
                  <MenuItem value={t.id} key={t.id}>
                    {t.name}
                  </MenuItem>
                ))}
              </CustomTextField>
              {/* <div style={{ marginTop: '20px' }}>
                <span>TEACHER *</span>
                <RadioGroup
                  row
                  aria-label='sizes'
                  name='sizes'
                  value={formData.staffId ?? ''}
                  onChange={e => setFormData(prev => ({ ...prev, staffId: Number(e.target.value) }))}
                  style={{ flexDirection: 'column' }}
                >
                  {(TeacherList ?? []).map((t: staffTypes) => (
                    <FormControlLabel
                      key={t.id}
                      value={t.id}
                      onChange={() => handleTeacherChange(t.id)}
                      control={<Radio />}
                      label={t.name}
                    />
                  ))}
                </RadioGroup>
              </div> */}
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant='contained' onClick={handleAssignClassTeacher} disabled={isLoading}>
                <CheckSharpIcon style={{ marginRight: 5 }} />
                {editingId !== null ? 'Update class Teacher' : 'Save Class Teacher'}
              </Button>
              {editingId !== null && (
                <Button variant='outlined' color='secondary' onClick={resetForm}>
                  Cancel
                </Button>
              )}
            </CardActions>
          </Card>
        </div>

        {/* Assign Class Teacher 2nd card */}
        <div className='classTeacherList mt-4 mx-6' style={{ flex: 1 }}>
          <Card sx={{ width: '102.65%', height: 400, overflowY: 'auto' }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '10%' }}>
                  Class Teacher List
                </Typography>
                <div style={{ flexGrow: 1 }}>
                  <TextField
                    id='standard-search'
                    variant='standard'
                    placeholder='SEARCH'
                    inputRef={textFieldRef}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <SearchSharpIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <ButtonGroup
                    variant='outlined'
                    aria-label='Basic button group'
                    sx={{
                      '& .MuiButton-root': {
                        fontSize: '1.2rem',
                        padding: '4px 8px',
                        backgroundColor: 'transparent',
                        borderColor: 'currentColor',
                        color: 'currentColor',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 0, 0, 0.08)',
                          borderColor: 'currentColor'
                        },
                        boxShadow: 'none'
                      }
                    }}
                  >
                    <Button title='Copy Table'>
                      <Icon icon='material-symbols:file-copy-outline-sharp' />
                    </Button>
                    <Button title='Export to Excel'>
                      <Icon icon='mdi:file-excel-outline' />
                    </Button>
                    <Button title='Export to CSV'>
                      <Icon icon='mdi:file-document-outline' />
                    </Button>
                    <Button title='Export to PDF'>
                      <Icon icon='mdi:file-pdf-outline' />
                    </Button>
                    <Button title='Print'>
                      <Icon icon='fa:print' style={{ fontSize: '1rem' }} />
                    </Button>
                    <Button title='Action'>
                      <Icon
                        icon='mdi:table'
                        style={{
                          fontSize: '1.3rem'
                        }}
                      />
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
              {/* Table */}
              <div style={{ marginTop: '20px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      <th
                        style={{
                          padding: '8px',
                          textAlign: 'left',
                          backgroundColor: 'lightgray',
                          borderRadius: '5px 0 0 5px',
                          position: 'relative'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                          <span>Class</span>
                        </div>
                      </th>
                      <th
                        style={{
                          padding: '8px',
                          textAlign: 'left',
                          backgroundColor: 'lightgray',
                          borderRadius: '0',
                          position: 'relative'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                          <span>Section</span>
                        </div>
                      </th>
                      <th
                        style={{
                          padding: '8px',
                          textAlign: 'left',
                          backgroundColor: 'lightgray',
                          borderRadius: '0',
                          position: 'relative'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                          <span>Teacher</span>
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
                          <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                          <span>Action</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {(assignClassTeacher ?? []).length === 0 ? (
                      <tr>
                        <td colSpan={4} style={{ padding: 8, textAlign: 'center' }}>
                          No Data available in Table
                        </td>
                      </tr>
                    ) : (
                      assignClassTeacher.map((act: AssignClassTeacherTypes) => (
                        <tr style={{ borderBottom: '1px solid #ddd' }} key={act.id}>
                          <td style={{ paddingLeft: '4%' }}>{act.classSection.class.name}</td>
                          <td style={{ padding: '8px' }}>{act.classSection.section.name}</td>
                          <td style={{ padding: '8px' }}>{act.staff.name}</td>
                          <td style={{ padding: '8px' }}>
                            <Button size='small' onClick={() => handleEdit(act)}>
                              Edit
                            </Button>
                            <Button size='small' className='bg-red-300' onClick={() => handleDelete(act.id)}>
                              Delete
                            </Button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
            {/* Pagination */}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
              <Typography variant='body2' style={{ marginLeft: '16px' }}>
                Showing 0 to 0 of 0 entries
              </Typography>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 'auto',
                  cursor: 'pointer'
                }}
              >
                <Button
                  size='small'
                  style={{
                    color: 'black',
                    marginRight: '10px',
                    padding: '4px 8px',
                    width: '30px',
                    minWidth: 'auto',
                    border: 'none'
                  }}
                >
                  <ArrowBackIcon style={{ fontSize: '16px' }} />
                </Button>
                <Typography
                  variant='body2'
                  sx={{
                    color: 'white',
                    padding: '4px 16px',
                    borderRadius: '4px',
                    background: theme.palette.primary.main,
                    cursor: 'pointer'
                  }}
                >
                  0
                </Typography>
                <Button
                  size='small'
                  style={{
                    color: 'black',
                    marginLeft: '10px',
                    padding: '4px 8px',
                    width: '30px',
                    minWidth: 'auto',
                    border: 'none'
                  }}
                >
                  <ArrowForwardIcon style={{ transform: 'scale(0.8)' }} />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default AssignClassTeacherLayout
