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
import { useAcademicYearStore } from '@/stores/academicYearStore'
import { AcademicYearTypes } from '@/types/academicYear'

const AcademicYearLayout = () => {
  const textFieldRef = useRef<HTMLInputElement>(null)
  const [year, setYear] = useState<string>('')
  const [title, setTitle] = useState('')
  const [startingDate, setStartingDate] = useState<string>('')
  const [endingDate, setEndingDate] = useState<string>('')
  const [editingId, setEditingId] = useState<number | null>(null)
  const { listOfAcademicYear, addAcademicYear, updateAcademicYear, deleteAcademicYear, academicYear, isLoading } =
    useAcademicYearStore()

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
    listOfAcademicYear()
  }, [listOfAcademicYear])

  const resetForm = () => {
    setEditingId(null)
    setYear('')
    setTitle('')
    setStartingDate('')
    setEndingDate('')
  }

  const handleAcademicYear = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (editingId !== null) {
      const res = await updateAcademicYear(editingId, year, title, startingDate, endingDate)
    } else {
      const res = await addAcademicYear(year, title, startingDate, endingDate)
    }
    resetForm()
  }

  const handleEdit = async (academic: AcademicYearTypes) => {
    setEditingId(academic.id)
    setYear(academic.year)
    setTitle(academic.title)
    setStartingDate(academic.startingDate)
    setEndingDate(academic.endingDate)
  }

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure to delete this academic Year.')) return
    await deleteAcademicYear(id)
  }

  return (
    <>
      <div className='flex '>
        <Typography variant='h6' component='h3'>
          Academic Year
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
                {editingId !== null ? 'Edit Academic Year' : 'Add Academic Year'}
              </Typography>
              <Typography variant='body2' component='div'>
                <CustomTextField
                  required
                  label=' Year'
                  value={year}
                  onChange={(e: any) => setYear(e.target.value)}
                  style={{ marginTop: 20 }}
                />
              </Typography>
              <Typography variant='body2' component='div'>
                <CustomTextField
                  required
                  label='Title'
                  value={title}
                  onChange={(e: any) => setTitle(e.target.value)}
                  style={{ marginTop: 20 }}
                />
              </Typography>
              <Typography variant='body2' component='div'>
                <CustomTextField
                  required
                  label='Starting Date'
                  type='Date'
                  value={startingDate}
                  onChange={(e: any) => setStartingDate(e.target.value)}
                  style={{ marginTop: 20 }}
                />
              </Typography>
              <Typography variant='body2' component='div'>
                <CustomTextField
                  required
                  label='Ending Date'
                  type='Date'
                  value={endingDate}
                  onChange={(e: any) => setEndingDate(e.target.value)}
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
              <Button variant='contained' onClick={handleAcademicYear} disabled={isLoading}>
                <CheckSharpIcon style={{ marginRight: 5 }} />
                {editingId !== null ? 'Update Academic Year' : 'Add Academic Year'}
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
        <div className=' mt-4 mx-6' style={{ flex: 1 }}>
          <Card sx={{ width: '102.65%', height: 370 }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '16%' }}>
                  Academic Year List
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
                      {/* <th
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
                      </th> */}
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
                          <span>Year </span>
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
                          <span>Title</span>
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
                          <span>Starting Date</span>
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
                          <span>Ending Date</span>
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
                      ></th> */}
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
                    {(academicYear ?? []).map((academic: AcademicYearTypes) => (
                      <tr key={academic.id} style={{ borderBottom: '1px solid #ddd' }}>
                        <td style={{ paddingLeft: '4%' }}>{academic.year}</td>
                        <td style={{ paddingLeft: '2%' }}> {academic.title}</td>
                        <td style={{ paddingLeft: '4%' }}>{academic.startingDate.split('T')[0]}</td>
                        <td style={{ paddingLeft: '4%' }}>{academic.endingDate.split('T')[0]}</td>

                        <td style={{ padding: '8px' }}>
                          <Button
                            variant='outlined'
                            size='small'
                            onClick={() => handleEdit(academic)}
                            disabled={isLoading}
                            style={{ borderRadius: '20px' }}
                          >
                            Edit <ArrowDownwardIcon />
                          </Button>
                          <Button
                            variant='outlined'
                            size='small'
                            onClick={() => handleDelete(academic.id)}
                            disabled={isLoading}
                            style={{ borderRadius: '20px', color: 'red-300' }}
                          >
                            Delete <ArrowDownwardIcon />
                          </Button>
                        </td>
                      </tr>
                    ))}
                    {/* <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ paddingLeft: '4%' }}>1</td>
                      <td style={{ paddingLeft: '2%' }}>Science and Technology</td>
                      <td style={{ paddingLeft: '4%' }}>Theory</td>
                      <td style={{ paddingLeft: '4%' }}>CASS</td>
                      <td style={{ paddingLeft: '4%' }}>5.00</td>
                      <td style={{ paddingLeft: '4%' }}>0.00</td>
                      <td style={{ padding: '8px' }}>
                        <Button variant='outlined' size='small' style={{ borderRadius: '20px' }}>
                          SELECT <ArrowDownwardIcon />
                        </Button>
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ paddingLeft: '4%' }}>2</td>
                      <td style={{ paddingLeft: '2%' }}>Social Science</td>
                      <td style={{ paddingLeft: '4%' }}>Theory</td>
                      <td style={{ paddingLeft: '4%' }}>CACS</td>
                      <td style={{ paddingLeft: '4%' }}>5.00</td>
                      <td style={{ paddingLeft: '4%' }}>0.00</td>
                      <td style={{ padding: '8px' }}>
                        <Button variant='outlined' size='small' style={{ borderRadius: '20px' }}>
                          SELECT <ArrowDownwardIcon />
                        </Button>
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ paddingLeft: '4%' }}>3</td>
                      <td style={{ paddingLeft: '2%' }}>English Literature</td>
                      <td style={{ paddingLeft: '4%' }}>Theory</td>
                      <td style={{ paddingLeft: '4%' }}>CACE</td>
                      <td style={{ paddingLeft: '4%' }}>5.00</td>
                      <td style={{ paddingLeft: '4%' }}>0.00</td>
                      <td style={{ padding: '8px' }}>
                        <Button variant='outlined' size='small' style={{ borderRadius: '20px' }}>
                          SELECT <ArrowDownwardIcon />
                        </Button>
                      </td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </CardContent>
            {/* Pagination */}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
              <Typography variant='body2' style={{ marginLeft: '16px' }}>
                Showing 1 to 3 of 3 entries
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
                  1
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

export default AcademicYearLayout
