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
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Dialog,
  DialogTitle,
  DialogContent,
  Box
} from '@mui/material'
import Link from 'next/link'
import CustomTextField from '@/@core/components/mui/TextField'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import ClearIcon from '@mui/icons-material/Clear'
import CloseIcon from '@mui/icons-material/Close'
import ButtonGroup from '@mui/material/ButtonGroup'
import { Icon } from '@iconify/react'
import { createTheme } from '@mui/material/styles'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useState, useEffect } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { certificateTypes, PageLayout } from '@/types/certificate'
import { useCertificateStore } from '@/stores/certificateStores'
import CertificateComponent from '@/CustomUI/certificateComponents'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2'
    }
  }
})

const InitialForm: Partial<certificateTypes> = {
  certificateName: '',
  HeaderLeftText: '',
  date: '',
  body: '',
  bodyFont: '',
  fontSize: 18,
  footerLeftText: '',
  FooterCenterText: '',
  FooterRightText: '',
  pageLayout: undefined,
  studentPhoto: false,
  studentImage: ''
}

const FONT_OPTIONS = ['Times New Roman', 'Arial', 'Arial Black', 'Comic Sans MS']

const PAGE_LAYOUT_OPTIONS: { value: PageLayout; label: string }[] = [
  { value: 'A4_PORTRAIT', label: 'A4 (Portrait)' },
  { value: 'A4_LANDSCAPE', label: 'A4 (Landscape)' },
  { value: 'CUSTOM', label: 'Custom' }
]

const TABLE_HEADERS = ['SL', 'Certificate Name', 'Page Layout', 'Date', 'Student Photo', 'Actions']

const formatLayout = (value?: PageLayout) => PAGE_LAYOUT_OPTIONS.find(o => o.value === value)?.label ?? '-'

const formatDate = (iso?: string) =>
  iso ? new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '-'

// ISO string -> yyyy-MM-dd (value format required by <input type='date'>)
const toDateInput = (iso?: string) => (iso ? iso.slice(0, 10) : '')

const CertificateLayout = () => {
  const [editingId, setEditingId] = useState<number | null>(null)
  const [searchText, setSearchText] = useState('')
  // null = not searching (show store list), array = search results
  const [searchResults, setSearchResults] = useState<certificateTypes[] | null>(null)
  // certificate currently shown in the view dialog
  const [viewing, setViewing] = useState<certificateTypes | null>(null)

  const {
    certificate,
    pagination,
    isLoading,
    listOfCertificate,
    addCertificate,
    updateCertificate,
    deleteCertificate,
    searchCertificate
  } = useCertificateStore()

  const { page, limit, total, totalPages } = pagination
  const isSearching = searchResults !== null
  const rows: certificateTypes[] = isSearching ? searchResults : (certificate ?? [])

  const startEntry = total === 0 ? 0 : (page - 1) * limit + 1
  const endEntry = Math.min(page * limit, total)

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<Partial<certificateTypes>>({
    defaultValues: InitialForm
  })

  // load certificate list
  useEffect(() => {
    listOfCertificate()
  }, [listOfCertificate])

  // ---- Pagination ----
  const handlePageChange = (newPage: number) => {
    if (isSearching) return
    if (newPage < 1 || newPage > totalPages || newPage === page) return
    listOfCertificate(newPage, limit)
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

    const res = await searchCertificate(term)
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

  const handleEdit = (item: certificateTypes) => {
    setEditingId(item.id)
    reset({
      certificateName: item.certificateName ?? '',
      HeaderLeftText: item.HeaderLeftText ?? '',
      date: toDateInput(item.date),
      body: item.body ?? '',
      bodyFont: item.bodyFont ?? '',
      fontSize: item.fontSize,
      footerLeftText: item.footerLeftText ?? '',
      FooterCenterText: item.FooterCenterText ?? '',
      FooterRightText: item.FooterRightText ?? '',
      pageLayout: item.pageLayout,
      studentPhoto: item.studentPhoto,
      studentImage: item.studentImage ?? ''
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this certificate?')) return
    await deleteCertificate(id)
    if (editingId === id) handleCancelEdit()
    handleClearSearch() // list was refreshed, drop stale search results
  }

  const onSubmit: SubmitHandler<Partial<certificateTypes>> = async data => {
    const payload: Partial<certificateTypes> = {
      ...data,
      // <input type='date'> gives yyyy-MM-dd, API stores a full ISO date
      date: data.date ? new Date(data.date).toISOString() : undefined,
      // empty optional strings are sent as undefined
      studentImage: data.studentImage || undefined
    }

    editingId !== null ? await updateCertificate(editingId, payload) : await addCertificate(payload)

    handleCancelEdit()
    handleClearSearch()
  }

  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h4'>
          Certificate
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
            <Link href='#'>Certificate</Link>
          </Typography>
        </nav>
      </div>

      <div className='flex' style={{ display: 'flex' }}>
        {/* ---------------- Add / Edit Certificate card ---------------- */}
        <div className='certificate mt-4'>
          <Card sx={{ width: 450, height: 'auto' }}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <CardContent>
                <Typography variant='h6' component='h4'>
                  {editingId !== null ? 'Edit Certificate' : 'Add Certificate'}
                </Typography>

                {/* Certificate Name */}
                <Controller
                  name='certificateName'
                  control={control}
                  rules={{ required: 'Please enter certificate name' }}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      label='CERTIFICATE NAME'
                      required
                      fullWidth
                      sx={{ marginTop: '20px' }}
                      value={field.value || ''}
                      error={!!errors.certificateName}
                      helperText={errors.certificateName?.message}
                    />
                  )}
                />

                {/* Header Left Text */}
                <Controller
                  name='HeaderLeftText'
                  control={control}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      label='HEADER LEFT TEXT'
                      fullWidth
                      sx={{ marginTop: '20px' }}
                      value={field.value || ''}
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
                      type='date'
                      label='DATE'
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

                {/* Body */}
                <Controller
                  name='body'
                  control={control}
                  rules={{ maxLength: { value: 500, message: 'Body cannot exceed 500 characters' } }}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      label='BODY (MAX CHARACTER LENGTH 500)'
                      multiline
                      rows={3}
                      fullWidth
                      sx={{ marginTop: '20px' }}
                      value={field.value || ''}
                      error={!!errors.body}
                      helperText={errors.body?.message}
                    />
                  )}
                />
                <p>
                  [name] [dob] [present_address] [guardian] [created_at] [admission_no] [roll_no] [gender]
                  [admission_date] [category] [cast] [father_name] [mother_name] [religion] [email] [phone] [class]
                  [section]
                </p>

                {/* Body Font + Font Size */}
                <div style={{ display: 'flex', gap: 10 }}>
                  <Controller
                    name='bodyFont'
                    control={control}
                    render={({ field }) => (
                      <CustomTextField
                        {...field}
                        select
                        label='BODY FONT'
                        fullWidth
                        sx={{ marginTop: '20px' }}
                        value={field.value || ''}
                        SelectProps={{ displayEmpty: true }}
                        InputLabelProps={{ shrink: true }}
                      >
                        <MenuItem value=''>
                          <span>Default</span>
                        </MenuItem>
                        {FONT_OPTIONS.map(f => (
                          <MenuItem key={f} value={f}>
                            <span>{f}</span>
                          </MenuItem>
                        ))}
                      </CustomTextField>
                    )}
                  />
                  <Controller
                    name='fontSize'
                    control={control}
                    rules={{
                      required: 'Please enter font size',
                      min: { value: 8, message: 'Minimum 8' },
                      max: { value: 100, message: 'Maximum 100' }
                    }}
                    render={({ field }) => (
                      <CustomTextField
                        {...field}
                        type='number'
                        label='FONT SIZE (PX)'
                        required
                        fullWidth
                        placeholder='Ex: 18'
                        sx={{ marginTop: '20px' }}
                        value={field.value ?? ''}
                        onChange={e => field.onChange(e.target.value === '' ? undefined : Number(e.target.value))}
                        error={!!errors.fontSize}
                        helperText={errors.fontSize?.message}
                      />
                    )}
                  />
                </div>

                {/* Footer texts */}
                <Controller
                  name='footerLeftText'
                  control={control}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      label='FOOTER LEFT TEXT'
                      fullWidth
                      sx={{ marginTop: '20px' }}
                      value={field.value || ''}
                    />
                  )}
                />
                <Controller
                  name='FooterCenterText'
                  control={control}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      label='FOOTER CENTER TEXT'
                      fullWidth
                      sx={{ marginTop: '20px' }}
                      value={field.value || ''}
                    />
                  )}
                />
                <Controller
                  name='FooterRightText'
                  control={control}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      label='FOOTER RIGHT TEXT'
                      fullWidth
                      sx={{ marginTop: '20px' }}
                      value={field.value || ''}
                    />
                  )}
                />

                {/* Page Layout */}
                <Controller
                  name='pageLayout'
                  control={control}
                  rules={{ required: 'Please select page layout' }}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      select
                      label='PAGE LAYOUT'
                      required
                      fullWidth
                      sx={{ marginTop: '20px' }}
                      value={field.value || ''}
                      SelectProps={{ displayEmpty: true }}
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.pageLayout}
                      helperText={errors.pageLayout?.message}
                    >
                      <MenuItem value='' disabled>
                        <span>Select Page Layout *</span>
                      </MenuItem>
                      {PAGE_LAYOUT_OPTIONS.map(o => (
                        <MenuItem key={o.value} value={o.value}>
                          {o.label}
                        </MenuItem>
                      ))}
                    </CustomTextField>
                  )}
                />

                {/* Student Photo */}
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '12px' }}>
                  <span style={{ marginRight: '20px' }}>STUDENT PHOTO</span>
                  <Controller
                    name='studentPhoto'
                    control={control}
                    render={({ field }) => (
                      <RadioGroup
                        row
                        aria-label='student photo'
                        value={field.value ? 'yes' : 'no'}
                        onChange={e => field.onChange(e.target.value === 'yes')}
                      >
                        <FormControlLabel value='yes' control={<Radio />} label='Yes' />
                        <FormControlLabel value='no' control={<Radio />} label='None' />
                      </RadioGroup>
                    )}
                  />
                </div>

                {/* Student Image */}
                <Controller
                  name='studentImage'
                  control={control}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      label='IMAGE URL (1100 X 850 PX)'
                      fullWidth
                      sx={{ marginTop: '20px' }}
                      value={field.value || ''}
                    />
                  )}
                />
              </CardContent>

              <CardActions sx={{ justifyContent: 'center', gap: 1 }}>
                {editingId !== null && (
                  <Button variant='outlined' color='secondary' onClick={handleCancelEdit}>
                    CANCEL
                  </Button>
                )}
                <Button type='submit' variant='contained' disabled={isSubmitting || isLoading}>
                  <CheckSharpIcon sx={{ mr: 1 }} />
                  {editingId !== null ? 'UPDATE CERTIFICATE' : 'SAVE CERTIFICATE'}
                </Button>
              </CardActions>
            </form>
          </Card>
        </div>

        {/* ---------------- Certificate list card ---------------- */}
        <div className='certificateList mt-4 mx-6' style={{ flex: 1, minWidth: 0 }}>
          <Card sx={{ width: '100%', height: 'auto', overflowY: 'auto' }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '16%' }}>
                  Certificate List
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
                      rows.map((item: certificateTypes, index: number) => (
                        <tr key={item.id} style={{ borderBottom: '1px solid #ddd' }}>
                          <td style={{ padding: '8px' }}>{isSearching ? index + 1 : (page - 1) * limit + index + 1}</td>
                          <td style={{ padding: '8px' }}>{item.certificateName}</td>
                          <td style={{ padding: '8px' }}>{formatLayout(item.pageLayout)}</td>
                          <td style={{ padding: '8px' }}>{formatDate(item.date)}</td>
                          <td style={{ padding: '8px' }}>{item.studentPhoto ? 'Yes' : 'No'}</td>
                          <td style={{ padding: '8px', whiteSpace: 'nowrap' }}>
                            <Button
                              variant='outlined'
                              size='small'
                              onClick={() => setViewing(item)}
                              disabled={isLoading}
                              style={{ borderRadius: '20px' }}
                            >
                              VIEW
                            </Button>
                            <Button
                              variant='outlined'
                              size='small'
                              onClick={() => handleEdit(item)}
                              disabled={isLoading}
                              style={{ borderRadius: '20px', marginLeft: '8px' }}
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

      {/* ---------------- View Certificate dialog ---------------- */}
      <Dialog open={viewing !== null} onClose={() => setViewing(null)} maxWidth='xl' fullWidth scroll='paper'>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {viewing?.certificateName ?? 'Certificate'}
          <IconButton onClick={() => setViewing(null)} title='Close' size='small'>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {/* A4 sizes are wider than most screens, so the preview scrolls inside the dialog */}
          <Box sx={{ overflow: 'auto', display: 'flex', justifyContent: 'center', py: 2 }}>
            <CertificateComponent data={viewing} />
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default CertificateLayout
