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
  RadioGroup
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

const ClassLayout = () => {
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
          Class
        </Typography>
        <nav style={{ marginLeft: '73%' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '25px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '25px' }}>
              Academics
            </Link>
            <span style={{ marginRight: '25px' }}>|</span>
            <Link href='#'>Class</Link>
          </Typography>
        </nav>
      </div>
      <div className='flex' style={{ display: 'flex' }}>
        {/* Add class first card */}
        <div className='class mt-4'>
          <Card sx={{ width: 280, height: 485 }}>
            <CardContent>
              <Typography variant='h6' component='h3'>
                Add Class
              </Typography>
              <Typography variant='body2' component='div'>
                <CustomTextField required label='NAME' style={{ marginTop: 20 }} />
              </Typography>
              <div style={{ marginTop: '10px' }}>
                <span style={{ marginTop: '10px' }}>SECTION *</span>
                <RadioGroup row aria-label='sizes' name='sizes' defaultValue='a' style={{ flexDirection: 'column' }}>
                  <FormControlLabel value='a' control={<Radio />} label='A' />
                  <FormControlLabel value='b' control={<Radio />} label='B' />
                  <FormControlLabel value='c' control={<Radio />} label='C' />
                  <FormControlLabel value='nursery' control={<Radio />} label='Nursery' />
                  <FormControlLabel value='kg' control={<Radio />} label='K.G' />
                  <FormControlLabel value='ema' control={<Radio />} label='EM(A)' />
                  <FormControlLabel value='emb' control={<Radio />} label='EM(B)' />
                </RadioGroup>
              </div>
            </CardContent>

            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant='contained'>
                <CheckSharpIcon style={{ marginRight: 5 }} />
                SAVE CLASS
              </Button>
            </CardActions>
          </Card>
        </div>

        {/* Class list 2nd card */}
        <div className='classList mt-4 mx-6' style={{ flex: 1 }}>
          <Card sx={{ width: '102.6%', height: 370 }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '16%' }}>
                  Class List
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
                          <span>Students</span>
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
                      <td style={{ paddingLeft: '4%' }}>1</td>
                      <td style={{ paddingLeft: '4%' }}>A</td>
                      <td style={{ paddingLeft: '4%' }}>34</td>
                      <td style={{ padding: '8px' }}>
                        <Button variant='outlined' size='small' style={{ borderRadius: '20px' }}>
                          SELECT <ArrowDownwardIcon />
                        </Button>
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ paddingLeft: '4%' }}>2</td>
                      <td style={{ paddingLeft: '4%' }}>B</td>
                      <td style={{ paddingLeft: '4%' }}>20</td>
                      <td style={{ padding: '8px' }}>
                        <Button variant='outlined' size='small' style={{ borderRadius: '20px' }}>
                          SELECT <ArrowDownwardIcon />
                        </Button>
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ paddingLeft: '4%' }}>3</td>
                      <td style={{ paddingLeft: '4%' }}>C</td>
                      <td style={{ paddingLeft: '4%' }}>29</td>
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

export default ClassLayout
