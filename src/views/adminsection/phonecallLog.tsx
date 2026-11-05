'use client'
import {
  CardContent,
  Typography,
  Card,
  InputAdornment,
  Button,
  CardActions,
  TextField,
  IconButton,
  FormControlLabel,
  Radio,
  RadioGroup
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
import { useState, useEffect } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { phoneCallLogTypes } from '@/types/phoneCallLog'
import { usePhoneCallLogStore } from '@/stores/phoneCallLogStore'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2'
    }
  }
})

const InitialForm: Partial<phoneCallLogTypes> = {
  name: '',
  phone: '',
  date: '',
  followUpDate: '',
  callDuration: '',
  Description: '',
  type: 'INCOMING'
}

const TABLE_HEADERS = [
  'SL',
  'Name',
  'Phone',
  'Date',
  'Follow Up Date',
  'Call Duration',
  'Description',
  'Call Type',
  'Actions'
]

const formatDate = (value?: string) => (value ? value.slice(0, 10) : '-')
const formatType = (value?: string) => (value ? value.charAt(0) + value.slice(1).toLowerCase() : '-')

const PhoneCallLogLayout = () => {
  const [editingId, setEditingId] = useState<number | null>(null)
  const [searchText, setSearchText] = useState('')
  // null = not searching (show store list), array = search results
  const [searchResults, setSearchResults] = useState<phoneCallLogTypes[] | null>(null)

  const {
    phoneCallLog,
    pagination,
    isLoading,
    listOfPhoneCallLog,
    addPhoneCallLog,
    updatePhoneCallLog,
    deletePhoneCallLog,
    searchPhoneCallLog
  } = usePhoneCallLogStore()

  const { page, limit, total, totalPages } = pagination
  const isSearching = searchResults !== null
  const rows: phoneCallLogTypes[] = isSearching ? searchResults : (phoneCallLog ?? [])

  const startEntry = total === 0 ? 0 : (page - 1) * limit + 1
  const endEntry = Math.min(page * limit, total)

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<Partial<phoneCallLogTypes>>({
    defaultValues: InitialForm
  })

  // load phone call log list
  useEffect(() => {
    listOfPhoneCallLog()
  }, [listOfPhoneCallLog])

  // ---- Pagination ----
  const handlePageChange = (newPage: number) => {
    if (isSearching) return
    if (newPage < 1 || newPage > totalPages || newPage === page) return
    listOfPhoneCallLog(newPage, limit)
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

    const res = await searchPhoneCallLog(term)
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
  }

  const handleEdit = (item: phoneCallLogTypes) => {
    setEditingId(item.id)
    reset({
      name: item.name ?? '',
      phone: item.phone ?? '',
      date: item.date ? item.date.slice(0, 10) : '',
      followUpDate: item.followUpDate ? item.followUpDate.slice(0, 10) : '',
      callDuration: item.callDuration ?? '',
      Description: item.Description ?? '',
      type: item.type ?? 'INCOMING'
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this phone call log?')) return
    await deletePhoneCallLog(id)
    handleClearSearch() // list was refreshed, drop stale search results
  }

  const onSubmit: SubmitHandler<Partial<phoneCallLogTypes>> = async data => {
    editingId !== null ? await updatePhoneCallLog(editingId, data) : await addPhoneCallLog(data)

    handleCancelEdit()
    handleClearSearch()
  }

  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h4'>
          Phone Call Log
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
            <Link href='#'>Phone Call Log</Link>
          </Typography>
        </nav>
      </div>

      <div className='flex' style={{ display: 'flex' }}>
        {/* ---------------- Add / Edit Phone Call card ---------------- */}
        <div className='phoneCall mt-4'>
          <Card sx={{ width: 280, height: 'auto' }}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <CardContent>
                <Typography variant='h6' component='h4'>
                  {editingId !== null ? 'Edit Phone Call' : 'Add Phone Call'}
                </Typography>

                {/* Name */}
                <Controller
                  name='name'
                  control={control}
                  rules={{ required: 'Please enter name' }}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      label='NAME'
                      required
                      fullWidth
                      sx={{ marginTop: '20px' }}
                      value={field.value || ''}
                      error={!!errors.name}
                      helperText={errors.name?.message}
                    />
                  )}
                />

                {/* Phone */}
                <Controller
                  name='phone'
                  control={control}
                  rules={{
                    required: 'Please enter phone',
                    pattern: { value: /^[0-9+\-\s]{7,15}$/, message: 'Enter a valid phone number' }
                  }}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      label='PHONE'
                      required
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

                {/* Follow up date */}
                <Controller
                  name='followUpDate'
                  control={control}
                  rules={{ required: 'Please select follow up date' }}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      label='FOLLOW UP DATE'
                      type='date'
                      required
                      fullWidth
                      sx={{ marginTop: '20px' }}
                      value={field.value || ''}
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.followUpDate}
                      helperText={errors.followUpDate?.message}
                    />
                  )}
                />

                {/* Call duration */}
                <Controller
                  name='callDuration'
                  control={control}
                  rules={{ required: 'Please enter call duration' }}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      label='CALL DURATION'
                      placeholder='e.g. 00:05:30'
                      required
                      fullWidth
                      sx={{ marginTop: '20px' }}
                      value={field.value || ''}
                      error={!!errors.callDuration}
                      helperText={errors.callDuration?.message}
                    />
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

                {/* Type */}
                <div style={{ display: 'flex', marginTop: '12px' }}>
                  <span style={{ paddingRight: '30px' }}>TYPE</span>
                  <Controller
                    name='type'
                    control={control}
                    render={({ field }) => (
                      <RadioGroup
                        {...field}
                        row
                        aria-label='call type'
                        value={field.value || 'INCOMING'}
                        style={{ flexDirection: 'column', marginTop: '-8px' }}
                      >
                        <FormControlLabel value='INCOMING' control={<Radio />} label='Incoming' />
                        <FormControlLabel value='OUTGOING' control={<Radio />} label='Outgoing' />
                      </RadioGroup>
                    )}
                  />
                </div>
              </CardContent>

              <CardActions sx={{ justifyContent: 'center', gap: 1 }}>
                {editingId !== null && (
                  <Button variant='outlined' color='secondary' onClick={handleCancelEdit}>
                    CANCEL
                  </Button>
                )}
                <Button type='submit' variant='contained' disabled={isSubmitting || isLoading}>
                  <CheckSharpIcon sx={{ mr: 1 }} />
                  {editingId !== null ? 'UPDATE PHONE CALL' : 'SAVE PHONE CALL'}
                </Button>
              </CardActions>
            </form>
          </Card>
        </div>

        {/* ---------------- Phone Call list card ---------------- */}
        <div className='phoneCallList mt-4 mx-6' style={{ flex: 1 }}>
          <Card sx={{ width: '102.65%', height: '60%', overflowY: 'auto' }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '16%' }}>
                  Phone Call List
                </Typography>
                <div style={{ flexGrow: 1 }}>
                  <TextField
                    id='standard-search'
                    variant='standard'
                    placeholder='QUICK SEARCH'
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
                      {TABLE_HEADERS.map((title, i) => (
                        <th
                          key={title}
                          style={{
                            padding: '8px',
                            textAlign: 'left',
                            backgroundColor: 'lightgray',
                            position: 'relative',
                            borderRadius:
                              i === 0 ? '5px 0 0 5px' : i === TABLE_HEADERS.length - 1 ? '0 5px 5px 0' : undefined
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                            <span>{title}</span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.length === 0 ? (
                      <tr style={{ borderBottom: '1px solid #ddd' }}>
                        <td colSpan={TABLE_HEADERS.length} style={{ padding: '8px', textAlign: 'center' }}>
                          No Data Available in Table
                        </td>
                      </tr>
                    ) : (
                      rows.map((item: phoneCallLogTypes, index: number) => (
                        <tr key={item.id} style={{ borderBottom: '1px solid #ddd' }}>
                          <td style={{ padding: '8px' }}>{isSearching ? index + 1 : (page - 1) * limit + index + 1}</td>
                          <td style={{ padding: '8px' }}>{item.name}</td>
                          <td style={{ padding: '8px' }}>{item.phone}</td>
                          <td style={{ padding: '8px' }}>{formatDate(item.date)}</td>
                          <td style={{ padding: '8px' }}>{formatDate(item.followUpDate)}</td>
                          <td style={{ padding: '8px' }}>{item.callDuration}</td>
                          <td style={{ padding: '8px' }}>{item.Description}</td>
                          <td style={{ padding: '8px' }}>{formatType(item.type)}</td>
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

export default PhoneCallLogLayout
