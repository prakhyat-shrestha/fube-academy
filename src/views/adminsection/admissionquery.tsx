'use client'
import {
  Typography,
  MenuItem,
  TextField,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText
} from '@mui/material'
import Link from 'next/link'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CustomTextField from '@core/components/mui/TextField'
import Button from '@mui/material/Button'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import AddSharpIcon from '@mui/icons-material/AddSharp'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import { Icon } from '@iconify/react/dist/iconify.js'
import ButtonGroup from '@mui/material/ButtonGroup'
import { useEffect, useRef, useState } from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { admissionQueryTypes } from '@/types/admissionQuery'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { useAdmissionQueryStore } from '@/stores/admissionQueryStore'
import { useClassStore } from '@/stores/classStore'
import { useStaffStore } from '@/stores/staffStore'
import { ClassTypes } from '@/types/class'
import { staffTypes } from '@/types/staff'
import type { DateRange } from '@mui/lab'

const InitialForm: Partial<admissionQueryTypes> = {
  name: '',
  phone: '',
  email: '',
  address: '',
  description: '',
  nextFollowUpDate: '',
  reference: '',
  source: '',
  numberOfChild: '',
  activeStatus: true,
  staffId: undefined,
  classId: undefined
}

// Replace with your real source list / API data
const SOURCE_OPTIONS = ['Walk In', 'Phone Call', 'Website', 'Facebook', 'Newspaper', 'Referral', 'Other']

const formatDate = (value?: string) => (value ? value.slice(0, 10) : '-')

const AdmissionQueryLayout = () => {
  const textFieldRef = useRef<HTMLInputElement>(null)

  //declaring variable
  const [open, setOpen] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)

  const { classes, listOfClass } = useClassStore()
  const { Staff, listOfStaff } = useStaffStore()
  const {
    admissionQuery,
    pagination,
    isLoading,
    listOfAdmissionQuery,
    addAdmissionQuery,
    updateAdmissionQuery,
    deleteAdmissionQuery,
    searchAdmissionQuery
  } = useAdmissionQueryStore()

  const { page, limit, total, totalPages } = pagination

  const startEntry = total === 0 ? 0 : (page - 1) * limit + 1
  const endEntry = Math.min(page * limit, total)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [activeStatus, setActiveStatus] = useState('')
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<Partial<admissionQueryTypes>>({
    defaultValues: InitialForm
  })

  //getting admission query list
  useEffect(() => {
    listOfAdmissionQuery()
    listOfClass()
    listOfStaff()
  }, [listOfAdmissionQuery, listOfClass, listOfStaff])

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || newPage === page) return
    listOfAdmissionQuery(newPage, 10)
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
      textFieldRef.current.placeholder = 'QUICK SEARCH'
    }
  }

  // ---- Dialog handlers ----
  const handleClickOpen = () => {
    setEditingId(null)
    reset(InitialForm)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setEditingId(null)
    reset(InitialForm)
  }

  const handleSearch = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!startDate || !endDate || !activeStatus) {
      alert('please select startDate, endDate, activeStatus')
    }
    const res = await searchAdmissionQuery(startDate, endDate, activeStatus)
  }

  const handleEdit = (item: admissionQueryTypes) => {
    setEditingId(item.id)
    reset({
      name: item.name ?? '',
      phone: item.phone ?? '',
      email: item.email ?? '',
      address: item.address ?? '',
      description: item.description ?? '',
      nextFollowUpDate: item.nextFollowUpDate ? item.nextFollowUpDate.slice(0, 10) : '',
      reference: item.reference ?? '',
      source: item.source ?? '',
      numberOfChild: item.numberOfChild ?? '',
      activeStatus: item.activeStatus,
      staffId: item.staffId,
      classId: item.classId
    })
    setOpen(true)
  }

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this admission query?')) return
    await deleteAdmissionQuery(id)
  }

  const onSubmit: SubmitHandler<Partial<admissionQueryTypes>> = async data => {
    const payload: Partial<admissionQueryTypes> = {
      ...data,
      staffId: data.staffId ? Number(data.staffId) : undefined,
      classId: data.classId ? Number(data.classId) : undefined
    }

    // store actions return true on success (see store patch)
    editingId !== null ? await updateAdmissionQuery(editingId, payload) : await addAdmissionQuery(payload)
    console.log('checking payload', payload)
    handleClose()
  }

  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Admission Query
        </Typography>
        <nav style={{ marginLeft: 'auto' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Admin Section
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Admission Query </Link>
          </Typography>
        </nav>
      </div>

      {/* ---------------- Add / Edit Dialog ---------------- */}
      <Dialog id='add-admission_query' open={open} onClose={handleClose} fullWidth maxWidth='md'>
        <DialogTitle>{editingId !== null ? 'Edit Admission Query' : 'Add Admission Query'}</DialogTitle>

        {/* form wraps BOTH content and actions so the Submit button works */}
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <DialogContent>
            <Grid container spacing={3}>
              {/* Name */}
              <Grid item xs={12} sm={6} md={4}>
                <Controller
                  name='name'
                  control={control}
                  rules={{
                    required: 'Please enter your full name',
                    minLength: { value: 6, message: 'Name must be at least 6 characters' }
                  }}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      fullWidth
                      required
                      label='NAME'
                      value={field.value || ''}
                      error={!!errors.name}
                      helperText={errors.name?.message}
                    />
                  )}
                />
              </Grid>

              {/* Phone */}
              <Grid item xs={12} sm={6} md={4}>
                <Controller
                  name='phone'
                  control={control}
                  rules={{
                    required: 'Please enter phone number',
                    pattern: { value: /^[0-9+\-\s]{7,15}$/, message: 'Enter a valid phone number' }
                  }}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      fullWidth
                      required
                      label='PHONE'
                      value={field.value || ''}
                      error={!!errors.phone}
                      helperText={errors.phone?.message}
                    />
                  )}
                />
              </Grid>

              {/* Email */}
              <Grid item xs={12} sm={6} md={4}>
                <Controller
                  name='email'
                  control={control}
                  rules={{
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' }
                  }}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      fullWidth
                      label='EMAIL'
                      value={field.value || ''}
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                  )}
                />
              </Grid>

              {/* Source */}
              <Grid item xs={12} sm={6} md={4}>
                <Controller
                  name='source'
                  control={control}
                  rules={{ required: 'Please select source' }}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      select
                      fullWidth
                      required
                      label='SOURCE'
                      value={field.value || ''}
                      error={!!errors.source}
                      helperText={errors.source?.message}
                    >
                      {SOURCE_OPTIONS.map(src => (
                        <MenuItem key={src} value={src}>
                          {src}
                        </MenuItem>
                      ))}
                    </CustomTextField>
                  )}
                />
              </Grid>

              {/* Reference */}
              <Grid item xs={12} sm={6} md={4}>
                <Controller
                  name='reference'
                  control={control}
                  render={({ field }) => (
                    <CustomTextField {...field} fullWidth label='REFERENCE' value={field.value || ''} />
                  )}
                />
              </Grid>

              {/* Number of child */}
              <Grid item xs={12} sm={6} md={4}>
                <Controller
                  name='numberOfChild'
                  control={control}
                  rules={{
                    pattern: { value: /^[0-9]*$/, message: 'Only numbers allowed' }
                  }}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      fullWidth
                      label='NUMBER OF CHILD'
                      value={field.value || ''}
                      error={!!errors.numberOfChild}
                      helperText={errors.numberOfChild?.message}
                    />
                  )}
                />
              </Grid>

              {/* Class */}
              <Grid item xs={12} sm={6} md={4}>
                <Controller
                  name='classId'
                  control={control}
                  rules={{ required: 'Please Select Class' }}
                  render={({ field }) => (
                    // TODO: replace with a select populated from your class store
                    <CustomTextField
                      select
                      {...field}
                      fullWidth
                      required

                      label='CLASS NAME'
                      value={field.value ?? ''}
                      error={!!errors.classId}
                      helperText={errors.classId?.message}
                    >
                      {(classes ?? []).map((cls: ClassTypes) => (
                        <MenuItem key={cls.id} value={cls.id}>
                          {cls.name}
                        </MenuItem>
                      ))}
                    </CustomTextField>
                  )}
                />
              </Grid>

              {/* Assigned staff */}
              <Grid item xs={12} sm={6} md={4}>
                <Controller
                  name='staffId'
                  control={control}
                  rules={{ required: 'Please enter assigned staff' }}
                  render={({ field }) => (
                    // TODO: replace with a select populated from your staff store
                    <CustomTextField
                      select
                      {...field}
                      fullWidth
                      required

                      label='ASSIGNED STAFF'
                      value={field.value ?? ''}
                      error={!!errors.staffId}
                      helperText={errors.staffId?.message}
                    >
                      {(Staff ?? []).map((s: staffTypes) => (
                        <MenuItem key={s.id} value={s.id}>
                          {s.name}
                        </MenuItem>
                      ))}
                    </CustomTextField>
                  )}
                />
              </Grid>

              {/* Next follow up date */}
              <Grid item xs={12} sm={6} md={4}>
                <Controller
                  name='nextFollowUpDate'
                  control={control}
                  rules={{ required: 'Please select next follow up date' }}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      fullWidth
                      required
                      type='date'
                      label='NEXT FOLLOW UP DATE'
                      value={field.value || ''}
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.nextFollowUpDate}
                      helperText={errors.nextFollowUpDate?.message}
                    />
                  )}
                />
              </Grid>

              {/* Address */}
              <Grid item xs={12} sm={6}>
                <Controller
                  name='address'
                  control={control}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      fullWidth
                      multiline
                      rows={3}
                      label='ADDRESS'
                      value={field.value || ''}
                    />
                  )}
                />
              </Grid>

              {/* Description */}
              <Grid item xs={12} sm={6}>
                <Controller
                  name='description'
                  control={control}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      fullWidth
                      multiline
                      rows={3}
                      label='DESCRIPTION'
                      value={field.value || ''}
                    />
                  )}
                />
              </Grid>

              {/* Active status */}
              <Grid item xs={12}>
                <Controller
                  name='activeStatus'
                  control={control}
                  render={({ field }) => (
                    <FormControl error={!!errors.activeStatus}>
                      <FormLabel id='active-status'>ACTIVE STATUS</FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby='active-status'
                        value={field.value === false ? 'false' : 'true'}
                        onChange={e => field.onChange(e.target.value === 'true')}
                      >
                        <FormControlLabel value='true' control={<Radio />} label='Active' />
                        <FormControlLabel value='false' control={<Radio />} label='Inactive' />
                      </RadioGroup>
                      {errors.activeStatus && <FormHelperText>{errors.activeStatus.message}</FormHelperText>}
                    </FormControl>
                  )}
                />
              </Grid>
            </Grid>
          </DialogContent>

          <DialogActions>
            <Button variant='outlined' color='secondary' onClick={handleClose}>
              Cancel
            </Button>
            <Button type='submit' variant='contained' disabled={isSubmitting || isLoading}>
              <CheckSharpIcon style={{ marginRight: 5 }} />
              {editingId !== null ? 'Update' : 'Submit'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      {/* ---------------- Select Criteria ---------------- */}
      <div className='flex mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div
              className='container'
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}
            >
              <Typography variant='h6' component='h4'>
                Select Criteria
              </Typography>
              <Button
                id='add-admission_query'
                variant='contained'
                startIcon={<AddSharpIcon />}
                onClick={handleClickOpen}
              >
                ADD
              </Button>
            </div>

            <div
              className='container'
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <Typography variant='body2' component='div' style={{ width: '24%' }}>
                <CustomTextField
                  label='DATE FROM'
                  type='date'
                  value={startDate}
                  onChange={e => setStartDate(e.target.value)}
                  style={{ width: '100%' }}
                  InputLabelProps={{ shrink: true }}
                />
              </Typography>

              <Typography variant='body2' component='div' style={{ width: '24%' }}>
                <CustomTextField
                  label='DATE TO'
                  type='date'
                  value={endDate}
                  onChange={e => setEndDate(e.target.value)}
                  style={{ width: '100%' }}
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ min: startDate }} // optional: prevents picking earlier than start
                />
              </Typography>

              <CustomTextField
                select
                fullWidth
                value={activeStatus}
                onChange={e => setActiveStatus(e.target.value)}
                label='STATUS*'
                id='status-select'
                style={{ width: '24%' }}
                SelectProps={{ displayEmpty: true }}
                InputLabelProps={{ shrink: true }}
              >
                <MenuItem value='' disabled>
                  <span style={{ fontStyle: 'normal' }}>Select Status*</span>
                </MenuItem>
                <MenuItem value='true'>Active</MenuItem>
                <MenuItem value='false'>Inactive</MenuItem>
              </CustomTextField>
            </div>

            <div
              className='container mt-6'
              style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}
            >
              <Button variant='contained' onClick={handleSearch} startIcon={<SearchSharpIcon />}>
                SEARCH
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ---- Table Section ----*/}
      <div className='admissionQuery mt-7 ' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '16%' }}>
                Query List
              </Typography>
              <div style={{ flexGrow: 1 }}>
                <TextField
                  id='standard-search'
                  variant='standard'
                  placeholder='QUICK SEARCH'
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
              {/*---------- Button Group Section ----------- */}
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

            {/*--------- Table section --------*/}
            <div style={{ marginTop: '20px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th
                      style={{
                        padding: '8px',
                        textAlign: 'left',
                        backgroundColor: 'lightgray',
                        position: 'relative',
                        borderRadius: '5px 0 0 5px'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                        <span>SL </span>
                      </div>
                    </th>
                    <th style={{ padding: '8px', textAlign: 'left', backgroundColor: 'lightgray' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                        <span>Name </span>
                      </div>
                    </th>
                    <th style={{ padding: '8px', textAlign: 'left', backgroundColor: 'lightgray' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                        <span>Phone </span>
                      </div>
                    </th>
                    <th style={{ padding: '8px', textAlign: 'left', backgroundColor: 'lightgray' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                        <span>Source </span>
                      </div>
                    </th>
                    <th style={{ padding: '8px', textAlign: 'left', backgroundColor: 'lightgray' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                        <span>Query Date</span>
                      </div>
                    </th>
                    <th style={{ padding: '8px', textAlign: 'left', backgroundColor: 'lightgray' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                        <span>Last Follow Up Date</span>
                      </div>
                    </th>
                    <th style={{ padding: '8px', textAlign: 'left', backgroundColor: 'lightgray' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                        <span>Next Follow Up Date</span>
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

                {/*----- Table body section ----- */}
                <tbody>
                  {(admissionQuery ?? []).length === 0 ? (
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td colSpan={8} style={{ padding: '8px', textAlign: 'center' }}>
                        No Data Available in Table
                      </td>
                    </tr>
                  ) : (
                    (admissionQuery ?? []).map((item: admissionQueryTypes, index: number) => (
                      <tr key={item.id} style={{ borderBottom: '1px solid #ddd' }}>
                        <td style={{ padding: '8px' }}>{(page - 1) * limit + index + 1}</td>
                        <td style={{ padding: '8px' }}>{item.name}</td>
                        <td style={{ padding: '8px' }}>{item.phone}</td>
                        <td style={{ padding: '8px' }}>{item.source}</td>
                        <td style={{ padding: '8px' }}>{formatDate(item.createdAt)}</td>
                        <td style={{ padding: '8px' }}>{formatDate(item.updatedAt)}</td>
                        <td style={{ padding: '8px' }}>{formatDate(item.nextFollowUpDate)}</td>
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
              Showing {startEntry} to {endEntry} of {total} entries
            </Typography>
            {/*----- Page number section ----- */}
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
                <ArrowBackIcon style={{ transform: 'scale(0.8)' }} />
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
    </>
  )
}

export default AdmissionQueryLayout
