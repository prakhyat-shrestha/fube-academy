'use client'
import * as React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  InputAdornment,
  ButtonGroup,
  createTheme,
  FormControlLabel,
  Radio,
  RadioGroup,
  MenuItem
} from '@mui/material'
import CustomTextField from '@/@core/components/mui/TextField'
import Typography from '@mui/material/Typography'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import { useRef } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const TopicLayout = () => {
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
          Topic
        </Typography>
        <nav style={{ marginLeft: 'auto' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '25px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '25px' }}>
              Lesson Plan
            </Link>
            <span style={{ marginRight: '25px' }}>|</span>
            <Link href='#'>Topic</Link>
          </Typography>
        </nav>
      </div>
      <div className='flex' style={{ display: 'flex' }}>
        {/* Topic first card */}
        <div className='topic mt-4'>
          <Card sx={{ width: 300, height: 530 }}>
            <CardContent>
              <Typography variant='h6' component='h3'>
                Add Topic
              </Typography>
              <CustomTextField
                select
                fullWidth
                defaultValue='class'
                label='CLASS *'
                id='custom-select'
                style={{ margin: '20px 40px 0 0 ', width: '100%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='class'>
                  <span style={{ fontStyle: 'normal' }}>CLASS *</span>
                </MenuItem>
                <MenuItem value='eced'>
                  <span style={{ fontStyle: 'normal' }}>ECED</span>
                </MenuItem>
                <MenuItem value='one'>
                  <span style={{ fontStyle: 'normal' }}>1</span>
                </MenuItem>
                <MenuItem value='two'>
                  <span style={{ fontStyle: 'normal' }}>2</span>
                </MenuItem>
              </CustomTextField>
              <CustomTextField
                select
                fullWidth
                defaultValue='section'
                label='SECTION *'
                id='custom-select'
                style={{ margin: '20px 40px 0 0 ', width: '100%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='section'>
                  <span style={{ fontStyle: 'normal' }}>SELECT SECTIONS *</span>
                </MenuItem>
              </CustomTextField>
              <CustomTextField
                select
                fullWidth
                defaultValue='subject'
                label='SUBJECT *'
                id='custom-select'
                style={{ margin: '20px 40px 0 0 ', width: '100%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='subject'>
                  <span style={{ fontStyle: 'normal' }}>SELECT SUBJECTS *</span>
                </MenuItem>
              </CustomTextField>
              <CustomTextField
                select
                fullWidth
                defaultValue='lesson'
                label='LESSON *'
                id='custom-select'
                style={{ margin: '20px 40px 0 0 ', width: '100%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='lesson'>
                  <span style={{ fontStyle: 'normal' }}>SELECT LESSON *</span>
                </MenuItem>
              </CustomTextField>
              <div className='title'>
                <div className='combo' style={{ display: 'flex', marginTop: '20px', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 'bolder' }}>Add Mark Ditributions</span>
                  <Button
                    variant='contained'
                    style={{
                      borderRadius: '50%',
                      width: '25px',
                      height: '25px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '25px',
                      padding: '0',
                      minWidth: '0',
                      minHeight: '0',
                      cursor: 'pointer'
                    }}
                  >
                    +
                  </Button>
                </div>

                <div style={{ display: 'flex', marginTop: '20px' }}>
                  <CustomTextField style={{ width: '50%' }} placeholder='Title' />
                  <Button
                    variant='contained'
                    style={{
                      borderRadius: '15%',
                      width: '25px',
                      height: '25px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '25px',
                      padding: '0',
                      minWidth: '0',
                      minHeight: '0',
                      cursor: 'pointer',
                      margin: '6px '
                    }}
                  >
                    {<i className='tabler-trash' />}
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant='contained'>
                <CheckSharpIcon style={{ marginRight: 5 }} />
                SAVE TOPIC
              </Button>
            </CardActions>
          </Card>
        </div>

        {/* Topic List 2nd card */}
        <div className='topicList mt-4 mx-6' style={{ flex: 1 }}>
          <Card sx={{ width: '102.3%', height: 270 }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '10%' }}>
                  Topic List
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
                          position: 'relative'
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
                          backgroundColor: 'lightgray',
                          borderRadius: '0',
                          position: 'relative'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                          <span>Class</span>
                        </div>
                      </th>
                      <th
                        style={{
                          padding: '8px',
                          textAlign: 'left',
                          backgroundColor: 'lightgray',
                          borderRadius: '0',
                          position: 'relative'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                          <span>Section</span>
                        </div>
                      </th>
                      <th
                        style={{
                          padding: '8px',
                          textAlign: 'left',
                          backgroundColor: 'lightgray',
                          borderRadius: '0',
                          position: 'relative'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                          <span>Subject</span>
                        </div>
                      </th>
                      <th
                        style={{
                          padding: '8px',
                          textAlign: 'left',
                          backgroundColor: 'lightgray',
                          borderRadius: '0',
                          position: 'relative'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                          <span>Lesson</span>
                        </div>
                      </th>
                      <th
                        style={{
                          padding: '8px',
                          textAlign: 'left',
                          backgroundColor: 'lightgray',
                          borderRadius: '0',
                          position: 'relative'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                          <span>Topic</span>
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
                      <td style={{ paddingLeft: '8px' }}></td>
                      <td style={{ padding: '8px' }}></td>
                      <td style={{ padding: '8px' }}></td>
                      <td style={{ padding: '8px' }}>No Data Available In Table</td>
                      <td style={{ padding: '8px' }}></td>
                      <td style={{ padding: '8px' }}></td>
                      <td style={{ padding: '8px' }}></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
            {/* Pagination */}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
              <Typography variant='body2' style={{ marginLeft: '16px' }}>
                Showing 0 to 0 of 0 entries
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
                  0
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

export default TopicLayout
