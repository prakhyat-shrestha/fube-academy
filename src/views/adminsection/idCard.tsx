'use client'

import React, { useEffect, useMemo, useState } from 'react'

import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  Divider,
  IconButton,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  CircularProgress,
  Chip,
  Stack,
  Tooltip
} from '@mui/material'

import AddSharpIcon from '@mui/icons-material/AddSharp'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import CloseIcon from '@mui/icons-material/Close'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import VisibilityIcon from '@mui/icons-material/Visibility'
import EditIcon from '@mui/icons-material/Edit'

import Link from 'next/link'

import IdCard from '@/UI/IdCard'

import { idCardFormTypes, idCardTypes } from '@/types/idCard'

import { useIdCardStore } from '@/stores/idCardStore'

// --------------------------------------------------
// CONSTANTS
// --------------------------------------------------

const API_BASE_URL = 'http://localhost:5000'

const defaultForm: idCardFormTypes = {
  idCardTitle: 'Student ID Card',
  adminLayout: 'VERTICAL',
  applicableUser: 'STUDENT',
  profileImage: null,
  userPhotoStyle: 'ROUND',
  logo: null,
  signatureFile: null,
  admissionNo: true,
  name: true,
  class: true,
  address: true,
  photoFile: true,
  signature: true
}

// --------------------------------------------------
// COMPONENT
// --------------------------------------------------

const IDCardlayout = () => {
  // Zustand
  const { idCards, isLoading, pagination, listOfIdCard, addIdCard, updateIdCard, deleteIdCard } = useIdCardStore()

  // Dialog
  const [open, setOpen] = useState(false)

  // Search
  const [search, setSearch] = useState('')

  // Edit ID
  const [editingId, setEditingId] = useState<number | null>(null)

  // Selected preview
  const [selectedCard, setSelectedCard] = useState<idCardTypes | null>(null)

  // Form
  const [formData, setFormData] = useState<idCardFormTypes>({ ...defaultForm })

  // Delete confirmation
  const [deleteTarget, setDeleteTarget] = useState<idCardTypes | null>(null)

  // --------------------------------------------------
  // FETCH DATA
  // --------------------------------------------------

  useEffect(() => {
    listOfIdCard(1, 100)
  }, [listOfIdCard])

  // --------------------------------------------------
  // FILTER DATA
  // --------------------------------------------------

  const filteredCards = useMemo(() => {
    return idCards.filter(card => {
      const matchesSearch = card.idCardTitle?.toLowerCase().includes(search.toLowerCase())

      return matchesSearch && !card.isDeleted
    })
  }, [idCards, search])

  // --------------------------------------------------
  // DIALOG HANDLERS
  // --------------------------------------------------

  const handleCreate = () => {
    setEditingId(null)
    setFormData({ ...defaultForm })
    setOpen(true)
  }

  const handleEdit = (card: idCardTypes) => {
    setEditingId(card.id)

    setFormData({
      idCardTitle: card.idCardTitle,
      adminLayout: card.adminLayout,
      applicableUser: card.applicableUser,
      profileImage: card.profileImage,
      userPhotoStyle: card.userPhotoStyle,
      logo: card.logo,
      signatureFile: card.signatureFile,
      admissionNo: card.admissionNo,
      name: card.name,
      class: card.class,
      address: card.address,
      photoFile: card.photoFile,
      signature: card.signature
    })

    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setEditingId(null)
    setFormData({ ...defaultForm })
  }

  // --------------------------------------------------
  // INPUT HANDLERS
  // --------------------------------------------------

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSelectChange = (event: any) => {
    const { name, value } = event.target

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSwitchChange = (name: keyof idCardFormTypes, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }))
  }

  // --------------------------------------------------
  // FILE HANDLER
  // --------------------------------------------------

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: 'profileImage' | 'logo' | 'signatureFile'
  ) => {
    const file = event.target.files?.[0]

    if (!file) return

    setFormData(prev => ({
      ...prev,
      [field]: file
    }))
  }

  const getFileName = (file?: File | string | null) => {
    if (!file) return 'No file selected'

    if (typeof file === 'string') {
      return file.split('/').pop() || file
    }

    return file.name
  }

  // --------------------------------------------------
  // CREATE / UPDATE
  // --------------------------------------------------

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!formData.idCardTitle?.trim()) return

    let success = false

    if (editingId !== null) {
      await updateIdCard(editingId, formData)
    } else {
      await addIdCard(formData)
    }

    handleClose()
    setSelectedCard(null)
  }

  // --------------------------------------------------
  // DELETE
  // --------------------------------------------------

  const handleDelete = async () => {
    if (!deleteTarget) return

    const success = await deleteIdCard(deleteTarget.id)

    if (success) {
      if (selectedCard?.id === deleteTarget.id) {
        setSelectedCard(null)
      }

      setDeleteTarget(null)
    }
  }

  // --------------------------------------------------
  // PREVIEW
  // --------------------------------------------------

  const previewConfig = selectedCard || filteredCards[0]

  // --------------------------------------------------
  // FILE INPUT COMPONENT
  // --------------------------------------------------

  const renderFileUpload = (label: string, field: 'profileImage' | 'logo' | 'signatureFile') => (
    <Grid item xs={12} sm={4}>
      <Button
        component='label'
        variant='outlined'
        fullWidth
        sx={{
          height: 52,
          textTransform: 'none'
        }}
      >
        {label}

        <input hidden type='file' accept='image/*' onChange={event => handleFileChange(event, field)} />
      </Button>

      <Typography variant='caption' color='text.secondary' display='block' mt={1} sx={{ overflowWrap: 'anywhere' }}>
        {getFileName(formData[field])}
      </Typography>
    </Grid>
  )

  // --------------------------------------------------
  // SWITCH COMPONENT
  // --------------------------------------------------

  const renderSwitch = (label: string, field: keyof idCardFormTypes) => (
    <Grid item xs={12} sm={6} md={4}>
      <FormControlLabel
        control={
          <Switch
            checked={Boolean(formData[field])}
            onChange={event => handleSwitchChange(field, event.target.checked)}
          />
        }
        label={label}
      />
    </Grid>
  )

  // --------------------------------------------------
  // JSX
  // --------------------------------------------------

  return (
    <Box>
      {/* PAGE HEADER */}

      <Box display='flex' justifyContent='space-between' alignItems='center' flexWrap='wrap' gap={2} mb={3}>
        <Typography variant='h5' fontWeight={600}>
          ID Card
        </Typography>

        <Stack direction='row' spacing={1} alignItems='center'>
          <Link href='#' style={{ textDecoration: 'none' }}>
            Dashboard
          </Link>

          <Typography color='text.secondary'>/</Typography>

          <Link href='#' style={{ textDecoration: 'none' }}>
            Admin Section
          </Link>

          <Typography color='text.secondary'>/</Typography>

          <Typography color='text.secondary'>ID Card</Typography>
        </Stack>
      </Box>

      {/* ID CARD PREVIEW */}

      <Card sx={{ mb: 3, borderRadius: 2 }}>
        <CardContent>
          <Box display='flex' justifyContent='space-between' alignItems='center' mb={2}>
            <Typography variant='h6' fontWeight={600}>
              ID Card Preview
            </Typography>

            {previewConfig && <Chip label={previewConfig.idCardTitle} color='primary' variant='outlined' />}
          </Box>

          {previewConfig ? (
            <IdCard
              config={previewConfig}
              assetBaseUrl={API_BASE_URL}
              student={{
                id: 101,
                name: 'Irma Boyle',
                admissionNo: '83638',
                className: 'Class 1 (A)',
                address: 'Kathmandu, Nepal'
              }}
            />
          ) : (
            <Typography color='text.secondary'>No ID card configuration available.</Typography>
          )}
        </CardContent>
      </Card>

      {/* ID CARD LIST */}

      <Card sx={{ borderRadius: 2 }}>
        <CardContent>
          <Box display='flex' justifyContent='space-between' alignItems='center' flexWrap='wrap' gap={2} mb={3}>
            <Typography variant='h6' fontWeight={600}>
              ID Card List
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} width={{ xs: '100%', sm: 'auto' }}>
              <TextField
                size='small'
                placeholder='Search ID Card'
                value={search}
                onChange={event => setSearch(event.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <SearchSharpIcon />
                    </InputAdornment>
                  )
                }}
              />

              <Button variant='contained' startIcon={<AddSharpIcon />} onClick={handleCreate}>
                CREATE ID CARD
              </Button>
            </Stack>
          </Box>

          {/* TABLE */}

          <Box sx={{ overflowX: 'auto' }}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                  <TableCell>
                    <strong>SL</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Title</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Layout</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Applicable User</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Photo Style</strong>
                  </TableCell>
                  <TableCell align='center'>
                    <strong>Action</strong>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {isLoading && idCards.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} align='center'>
                      <CircularProgress size={28} />
                    </TableCell>
                  </TableRow>
                ) : filteredCards.length > 0 ? (
                  filteredCards.map((card, index) => (
                    <TableRow key={card.id} hover selected={selectedCard?.id === card.id}>
                      <TableCell>{index + 1}</TableCell>

                      <TableCell>{card.idCardTitle}</TableCell>

                      <TableCell>
                        <Chip label={card.adminLayout} size='small' color='primary' />
                      </TableCell>

                      <TableCell>{card.applicableUser}</TableCell>

                      <TableCell>{card.userPhotoStyle}</TableCell>

                      <TableCell align='center'>
                        <Tooltip title='Preview'>
                          <IconButton color='primary' onClick={() => setSelectedCard(card)}>
                            <VisibilityIcon />
                          </IconButton>
                        </Tooltip>

                        <Tooltip title='Edit'>
                          <IconButton color='success' onClick={() => handleEdit(card)}>
                            <EditIcon />
                          </IconButton>
                        </Tooltip>

                        <Tooltip title='Delete'>
                          <IconButton color='error' onClick={() => setDeleteTarget(card)}>
                            <DeleteOutlineIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} align='center'>
                      No Data Available in the Table
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Box>

          {/* PAGINATION SUMMARY */}

          <Box display='flex' justifyContent='space-between' alignItems='center' mt={2}>
            <Typography variant='body2' color='text.secondary'>
              Showing {filteredCards.length} of {pagination.total} entries
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* ========================================== */}
      {/* CREATE / EDIT DIALOG */}
      {/* ========================================== */}

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth='md' scroll='paper'>
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography variant='h6' fontWeight={600}>
            {editingId !== null ? 'Edit ID Card' : 'Create ID Card'}
          </Typography>

          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <Divider />

        <form onSubmit={handleSubmit}>
          <DialogContent>
            <Grid container spacing={3}>
              {/* BASIC INFORMATION */}

              <Grid item xs={12}>
                <Typography fontWeight={600}>Basic Information</Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label='ID Card Title'
                  name='idCardTitle'
                  value={formData.idCardTitle || ''}
                  onChange={handleTextChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Card Layout</InputLabel>

                  <Select
                    name='adminLayout'
                    value={formData.adminLayout || 'VERTICAL'}
                    label='Card Layout'
                    onChange={handleSelectChange}
                  >
                    <MenuItem value='VERTICAL'>Vertical</MenuItem>
                    <MenuItem value='HORIZONTAL'>Horizontal</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Applicable User</InputLabel>

                  <Select
                    name='applicableUser'
                    value={formData.applicableUser || 'STUDENT'}
                    label='Applicable User'
                    onChange={handleSelectChange}
                  >
                    <MenuItem value='STUDENT'>Student</MenuItem>
                    <MenuItem value='STAFF'>Staff</MenuItem>
                    <MenuItem value='GUARDIAN'>Guardian</MenuItem>
                    <MenuItem value='VIP'>VIP</MenuItem>
                    <MenuItem value='OTHER'>Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Photo Style</InputLabel>

                  <Select
                    name='userPhotoStyle'
                    value={formData.userPhotoStyle || 'ROUND'}
                    label='Photo Style'
                    onChange={handleSelectChange}
                  >
                    <MenuItem value='ROUND'>Round</MenuItem>
                    <MenuItem value='SQUARE'>Square</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* FILE UPLOADS */}

              <Grid item xs={12}>
                <Divider />
                <Typography fontWeight={600} mt={1}>
                  Images & Signature
                </Typography>
              </Grid>

              {renderFileUpload('Upload Profile Image', 'profileImage')}

              {renderFileUpload('Upload School Logo', 'logo')}

              {renderFileUpload('Upload Signature', 'signatureFile')}

              {/* DISPLAY OPTIONS */}

              <Grid item xs={12}>
                <Divider />
                <Typography fontWeight={600} mt={1}>
                  Display Information
                </Typography>
              </Grid>

              {renderSwitch('Admission Number', 'admissionNo')}

              {renderSwitch('Student Name', 'name')}

              {renderSwitch('Class', 'class')}

              {renderSwitch('Address', 'address')}

              {renderSwitch('Student Photo', 'photoFile')}

              {renderSwitch('Signature', 'signature')}

              {/* LIVE PREVIEW */}

              <Grid item xs={12}>
                <Divider sx={{ mb: 2 }} />

                <Typography fontWeight={600} mb={1}>
                  Live ID Card Preview
                </Typography>

                <IdCard
                  config={formData}
                  assetBaseUrl={API_BASE_URL}
                  student={{
                    id: 101,
                    name: 'Irma Boyle',
                    admissionNo: '83638',
                    className: 'Class 1 (A)',
                    address: 'Kathmandu, Nepal'
                  }}
                />
              </Grid>
            </Grid>
          </DialogContent>

          <Divider />

          <DialogActions sx={{ p: 2 }}>
            <Button variant='outlined' color='inherit' onClick={handleClose} disabled={isLoading}>
              Cancel
            </Button>

            <Button
              variant='contained'
              type='submit'
              disabled={isLoading}
              startIcon={
                isLoading ? (
                  <CircularProgress size={18} color='inherit' />
                ) : editingId !== null ? (
                  <EditIcon />
                ) : (
                  <AddSharpIcon />
                )
              }
            >
              {isLoading ? 'Saving...' : editingId !== null ? 'Update ID Card' : 'Save ID Card'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      {/* ========================================== */}
      {/* DELETE CONFIRMATION DIALOG */}
      {/* ========================================== */}

      <Dialog open={Boolean(deleteTarget)} onClose={() => setDeleteTarget(null)} maxWidth='xs' fullWidth>
        <DialogTitle>Delete ID Card</DialogTitle>

        <DialogContent>
          <Typography>
            Are you sure you want to delete <strong>{deleteTarget?.idCardTitle}</strong>?
          </Typography>
        </DialogContent>

        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setDeleteTarget(null)} color='inherit' disabled={isLoading}>
            Cancel
          </Button>

          <Button variant='contained' color='error' onClick={handleDelete} disabled={isLoading}>
            {isLoading ? 'Deleting...' : 'Delete'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default IDCardlayout
