'use client'
import * as React from 'react'
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip
} from '@mui/material'
import Typography from '@mui/material/Typography'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import CloseIcon from '@mui/icons-material/Close'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useRef, useState, useEffect } from 'react'

import CustomTextField from '@/@core/components/mui/TextField'
import { useSectionStore } from '@/stores/sectionStore'
import { useClassStore } from '@/stores/classStore'
import { SectionTypes } from '@/types/section'
import { ClassTypes, SecTypes } from '@/types/class'
import { errorMessage } from '@/views/errorHandling/error'

type ClassFormData = Pick<ClassTypes, 'name' | 'activeStatus'>

const INITIAL_FORM: ClassFormData = { name: '', activeStatus: true }
const MAX_VISIBLE_SECTIONS = 4

const ClassLayout = () => {
  const textFieldRef = useRef<HTMLInputElement>(null)
  const { listOfSection, section } = useSectionStore()
  const { addClass, isLoading, listOfClass, deleteClass, updateClass, classes, pagination } = useClassStore()

  const [selectedSections, setSelectedSections] = useState<number[]>([])
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState<ClassFormData>(INITIAL_FORM)

  const { page, limit, total, totalPages } = pagination

  const startEntry = total === 0 ? 0 : (page - 1) * limit + 1
  const endEntry = Math.min(page * limit, total)

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || newPage === page) return
    listOfClass(newPage)
  }

  const getPageNumber = () => {
    const windowSize = 5
    let start = Math.max(1, page - Math.floor(windowSize / 2))
    const end = Math.min(totalPages, start + windowSize - 1)
    start = Math.max(1, end - windowSize + 1)
    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  }

  const handleFocus = () => {
    if (textFieldRef.current) textFieldRef.current.placeholder = ''
  }

  const handleBlur = () => {
    if (textFieldRef.current && textFieldRef.current.value === '') {
      textFieldRef.current.placeholder = 'SEARCH'
    }
  }

  useEffect(() => {
    listOfClass()
    listOfSection(1, 100)
  }, [listOfClass, listOfSection])

  const handleSectionChange = (id: number, isChecked: boolean) => {
    setSelectedSections(prev =>
      isChecked ? (prev.includes(id) ? prev : [...prev, id]) : prev.filter(item => item !== id)
    )
  }

  const resetForm = () => {
    setFormData(INITIAL_FORM)
    setEditingId(null)
    setSelectedSections([])
  }

  const handleAddClass = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!formData.name.trim()) {
      alert('Enter a class name')
      return
    }
    if (selectedSections.length === 0) {
      alert('Select at least one section')
      return
    }

    try {
      if (editingId !== null) {
        await updateClass(editingId, formData, selectedSections)
      } else {
        await addClass(formData, selectedSections)
      }
      resetForm()
    } catch (err) {
      errorMessage(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  const handleEdit = (c: ClassTypes) => {
    setEditingId(c.id)
    setFormData({ name: c.name, activeStatus: c.activeStatus })
    setSelectedSections((c.sections ?? []).map(sec => sec.id))
  }

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure to delete this class')) return
    try {
      await deleteClass(id)
    } catch (err) {
      errorMessage(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  return (
    <>
      <div className='flex '>
        <Typography variant='h6' component='h3'>
          Class
        </Typography>
        <nav style={{ marginLeft: '73%' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '25px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '25px' }}>
              Academics
            </Link>
            <span style={{ marginRight: '25px' }}>|</span>
            <Link href='#'>Class</Link>
          </Typography>
        </nav>
      </div>

      <div className='flex' style={{ display: 'flex' }}>
        {/* Add / edit class card */}
        <div className='class mt-4'>
          <Card sx={{ width: 280, height: 540, overflowY: 'auto' }}>
            <CardContent>
              <Typography variant='h6' component='h3'>
                {editingId !== null ? 'Edit Class' : 'Add Class'}
              </Typography>

              <Typography variant='body2' component='div'>
                <CustomTextField
                  required
                  label='NAME'
                  value={formData.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormData(prev => ({ ...prev, name: e.target.value }))
                  }
                  style={{ marginTop: 20 }}
                />
              </Typography>

              <FormControl style={{ marginTop: 20 }}>
                <FormLabel id='activeStatus'>Active Status</FormLabel>
                <RadioGroup row aria-labelledby='activeStatus' name='activeStatus'>
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

              <div style={{ marginTop: '10px' }}>
                <span>SECTION *</span>
                <FormGroup aria-label='sections' sx={{ flexDirection: 'column' }}>
                  {(section ?? []).map((sec: SectionTypes) => (
                    <FormControlLabel
                      key={sec.id}
                      label={sec.name}
                      control={
                        <Checkbox
                          checked={selectedSections.includes(Number(sec.id))}
                          onChange={e => handleSectionChange(Number(sec.id), e.target.checked)}
                        />
                      }
                    />
                  ))}
                </FormGroup>
              </div>
            </CardContent>

            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant='contained' onClick={handleAddClass} disabled={isLoading}>
                <CheckSharpIcon style={{ marginRight: 5 }} />
                {editingId !== null ? 'Update Class' : 'Save Class'}
              </Button>
              {editingId !== null && (
                <Button variant='contained' color='secondary' onClick={resetForm} disabled={isLoading}>
                  <CloseIcon style={{ marginRight: 5 }} />
                  Cancel
                </Button>
              )}
            </CardActions>
          </Card>
        </div>

        {/* Class list card */}
        <div className='classList mt-4 mx-6 ' style={{ flex: 1 }}>
          <Card className='overflow-auto' sx={{ width: '102.6%', height: 550 }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '16%' }}>
                  Class List
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
                    aria-label='Table actions'
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
              <TableContainer sx={{ mt: 2.5 }}>
                <Table>
                  <TableHead>
                    <TableRow sx={{ bgcolor: 'lightgray' }}>
                      <TableCell>Class</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Section (Total Students)</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {(classes ?? []).map((classItem: ClassTypes) => {
                      const sections = classItem.sections ?? []
                      const visible = sections.slice(0, MAX_VISIBLE_SECTIONS)
                      const hidden = sections.slice(MAX_VISIBLE_SECTIONS)

                      return (
                        <TableRow key={classItem.id} hover>
                          <TableCell sx={{ fontWeight: 500 }}>{classItem.name}</TableCell>

                          <TableCell>
                            <Chip
                              size='small'
                              variant='outlined'
                              label={classItem.activeStatus ? 'Active' : 'Inactive'}
                              color={classItem.activeStatus ? 'success' : 'error'}
                            />
                          </TableCell>

                          <TableCell sx={{ maxWidth: 320 }}>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                              {visible.map((sec: SecTypes) => (
                                <Chip
                                  key={sec.classSectionId}
                                  size='small'
                                  variant='outlined'
                                  color={sec.activeStatus ? 'primary' : 'default'}
                                  label={`${sec.name} (${sec.studentCount})`}
                                  sx={sec.activeStatus ? undefined : { opacity: 0.6 }}
                                />
                              ))}

                              {hidden.length > 0 && (
                                <Tooltip title={hidden.map(s => `${s.name} (${s.studentCount})`).join(', ')}>
                                  <Chip size='small' label={`+${hidden.length} more`} />
                                </Tooltip>
                              )}
                            </Box>
                          </TableCell>

                          <TableCell sx={{ whiteSpace: 'nowrap' }}>
                            <Button
                              variant='outlined'
                              size='small'
                              startIcon={<EditIcon />}
                              onClick={() => handleEdit(classItem)}
                              disabled={isLoading}
                              sx={{ mr: 1, borderRadius: 5 }}
                            >
                              Edit
                            </Button>
                            <Button
                              variant='outlined'
                              color='error'
                              size='small'
                              startIcon={<DeleteIcon />}
                              onClick={() => handleDelete(classItem.id)}
                              disabled={isLoading}
                              sx={{ borderRadius: 5 }}
                            >
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
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
                  margin: 'auto'
                }}
              >
                <Button
                  size='small'
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page <= 1}
                  sx={{ minWidth: 'auto', width: 30, mr: 1, p: '4px 8px' }}
                >
                  <ArrowBackIcon style={{ fontSize: '16px' }} />
                </Button>

                {getPageNumber().map(n => (
                  <Button
                    key={n}
                    size='small'
                    variant={n === page ? 'contained' : 'text'}
                    onClick={() => handlePageChange(n)}
                    sx={{ minWidth: 32, mx: 0.25 }}
                  >
                    {n}
                  </Button>
                ))}

                <Button
                  size='small'
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page >= totalPages}
                  sx={{ minWidth: 'auto', width: 30, ml: 1, p: '4px 8px' }}
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

export default ClassLayout
