'use client'
import * as React from 'react'
import CustomTextField from '@/@core/components/mui/TextField'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import { TextField, InputAdornment, Card, CardActions, CardContent, Button, Typography } from '@mui/material'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import ButtonGroup from '@mui/material/ButtonGroup'
import { useRef } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import { createTheme } from '@mui/material/styles'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const MarksGradeLayout = () => {
  const textFieldRef = useRef<HTMLInputElement>(null)

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

  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2'
      }
    }
  })

  return (
    <>
      <div className='flex '>
        <Typography variant='h6' component='h3'>
          Exam Type
        </Typography>
        <nav style={{ marginLeft: '66%' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '25px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '25px' }}>
              Examination
            </Link>
            <span style={{ marginRight: '25px' }}>|</span>
            <Link href='#'>Exam Type</Link>
          </Typography>
        </nav>
      </div>
      <div className='flex' style={{ display: 'flex' }}>
        {/* Add marks grade first card */}
        <div className='marksGrade mt-4'>
          <Card sx={{ width: 280, height: 705 }}>
            <CardContent>
              <Typography variant='h6' component='h3'>
                Add Grade
              </Typography>
              <Typography variant='body2' component='div'>
                <CustomTextField required label='Grade Name' style={{ marginTop: 20, width: '100%' }} />
                <CustomTextField required label='GPA' style={{ marginTop: 20, width: '100%' }} />
                <CustomTextField required label='PERCENT FROM' style={{ marginTop: 20, width: '100%' }} />
                <CustomTextField required label='PERCENT TO' style={{ marginTop: 20, width: '100%' }} />
                <CustomTextField required label='GPA FROM' style={{ marginTop: 20, width: '100%' }} />
                <CustomTextField required label='GPA TO' style={{ marginTop: 20, width: '100%' }} />
                <CustomTextField label='DESCRIPTION' multiline rows={3} style={{ marginTop: 20, width: '100%' }} />
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant='contained'>
                <CheckSharpIcon style={{ marginRight: 5 }} />
                SAVE GRADE
              </Button>
            </CardActions>
          </Card>
        </div>

        {/* Exam Type list 2nd card */}
        <div className='marksGradeList mt-4 mx-6' style={{ flex: 1 }}>
          <Card sx={{ width: '102.65%', height: 460 }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '16%' }}>
                  Grade List
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
                          position: 'relative' // Required for rounded corners
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                          <span>SL</span>
                        </div>
                      </th>
                      <th
                        style={{
                          padding: '8px',
                          textAlign: 'left',
                          backgroundColor: 'lightgray'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                          <span>Grade </span>
                        </div>
                      </th>
                      <th
                        style={{
                          padding: '8px',
                          textAlign: 'left',
                          backgroundColor: 'lightgray'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                          <span>GPA</span>
                        </div>
                      </th>
                      <th
                        style={{
                          padding: '8px',
                          textAlign: 'left',
                          backgroundColor: 'lightgray'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                          <span>Percent(From-to)</span>
                        </div>
                      </th>
                      <th
                        style={{
                          padding: '8px',
                          textAlign: 'left',
                          backgroundColor: 'lightgray'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                          <span>GPA(From-to)</span>
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
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '2% 0 2% 3%' }}>Sample Name 1</td>
                      <td style={{ padding: '2% 0 2% 3%' }}>Sample Description 1</td>
                      <td style={{ padding: '2% 0 2% 3%' }}>Sample Description 1</td>
                      <td style={{ padding: '2% 0 2% 3%' }}>Sample Description 1</td>
                      <td style={{ padding: '2% 0 2% 3%' }}>Sample Description 1</td>
                      <td style={{ padding: '2% 0 2% 0' }}>
                        <div className='btn' style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Button variant='outlined' size='small' style={{ borderRadius: '20px' }}>
                            SELECT <ArrowDownwardIcon />
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '2% 0 2% 3%' }}>Sample Name 2</td>
                      <td style={{ padding: '2% 0 2% 3%' }}>Sample Description 2</td>
                      <td style={{ padding: '2% 0 2% 3%' }}>Sample Description 2</td>
                      <td style={{ padding: '2% 0 2% 3%' }}>Sample Description 2</td>
                      <td style={{ padding: '2% 0 2% 3%' }}>Sample Description 2</td>
                      <td style={{ padding: '2% 0 2% 0' }}>
                        <div className='btn' style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Button variant='outlined' size='small' style={{ borderRadius: '20px' }}>
                            SELECT <ArrowDownwardIcon />
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '2% 0 2% 3%' }}>Sample Name 3</td>
                      <td style={{ padding: '2% 0 2% 3%' }}>Sample Description 3</td>
                      <td style={{ padding: '2% 0 2% 3%' }}>Sample Description 3</td>
                      <td style={{ padding: '2% 0 2% 3%' }}>Sample Description 3</td>
                      <td style={{ padding: '2% 0 2% 3%' }}>Sample Description 3</td>
                      <td style={{ padding: '2% 0 2% 0' }}>
                        <div className='btn' style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Button variant='outlined' size='small' style={{ borderRadius: '20px' }}>
                            SELECT <ArrowDownwardIcon />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
            {/* Pagination */}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
              <Typography variant='body2' style={{ marginLeft: '16px' }}>
                Showing 1 to 3 of 3 entries
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
                    background: theme.palette.primary.main,
                    cursor: 'pointer'
                  }}
                >
                  1
                </Typography>
                <Button
                  size='small'
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

export default MarksGradeLayout
