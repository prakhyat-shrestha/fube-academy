'use client'
import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import CustomTextField from '@/@core/components/mui/TextField'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import {
  TextField,
  InputAdornment,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Menu,
  MenuItem
} from '@mui/material'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import ButtonGroup from '@mui/material/ButtonGroup'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useFeesGroupStore } from '@/stores/feesGroupStores'
import { feesGroupTypes } from '@/types/feesGroup'

const LIMIT = 10

const FeesGroupList = () => {
  const textFieldRef = useRef<HTMLInputElement>(null)

  const {
    feesGroup,
    pagination,
    isLoading,
    listOfFeesGroup,
    addFeesGroup,
    updateFeesGroup,
    deleteFeesGroup,
    searchFeesGroup
  } = useFeesGroupStore()

  // form state
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [editId, setEditId] = useState<number | null>(null)

  // search state
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState<feesGroupTypes[] | null>(null)

  // action menu state
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [selected, setSelected] = useState<feesGroupTypes | null>(null)

  // initial load
  useEffect(() => {
    listOfFeesGroup(1, LIMIT)
  }, [])

  // debounced search
  useEffect(() => {
    const q = search.trim()
    if (!q) {
      setSearchResults(null)
      return
    }
    const timer = setTimeout(async () => {
      const data = await searchFeesGroup(q)
      setSearchResults(data ?? [])
    }, 400)
    return () => clearTimeout(timer)
  }, [search])

  const rows = searchResults ?? feesGroup
  const isSearching = searchResults !== null

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

  const resetForm = () => {
    setName('')
    setDescription('')
    setEditId(null)
  }

  const handleSubmit = async () => {
    if (!name.trim()) return
    const payload = { name: name.trim(), description: description.trim() }
    const ok = editId ? await updateFeesGroup(editId, payload) : await addFeesGroup(payload)
    if (ok) {
      resetForm()
      setSearch('')
    }
  }

  const handleOpenMenu = (e: React.MouseEvent<HTMLElement>, row: feesGroupTypes) => {
    setAnchorEl(e.currentTarget)
    setSelected(row)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
    setSelected(null)
  }

  const handleEdit = () => {
    if (!selected) return
    setEditId(selected.id)
    setName(selected.name)
    setDescription(selected.description ?? '')
    handleCloseMenu()
  }

  const handleDelete = async () => {
    if (!selected) return
    const id = selected.id
    handleCloseMenu()
    if (!window.confirm('Are you sure you want to delete this fees group?')) return
    const ok = await deleteFeesGroup(id)
    if (ok) {
      if (editId === id) resetForm()
      setSearch('')
    }
  }

  const handlePageChange = (page: number) => {
    listOfFeesGroup(page, LIMIT)
  }

  const from = rows.length === 0 ? 0 : isSearching ? 1 : (pagination.page - 1) * pagination.limit + 1
  const to = isSearching ? rows.length : from === 0 ? 0 : from + rows.length - 1
  const total = isSearching ? rows.length : pagination.total

  return (
    <>
      <div className='flex '>
        <Typography variant='h6' component='h3'>
          Fees Group
        </Typography>
        <nav style={{ marginLeft: '70%' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '25px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '25px' }}>
              Fees
            </Link>
            <span style={{ marginRight: '25px' }}>|</span>
            <Link href='#'>Fees Group</Link>
          </Typography>
        </nav>
      </div>
      <div className='flex' style={{ display: 'flex' }}>
        {/* Add / edit fees group first card */}
        <div className='feesGroup mt-4'>
          <Card sx={{ width: 280, height: 390 }}>
            <CardContent>
              <Typography variant='h6' component='h3'>
                {editId ? 'Edit Fees Group' : 'Add Fees Group'}
              </Typography>
              <Typography variant='body2' component='div'>
                <CustomTextField
                  required
                  label='NAME'
                  value={name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                  style={{ marginTop: 20, width: '100%' }}
                />
              </Typography>
              <Typography variant='body2' component='div'>
                <CustomTextField
                  label='DESCRIPTION'
                  multiline
                  rows={5}
                  value={description}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
                  style={{ marginTop: 20, width: '100%' }}
                />
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center', gap: 8 }}>
              <Button variant='contained' onClick={handleSubmit} disabled={isLoading || !name.trim()}>
                <CheckSharpIcon style={{ marginRight: 5 }} />
                {editId ? 'UPDATE' : 'SAVE'}
              </Button>
              {editId && (
                <Button variant='outlined' onClick={resetForm} disabled={isLoading}>
                  CANCEL
                </Button>
              )}
            </CardActions>
          </Card>
        </div>

        {/* Fees Group list 2nd card */}
        <div className='feesGroupList mt-4 mx-6' style={{ flex: 1 }}>
          <Card sx={{ width: '102%', minHeight: 370 }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '16%' }}>
                  Fees Group List
                </Typography>
                <div style={{ flexGrow: 1 }}>
                  <TextField
                    id='standard-search'
                    variant='standard'
                    placeholder='SEARCH'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
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
                          <span>Name</span>
                        </div>
                      </th>
                      <th style={{ padding: '8px', textAlign: 'left', backgroundColor: 'lightgray' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                          <span>Description</span>
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
                    {rows.length === 0 ? (
                      <tr>
                        <td colSpan={3} style={{ padding: '16px', textAlign: 'center' }}>
                          {isLoading ? 'Loading...' : 'No data found'}
                        </td>
                      </tr>
                    ) : (
                      rows.map(row => (
                        <tr key={row.id} style={{ borderBottom: '1px solid #ddd' }}>
                          <td style={{ padding: '8px' }}>{row.name}</td>
                          <td style={{ padding: '8px' }}>{row.description}</td>
                          <td style={{ padding: '8px' }}>
                            <Button
                              variant='outlined'
                              size='small'
                              style={{ borderRadius: '20px' }}
                              onClick={e => handleOpenMenu(e, row)}
                            >
                              SELECT <ArrowDownwardIcon />
                            </Button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>

                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
                  <MenuItem onClick={handleEdit}>Edit</MenuItem>
                  <MenuItem onClick={handleDelete}>Delete</MenuItem>
                </Menu>
              </div>
            </CardContent>

            {/* Pagination */}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
              <Typography variant='body2' style={{ marginLeft: '16px' }}>
                Showing {from} to {to} of {total} entries
              </Typography>
              {!isSearching && (
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
                    disabled={pagination.page <= 1 || isLoading}
                    onClick={() => handlePageChange(pagination.page - 1)}
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
                  <Typography
                    variant='body2'
                    sx={{
                      color: 'white',
                      padding: '4px 16px',
                      borderRadius: '4px',
                      backgroundColor: 'primary.main'
                    }}
                  >
                    {pagination.page}
                  </Typography>
                  <Button
                    size='small'
                    disabled={pagination.page >= pagination.totalPages || isLoading}
                    onClick={() => handlePageChange(pagination.page + 1)}
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
              )}
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default FeesGroupList
