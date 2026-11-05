'use client'

// React Imports
import React, { useEffect, useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import {
  Box,
  CardContent,
  CardHeader,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography
} from '@mui/material'

// Store Imports
import { useParentsStore } from '@/stores/parentStore'
import { useStudentStore } from '@/stores/studentStores'

// Components Imports
import CustomTextField from '@core/components/mui/TextField'

// Types
import { studentTypes } from '@/types/student'
import { ParentsTypes } from '@/types/parents'

const parentsInitialForm: Partial<ParentsTypes> = {
  fatherName: '',
  fatherOccupation: '',
  fatherPhoneNumber: '',
  photo: null,
  motherName: '',
  motherOccupation: '',
  motherPhoneNumber: '',
  motherPhoto: null,
  relationWithGuardian: '',
  guardianName: '',
  guardianEmail: '',
  guardianPhoto: null,
  guardianPhone: '',
  guardianOccupation: '',
  guardianAddress: ''
}

type Props = {
  onParentSaved?: (id: number) => void
}

const Parents_and_guardian_Info = ({ onParentSaved }: Props) => {
  // Add-new-guardian form
  const [parentsFormData, setParentsFormData] = useState<Partial<ParentsTypes>>(parentsInitialForm)
  const [formKey, setFormKey] = useState(0) // remounts file inputs after reset

  // Search dialog state (kept separate from the add form)
  const [searchPhone, setSearchPhone] = useState('')
  const [siblingParentId, setSiblingParentId] = useState<number | ''>('')

  // Dialog visibility
  const [openSearchDialog, setOpenSearchDialog] = useState(false)
  const [openAddDialog, setOpenAddDialog] = useState(false)

  const isPhoneActive = Boolean(searchPhone.trim())
  const isSiblingActive = siblingParentId !== ''

  const { searchParents, listOfParents, addParents } = useParentsStore()
  const { student, listOfStudent } = useStudentStore()

  useEffect(() => {
    listOfParents()
    listOfStudent()
  }, [listOfParents, listOfStudent])

  // Helpers
  const setField = (key: keyof ParentsTypes) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setParentsFormData(prev => ({ ...prev, [key]: e.target.value }))

  const setFileField = (key: keyof ParentsTypes) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setParentsFormData(prev => ({ ...prev, [key]: e.target.files?.[0] ?? null }))

  // Search dialog handlers
  const handleOpenSearch = () => setOpenSearchDialog(true)

  const handleCloseSearch = () => {
    setOpenSearchDialog(false)
    setSearchPhone('')
    setSiblingParentId('')
  }

  const handleSelectSibling = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (siblingParentId === '') return
    onParentSaved?.(siblingParentId)
    handleCloseSearch()
  }

  const handleSearch = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!searchPhone.trim()) {
      alert('Please enter your guardian phone number')
      return
    }
    const res = await searchParents(searchPhone.trim())
    if (!res?.id) {
      alert('No Guardian Found.')
      return
    }
    onParentSaved?.(res.id)
    handleCloseSearch()
  }

  // Add dialog handlers
  const handleOpenAdd = () => setOpenAddDialog(true)
  const handleCloseAdd = () => setOpenAddDialog(false)

  const handleReset = () => {
    setParentsFormData(parentsInitialForm)
    setFormKey(k => k + 1)
  }

  const handleChangeInRelationWithGuardian = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    setParentsFormData(prev => {
      if (value === 'FATHER') {
        return {
          ...prev,
          relationWithGuardian: value,
          guardianName: prev.fatherName ?? '',
          guardianPhoto: prev.photo ?? null,
          guardianPhone: prev.fatherPhoneNumber ?? '',
          guardianOccupation: prev.fatherOccupation ?? ''
        }
      }

      if (value === 'MOTHER') {
        return {
          ...prev,
          relationWithGuardian: value,
          guardianName: prev.motherName ?? '',
          guardianPhoto: prev.motherPhoto ?? null,
          guardianPhone: prev.motherPhoneNumber ?? '',
          guardianOccupation: prev.motherOccupation ?? ''
        }
      }

      // OTHER: clear so the user can type a different person
      return {
        ...prev,
        relationWithGuardian: value,
        guardianName: '',
        guardianPhoto: null,
        guardianPhone: '',
        guardianOccupation: ''
      }
    })
  }

  const handleParents = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const res = await addParents(parentsFormData)
    if (!res?.id) return
    onParentSaved?.(res.id)
    handleReset()
    setOpenAddDialog(false)
  }

  return (
    <>
      {/* Landing: search or add */}
      <div>
        <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: 600 }}>
          Search Your Guardians
        </Typography>
        <Typography variant='body2' color='text.secondary' sx={{ textAlign: 'center', mt: 1 }}>
          Find an existing guardian or add a new one
        </Typography>

        <div className='flex justify-center items-center gap-4 mt-6'>
          <Button variant='contained' type='button' onClick={handleOpenSearch}>
            Existing Guardians
          </Button>
          <Button variant='outlined' type='button' onClick={handleOpenAdd}>
            Add New Guardian
          </Button>
        </div>
      </div>

      {/* Search existing guardian dialog */}
      <Dialog open={openSearchDialog} onClose={handleCloseSearch} fullWidth maxWidth='xs'>
        <DialogTitle sx={{ textAlign: 'center', pb: 1 }}>
          Search Guardian
          <Typography variant='body2' color='text.secondary'>
            Use one of the options below
          </Typography>
        </DialogTitle>

        <DialogContent sx={{ pt: 2 }}>
          {/* Option 1: phone number */}
          <Box sx={{ opacity: isSiblingActive ? 0.5 : 1, transition: 'opacity .2s' }}>
            <CustomTextField
              fullWidth
              label='Guardian Phone Number'
              placeholder='98XXXXXXXX'
              disabled={isSiblingActive}
              value={searchPhone}
              onChange={e => setSearchPhone(e.target.value)}
            />
            {isPhoneActive && (
              <Button size='small' sx={{ mt: 1 }} onClick={() => setSearchPhone('')}>
                Clear
              </Button>
            )}
          </Box>

          <Divider sx={{ my: 4 }}>
            <Chip label='OR' size='small' />
          </Divider>

          {/* Option 2: sibling */}
          <Box sx={{ opacity: isPhoneActive ? 0.5 : 1, transition: 'opacity .2s' }}>
            <CustomTextField
              select
              fullWidth
              label='Search from Your Sibling'
              disabled={isPhoneActive}
              value={siblingParentId}
              onChange={e => setSiblingParentId(e.target.value === '' ? '' : Number(e.target.value))}
            >
              <MenuItem value=''>
                <em>Select a sibling</em>
              </MenuItem>
              {(student ?? []).map((s: studentTypes) => (
                <MenuItem key={s.id} value={s.parentId}>
                  {s.name}
                </MenuItem>
              ))}
            </CustomTextField>
            {isSiblingActive && (
              <Button size='small' sx={{ mt: 1 }} onClick={() => setSiblingParentId('')}>
                Clear
              </Button>
            )}
          </Box>
        </DialogContent>

        <DialogActions sx={{ justifyContent: 'space-between', px: 6, pb: 4 }}>
          <Button color='secondary' onClick={handleCloseSearch}>
            Cancel
          </Button>
          <Button
            variant='contained'
            type='button'
            disabled={!isPhoneActive && !isSiblingActive}
            onClick={isPhoneActive ? handleSearch : handleSelectSibling}
          >
            {isPhoneActive ? 'Search' : 'Enter'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Add new guardian dialog */}
      <Dialog id='add_new_parents' open={openAddDialog} onClose={handleCloseAdd} fullWidth maxWidth='lg'>
        <DialogContent key={formKey}>
          <Grid container spacing={6}>
            {/* Parents Info */}
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardHeader title='Parents Info' titleTypographyProps={{ variant: 'subtitle1' }} />
                <Divider />
                <CardContent>
                  <Grid container spacing={6}>
                    <Grid item xs={12} sm={6}>
                      <CustomTextField
                        fullWidth
                        required
                        label='Father Name'
                        value={parentsFormData.fatherName ?? ''}
                        onChange={setField('fatherName')}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomTextField
                        fullWidth
                        label='Father Occupation'
                        value={parentsFormData.fatherOccupation ?? ''}
                        onChange={setField('fatherOccupation')}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomTextField
                        fullWidth
                        label='Father Phone Number'
                        value={parentsFormData.fatherPhoneNumber ?? ''}
                        onChange={setField('fatherPhoneNumber')}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomTextField fullWidth type='file' label='Father Photo' onChange={setFileField('photo')} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomTextField
                        fullWidth
                        label='Mother Name'
                        value={parentsFormData.motherName ?? ''}
                        onChange={setField('motherName')}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomTextField
                        fullWidth
                        label='Mother Occupation'
                        value={parentsFormData.motherOccupation ?? ''}
                        onChange={setField('motherOccupation')}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomTextField
                        fullWidth
                        label='Mother Phone Number'
                        value={parentsFormData.motherPhoneNumber ?? ''}
                        onChange={setField('motherPhoneNumber')}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomTextField
                        fullWidth
                        type='file'
                        label='Mother Photo'
                        onChange={setFileField('motherPhoto')}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* Guardian Info */}
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardHeader title='Guardian Info' titleTypographyProps={{ variant: 'subtitle1' }} />
                <Divider />
                <CardContent>
                  <Grid container spacing={6}>
                    <Grid item xs={12} className='flex items-center gap-4 flex-wrap'>
                      <Typography className='font-medium uppercase'>Relation With Guardian</Typography>
                      <RadioGroup
                        row
                        value={parentsFormData.relationWithGuardian ?? ''}
                        onChange={handleChangeInRelationWithGuardian}
                      >
                        <FormControlLabel value='FATHER' control={<Radio />} label='Father' />
                        <FormControlLabel value='MOTHER' control={<Radio />} label='Mother' />
                        <FormControlLabel value='OTHER' control={<Radio />} label='Others' />
                      </RadioGroup>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomTextField
                        fullWidth
                        required
                        label='Guardian Name'
                        value={parentsFormData.guardianName ?? ''}
                        onChange={setField('guardianName')}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomTextField
                        fullWidth
                        label='Guardian Email'
                        value={parentsFormData.guardianEmail ?? ''}
                        onChange={setField('guardianEmail')}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomTextField
                        fullWidth
                        type='file'
                        label='Guardian Photo'
                        onChange={setFileField('guardianPhoto')}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomTextField
                        fullWidth
                        required
                        label='Guardian Phone'
                        value={parentsFormData.guardianPhone ?? ''}
                        onChange={setField('guardianPhone')}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomTextField
                        fullWidth
                        required
                        label='Guardian Occupation'
                        value={parentsFormData.guardianOccupation ?? ''}
                        onChange={setField('guardianOccupation')}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomTextField
                        fullWidth
                        required
                        label='Guardian Address'
                        value={parentsFormData.guardianAddress ?? ''}
                        onChange={setField('guardianAddress')}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions sx={{ px: 6, pb: 4 }}>
          <Button color='secondary' type='button' onClick={handleCloseAdd}>
            Cancel
          </Button>
          <Button variant='contained' type='button' onClick={handleParents}>
            Add Parents
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Parents_and_guardian_Info
