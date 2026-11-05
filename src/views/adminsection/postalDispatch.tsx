'use client'
import {
  CardContent,
  Typography,
  Card,
  InputAdornment,
  Button,
  CardActions,
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
import { postalDispatchTypes } from '@/types/addPostalDispatch'
import { usePostalDispatchStore } from '@/stores/addPostalDispatchStore'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2'
    }
  }
})

const InitialForm: Partial<postalDispatchTypes> = {
  toTitle: '',
  referenceNo: '',
  address: '',
  note: '',
  fromTitle: '',
  date: '',
  fileName: ''
}

const TABLE_HEADERS = ['SL', 'To Title', 'Reference No', 'Address', 'From Title', 'Note', 'Date', 'Actions']

const formatDate = (value?: string) => (value ? value.slice(0, 10) : '-')

const PostalDispatchLayout = () => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [editingId, setEditingId] = useState<number | null>(null)
  const [searchText, setSearchText] = useState('')
  // null = not searching (show store list), array = search results
  const [searchResults, setSearchResults] = useState<postalDispatchTypes[] | null>(null)

  const {
    postalDispatch,
    pagination,
    isLoading,
    listOfPostalDispatch,
    addPostalDispatch,
    updatePostalDispatch,
    deletePostalDispatch,
    searchPostalDispatch
  } = usePostalDispatchStore()

  const { page, limit, total, totalPages } = pagination
  const isSearching = searchResults !== null
  const rows: postalDispatchTypes[] = isSearching ? searchResults : (postalDispatch ?? [])

  const startEntry = total === 0 ? 0 : (page - 1) * limit + 1
  const endEntry = Math.min(page * limit, total)

  const {
    handleSubmit,
    control,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm<Partial<postalDispatchTypes>>({
    defaultValues: InitialForm
  })

  const selectedFileName = watch('fileName')

  // load postal dispatch list
  useEffect(() => {
    listOfPostalDispatch()
  }, [listOfPostalDispatch])

  // ---- Pagination ----
  const handlePageChange = (newPage: number) => {
    if (isSearching) return
    if (newPage < 1 || newPage > totalPages || newPage === page) return
    listOfPostalDispatch(newPage, limit)
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

    const res = await searchPostalDispatch(term)
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

  const handleEdit = (item: postalDispatchTypes) => {
    setEditingId(item.id)
    reset({
      toTitle: item.toTitle ?? '',
      referenceNo: item.referenceNo ?? '',
      address: item.address ?? '',
      note: item.note ?? '',
      fromTitle: item.fromTitle ?? '',
      date: item.date ? item.date.slice(0, 10) : '',
      fileName: item.fileName ?? ''
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this postal dispatch?')) return
    await deletePostalDispatch(id)
    handleClearSearch() // list was refreshed, drop stale search results
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    // NOTE: only the file name is sent right now (no actual upload)
    setValue('fileName', file ? file.name : '')
  }

  const onSubmit: SubmitHandler<Partial<postalDispatchTypes>> = async data => {
    editingId !== null ? await updatePostalDispatch(editingId, data) : await addPostalDispatch(data)

    handleCancelEdit()
    handleClearSearch()
  }

  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h4'>
          Postal Dispatch
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
            <Link href='#'>Postal Dispatch</Link>
          </Typography>
        </nav>
      </div>

      <div className='flex' style={{ display: 'flex' }}>
        {/* ---------------- Add / Edit Postal Dispatch card ---------------- */}
        <div className='postalDispatch mt-4'>
          <Card sx={{ width: 280, height: 'auto' }}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <CardContent>
                <Typography variant='h6' component='h4'>
                  {editingId !== null ? 'Edit Postal Dispatch' : 'Add Postal Dispatch'}
                </Typography>

                {/* To title */}
                <Controller
                  name='toTitle'
                  control={control}
                  rules={{ required: 'Please enter to title' }}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      label='TO TITLE'
                      required
                      fullWidth
                      sx={{ marginTop: '20px' }}
                      value={field.value || ''}
                      error={!!errors.toTitle}
                      helperText={errors.toTitle?.message}
                    />
                  )}
                />

                {/* Reference no */}
                <Controller
                  name='referenceNo'
                  control={control}
                  rules={{ required: 'Please enter reference no' }}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      label='REFERENCE NO'
                      required
                      fullWidth
                      sx={{ marginTop: '20px' }}
                      value={field.value || ''}
                      error={!!errors.referenceNo}
                      helperText={errors.referenceNo?.message}
                    />
                  )}
                />

                {/* Address */}
                <Controller
                  name='address'
                  control={control}
                  rules={{ required: 'Please enter address' }}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      label='ADDRESS'
                      required
                      fullWidth
                      sx={{ marginTop: '20px' }}
                      value={field.value || ''}
                      error={!!errors.address}
                      helperText={errors.address?.message}
                    />
                  )}
                />

                {/* Note */}
                <Controller
                  name='note'
                  control={control}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      label='NOTE'
                      multiline
                      rows={3}
                      fullWidth
                      sx={{ marginTop: '20px' }}
                      value={field.value || ''}
                    />
                  )}
                />

                {/* From title */}
                <Controller
                  name='fromTitle'
                  control={control}
                  rules={{ required: 'Please enter from title' }}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      label='FROM TITLE'
                      required
                      fullWidth
                      sx={{ marginTop: '20px' }}
                      value={field.value || ''}
                      error={!!errors.fromTitle}
                      helperText={errors.fromTitle?.message}
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

                {/* File (optional) */}
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
                  {editingId !== null ? 'UPDATE POSTAL DISPATCH' : 'SAVE POSTAL DISPATCH'}
                </Button>
              </CardActions>
            </form>
          </Card>
        </div>

        {/* ---------------- Postal Dispatch list card ---------------- */}
        <div className='postalDispatchList mt-4 mx-6' style={{ flex: 1 }}>
          <Card sx={{ width: '102.65%', height: '65%', overflowY: 'auto' }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '16%' }}>
                  Postal Dispatch List
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
                      rows.map((item: postalDispatchTypes, index: number) => (
                        <tr key={item.id} style={{ borderBottom: '1px solid #ddd' }}>
                          <td style={{ padding: '8px' }}>{isSearching ? index + 1 : (page - 1) * limit + index + 1}</td>
                          <td style={{ padding: '8px' }}>{item.toTitle}</td>
                          <td style={{ padding: '8px' }}>{item.referenceNo}</td>
                          <td style={{ padding: '8px' }}>{item.address}</td>
                          <td style={{ padding: '8px' }}>{item.fromTitle}</td>
                          <td style={{ padding: '8px' }}>{item.note}</td>
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

export default PostalDispatchLayout
