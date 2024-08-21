'use client'
import { Typography, TextField, InputAdornment, MenuItem } from '@mui/material'
import Link from 'next/link'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import CustomTextField from '@/@core/components/mui/TextField'
import { RadioGroup, FormControlLabel, Radio, FormLabel } from '@mui/material'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import { useRef } from 'react'
import { createTheme } from '@mui/material/styles'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import ButtonGroup from '@mui/material/ButtonGroup'
import { Icon } from '@iconify/react/dist/iconify.js'

const CertificateLayout = () => {
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
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Certificate
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Admin Section
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Certificate </Link>
          </Typography>
        </nav>
      </div>

      <div className='flex' style={{ display: 'flex' }}>
        {/* Add fees group first card */}
        <div className='feesGroup mt-4'>
          <Card sx={{ width: 450, height: '100%' }}>
            <CardContent>
              <Typography variant='h6' component='h4'>
                Add Certificate
              </Typography>
              <CustomTextField label='Certificate Name' required style={{ width: '100%', marginTop: '20px' }} />
              <CustomTextField label='Header Left Text' style={{ marginTop: '20px', width: '100%' }} />

              <CustomTextField label='DATE ' type='date' style={{ width: '100%', marginTop: '20px' }} />
              <CustomTextField
                label='Body(Max character length 500)'
                multiline
                rows={2}
                style={{ marginTop: '20px', width: '100%' }}
              />
              <p>
                [name] [dob] [present_address] [guardian] [created_at] [admission_no] [roll_no] [gender]
                [admission_date] [category] [cast] [father_name] [mother_name] [religion] [email] [phone] [class]
                [section]
              </p>
              <div className='flex' style={{ display: 'flex', gap: 10 }}>
                <CustomTextField select label='Body Font' style={{ marginTop: '20px', width: '100%' }}>
                  <CustomTextField placeholder='Search' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                  <MenuItem value='arial'>
                    <span>Arial</span>
                  </MenuItem>
                  <MenuItem value='arial-black'>
                    <span>Arial Black</span>
                  </MenuItem>
                  <MenuItem value='comic'>
                    <span>Comic Sans MS</span>
                  </MenuItem>
                </CustomTextField>
                <CustomTextField
                  label='Font Size'
                  required
                  placeholder='Ex:2em'
                  style={{ marginTop: '20px', width: '100%' }}
                />
              </div>
              <CustomTextField label='Footer Left Text' style={{ marginTop: '20px', width: '100%' }} />
              <CustomTextField label='Footer Center Text' style={{ marginTop: '20px', width: '100%' }} />
              <CustomTextField label='Footer Right Text' style={{ marginTop: '20px', width: '100%' }} />
              <CustomTextField
                label='Page Layout'
                select
                defaultValue='page'
                required
                style={{ marginTop: '20px', width: '100%' }}
              >
                <CustomTextField placeholder='Search' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='page'>
                  <span>Page Layout</span>
                </MenuItem>
                <MenuItem value='A4P'>
                  <span>A4(Potrait)</span>
                </MenuItem>
                <MenuItem value='A4L'>
                  <span>A4(Landscape)</span>
                </MenuItem>
                <MenuItem value='custom'>
                  <span>Custom</span>
                </MenuItem>
              </CustomTextField>
              <div className='flex' style={{ display: 'flex', gap: 10 }}>
                <CustomTextField required label='Height(mm)' style={{ marginTop: '20px', width: '100%' }} />
                <CustomTextField label='Width(mm)' required style={{ marginTop: '20px', width: '100%' }} />
              </div>
              <div style={{ display: 'flex' }}>
                <span style={{ marginRight: '20px', marginTop: '20px' }}>STUDENT PHOTO</span>
                <div style={{ display: 'flex', marginTop: '12px' }}>
                  <RadioGroup row aria-label='sizes' name='sizes' defaultValue='yes'>
                    <FormControlLabel value='yes' control={<Radio />} label='Yes' />
                    <FormControlLabel value='none' control={<Radio />} label='None' />
                  </RadioGroup>
                </div>
              </div>
              <CustomTextField
                required
                placeholder='Image (1100 X 850)px*'
                style={{ marginTop: 20, width: '100%' }}
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
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant='contained'>
                <CheckSharpIcon style={{ marginRight: 5 }} />
                SAVE CERTIFICATE
              </Button>
            </CardActions>
          </Card>
        </div>
        {/* ---- Table Section ----*/}
        <div className='feesList mt-4 mx-6 ' style={{ flex: 1 }}>
          <Card sx={{ width: '102%', height: '25%' }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '16%' }}>
                  Certificate List
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
                        backgroundColor: 'tansparent',
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
                          <span>Name </span>
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
                          <span>Background Image</span>
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
                          <span>Default For</span>
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
                  {/*----- Table body section ----- */}
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '8px' }}>
                        <Link href='#' style={{ fontWeight: 'bold' }}>
                          School Leaving
                        </Link>
                      </td>
                      <td style={{ padding: '8px' }}></td>
                      <td style={{ padding: '8px' }}></td>
                      <td style={{ padding: '8px' }}>
                        <Button variant='outlined' size='small' style={{ borderRadius: '20px' }}>
                          SELECT <ArrowDownwardIcon />
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
            {/* Pagination */}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
              <Typography variant='body2' style={{ marginLeft: '8px' }}>
                Showing 1 to 1 of 1 entries
              </Typography>
              {/*----- Page number section ----- */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 'auto',
                  cursor: 'pointer',
                  marginRight: '40%'
                }}
              >
                <Button
                  size='small'
                  style={{
                    color: 'black',
                    padding: '4px 8px',
                    width: '30px',
                    minWidth: 'auto',
                    border: 'none'
                  }}
                >
                  <ArrowBackIcon style={{ transform: 'scale(0.8)' }} />
                </Button>
                <Typography
                  variant='body2'
                  sx={{
                    color: 'white',
                    padding: '4px 16px',
                    borderRadius: '4px',
                    background: theme.palette.primary.main,
                    cursor: 'pointer',
                    margin: '0 5px 0 5px'
                  }}
                >
                  1
                </Typography>
                <Button
                  size='small'
                  style={{
                    color: 'black',
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

export default CertificateLayout
