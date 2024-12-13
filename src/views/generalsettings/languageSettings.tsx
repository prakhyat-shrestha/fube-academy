'use client'
import * as React from 'react'

import { useRef, useState } from 'react'

import Link from 'next/link'

import Typography from '@mui/material/Typography'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'

import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import ButtonGroup from '@mui/material/ButtonGroup'

import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Card from '@mui/material/Card'
import { Icon } from '@iconify/react/dist/iconify.js'
import { createTheme } from '@mui/material/styles'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import SettingsIcon from '@mui/icons-material/Settings'
import DownloadIcon from '@mui/icons-material/Download'
import { MenuItem, TextField, InputAdornment } from '@mui/material'
import UploadIcon from '@mui/icons-material/Upload'
import CloseIcon from '@mui/icons-material/Close'

const LanguageSettingsLayout = () => {
  const textFieldRef = useRef<HTMLInputElement>(null)

  const [language, setLanguage] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLanguage(event.target.value)
  }

  const languages = [
    { name: 'English', native: 'English' },
    { name: 'Spanish', native: 'Español' },
    { name: 'French', native: 'Français' },
    { name: 'German', native: 'Deutsch' },
    { name: 'Chinese', native: '中文' },
    { name: 'Japanese', native: '日本語' },
    { name: 'Hindi', native: 'हिंदी' },
    { name: 'Arabic', native: 'العربية' },
    { name: 'Portuguese', native: 'Português' },
    { name: 'Russian', native: 'Русский' },
    { name: 'Italian', native: 'Italiano' },
    { name: 'Korean', native: '한국어' },
    { name: 'Turkish', native: 'Türkçe' },
    { name: 'Vietnamese', native: 'Tiếng Việt' },
    { name: 'Thai', native: 'ไทย' },
    { name: 'Bengali', native: 'বাংলা' },
    { name: 'Urdu', native: 'اردو' },
    { name: 'Malay', native: 'Bahasa Melayu' },
    { name: 'Persian', native: 'فارسی' },
    { name: 'Swahili', native: 'Kiswahili' },
    { name: 'Icelandic', native: 'Íslenska' }
  ]

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
        <Typography variant='h5' component='h3'>
          Language Settings
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              System Settings
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Language Settings</Link>
          </Typography>
        </nav>
      </div>
      <div className='flex' style={{ display: 'flex' }}>
        {/* Add category first card */}
        <div className='languageGroup mt-4'>
          <Card sx={{ width: 280, height: 220 }}>
            <CardContent>
              <Typography variant='h5' component='h3'>
                Add Language
              </Typography>
              <Typography variant='body2' component='div'>
                <TextField
                  select
                  fullWidth
                  label='Select Language'
                  value={language}
                  onChange={handleChange}
                  variant='outlined'
                  style={{ marginTop: 20, width: '100%' }}
                >
                  {languages.map((lang, index) => (
                    <MenuItem key={index} value={lang.name}>
                      {`${lang.name} - ${lang.native}`}
                    </MenuItem>
                  ))}
                </TextField>
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant='contained'>
                <CheckSharpIcon style={{ marginRight: 5 }} />
                SAVE Language
              </Button>
            </CardActions>
          </Card>
        </div>

        {/*  Group list 2nd card */}
        <div className='CategoryList mt-4 mx-6' style={{ flex: 1 }}>
          <Card sx={{ width: '102%', height: 615 }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h5' component='h3' style={{ flex: 1, marginRight: '12%' }}>
                  Language List
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
                          <span>Language</span>
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
                          <span>Native</span>
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
                          <span>Universal</span>
                        </div>
                      </th>{' '}
                      <th
                        style={{
                          padding: '8px',
                          textAlign: 'left',
                          backgroundColor: 'lightgray'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                          <span>Status</span>
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
                      <td style={{ padding: '8px' }}> 1</td>
                      <td style={{ padding: '8px' }}>English</td>
                      <td style={{ padding: '8px' }}>English</td>
                      <td style={{ padding: '8px' }}>en</td>
                      <td style={{ padding: '8px' }}>Active</td>
                      <td style={{ padding: '8px' }}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <Button variant='contained' style={{ borderRadius: '10px' }}>
                            <CheckSharpIcon />
                            DEFAULT
                          </Button>
                          <Button variant='outlined' style={{ borderRadius: '10px', width: '35%' }}>
                            <SettingsIcon />
                            SETUP
                          </Button>
                        </div>
                        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                          <Button variant='outlined' style={{ borderRadius: '10px', width: '35%' }}>
                            <DownloadIcon />
                            EXPORT
                          </Button>
                          <Button variant='outlined' style={{ borderRadius: '10px', width: '35%' }}>
                            <UploadIcon />
                            Import
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '8px' }}> 2</td>
                      <td style={{ padding: '8px' }}>Spanish</td>
                      <td style={{ padding: '8px' }}>Español</td>
                      <td style={{ padding: '8px' }}>es</td>
                      <td style={{ padding: '8px' }}>In Active</td>
                      <td style={{ padding: '8px' }}>
                        <Button variant='outlined' style={{ borderRadius: '10px' }}>
                          <CheckSharpIcon />
                          MAKE DEFAULT
                        </Button>
                        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                          <Button variant='outlined' style={{ borderRadius: '10px', width: '35%' }}>
                            <SettingsIcon />
                            SETUP
                          </Button>
                          <Button variant='outlined' style={{ borderRadius: '10px', width: '35%' }}>
                            <DownloadIcon />
                            EXPORT
                          </Button>
                        </div>
                        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                          <Button variant='outlined' style={{ borderRadius: '10px', width: '35%' }}>
                            <UploadIcon />
                            Import
                          </Button>
                          <Button variant='outlined' style={{ borderRadius: '10px', width: '35%' }}>
                            <CloseIcon />
                            REMOVE
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '8px' }}>3</td>
                      <td style={{ padding: '8px' }}>French</td>
                      <td style={{ padding: '8px' }}>Français</td>
                      <td style={{ padding: '8px' }}>fr</td>
                      <td style={{ padding: '8px' }}>In Active</td>
                      <td style={{ padding: '8px' }}>
                        <Button variant='outlined' style={{ borderRadius: '10px' }}>
                          <CheckSharpIcon />
                          MAKE DEFAULT
                        </Button>
                        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                          <Button variant='outlined' style={{ borderRadius: '10px', width: '35%' }}>
                            <SettingsIcon />
                            SETUP
                          </Button>
                          <Button variant='outlined' style={{ borderRadius: '10px', width: '35%' }}>
                            <DownloadIcon />
                            EXPORT
                          </Button>
                        </div>
                        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                          <Button variant='outlined' style={{ borderRadius: '10px', width: '35%' }}>
                            <UploadIcon />
                            Import
                          </Button>
                          <Button variant='outlined' style={{ borderRadius: '10px', width: '35%' }}>
                            <CloseIcon />
                            REMOVE
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

export default LanguageSettingsLayout
