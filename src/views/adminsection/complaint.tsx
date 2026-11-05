'use client'
import {
  CardContent,
  Typography,
  Card,
  InputAdornment,
  Button,
  CardActions,
  MenuItem,
  TextField,
  IconButton
} from '@mui/material'
import Link from 'next/link'
import CustomTextField from '@/@core/components/mui/TextField'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import ClearIcon from '@mui/icons-material/Clear'
import ButtonGroup from '@mui/material/ButtonGroup'
import { Icon } from '@iconify/react'
import { createTheme } from '@mui/material/styles'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useRef, useState, useEffect } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { complaintTypes } from '@/types/complaint'
import { staffTypes } from '@/types/staff'
import { useComplaintStore } from '@/stores/complaintStore'
import { useStaffStore } from '@/stores/staffStore'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2'
    }
  }
})

const InitialForm: Partial<complaintTypes> = {
  complaintBy: '',
  complainType: '',
  complaintSource: '',
  phone: '',
  date: '',
  actionTaken: '',
  staffId: undefined,
  Description: '',
  fileName: ''
}

// Replace with your real lists / API data
const COMPLAINT_TYPE_OPTIONS = ['Transport', 'Fees', 'Academic', 'Staff', 'Facility', 'Other']
const COMPLAINT_SOURCE_OPTIONS = ['Phone Call', 'In Person', 'Email', 'Website', 'Other']

const formatDate = (value?: string) => (value ? value.slice(0, 10) : '-')

const ComplaintLayout = () => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [editingId, setEditingId] = useState<number | null>(null)
  const [searchText, setSearchText] = useState('')
  // null = not searching (show store list), array = search results
  const [searchResults, setSearchResults] = useState<complaintTypes[] | null>(null)

  const { Staff, listOfStaff } = useStaffStore()
  const {
    complaint,
    pagination,
    isLoading,
    listOfComplaint,
    addComplaint,
    updateComplaint,
    deleteComplaint,
    searchComplaint
  } = useComplaintStore()

  const { page, limit, total, totalPages } = pagination
  const isSearching = searchResults !== null
  const rows: complaintTypes[] = isSearching ? searchResults : (complaint ?? [])

  const startEntry = total === 0 ? 0 : (page - 1) * limit + 1
  const endEntry = Math.min(page * limit, total)

  const {
    handleSubmit,
    control,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm<Partial<complaintTypes>>({
    defaultValues: InitialForm
  })

  const selectedFileName = watch('fileName')

  // load complaint list + staff
  useEffect(() => {
    listOfComplaint()
    listOfStaff()
  }, [listOfComplaint, listOfStaff])

  // ---- Pagination ----
  const handlePageChange = (newPage: number) => {
    if (isSearching) return
    if (newPage < 1 || newPage > totalPages || newPage === page) return
    listOfComplaint(newPage, limit)
  }

  const getPageNumber = () => {
    const windowSize = 5
    let start = Math.max(1, page - Math.floor(windowSize / 2))
    const end = Math.min(totalPages, start + windowSize - 1)
    start = Math.max(1, end - windowSize + 1)
    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  }

  // ---- Search ----
  const handleSearch = async () => {
    const term = searchText.trim()

    // empty search -> go back to the normal list
    if (!term) {
      handleClearSearch()
      return
    }

    const res = await searchComplaint(term)
    // store returns undefined when nothing is found / request fails
    setSearchResults(res ?? [])
  }

  const handleClearSearch = () => {
    setSearchText('')
    setSearchResults(null)
  }

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSearch()
    }
  }

  // ---- Form handlers ----
  const handleCancelEdit = () => {
    setEditingId(null)
    reset(InitialForm)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const handleEdit = (item: complaintTypes) => {
    setEditingId(item.id)
    reset({
      complaintBy: item.complaintBy ?? '',
      complainType: item.complainType ?? '',
      complaintSource: item.complaintSource ?? '',
      phone: item.phone ?? '',
      date: item.date ? item.date.slice(0, 10) : '',
      actionTaken: item.actionTaken ?? '',
      staffId: item.staffId,
      Description: item.Description ?? '',
      fileName: item.fileName ?? ''
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this complaint?')) return
    await deleteComplaint(id)
    handleClearSearch() // list was refreshed, drop stale search results
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    // NOTE: only the file name is sent right now (see notes)
    setValue('fileName', file ? file.name : '')
  }

  const onSubmit: SubmitHandler<Partial<complaintTypes>> = async data => {
    const payload: Partial<complaintTypes> = {
      ...data,
      staffId: data.staffId ? Number(data.staffId) : undefined
    }

    editingId !== null ? await updateComplaint(editingId, payload) : await addComplaint(payload)

    handleCancelEdit()
    handleClearSearch()
  }

  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h4'>
          Complaint
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
            <Link href='#'>Complaint</Link>
          </Typography>
        </nav>
      </div>

      <div className='flex' style={{ display: 'flex' }}>
        {/* ---------------- Add / Edit Complaint card ---------------- */}
        <div className='complaint mt-4'>
          <Card sx={{ width: 280, height: 'auto' }}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <CardContent>
                <Typography variant='h6' component='h4'>
                  {editingId !== null ? 'Edit Complaint' : 'Add Complaint'}
                </Typography>

                {/* Complaint by */}
                <Controller
                  name='complaintBy'
                  control={control}
                  rules={{ required: 'Please enter complaint by' }}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      label='COMPLAINT BY'
                      placeholder='Name'
                      required
                      fullWidth
                      sx={{ marginTop: '20px' }}
                      value={field.value || ''}
                      error={!!errors.complaintBy}
                      helperText={errors.complaintBy?.message}
                    />
                  )}
                />

                {/* Complaint type */}
                <Controller
                  name='complainType'
                  control={control}
                  rules={{ required: 'Please select complaint type' }}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      select
                      label='COMPLAINT TYPE'
                      required
                      fullWidth
                      sx={{ marginTop: '20px' }}
                      value={field.value || ''}
                      SelectProps={{ displayEmpty: true }}
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.complainType}
                      helperText={errors.complainType?.message}
                    >
                      <MenuItem value='' disabled>
                        <span style={{ fontStyle: 'normal' }}>Complaint Type *</span>
                      </MenuItem>
                      {COMPLAINT_TYPE_OPTIONS.map(t => (
                        <MenuItem key={t} value={t}>
                          {t}
                        </MenuItem>
                      ))}
                    </CustomTextField>
                  )}
                />

                {/* Complaint source */}
                <Controller
                  name='complaintSource'
                  control={control}
                  rules={{ required: 'Please select complaint source' }}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      select
                      label='COMPLAINT SOURCE'
                      required
                      fullWidth
                      sx={{ marginTop: '20px' }}
                      value={field.value || ''}
                      SelectProps={{ displayEmpty: true }}
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.complaintSource}
                      helperText={errors.complaintSource?.message}
                    >
                      <MenuItem value='' disabled>
                        <span style={{ fontStyle: 'normal' }}>Complaint Source *</span>
                      </MenuItem>
                      {COMPLAINT_SOURCE_OPTIONS.map(s => (
                        <MenuItem key={s} value={s}>
                          {s}
                        </MenuItem>
                      ))}
                    </CustomTextField>
                  )}
                />

                {/* Phone */}
                <Controller
                  name='phone'
                  control={control}
                  rules={{
                    pattern: { value: /^[0-9+\-\s]{7,15}$/, message: 'Enter a valid phone number' }
                  }}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      label='PHONE'
                      placeholder='Phone'
                      fullWidth
                      sx={{ marginTop: '20px' }}
                      value={field.value || ''}
                      error={!!errors.phone}
                      helperText={errors.phone?.message}
                    />
                  )}
                />

                {/* Date */}
                <Controller
                  name='date'
                  control={control}
                  rules={{ required: 'Please select date' }}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      label='DATE'
                      type='date'
                      required
                      fullWidth
                      sx={{ marginTop: '20px' }}
                      value={field.value || ''}
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.date}
                      helperText={errors.date?.message}
                    />
                  )}
                />

                {/* Actions taken */}
                <Controller
                  name='actionTaken'
                  control={control}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      label='ACTIONS TAKEN'
                      fullWidth
                      sx={{ marginTop: '20px' }}
                      value={field.value || ''}
                    />
                  )}
                />

                {/* Assigned staff */}
                <Controller
                  name='staffId'
                  control={control}
                  rules={{ required: 'Please select assigned staff' }}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      select
                      label='ASSIGNED'
                      required
                      fullWidth
                      sx={{ marginTop: '20px' }}
                      value={field.value ?? ''}
                      SelectProps={{ displayEmpty: true }}
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.staffId}
                      helperText={errors.staffId?.message}
                    >
                      <MenuItem value='' disabled>
                        <span style={{ fontStyle: 'normal' }}>Select Staff *</span>
                      </MenuItem>
                      {(Staff ?? []).map((s: staffTypes) => (
                        <MenuItem key={s.id} value={s.id}>
                          {s.name}
                        </MenuItem>
                      ))}
                    </CustomTextField>
                  )}
                />

                {/* Description */}
                <Controller
                  name='Description'
                  control={control}
                  rules={{ required: 'Please enter description' }}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      label='DESCRIPTION'
                      multiline
                      rows={3}
                      required
                      fullWidth
                      sx={{ marginTop: '20px' }}
                      value={field.value || ''}
                      error={!!errors.Description}
                      helperText={errors.Description?.message}
                    />
                  )}
                />

                {/* File */}
                <input
                  ref={fileInputRef}
                  type='file'
                  hidden
                  accept='.pdf,.doc,.docx,.jpg,.jpeg,.png,.txt'
                  onChange={handleFileChange}
                />
                <CustomTextField
                  label='FILE'
                  value={selectedFileName || 'Attach File'}
                  fullWidth
                  sx={{ mt: 2 }}
                  InputProps={{
                    readOnly: true,
                    endAdornment: (
                      <InputAdornment position='end'>
                        <Button
                          variant='contained'
                          sx={{ height: '25px', width: '90px', fontSize: '0.75rem' }}
                          onClick={() => fileInputRef.current?.click()}
                        >
                          BROWSE
                        </Button>
                      </InputAdornment>
                    )
                  }}
                />
                <Typography variant='body2' sx={{ mt: 2 }}>
                  (PDF, DOC, DOCX, JPG, JPEG, PNG, TXT are allowed for upload)
                </Typography>
              </CardContent>

              <CardActions sx={{ justifyContent: 'center', gap: 1 }}>
                {editingId !== null && (
                  <Button variant='outlined' color='secondary' onClick={handleCancelEdit}>
                    CANCEL
                  </Button>
                )}
                <Button type='submit' variant='contained' disabled={isSubmitting || isLoading}>
                  <CheckSharpIcon sx={{ mr: 1 }} />
                  {editingId !== null ? 'UPDATE COMPLAINT' : 'SAVE COMPLAINT'}
                </Button>
              </CardActions>
            </form>
          </Card>
        </div>

        {/* ---------------- Complaint list card ---------------- */}
        <div className='complaintList mt-4 mx-6' style={{ flex: 1 }}>
          <Card sx={{ width: '102.6%', height: '35%' }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '16%' }}>
                  Complaint List
                </Typography>
                <div style={{ flexGrow: 1 }}>
                  <TextField
                    id='standard-search'
                    variant='standard'
                    placeholder='SEARCH'
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                    onKeyDown={handleSearchKeyDown}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <IconButton size='small' onClick={handleSearch} disabled={isLoading} title='Search'>
                            <SearchSharpIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                      endAdornment: searchText ? (
                        <InputAdornment position='end'>
                          <IconButton size='small' onClick={handleClearSearch} title='Clear search'>
                            <ClearIcon fontSize='small' />
                          </IconButton>
                        </InputAdornment>
                      ) : null
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
                      <th style={{ padding: '8px', textAlign: 'left', backgroundColor: 'lightgray' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                          <span>Complaint By</span>
                        </div>
                      </th>
                      <th style={{ padding: '8px', textAlign: 'left', backgroundColor: 'lightgray' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                          <span>Complaint Type</span>
                        </div>
                      </th>
                      <th style={{ padding: '8px', textAlign: 'left', backgroundColor: 'lightgray' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                          <span>Source</span>
                        </div>
                      </th>
                      <th style={{ padding: '8px', textAlign: 'left', backgroundColor: 'lightgray' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                          <span>Phone</span>
                        </div>
                      </th>
                      <th style={{ padding: '8px', textAlign: 'left', backgroundColor: 'lightgray' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                          <span>Date</span>
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
                          <span>Actions</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.length === 0 ? (
                      <tr style={{ borderBottom: '1px solid #ddd' }}>
                        <td colSpan={7} style={{ padding: '8px', textAlign: 'center' }}>
                          No Data Available in Table
                        </td>
                      </tr>
                    ) : (
                      rows.map((item: complaintTypes, index: number) => (
                        <tr key={item.id} style={{ borderBottom: '1px solid #ddd' }}>
                          <td style={{ padding: '8px' }}>{isSearching ? index + 1 : (page - 1) * limit + index + 1}</td>
                          <td style={{ padding: '8px' }}>{item.complaintBy}</td>
                          <td style={{ padding: '8px' }}>{item.complainType}</td>
                          <td style={{ padding: '8px' }}>{item.complaintSource}</td>
                          <td style={{ padding: '8px' }}>{item.phone}</td>
                          <td style={{ padding: '8px' }}>{formatDate(item.date)}</td>
                          <td style={{ padding: '8px' }}>
                            <Button
                              variant='outlined'
                              size='small'
                              onClick={() => handleEdit(item)}
                              disabled={isLoading}
                              style={{ borderRadius: '20px' }}
                            >
                              EDIT
                            </Button>
                            <Button
                              className='m-3 bg-red-300'
                              size='small'
                              onClick={() => handleDelete(item.id)}
                              disabled={isLoading}
                              style={{ borderRadius: '20px' }}
                            >
                              DELETE
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
                {isSearching
                  ? `Showing ${rows.length} search result${rows.length === 1 ? '' : 's'}`
                  : `Showing ${startEntry} to ${endEntry} of ${total} entries`}
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
                  disabled={isSearching || page <= 1 || isLoading}
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
                {(isSearching ? [1] : getPageNumber()).map(p => (
                  <Button
                    key={p}
                    size='small'
                    variant={p === (isSearching ? 1 : page) ? 'contained' : 'text'}
                    onClick={() => handlePageChange(p)}
                    disabled={isSearching || isLoading}
                    style={{ minWidth: '32px', padding: '4px 16px' }}
                    sx={
                      p === (isSearching ? 1 : page)
                        ? { background: theme.palette.primary.main, color: 'white' }
                        : undefined
                    }
                  >
                    {p}
                  </Button>
                ))}
                <Button
                  size='small'
                  onClick={() => handlePageChange(page + 1)}
                  disabled={isSearching || page >= totalPages || isLoading}
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

export default ComplaintLayout
