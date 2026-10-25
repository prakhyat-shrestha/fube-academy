'use client'
import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import CustomTextField from '@/@core/components/mui/TextField'
import Typography from '@mui/material/Typography'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import { TextField, InputAdornment, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import ButtonGroup from '@mui/material/ButtonGroup'
import { useRef } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import { createTheme } from '@mui/material/styles'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useState } from 'react'
import { useSectionStore } from '@/stores/sectionStore'
import { SectionTypes } from '@/types/section'
import { useAcademicYearStore } from '@/stores/academicYearStore'

const SectionLayout = () => {
  const textFieldRef = useRef<HTMLInputElement>(null)
  //const [academicYearId, setAcademicYearId] = useState<number>(1)
  const { selectedAcademicYearId } = useAcademicYearStore()

  const [editingId, setEditingId] = useState<number | null>(null)
  const { addSection, listOfSection, updateSection, deleteSection, isLoading, section, pagination } = useSectionStore()

  const [formData, setFormData] = useState<Partial<SectionTypes>>({})

  const { page = 1, limit, total, totalPages } = pagination

  const startEntry = total === 0 ? 0 : (page - 1) * limit
  const endEntry = Math.min(page * limit, total)
  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || newPage === page) return
    listOfSection(newPage)
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

  //getting section list
  React.useEffect(() => {
    listOfSection(page, 10)
  }, [listOfSection])

  const resetForm = () => {
    setEditingId(null)
    setFormData({})
  }

  const handleSection = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!formData.name || !selectedAcademicYearId) {
      alert('Please select name, academicYear')
      return
    }
    formData.academicYearId = selectedAcademicYearId
    if (editingId !== null) {
      const res = await updateSection(editingId, formData)
      if (res?.success) {
        resetForm()
      }
    } else {
      const res = await addSection(formData)
    }
    resetForm()
  }

  const handleEdit = async (sec: SectionTypes) => {
    setEditingId(sec.id)
    setFormData({
      name: sec.name,
      activeStatus: sec.activeStatus
    })
  }

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this section?')) return
    await deleteSection(id)
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2'
      }
    }
  })
  return (
    <>
      <div className='flex '>
        <Typography variant='h6' component='h3'>
          Section
        </Typography>
        <nav style={{ marginLeft: '71%' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '25px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '25px' }}>
              Academics
            </Link>
            <span style={{ marginRight: '25px' }}>|</span>
            <Link href='#'>Section</Link>
          </Typography>
        </nav>
      </div>
      <div className='flex' style={{ display: 'flex' }}>
        {/* Add section first card */}
        <div className='section mt-4'>
          <Card sx={{ width: 280, height: 300 }}>
            <CardContent>
              <Typography variant='h6' component='h3'>
                {editingId !== null ? 'Edit Section' : 'Add Section'}
              </Typography>
              {/* <Typography variant='body2' component='div'>
                <CustomTextField
                  required
                  label='ACADEMIC YEAR Id'
                  value={academicYearId}
                  onChange={(e: any) => setAcademicYearId(Number(e.target.value))}
                  style={{ marginTop: 20 }}
                />
              </Typography> */}

              <Typography variant='body2' component='div'>
                <CustomTextField
                  required
                  label='NAME'
                  value={formData.name ?? ''}
                  onChange={(e: any) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  style={{ marginTop: 20 }}
                />
              </Typography>

              <FormControl style={{ marginTop: 20 }}>
                <FormLabel id='active-status'>ACTIVE STATUS</FormLabel>
                <RadioGroup row aria-labelledby='active-status' name='activeStatus'>
                  <FormControlLabel
                    label='Active'
                    control={
                      <Radio
                        checked={formData.activeStatus === true}

                        onChange={() => setFormData(prev => ({ ...prev, activeStatus: true }))}
                      />
                    }
                  />
                  <FormControlLabel
                    label='Inactive'
                    control={
                      <Radio
                        checked={formData.activeStatus === false}
                        onChange={() => setFormData(prev => ({ ...prev, activeStatus: false }))}
                      />
                    }
                  />
                </RadioGroup>
              </FormControl>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant='contained' onClick={handleSection} disabled={isLoading}>
                <CheckSharpIcon style={{ marginRight: 5 }} />
                {editingId !== null ? 'Update Section' : 'Save Section'}
              </Button>
              {editingId !== null && (
                <Button variant='outlined' color='secondary' onClick={resetForm}>
                  Cancel
                </Button>
              )}
            </CardActions>
          </Card>
        </div>

        {/* Section list 2nd card */}
        <div className='sectionList mt-4 mx-6' style={{ flex: 1 }}>
          <Card sx={{ width: '100%', height: 'calc(100vh - 155px)', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '16%' }}>
                  Section List
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
              <div style={{ marginTop: '20px', flex: 1, minHeight: 0, overflowY: 'auto' }}>
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
                          <span>Section</span>
                        </div>
                      </th>
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
                          <span>ActiveStatus</span>
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
                  <tbody className=''>
                    {(section ?? []).map((sec: SectionTypes) => (
                      <tr key={sec.id} style={{ borderBottom: '1px solid #ddd' }}>
                        <td style={{ paddingLeft: '4%' }}>{sec.name}</td>
                        <td style={{ paddingLeft: '4%' }}>{sec.activeStatus === true ? 'Active' : 'InActive'}</td>
                        <td style={{ padding: '8px' }}>
                          <Button
                            variant='outlined'
                            size='small'
                            onClick={() => handleEdit(sec)}
                            disabled={isLoading}
                            style={{ borderRadius: '20px' }}
                          >
                            EDIT <ArrowDownwardIcon />
                          </Button>
                          <Button
                            className='m-3 bg-red-300'
                            size='small'
                            onClick={() => handleDelete(sec.id)}
                            disabled={isLoading}
                            style={{ borderRadius: '20px' }}
                          >
                            DELETE <ArrowDownwardIcon />
                          </Button>
                        </td>
                      </tr>
                    ))}

                    {/* <tr style={{ borderBottom: '1px solid #ddd' }}>
                        <td style={{ paddingLeft: '4%' }}>C</td>
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

export default SectionLayout
