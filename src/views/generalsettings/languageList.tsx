'use client'
import { text } from 'stream/consumers'

import * as React from 'react'

import { useRef, useState } from 'react'

import Link from 'next/link'

import Typography from '@mui/material/Typography'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'

import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import ButtonGroup from '@mui/material/ButtonGroup'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  MenuItem,
  TextField,
  InputAdornment,
  Menu
} from '@mui/material'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Card from '@mui/material/Card'
import { Icon } from '@iconify/react/dist/iconify.js'
import { createTheme } from '@mui/material/styles'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

import CustomTextField from '@/@core/components/mui/TextField'

const LanguageListLayout = () => {
  const textFieldRef = useRef<HTMLInputElement>(null)

  const languages = [
    { sn: 1, name: 'English', code: 'en', textAlignment: 'LTL', native: 'English' },
    { sn: 2, name: 'Spanish', code: 'es', textAlignment: 'LTL', native: 'Español' },
    { sn: 3, name: 'French', code: 'fr', textAlignment: 'LTL', native: 'Français' },
    { sn: 4, name: 'German', code: 'de', textAlignment: 'LTL', native: 'Deutsch' },
    { sn: 5, name: 'Czech', code: 'cs', textAlignment: 'LTL', native: '中文' },
    { sn: 6, name: 'Japanese', code: 'ja', textAlignment: 'LTL', native: '日本語' },
    { sn: 7, name: 'Hindi', code: 'hi', textAlignment: 'LTL', native: 'हिंदी' },
    { sn: 8, name: 'Arabic', code: 'ar', textAlignment: 'RTL', native: 'العربية' },
    { sn: 9, name: 'Portuguese', code: 'pt', textAlignment: 'LTL', native: 'Português' },
    { sn: 10, name: 'Russian', code: 'ru', textAlignment: 'LTL', native: 'Русский' },
    { sn: 11, name: 'Italian', code: 'it', textAlignment: 'LTL', native: 'Italiano' },
    { sn: 12, name: 'Korean', code: 'ko', textAlignment: 'LTL', native: '한국어' },
    { sn: 13, name: 'Turkish', code: 'tr', textAlignment: 'LTL', native: 'Türkçe' },
    { sn: 14, name: 'Vietnamese', code: 'vi', textAlignment: 'LTL', native: 'Tiếng Việt' },
    { sn: 15, name: 'Thai', code: 'th', textAlignment: 'LTL', native: 'ไทย' },
    { sn: 16, name: 'Bengali', code: 'bn', textAlignment: 'LTL', native: 'বাংলা' },
    { sn: 17, name: 'Urdu', code: 'ur', textAlignment: 'RTL', native: 'اردو' },
    { sn: 18, name: 'Malay', code: 'ms', textAlignment: 'LTL', native: 'Bahasa Melayu' },
    { sn: 19, name: 'Persian', code: 'fa', textAlignment: 'RTL', native: 'فارسی' },
    { sn: 20, name: 'Swahili', code: 'sw', textAlignment: 'LTL', native: 'Kiswahili' },
    { sn: 21, name: 'Icelandic', code: 'is', textAlignment: 'LTL', native: 'Íslenska' }
  ]

  const rowsPerPage = 10

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

  //For Table Pagination
  const [page, setPage] = useState(0)

  const handleChangePage = (newPage: any) => {
    setPage(newPage)
  }

  // Paginated rows
  const paginatedRows = languages.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

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
          <Card sx={{ width: 320, height: 'auto' }}>
            <CardContent>
              <Typography variant='h5' component='h3'>
                Add Language
              </Typography>
              <Typography variant='body2' component='div'>
                <CustomTextField
                  fullWidth
                  required
                  label='NAME'
                  style={{ marginTop: 20, width: '100%' }}
                  sx={{
                    '& .MuiInputBase-root': {
                      height: '50px'
                    }
                  }}
                />
                <CustomTextField
                  fullWidth
                  required
                  label='CODE'
                  style={{ marginTop: 20, width: '100%' }}
                  sx={{
                    '& .MuiInputBase-root': {
                      height: '50px'
                    }
                  }}
                />
                <CustomTextField
                  fullWidth
                  required
                  label='NATIVE'
                  style={{ marginTop: 20, width: '100%' }}
                  sx={{
                    '& .MuiInputBase-root': {
                      height: '50px'
                    }
                  }}
                />
                <CustomTextField
                  select
                  fullWidth
                  required
                  defaultValue={'LTL'}
                  label='TEXT ALIGNMENT'
                  style={{ marginTop: 20, width: '100%' }}
                  sx={{
                    '& .MuiInputBase-root': {
                      height: '50px'
                    }
                  }}
                >
                  <MenuItem value='LTL'>LTL</MenuItem>
                  <MenuItem value='RTL'>RTL</MenuItem>
                </CustomTextField>
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
          <Card sx={{ width: '102%', height: 'auto' }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h4' component='h3' style={{ flex: 1, marginRight: '12%' }}>
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
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <Typography variant='h5'>
                            <ArrowDownwardIcon />
                            SN
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant='h5'>
                            <ArrowDownwardIcon />
                            Name
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant='h5'>
                            <ArrowDownwardIcon />
                            Code
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant='h5'>
                            <ArrowDownwardIcon />
                            Native
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant='h5'>
                            <ArrowDownwardIcon />
                            Text Alignment
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant='h5'>
                            <ArrowDownwardIcon />
                            Action
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {paginatedRows.map(language => (
                        <TableRow key={language.sn}>
                          <TableCell>
                            <Typography variant='h6' style={{ marginLeft: '35px' }}>
                              {language.sn}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant='h6' style={{ marginLeft: '22px' }}>
                              {language.name}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant='h6' style={{ marginLeft: '35px' }}>
                              {language.code}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant='h6' style={{ marginLeft: '25px' }}>
                              {language.native}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant='h6' style={{ marginLeft: '35px' }}>
                              {language.textAlignment}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Button variant='outlined' style={{ borderRadius: '25px' }}>
                              <ArrowDownwardIcon />
                              SELECT
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </CardContent>
            {/* Pagination */}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
              <Typography variant='body2' style={{ marginLeft: '16px' }}>
                Showing {page * rowsPerPage + 1} to {Math.min((page + 1) * rowsPerPage, languages.length)} of{' '}
                {languages.length} entries
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
                  onClick={() => handleChangePage(Math.max(0, page - 1))}
                  disabled={page === 0}
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
                  {1 + page}
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
                  onClick={() => handleChangePage(Math.min(Math.ceil(languages.length / rowsPerPage) - 1, page + 1))}
                  disabled={page >= Math.ceil(languages.length / rowsPerPage) - 1}
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

export default LanguageListLayout
