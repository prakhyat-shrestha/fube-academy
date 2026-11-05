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
import { useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useVisitorStore } from '@/stores/visitorStore'
import { VisitorTypes } from '@/types/visitors'

const ID_TYPES: VisitorTypes['typeOfId'][] = ['CITIZENSHIP', 'NID', 'PASSPORT', 'OTHER']

const TABLE_HEADERS = ['SL', 'Name', 'No Of Person', 'Phone', 'Purpose', 'Date', 'In Time', 'Out Time', 'Actions']

// today's date in local time as YYYY-MM-DD (toISOString would use UTC and can show the wrong day in Nepal)
const getToday = () => {
  const d = new Date()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${month}-${day}`
}

// "2026-11-02" + "10:00" -> "2026-11-02T10:00:00.000Z"
const combineDateTime = (date: string, time: string) => (time ? `${date}T${time}:00.000Z` : '')

// "2026-11-02T10:00:00.000Z" -> "10:00" (also accepts "10:00")
const formatTime = (value?: string) => {
  if (!value) return ''
  return value.includes('T') ? value.split('T')[1].slice(0, 5) : value
}

const VisitorLayout = () => {
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState<Partial<VisitorTypes>>({ Date: getToday() })
  const [searchText, setSearchText] = useState('')

  const { addVisitor, listOfVisitor, updateVisitor, deleteVisitor, isLoading, visitor, pagination } = useVisitorStore()

  const { page = 1, limit, total, totalPages } = pagination

  const startEntry = total === 0 ? 0 : (page - 1) * limit + 1
  const endEntry = Math.min(page * limit, total)

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || newPage === page) return
    listOfVisitor(newPage)
  }

  const getPageNumber = () => {
    const windowSize = 5
    let start = Math.max(1, page - Math.floor(windowSize / 2))
    const end = Math.min(totalPages, start + windowSize - 1)
    start = Math.max(1, end - windowSize + 1)
    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  }

  // getting visitor list
  React.useEffect(() => {
    listOfVisitor(page, 10)
  }, [listOfVisitor])

  const resetForm = () => {
    setEditingId(null)
    setFormData({})
  }

  const handleVisitor = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (
      !formData.purpose ||
      !formData.name ||
      !formData.phone ||
      !formData.typeOfId ||
      !formData.idNumber ||
      !formData.NoOfPerson ||
      !formData.Date ||
      !formData.inTime ||
      !formData.OutTime
    ) {
      alert('Please fill all the required fields')
      return
    }

    if (editingId !== null) {
      await updateVisitor(editingId, formData)
    } else {
      await addVisitor(formData)
    }
    resetForm()
  }

  const handleEdit = (vis: VisitorTypes) => {
    setEditingId(vis.id)
    setFormData({
      purpose: vis.purpose,
      name: vis.name,
      phone: vis.phone,
      typeOfId: vis.typeOfId,
      idNumber: vis.idNumber,
      NoOfPerson: vis.NoOfPerson,
      Date: vis.Date?.slice(0, 10), // "2026-11-02T00:00:00.000Z" -> "2026-11-02"
      inTime: vis.inTime,
      OutTime: vis.OutTime
    })
  }

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this visitor?')) return
    await deleteVisitor(id)
  }

  // // client-side filter on the currently loaded page
  // const filteredVisitors = (visitor ?? []).filter((v: VisitorTypes) => {
  //   const q = searchText.trim().toLowerCase()
  //   if (!q) return true
  //   return (
  //     v.name?.toLowerCase().includes(q) || v.phone?.toLowerCase().includes(q) || v.purpose?.toLowerCase().includes(q)
  //   )
  // })

  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h4'>
          Visitor Book
        </Typography>
        <nav style={{ marginLeft: 'auto' }}>
          <Typography variant='h6' component='h4' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '25px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '25px' }}>
              Admin Section
            </Link>
            <span style={{ marginRight: '25px' }}>|</span>
            <Link href='#'>Visitor Book</Link>
          </Typography>
        </nav>
      </div>
      <div className='flex' style={{ display: 'flex' }}>
        {/* Add visitor first card */}
        <div className='visitorBook mt-4'>
          <Card sx={{ width: 280 }}>
            <CardContent>
              <Typography variant='h6' component='h4'>
                {editingId !== null ? 'Edit Visitor' : 'Add Visitor'}
              </Typography>
              <CustomTextField
                label='PURPOSE'
                placeholder='Purpose'
                required
                value={formData.purpose ?? ''}
                onChange={(e: any) => setFormData(prev => ({ ...prev, purpose: e.target.value }))}
                style={{ width: '100%', marginTop: '20px' }}
              />
              <CustomTextField
                required
                label='NAME'
                placeholder='Name'
                value={formData.name ?? ''}
                onChange={(e: any) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                style={{ marginTop: '20px', width: '100%' }}
              />
              <CustomTextField
                required
                label='PHONE'
                placeholder='Phone'
                value={formData.phone ?? ''}
                onChange={(e: any) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                style={{ width: '100%', marginTop: '20px' }}
              />
              <CustomTextField
                select
                required
                label='ID TYPE'
                value={formData.typeOfId ?? ''}
                onChange={(e: any) => setFormData(prev => ({ ...prev, typeOfId: e.target.value }))}
                style={{ marginTop: '20px', width: '100%' }}
              >
                {ID_TYPES.map(type => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </CustomTextField>
              <CustomTextField
                label='ID NUMBER'
                placeholder='ID Number'
                required
                value={formData.idNumber ?? ''}
                onChange={(e: any) => setFormData(prev => ({ ...prev, idNumber: e.target.value }))}
                style={{ marginTop: '20px', width: '100%' }}
              />
              <CustomTextField
                label='NO OF PERSON'
                placeholder='No of Person'
                required
                value={formData.NoOfPerson ?? ''}
                onChange={(e: any) => setFormData(prev => ({ ...prev, NoOfPerson: e.target.value }))}
                style={{ marginTop: '20px', width: '100%' }}
              />
              <CustomTextField
                label='DATE'
                type='date'
                required
                value={formData.Date ?? ''}
                onChange={(e: any) => {
                  const date = e.target.value
                  setFormData(prev => ({
                    ...prev,
                    Date: date,
                    // keep the selected times in sync with the new date
                    inTime: combineDateTime(date, formatTime(prev.inTime)),
                    OutTime: combineDateTime(date, formatTime(prev.OutTime))
                  }))
                }}
                style={{ width: '100%', marginTop: '20px' }}
              />
              <CustomTextField
                label='IN TIME'
                required
                type='time'
                value={formatTime(formData.inTime)}
                onChange={(e: any) =>
                  setFormData(prev => ({
                    ...prev,
                    inTime: combineDateTime(prev.Date || getToday(), e.target.value)
                  }))
                }
                style={{ marginTop: '20px', width: '100%' }}
              />
              <CustomTextField
                label='OUT TIME'
                required
                type='time'
                value={formatTime(formData.OutTime)}
                onChange={(e: any) =>
                  setFormData(prev => ({
                    ...prev,
                    OutTime: combineDateTime(prev.Date || getToday(), e.target.value)
                  }))
                }
                style={{ marginTop: '20px', width: '100%' }}
              />
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant='contained' onClick={handleVisitor} disabled={isLoading}>
                <CheckSharpIcon style={{ marginRight: 5 }} />
                {editingId !== null ? 'Update' : 'Save'}
              </Button>
              {editingId !== null && (
                <Button variant='outlined' color='secondary' onClick={resetForm}>
                  Cancel
                </Button>
              )}
            </CardActions>
          </Card>
        </div>

        {/* 2nd card: visitor list */}
        <div className='visitorBookList mt-4 mx-6' style={{ flex: 1 }}>
          <Card sx={{ width: '100%', height: 'calc(100vh - 155px)', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '16%' }}>
                  Visitor Book List
                </Typography>
                <div style={{ flexGrow: 1 }}>
                  <TextField
                    id='standard-search'
                    variant='standard'
                    placeholder='SEARCH'
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
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
                      <Icon icon='mdi:table' style={{ fontSize: '1.3rem' }} />
                    </Button>
                  </ButtonGroup>
                </div>
              </div>

              {/* Table */}
              <div style={{ marginTop: '20px', flex: 1, minHeight: 0, overflowY: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      {TABLE_HEADERS.map((header, index) => (
                        <th
                          key={header}
                          style={{
                            padding: '8px',
                            textAlign: 'left',
                            backgroundColor: 'lightgray',
                            borderRadius:
                              index === 0
                                ? '5px 0 0 5px'
                                : index === TABLE_HEADERS.length - 1
                                  ? '0 5px 5px 0'
                                  : undefined
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                            <span>{header}</span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {visitor.map((vis: VisitorTypes, index: number) => (
                      <tr key={vis.id} style={{ borderBottom: '1px solid #ddd' }}>
                        <td style={{ padding: '8px' }}>{(page - 1) * limit + index + 1}</td>
                        <td style={{ padding: '8px' }}>{vis.name}</td>
                        <td style={{ padding: '8px' }}>{vis.NoOfPerson}</td>
                        <td style={{ padding: '8px' }}>{vis.phone}</td>
                        <td style={{ padding: '8px' }}>{vis.purpose}</td>
                        <td style={{ padding: '8px' }}>{vis.Date?.slice(0, 10)}</td>
                        <td style={{ padding: '8px' }}>{formatTime(vis.inTime)}</td>
                        <td style={{ padding: '8px' }}>{formatTime(vis.OutTime)}</td>
                        <td style={{ padding: '8px', whiteSpace: 'nowrap' }}>
                          <Button
                            variant='outlined'
                            size='small'
                            onClick={() => handleEdit(vis)}
                            disabled={isLoading}
                            style={{ borderRadius: '20px' }}
                          >
                            EDIT <ArrowDownwardIcon />
                          </Button>
                          <Button
                            className='m-3 bg-red-300'
                            size='small'
                            onClick={() => handleDelete(vis.id)}
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

export default VisitorLayout
