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
import { useClassRoomStore } from '@/stores/classRoomStore'
import { ClassRoomTypes } from '@/types/classRoom'
import { useClassStore } from '@/stores/classStore'
import { ClassTypes, SecTypes } from '@/types/class'

const initialForm: Partial<ClassRoomTypes> = {
  roomNumber: '',
  capacity: undefined,
  classSectionId: undefined
}

const ClassRoomLayout = () => {
  const textFieldRef = useRef<HTMLInputElement>(null)
  // const academicYearId = 1
  // const [roomNumber, setRoomNumber] = useState('')
  // const [capacity, setCapacity] = useState<number>(30)
  // const [classSectionId, setClassSectionId] = useState<number>(0)
  const [editingId, setEditingId] = useState<number | null>(null)
  const { listOfClassRoom, addClassRoom, updateClassRoom, deleteClassRoom, classRoom, isLoading, pagination } =
    useClassRoomStore()
  const { listOfClass, classes } = useClassStore()
  const [formData, setFormData] = useState<Partial<ClassRoomTypes>>(initialForm)
  const [classId, setClassId] = useState<number>()

  const { page, limit, totalPages, total } = pagination

  const startEntry = total === 0 ? 0 : (page - 1) * limit + 1
  const endEntry = Math.min(page * limit, total)
  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || newPage === page) return
    listOfClassRoom(newPage, 10)
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
    listOfClassRoom()
    listOfClass()
  }, [listOfClass, listOfClassRoom])

  const resetForm = () => {
    ;(setEditingId(null), setFormData(initialForm))
    setClassId(undefined)
  }

  //find list of section from the selected classId
  const sections: SecTypes[] = (classes ?? []).find((cls: ClassTypes) => cls.id === classId)?.sections ?? []

  const handleClassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClassId(Number(e.target.value))

    setFormData(prev => ({ ...prev, classSectionId: undefined }))
  }

  const handleSectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, classSectionId: Number(e.target.value) }))
  }

  const handleClassRoom = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (editingId !== null) {
      const res = await updateClassRoom(editingId, formData)
    } else {
      const res = await addClassRoom(formData)
    }
    resetForm()
  }

  const handleEdit = async (cls: ClassRoomTypes) => {
    setEditingId(cls.id)
    setClassId(cls.classSection.class.id)
    setFormData({
      roomNumber: cls.roomNumber,
      capacity: cls.capacity,
      classSectionId: cls.classSectionId
    })

    // setRoomNumber(cls.roomNumber)
    // setCapacity(cls.capacity)
    // setClassSectionId(cls.classSectionId)
  }

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure to delete this class Room from our database.')) return
    const res = await deleteClassRoom(id)
  }
  return (
    <>
      <div className='flex '>
        <Typography variant='h6' component='h3'>
          Class Room
        </Typography>
        <nav style={{ marginLeft: '65.5%' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '25px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '25px' }}>
              Academics
            </Link>
            <span style={{ marginRight: '25px' }}>|</span>
            <Link href='#'>Class Room</Link>
          </Typography>
        </nav>
      </div>
      <div className='flex' style={{ display: 'flex' }}>
        {/* Add classroom first card */}
        <div className='classRoom mt-4'>
          <Card component='form' onSubmit={handleClassRoom} sx={{ width: 280, height: 475 }}>
            <CardContent>
              <Typography variant='h6' component='h3'>
                {editingId !== null ? 'Update Class Room' : 'Assign Class Room'}
              </Typography>
              <Typography variant='body2' component='div'>
                <CustomTextField
                  required
                  label='ROOM NO '
                  value={formData.roomNumber}
                  onChange={(e: any) => setFormData(prev => ({ ...prev, roomNumber: e.target.value }))}
                  style={{ marginTop: 20 }}
                />
              </Typography>
              <Typography variant='body2' component='div'>
                <CustomTextField
                  required
                  label='CAPACITY '
                  type='number'
                  value={formData.capacity ?? ''}
                  onChange={(e: any) => setFormData(prev => ({ ...prev, capacity: Number(e.target.value) }))}
                  style={{ marginTop: 20 }}
                />
              </Typography>
              <Typography variant='body2' component='div'>
                <CustomTextField
                  select
                  required
                  fullWidth
                  label='Select Class'
                  value={classId ?? ''}
                  onChange={handleClassChange}
                  style={{ marginTop: 20 }}
                >
                  {(classes ?? []).map((cls: ClassTypes) => (
                    <MenuItem key={cls.id} value={cls.id}>
                      {cls.name}
                    </MenuItem>
                  ))}
                </CustomTextField>
              </Typography>
              <Typography variant='body2' component='div'>
                <CustomTextField
                  select
                  required
                  fullWidth
                  label='Select Section'
                  value={formData.classSectionId ?? ''}
                  onChange={handleSectionChange}
                  disabled={classId === undefined}
                  style={{ marginTop: 20 }}
                >
                  {(sections ?? []).map((sec: SecTypes) => (
                    <MenuItem key={sec.id} value={sec.classSectionId}>
                      {sec.name}
                    </MenuItem>
                  ))}
                </CustomTextField>
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button type='submit' variant='contained' disabled={isLoading}>
                <CheckSharpIcon style={{ marginRight: 5 }} />
                {editingId !== null ? 'Update Class Room' : 'Assign Class Room'}
              </Button>
              {editingId !== null && (
                <Button variant='contained' onClick={resetForm}>
                  <CheckSharpIcon style={{ marginRight: 5 }} />
                  Cancel
                </Button>
              )}
            </CardActions>
          </Card>
        </div>

        {/* Class Room list 2nd card */}
        <div className='classRoomList mt-4 mx-6' style={{ flex: 1 }}>
          <Card sx={{ width: '102.65%', height: 370, overflowY: 'auto' }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '16%' }}>
                  Class Room List
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
                          <span>Room No</span>
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
                          <span>Capacity</span>
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
                          <span>Assigned Class</span>
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
                          <span>Assigned Section</span>
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
                    {Array.isArray(classRoom) && classRoom.length > 0 ? (
                      classRoom?.map(room => (
                        <tr key={room.id} style={{ borderBottom: '1px solid #ddd' }}>
                          <td style={{ paddingLeft: '4%' }}>{room.roomNumber}</td>
                          <td style={{ paddingLeft: '4%' }}>{room.capacity}</td>
                          <td style={{ paddingLeft: '4%' }}>{room.classSection.class.name}</td>
                          <td style={{ paddingLeft: '4%' }}>{room.classSection.section.name}</td>
                          <td style={{ padding: '8px' }}>
                            <Button
                              variant='outlined'
                              size='small'
                              onClick={() => handleEdit(room)}
                              style={{ borderRadius: '20px' }}
                            >
                              Edit <ArrowDownwardIcon />
                            </Button>
                            <Button
                              variant='outlined'
                              size='small'
                              onClick={() => handleDelete(room.id)}
                              style={{ borderRadius: '20px', color: 'red', borderColor: 'red' }}
                            >
                              Delete <ArrowDownwardIcon />
                            </Button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr style={{ borderBottom: '1px solid #ddd' }}>
                        <td style={{ paddingLeft: '4%' }}>empty class Room</td>
                      </tr>
                    )}
                    {/* <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ paddingLeft: '4%' }}>012</td>
                      <td style={{ paddingLeft: '4%' }}>35</td>
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

export default ClassRoomLayout
