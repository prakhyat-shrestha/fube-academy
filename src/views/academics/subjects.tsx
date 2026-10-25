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
  RadioGroup
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
import { useSubjectStore } from '@/stores/subjectStore'
import { SubjectTypes } from '@/types/subjectTypes'

const SujectsLayout = () => {
  const textFieldRef = useRef<HTMLInputElement>(null)
  // const academicYearId = 1
  // const [name, setName] = useState('')
  // const [subjectType, setSubjectType] = useState('')
  // const [code, setCode] = useState('')
  // const [creditHour, setCreditHour] = useState<Number>(0)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState<Partial<SubjectTypes>>({})

  const { listOfSubject, addSubject, updateSubject, deleteSubject, subject, isLoading, pagination } = useSubjectStore()
  const { page, limit, total, totalPages } = pagination

  const startEntry = total === 0 ? 0 : (page - 1) * limit + 1
  const endEntry = Math.min(page * limit, total)

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || newPage === page) return
    listOfSubject(newPage, 10)
  }

  const getPageNumber = () => {
    const windowSize = 5
    let start = Math.max(1, page - Math.floor(windowSize / 2))
    const end = Math.min(totalPages, start + windowSize - 1)
    start = Math.max(1, end - windowSize + 1)
    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  }
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
    const res = listOfSubject()
  }, [listOfSubject])

  const resetForm = () => {
    setEditingId(null)
    setFormData({
      name: '',
      subjectType: 'Theory',
      code: '',
      creditHour: undefined
    })
  }

  const handleSubject = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (editingId !== null) {
      const res = await updateSubject(editingId, formData)
    } else {
      const res = await addSubject(formData)
    }
    resetForm()
  }

  const handleEdit = async (sub: SubjectTypes) => {
    setEditingId(sub.id)
    setFormData({
      name: sub.name,
      subjectType: sub.subjectType,
      code: sub.code,
      creditHour: sub.creditHour
    })
  }

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure to delete this subject from our database.')) return
    await deleteSubject(id)
  }

  return (
    <>
      <div className='flex '>
        <Typography variant='h6' component='h3'>
          Subject
        </Typography>
        <nav style={{ marginLeft: '70%' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '25px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '25px' }}>
              Academics
            </Link>
            <span style={{ marginRight: '25px' }}>|</span>
            <Link href='#'>Subject</Link>
          </Typography>
        </nav>
      </div>
      <div className='flex' style={{ display: 'flex' }}>
        {/* Add subject first card */}
        <div className='subject mt-4'>
          <Card sx={{ width: 300, height: 490 }}>
            <CardContent>
              <Typography variant='h6' component='h3'>
                {editingId !== null ? 'Update Subject' : 'Add Subject'}
              </Typography>
              <Typography variant='body2' component='div'>
                <CustomTextField
                  required
                  label=' SUBJECT NAME'
                  value={formData.name}
                  onChange={(e: any) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  style={{ marginTop: 20 }}
                />
              </Typography>
              <div style={{ marginTop: '20px' }}>
                <RadioGroup
                  row
                  aria-label='sizes'
                  name='sizes'
                  value={formData.subjectType ?? 'Theory'}
                  onChange={e => setFormData(prev => ({ ...prev, subjectType: e.target.value }))}
                >
                  <FormControlLabel
                    value='Theory'
                    onChange={(e: any) => setFormData(prev => ({ ...prev, subjectType: e.target.value }))}
                    control={<Radio />}
                    label='Theory'
                  />
                  <FormControlLabel
                    value='Practical'
                    onChange={(e: any) => setFormData(prev => ({ ...prev, subjectType: e.target.value }))}
                    control={<Radio />}
                    label='Practical'
                  />
                </RadioGroup>
              </div>
              <Typography variant='body2' component='div'>
                <CustomTextField
                  required
                  label='SUBJECT CODE'
                  value={formData.code}
                  onChange={(e: any) => setFormData(prev => ({ ...prev, code: e.target.value }))}
                  style={{ marginTop: 20 }}
                />
              </Typography>
              <Typography variant='body2' component='div'>
                <CustomTextField
                  required
                  label='CREDIT HOUR'
                  // type=''
                  value={formData.creditHour}
                  onChange={(e: any) => setFormData(prev => ({ ...prev, creditHour: Number(e.target.value) }))}
                  style={{ marginTop: 20 }}
                />
              </Typography>
              {/* <div style={{ marginTop: '20px' }}>
                <span>DOES THIS SUBJECT HAS THEME?</span>
                <RadioGroup row aria-label='sizes' name='sizes' defaultValue='yes'>
                  <FormControlLabel value='yes' control={<Radio />} label='Yes' />
                  <FormControlLabel value='no' control={<Radio />} label='No' />
                </RadioGroup>
              </div> */}
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant='contained' onClick={handleSubject} disabled={isLoading}>
                <CheckSharpIcon style={{ marginRight: 5 }} />
                {editingId !== null ? 'Update Subject' : 'Add New Subject'}
              </Button>
              {editingId !== null && (
                <Button variant='contained' onClick={resetForm}>
                  Cancel
                </Button>
              )}
            </CardActions>
          </Card>
        </div>

        {/* Class list 2nd card */}
        <div className='subjectsList mt-4 mx-6' style={{ flex: 1 }}>
          <Card sx={{ width: '102.65%', height: 470, overflowY: 'auto' }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '16%' }}>
                  Subject List
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
                          <span>SL</span>
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
                          <span>Subject </span>
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
                          <span>Subject Type</span>
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
                          <span>Subject Code</span>
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
                          <span>Credit Hour</span>
                        </div>
                      </th>
                      {/* <th
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
                          <span>TTP</span>
                        </div>
                      </th> */}
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
                    {subject &&
                      (subject ?? []).map((sub: SubjectTypes, index: number) => (
                        <tr key={sub.id} style={{ borderBottom: '1px solid #ddd' }}>
                          <td style={{ paddingLeft: '4%' }}>{index + 1}</td>
                          <td style={{ paddingLeft: '2%' }}>{sub.name}</td>
                          <td style={{ paddingLeft: '4%' }}>{sub.subjectType}</td>
                          <td style={{ paddingLeft: '4%' }}>{sub.code}</td>
                          <td style={{ paddingLeft: '4%' }}>{Number(sub.creditHour)}</td>
                          {/* <td style={{ paddingLeft: '4%' }}>0.00</td> */}
                          <td style={{ padding: '8px' }}>
                            <Button
                              variant='outlined'
                              size='small'
                              onClick={() => handleEdit(sub)}
                              disabled={isLoading}
                              style={{ borderRadius: '20px' }}
                            >
                              Edit <ArrowDownwardIcon />
                            </Button>
                            <Button
                              variant='outlined'
                              size='small'
                              onClick={() => handleDelete(sub.id)}
                              style={{ borderRadius: '20px', color: 'red', borderColor: 'red', margin: '10px' }}
                            >
                              Delete <ArrowDownwardIcon />
                            </Button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
            {/* Pagination */}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
              <Typography variant='body2' style={{ marginLeft: '16px' }}>
                Showing {startEntry} to {endEntry} of {total} entries
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
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page <= 1 || isLoading}
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
                {getPageNumber().map(p => (
                  <Button
                    key={p}
                    size='small'
                    variant={p === page ? 'contained' : 'text'}
                    onClick={() => handlePageChange(p)}
                    disabled={isLoading}
                    style={{ minWidth: '32px', padding: '4px 8px' }}
                  >
                    {p}
                  </Button>
                ))}
                {/* <Typography
                  variant='body2'
                  sx={{
                    color: 'white',
                    padding: '4px 16px',
                    borderRadius: '4px',
                    background: theme.palette.primary.main,
                    cursor: 'pointer'
                  }}
                >
                  1
                </Typography> */}
                <Button
                  size='small'
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page >= totalPages || isLoading}
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

export default SujectsLayout
