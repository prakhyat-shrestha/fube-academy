'use client'
import { CardContent, Typography, Card, InputAdornment, Button, CardActions, TextField } from '@mui/material'
import Link from 'next/link'
import CustomTextField from '@/@core/components/mui/TextField'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import ButtonGroup from '@mui/material/ButtonGroup'
import { Icon } from '@iconify/react'
import { createTheme } from '@mui/material/styles'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useRef, useState, useEffect } from 'react'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2'
    }
  }
})

const PostalReceiveLayout = () => {
  const textFieldRef = useRef<HTMLInputElement>(null)
  const [placeholder, setPlaceholder] = useState('QUICK SEARCH')

  useEffect(() => {
    // Ensure placeholder is set on mount
    if (textFieldRef.current) {
      textFieldRef.current.placeholder = placeholder
    }
  }, [placeholder])

  const handleFocus = () => {
    setPlaceholder('')
  }

  const handleBlur = () => {
    if (textFieldRef.current && textFieldRef.current.value === '') {
      setPlaceholder('SEARCH')
    }
  }
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h4'>
          Postal Receive
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
            <Link href='#'>Postal Receive</Link>
          </Typography>
        </nav>
      </div>
      <div className='flex' style={{ display: 'flex' }}>
        {/* Add postalReceive first card */}
        <div className='postalReceive mt-4'>
          <Card sx={{ width: 280, height: 'auto' }}>
            <CardContent>
              <Typography variant='h6' component='h4'>
                Add Postal Receive
              </Typography>
              <CustomTextField label='FORM TITLE' required fullWidth sx={{ marginTop: '20px' }} />
              <CustomTextField label='REFERENCE NO' required fullWidth sx={{ marginTop: '20px' }} />

              <CustomTextField label='ADDRESS' required fullWidth sx={{ marginTop: '20px' }} />
              <CustomTextField label='NOTE' multiline rows={3} fullWidth sx={{ marginTop: '20px' }} />

              <CustomTextField label='TO TITLE' required fullWidth sx={{ marginTop: '20px' }} />
              <CustomTextField label='DATE' type='date' fullWidth sx={{ marginTop: '20px' }} />
              <CustomTextField
                required
                label='FILE'
                value='Attach File'
                fullWidth
                sx={{ mt: 2 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <Button variant='contained' sx={{ height: '25px', width: '90px', fontSize: '0.75rem' }}>
                        BROWSE
                      </Button>
                    </InputAdornment>
                  )
                }}
              />
              <Typography variant='body2' sx={{ mt: 2 }}>
                (PDF, DOC, DOCX, JPG, JPEG, PNG, TXT are allowed for upload)
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant='contained' sx={{ fontSize: 'small' }}>
                <CheckSharpIcon sx={{ marginRight: 1 }} />
                SAVE POSTAL RECEIVE
              </Button>
            </CardActions>
          </Card>
        </div>
        {/*  2nd card */}
        <div className='postalReceiveList mt-4 mx-6' style={{ flex: 1 }}>
          <Card sx={{ width: '102.3%', height: '35%' }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '16%' }}>
                  Postal Receive List
                </Typography>
                <div style={{ flexGrow: 1 }}>
                  <TextField
                    id='standard-search'
                    variant='standard'
                    placeholder={placeholder}
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
                          <span>From Title</span>
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
                          <span>Reference No</span>
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
                          <span>Address</span>
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
                          <span>To Title</span>
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
                          <span>Note</span>
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
                          <span>Date</span>
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
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '8px' }}></td>
                      <td style={{ padding: '8px' }}></td>
                      <td style={{ padding: '5px' }}></td>
                      <td style={{ padding: '5px' }}>No Data Available in Table</td>
                      <td style={{ padding: '5px' }}></td>
                      <td style={{ padding: '5px' }}></td>
                      <td style={{ padding: '5px' }}></td>
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

export default PostalReceiveLayout
