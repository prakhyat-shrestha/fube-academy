'use client'
import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import CustomTextField from '@/@core/components/mui/TextField'
import Typography from '@mui/material/Typography'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import { TextField, InputAdornment, MenuItem } from '@mui/material'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import ButtonGroup from '@mui/material/ButtonGroup'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import { createTheme } from '@mui/material/styles'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import { useDepartmentStore } from '@/stores/departmentStore'
import { DepartmentTypes } from '@/types/department'

const initialForm: Partial<DepartmentTypes> = {
  title: '',
  activeStatus: true
}

const DepartmentLayout = () => {
  const textFieldRef = useRef<HTMLInputElement>(null)
  // const [activeStatus, setActiveStatus] = useState<boolean>(true)
  // const [title, setTitle] = useState<string>('')
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState<Partial<DepartmentTypes>>(initialForm)
  const { addDepartment, updateDepartment, deleteDepartment, listOfDepartment, isLoading, department, pagination } =
    useDepartmentStore()
  const { page, limit, total, totalPages } = pagination

  const startEntry = total === 0 ? 0 : (page - 1) * limit
  const endEntry = Math.min(page * limit, total)

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || newPage === page) return
    listOfDepartment(newPage)
  }

  const getPageNumber = () => {
    const windowSize = 5
    let start = Math.max(1, page - Math.floor(windowSize / 2))
    const end = Math.min(totalPages, start + windowSize - 1)
    start = Math.max(1, end - windowSize + 1)

    const pages = []
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
    return pages
  }

  const handleFocus = () => {
    if (textFieldRef.current) {
      textFieldRef.current.placeholder = ''
    }
  }

  useEffect(() => {
    listOfDepartment()
  }, [listOfDepartment])

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

  const resetForm = () => {
    // setTitle('')
    // setActiveStatus(true)
    setFormData(initialForm)
    setEditingId(null)
  }

  const handleDepartment = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (editingId !== null) {
      const res = await updateDepartment(editingId, formData)
    } else {
      const res = await addDepartment(formData)
    }
    resetForm()
  }

  const handleEdit = async (Department: DepartmentTypes) => {
    console.log('testing ::::', Department)
    setEditingId(Department.id)
    setFormData({
      title: Department.title,
      activeStatus: Department.activeStatus
    })
    // setTitle(Department.title)
    // setActiveStatus(Department.activeStatus)
  }

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this section?')) return
    await deleteDepartment(id)
  }

  return (
    <>
      <div className='flex '>
        <Typography variant='h6' component='h3'>
          Department
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
                {editingId !== null ? 'Edit Department' : 'Add Department'}
              </Typography>
              <Typography variant='body2' component='div'>
                <CustomTextField
                  select
                  required
                  fullWidth
                  label='ACTIVE STATUS'
                  value={formData.activeStatus ? 'true' : 'false'}
                  onChange={(e: any) => setFormData(prev => ({ ...prev, activeStatus: e.target.value === 'true' }))}
                  style={{ marginTop: 20 }}
                >
                  <MenuItem value='true'>Active</MenuItem>
                  <MenuItem value='false'>Inactive</MenuItem>
                </CustomTextField>
              </Typography>

              <Typography variant='body2' component='div'>
                <CustomTextField
                  required
                  label='TITLE'
                  value={formData.title}
                  onChange={(e: any) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  style={{ marginTop: 20 }}
                />
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant='contained' onClick={handleDepartment} disabled={isLoading}>
                <CheckSharpIcon style={{ marginRight: 5 }} />
                {editingId !== null ? 'Update Department' : 'Save Department'}
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
          <Card sx={{ width: '102.6%', height: 'calc(100vh - 100px)', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '16%' }}>
                  Department List
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
                <div style={{ maxHeight: '100%', overflowY: 'auto' }}>
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
                            <span>Designation</span>
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
                      {department?.map((depart: DepartmentTypes) => (
                        <tr key={depart.id} style={{ borderBottom: '1px solid #ddd' }}>
                          <td style={{ paddingLeft: '4%' }}>{depart.title}</td>
                          <td style={{ paddingLeft: '4%' }}>{depart.activeStatus ? 'Active' : 'InActive'}</td>
                          <td style={{ padding: '8px' }}>
                            <Button
                              variant='outlined'
                              size='small'
                              onClick={() => handleEdit(depart)}
                              disabled={isLoading}
                              style={{ borderRadius: '20px' }}
                            >
                              EDIT <ArrowDownwardIcon />
                            </Button>
                            <Button
                              className='m-3 bg-red-300'
                              size='small'
                              onClick={() => handleDelete(depart.id)}
                              disabled={isLoading}
                              style={{ borderRadius: '20px' }}
                            >
                              DELETE <ArrowDownwardIcon />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
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
                <Button
                  size='small'
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page >= totalPages || isLoading}
                  style={{ minWidth: 'auto', padding: '4px 8px', color: page >= totalPages ? undefined : 'black' }}
                >
                  <ArrowForwardIcon style={{ fontSize: '16px' }} />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default DepartmentLayout
