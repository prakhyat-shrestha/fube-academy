'use client'
import { Typography, TextField, InputAdornment } from '@mui/material'
import Link from 'next/link'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import CustomTextField from '@/@core/components/mui/TextField'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import { useRef } from 'react'
import { createTheme } from '@mui/material/styles'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import ButtonGroup from '@mui/material/ButtonGroup'
import { Icon } from '@iconify/react/dist/iconify.js'

const RoleLayout = () => {
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
          Role
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Role and Permission
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Role </Link>
          </Typography>
        </nav>
      </div>

      <div className='flex' style={{ display: 'flex' }}>
        {/* Add role first card */}
        <div className='role mt-4'>
          <Card sx={{ width: 320, height: '82%' }}>
            <CardContent>
              <Typography variant='h6' component='h4'>
                Add Role
              </Typography>
              <CustomTextField label='NAME' required style={{ width: '100%', marginTop: '20px' }} />
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant='contained'>
                <CheckSharpIcon style={{ marginRight: 5 }} />
                SAVE
              </Button>
            </CardActions>
          </Card>
        </div>

        {/* ---- Table Section ----*/}
        <div className='roleList mt-4 mx-6 ' style={{ flex: 1 }}>
          <Card sx={{ width: '102.78%', height: '105%' }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' component='h3' style={{ marginRight: '25%' }}>
                  Role List
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
                          <span>Role </span>
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
                          <span>Type</span>
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
                      <td style={{ padding: '8px' }}>Accountant</td>
                      <td style={{ padding: '8px' }}>System</td>
                      <td style={{ padding: '1% 0 1% 1%' }}>
                        <div className='btn' style={{ display: 'flex', gap: '10px' }}>
                          <Button variant='outlined' size='small' style={{ borderRadius: '20px' }}>
                            SELECT <ArrowDownwardIcon />
                          </Button>
                          <Button variant='outlined' href='/examsetup' size='small' style={{ borderRadius: '10px' }}>
                            ASSIGN PERMISSION
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '8px' }}>Admin</td>
                      <td style={{ padding: '8px' }}>System</td>
                      <td style={{ padding: '1% 0 1% 1%' }}>
                        <div className='btn' style={{ display: 'flex', gap: '10px' }}>
                          <Button variant='outlined' size='small' style={{ borderRadius: '20px' }}>
                            SELECT <ArrowDownwardIcon />
                          </Button>
                          <Button variant='outlined' href='/examsetup' size='small' style={{ borderRadius: '10px' }}>
                            ASSIGN PERMISSION
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
              <Typography variant='body2' style={{ marginLeft: '8px' }}>
                Showing 1 to 2 of 2 entries
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

export default RoleLayout
