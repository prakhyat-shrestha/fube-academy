'use client'
import React, { useRef } from 'react'

import Link from 'next/link'

import { TextField, Typography, InputAdornment } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Icon } from '@iconify/react/dist/iconify.js'

import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import { createTheme } from '@mui/material/styles'

import CustomTextField from '@core/components/mui/TextField'

const ProfitLossLayout = () => {
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
        <Typography variant='h5' component='h3'>
          Profit & Loss
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Accounts
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Profit & Loss</Link>
          </Typography>
        </nav>
      </div>
      <div className='attend mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div className='container' style={{ display: 'flex', gap: '79.5%' }}>
              <Typography variant='h5' component='h4'>
                Select Criteria
              </Typography>
            </div>

            <div className='container' style={{ display: 'flex' }}>
              <CustomTextField
                fullWidth
                required
                defaultValue='role'
                label='DATE TO'
                type='date'
                style={{ margin: '20px 35px 0 0 ', width: '65%' }}
              />
              <CustomTextField
                fullWidth
                required
                label='DATE TO'
                type='date'
                style={{ margin: '20px 35px 0 0 ', width: '65%' }}
              />
            </div>
            <div
              className='container'
              style={{ display: 'flex', marginLeft: '45.5%', marginTop: '20px', height: '35px' }}
            >
              <Button href='/placc' variant='contained' startIcon={<SearchSharpIcon />}>
                SEARCH
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Profit & Loss Table */}
      <div className='profitLossList mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: 300 }}>
          <CardContent>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant='h5' component='h3' style={{ flex: 1, marginRight: '12%' }}>
                Profit & Loss
              </Typography>
              <div style={{ flexGrow: 1 }}>
                <TextField
                  id='standard-search'
                  variant='standard'
                  placeholder='Search'
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
                        <span>Time</span>
                      </div>
                    </th>
                    <th
                      style={{
                        padding: '8px',
                        textAlign: 'left',
                        backgroundColor: 'lightgray',

                        position: 'relative' // Required for rounded corners
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                        <span>Income</span>
                      </div>
                    </th>
                    <th
                      style={{
                        padding: '8px',
                        textAlign: 'left',
                        backgroundColor: 'lightgray',

                        position: 'relative' // Required for rounded corners
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                        <span>Expense</span>
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
                        <span>Profit/Loss</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>All</td>
                    <td style={{ padding: '8px' }}>Rs 100.00</td>
                    <td style={{ padding: '8px' }}></td>
                    <td style={{ padding: '8px' }}>Rs 100.00</td>
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
    </>
  )
}

export default ProfitLossLayout
