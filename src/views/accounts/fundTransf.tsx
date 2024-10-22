'use client'
import React, { useRef } from 'react'

import Link from 'next/link'

import { TextField, Typography, InputAdornment } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Icon } from '@iconify/react/dist/iconify.js'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import CheckIcon from '@mui/icons-material/Check' // Tick icon from MUI icons
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import { createTheme } from '@mui/material/styles'

import CustomTextField from '@core/components/mui/TextField'

const FundTransferLayout = () => {
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
          Fund Transfer
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
            <Link href='#'>Fund Transfer</Link>
          </Typography>
        </nav>
      </div>
      <div className='fundtransfer mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div className='container' style={{ display: 'flex', gap: '79.5%' }}>
              <Typography variant='h5' component='h4'>
                Select Criteria
              </Typography>
            </div>

            <div className='container' style={{ display: 'flex' }}>
              <div>
                <CustomTextField fullWidth required label='AMOUNT' style={{ margin: '20px 35px 0 0 ', width: '84%' }} />
                <CustomTextField
                  fullWidth
                  required
                  label='PURPOSE'
                  style={{ margin: '20px 35px 0 0 ', width: '84%' }}
                />
              </div>
              {/* From Radio Button */}
              <div style={{ display: 'flex', marginRight: '250px' }}>
                <FormControl component='fieldset'>
                  <div>
                    <Typography variant='h5'>From</Typography>
                    <RadioGroup aria-label='custom-radio' name='customized-radios'>
                      <FormControlLabel
                        value='cash'
                        control={
                          <Radio
                            icon={<div style={{ border: '2px solid', borderRadius: '50%', width: 24, height: 24 }} />}
                            checkedIcon={<CheckIcon style={{ color: 'green', fontSize: 24 }} />}
                          />
                        }
                        label='Cash (100)'
                      />
                      <FormControlLabel
                        value='cheque'
                        control={
                          <Radio
                            icon={<div style={{ border: '2px solid', borderRadius: '50%', width: 24, height: 24 }} />}
                            checkedIcon={<CheckIcon style={{ color: 'green', fontSize: 24 }} />}
                          />
                        }
                        label='Cheque (0)'
                      />
                      <FormControlLabel
                        value='bank'
                        control={
                          <Radio
                            icon={<div style={{ border: '2px solid', borderRadius: '50%', width: 24, height: 24 }} />}
                            checkedIcon={<CheckIcon style={{ color: 'green', fontSize: 24 }} />}
                          />
                        }
                        label='Bank (0)'
                      />
                    </RadioGroup>
                  </div>
                </FormControl>
              </div>

              {/* To Radio Button */}
              <div>
                <FormControl component='fieldset'>
                  <div>
                    <Typography variant='h5'>To</Typography>
                    <RadioGroup aria-label='custom-radio' name='customized-radios'>
                      <FormControlLabel
                        value='cash'
                        control={
                          <Radio
                            icon={<div style={{ border: '2px solid', borderRadius: '50%', width: 24, height: 24 }} />}
                            checkedIcon={<CheckIcon style={{ color: 'green', fontSize: 24 }} />}
                          />
                        }
                        label='Cash (100)'
                      />
                      <FormControlLabel
                        value='cheque'
                        control={
                          <Radio
                            icon={<div style={{ border: '2px solid', borderRadius: '50%', width: 24, height: 24 }} />}
                            checkedIcon={<CheckIcon style={{ color: 'green', fontSize: 24 }} />}
                          />
                        }
                        label='Cheque (0)'
                      />
                      <FormControlLabel
                        value='bank'
                        control={
                          <Radio
                            icon={<div style={{ border: '2px solid', borderRadius: '50%', width: 24, height: 24 }} />}
                            checkedIcon={<CheckIcon style={{ color: 'green', fontSize: 24 }} />}
                          />
                        }
                        label='Bank (0)'
                      />
                    </RadioGroup>
                  </div>
                </FormControl>
              </div>
            </div>
            <div
              className='container'
              style={{ display: 'flex', marginLeft: '45.5%', marginTop: '20px', height: '35px' }}
            >
              <Button variant='contained' startIcon={<SearchSharpIcon />}>
                SEARCH
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Amount Transfer List Table */}
      <div className='amountTransferList mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: 300 }}>
          <CardContent>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant='h5' component='h3' style={{ flex: 1, marginRight: '12%' }}>
                Amount Transfer List
              </Typography>
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
                        <span>Purpose</span>
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
                        <span>Amount</span>
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
                        <span>FROM</span>
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
                        <span>TO</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Total</td>
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

export default FundTransferLayout
