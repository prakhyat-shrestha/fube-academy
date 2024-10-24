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

const UploadContentLayout = () => {
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
          Upload Content List
        </Typography>
        <nav style={{ marginLeft: '54%' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '25px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '25px' }}>
              Study Material
            </Link>
            <span style={{ marginRight: '25px' }}>|</span>
            <Link href='#'>Upload Content List</Link>
          </Typography>
        </nav>
      </div>
      <div className='flex' style={{ display: 'flex' }}>
        {/* Upload content first card */}
        <div className='upLoadContent mt-4'>
          <Card sx={{ width: 300, height: 940 }}>
            <CardContent>
              <Typography variant='h6' component='h3'>
                Upload Content
              </Typography>
              <CustomTextField
                fullWidth
                label='CONTENT TITLE*'
                id='custom-select'
                style={{ margin: '20px 40px 0 0 ', width: '100%' }}
              />
              <CustomTextField
                select
                fullWidth
                defaultValue='contenttype'
                label='CONTENT TYPE*'
                id='custom-select'
                style={{ margin: '20px 40px 0 0 ', width: '100%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='contenttype'>
                  <span style={{ fontStyle: 'normal' }}>CONTENT TYPE *</span>
                </MenuItem>
                <MenuItem value='assignment'>
                  <span style={{ fontStyle: 'normal' }}>Assignment</span>
                </MenuItem>
                <MenuItem value='syllabus'>
                  <span style={{ fontStyle: 'normal' }}>Syllabus</span>
                </MenuItem>
                <MenuItem value='other'>
                  <span style={{ fontStyle: 'normal' }}>Other Downloads</span>
                </MenuItem>
              </CustomTextField>
              <div style={{ marginTop: '20px' }}>
                <span>AVAILABLE FOR *</span>
                <RadioGroup row aria-label='sizes' name='sizes' defaultValue='one' style={{ flexDirection: 'column' }}>
                  <FormControlLabel value='one' control={<Radio />} label='All Admin' />
                  <FormControlLabel value='two' control={<Radio />} label='Student' />
                  <FormControlLabel value='three' control={<Radio />} label='Available for all classes' disabled />
                </RadioGroup>
              </div>
              <CustomTextField
                select
                fullWidth
                defaultValue='class'
                label='CLASS *'
                id='custom-select'
                style={{ margin: '20px 40px 0 0 ', width: '100%' }}
                disabled
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
                disabled
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='section'>
                  <span style={{ fontStyle: 'normal' }}>SECTION *</span>
                </MenuItem>
              </CustomTextField>
              <CustomTextField
                label='DATE'
                type='date'
                style={{ margin: '20px 40px 0 0 ', width: '100%' }}
                InputLabelProps={{ shrink: true }}
              />
              <CustomTextField
                label='DESCRIPTION'
                multiline
                rows={2}
                disabled
                style={{ margin: '20px 40px 0 0 ', width: '100%' }}
              />
              <CustomTextField
                fullWidth
                label='SOURCE URL'
                id='custom-select'
                style={{ margin: '20px 40px 0 0 ', width: '100%' }}
              />
              <CustomTextField
                required
                value='File'
                style={{ margin: '20px 40px 0 0 ', width: '100%' }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <Button variant='contained' style={{ height: '25px', width: '90px', fontSize: '0.75rem' }}>
                        BROWSE
                      </Button>
                    </InputAdornment>
                  )
                }}
              />
              <span>(jpg,png,jpeg,pdf,doc,docx,mp4,mp3, txt are allowed for upload)</span>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant='contained'>
                <CheckSharpIcon style={{ marginRight: 5 }} />
                SAVE
              </Button>
            </CardActions>
          </Card>
        </div>

        {/* Upload Content List 2nd card */}
        <div className='uploadContentList mt-4 mx-6' style={{ flex: 1 }}>
          <Card sx={{ width: '102.65%', height: 290 }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '10%' }}>
                  Upload Content List
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
                          <span>Content Title</span>
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
                          <span>Type</span>
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
                          <span>Date</span>
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
                          <span>Available For </span>
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
                          <span>Class(Section)</span>
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
                      <td style={{ paddingLeft: '4%' }}></td>
                      <td style={{ padding: '8px' }}></td>
                      <td style={{ padding: '8px' }}></td>
                      <td style={{ padding: '8px' }}>No Data Available In Table</td>
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

export default UploadContentLayout
