'use client'
import CustomTextField from '@/@core/components/mui/TextField'
import Link from '@/components/Link'
import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid,
  InputAdornment,
  TextField,
  Typography
} from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useStaffStore } from '@/stores/staffStore'
import SearchBarLayout from '@/dynamicDeclaredField/searchBar'
import { Icon } from '@iconify/react/dist/iconify.js'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { createTheme } from '@mui/material/styles'
import { staffTypes } from '@/types/staff'
import { useRouter } from 'next/navigation'

function staffDirectory() {
  const { Staff, listOfStaff, updateStaff, deleteStaff, isLoading, pagination } = useStaffStore()
  const { page, limit, total, totalPages } = pagination

  const startEntry = total === 0 ? 0 : (page - 1) * limit
  const endEntry = Math.min(page * limit, total)

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || newPage === page) return
  }

  const getPageNumber = () => {
    const windowSize = 5
    let start = Math.max(1, page - Math.floor(windowSize / 2))
    const end = Math.min(totalPages, start + windowSize - 1)
    start = Math.max(1, end - windowSize + 1)
    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  }
  const textFieldRef = useRef<HTMLInputElement>(null)

  const router = useRouter()

  const handleFocus = () => {
    if (textFieldRef.current) {
      textFieldRef.current.placeholder = ''
    }
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2'
      }
    }
  })
  const handleBlur = () => {
    if (textFieldRef.current && textFieldRef.current.value === '') {
      textFieldRef.current.placeholder = 'SEARCH'
    }
  }

  const handleEdit = (id: number) => {
    router.push(`/addStaff?id=${id}`)
  }
  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure want to delete this staff')) return
    await deleteStaff(id)
  }

  useEffect(() => {
    listOfStaff()
    // listOfDepartment()
    // listOfDesignation()
  }, [listOfStaff])

  const searchFields = [
    { id: 1, label: 'Branch', placeHolderName: 'search by Branch' },
    { id: 2, label: 'Role', placeHolderName: 'Search by Role' },
    { id: 3, label: 'Staff Id', placeHolderName: 'Search by staff id' },
    { id: 4, label: 'Name', placeHolderName: 'Search by Name' }
  ]
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Staff List
        </Typography>
        <nav style={{ marginLeft: '61%' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '25px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '25px' }}>
              Human Resources
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#'> Staff Directory</Link>
          </Typography>
        </nav>
      </div>
      <div className='flex mt-4' style={{ flexDirection: 'column' }}>
        {/* Add first layout */}
        <SearchBarLayout items={searchFields} />
        {/* Second Layout */}
        <Card className='mt-1' sx={{ width: '100%' }}>
          <CardContent>
            <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant='h6'>Staff List</Typography>
              <TextField size='small' placeholder='Quick Search' />
              <Button variant='contained'>+ Add Staff</Button>
            </Grid>
          </CardContent>
        </Card>
        {/* Third Card Added */}
        <div className='staffList mt-4 ' style={{ flex: 1 }}>
          <Card sx={{ width: '100%', height: 'calc(100vh - 100px)', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' component='h3' style={{ flex: 1 }}>
                  Staff List
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
              <div style={{ marginTop: '20px', flex: 1, minHeight: 0, overflowY: 'auto' }}>
                <div style={{ maxHeight: '100%', overflowY: 'auto' }}>
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
                            <span>employee Id</span>
                          </div>
                        </th>
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
                            <span>Email Id</span>
                          </div>
                        </th>
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
                            <span>Phone Number</span>
                          </div>
                        </th>
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
                            <span>Branch</span>
                          </div>
                        </th>
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
                            <span>Designation</span>
                          </div>
                        </th>
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
                            <span>Department</span>
                          </div>
                        </th>
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
                            <span>Active Status</span>
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
                      {Staff.map((staffList: Partial<staffTypes>) => (
                        <tr key={staffList.id} style={{ borderBottom: '1px solid #ddd' }}>
                          <td style={{ paddingLeft: '4%' }}>{staffList.empId}</td>
                          <td style={{ paddingLeft: '4%' }}>{staffList.name}</td>
                          <td style={{ paddingLeft: '4%' }}>{staffList.email}</td>
                          <td style={{ paddingLeft: '4%' }}>{staffList.phone}</td>
                          <td style={{ paddingLeft: '4%' }}>{staffList.branch}</td>
                          <td style={{ paddingLeft: '4%' }}>{staffList.designation?.title}</td>
                          <td style={{ paddingLeft: '4%' }}>{staffList.department?.title}</td>
                          <td style={{ paddingLeft: '4%' }}>{staffList.activeStatus ? 'Active' : 'InActive'}</td>
                          <td style={{ padding: '8px' }}>
                            <Button
                              variant='outlined'
                              size='small'
                              onClick={() => handleEdit(staffList.id ?? 0)}
                              disabled={isLoading}
                              style={{ borderRadius: '20px' }}
                            >
                              EDIT <ArrowDownwardIcon />
                            </Button>
                            <Button
                              className='m-3 bg-red-300'
                              size='small'
                              onClick={() => handleDelete(staffList.id ?? 0)}
                              disabled={isLoading}
                              style={{ borderRadius: '20px' }}
                            >
                              DELETE <ArrowDownwardIcon />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
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
                <Button
                  size='small'
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page >= totalPages || isLoading}
                  style={{ minWidth: 'auto', padding: '4px 8px', color: page >= totalPages ? undefined : 'black' }}
                >
                  <ArrowForwardIcon style={{ fontSize: '16px' }} />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default staffDirectory
