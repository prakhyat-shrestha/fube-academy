'use client'
import * as React from 'react'

import { useRef } from 'react'

import Link from 'next/link'

import Typography from '@mui/material/Typography'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import { TextField, InputAdornment } from '@mui/material'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import ButtonGroup from '@mui/material/ButtonGroup'
import Accordion from '@mui/material/Accordion'
import AccordionActions from '@mui/material/AccordionActions'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Card from '@mui/material/Card'
import { Icon } from '@iconify/react/dist/iconify.js'
import { createTheme } from '@mui/material/styles'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import CustomTextField from '@/@core/components/mui/TextField'

const BaseSetupLayout = () => {
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
        <Typography variant='h5' component='h3'>
          Base Setup
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
            <Link href='#'>Base Setup</Link>
          </Typography>
        </nav>
      </div>
      <div className='flex' style={{ display: 'flex' }}>
        {/* Add category first card */}
        <div className='baseSetupGroup mt-4'>
          <Card sx={{ width: 280, height: 300 }}>
            <CardContent>
              <Typography variant='h6' component='h3'>
                Add Base Setup
              </Typography>
              <Typography variant='body2' component='div'>
                <CustomTextField required label='BASE GROUP' style={{ marginTop: 20, width: '100%' }} />
              </Typography>
              <Typography variant='body2' component='div'>
                <CustomTextField required label='NAME' style={{ marginTop: 20, width: '100%' }} />
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant='contained'>
                <CheckSharpIcon style={{ marginRight: 5 }} />
                SAVE BASE SETUP
              </Button>
            </CardActions>
          </Card>
        </div>

        {/* Base Group list 2nd card */}
        <div className='baseSetupGroupList mt-4 mx-6' style={{ flex: 1 }}>
          <Card sx={{ width: 'auto', height: 'auto' }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h5' component='h3' style={{ flex: 1, marginRight: '12%' }}>
                  Base Setup List
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
                <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
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
                          <span>Base Type</span>
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
                          <span>Label</span>
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
                      <td style={{ padding: '8px' }}>
                        <Accordion
                          sx={{
                            width: '312.5%',
                            backgroundColor: 'skyblue',
                            borderRadius: '8px',
                            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                            overflow: 'hidden'
                          }}
                        >
                          <AccordionSummary
                            expandIcon={
                              <Button
                                variant='contained'
                                sx={{
                                  minWidth: '36px',
                                  minHeight: '36px',
                                  borderRadius: '50%',
                                  backgroundColor: 'skyblue',
                                  color: 'white',
                                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                                  '&:hover': {
                                    backgroundColor: 'lightblue'
                                  }
                                }}
                              >
                                <ArrowDownwardIcon />
                              </Button>
                            }
                          >
                            <Typography variant='h6'>Gender</Typography>
                          </AccordionSummary>

                          <AccordionDetails>
                            <tr>
                              <td style={{ paddingLeft: '345px' }}>
                                <Typography variant='h6'>
                                  Male
                                  <Button>
                                    SELECT
                                    <ArrowDownwardIcon />
                                  </Button>
                                </Typography>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ paddingLeft: '345px' }}>
                                Female
                                <Button>
                                  SELECT
                                  <ArrowDownwardIcon />
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ paddingLeft: '345px' }}>
                                Others
                                <Button>
                                  SELECT
                                  <ArrowDownwardIcon />
                                </Button>
                              </td>
                            </tr>
                          </AccordionDetails>
                        </Accordion>
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '8px' }}>
                        <Accordion
                          sx={{
                            width: '312.5%',
                            backgroundColor: 'skyblue',
                            borderRadius: '8px',
                            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                            overflow: 'hidden'
                          }}
                        >
                          <AccordionSummary
                            expandIcon={
                              <Button
                                variant='contained'
                                sx={{
                                  minWidth: '36px',
                                  minHeight: '36px',
                                  borderRadius: '50%',
                                  backgroundColor: 'skyblue',
                                  color: 'white',
                                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                                  '&:hover': {
                                    backgroundColor: 'lightblue'
                                  }
                                }}
                              >
                                <ArrowDownwardIcon />
                              </Button>
                            }
                          >
                            <Typography variant='h6'>Religion</Typography>
                          </AccordionSummary>

                          <AccordionDetails>
                            <tr>
                              <td style={{ paddingLeft: '345px' }}>
                                Islam{' '}
                                <Button>
                                  SELECT
                                  <ArrowDownwardIcon />
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ paddingLeft: '345px' }}>
                                Hinduism
                                <Button>
                                  SELECT
                                  <ArrowDownwardIcon />
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ paddingLeft: '345px' }}>
                                Sikhism
                                <Button>
                                  SELECT
                                  <ArrowDownwardIcon />
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ paddingLeft: '345px' }}>
                                Buddhism
                                <Button>
                                  SELECT
                                  <ArrowDownwardIcon />
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ paddingLeft: '345px' }}>
                                Sikhism
                                <Button>
                                  SELECT
                                  <ArrowDownwardIcon />
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ paddingLeft: '345px' }}>
                                Protestantism
                                <Button>
                                  SELECT
                                  <ArrowDownwardIcon />
                                </Button>
                              </td>
                            </tr>
                          </AccordionDetails>
                        </Accordion>
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '8px' }}>
                        <Accordion
                          sx={{
                            width: '312.5%',
                            backgroundColor: 'skyblue',
                            borderRadius: '8px',
                            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                            overflow: 'hidden'
                          }}
                        >
                          <AccordionSummary
                            expandIcon={
                              <Button
                                variant='contained'
                                sx={{
                                  minWidth: '36px',
                                  minHeight: '36px',
                                  borderRadius: '50%',
                                  backgroundColor: 'skyblue',
                                  color: 'white',
                                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                                  '&:hover': {
                                    backgroundColor: 'lightblue'
                                  }
                                }}
                              >
                                <ArrowDownwardIcon />
                              </Button>
                            }
                          >
                            <Typography variant='h6'>Blood Group</Typography>
                          </AccordionSummary>

                          <AccordionDetails>
                            <tr>
                              <td style={{ paddingLeft: '345px' }}>
                                A+{' '}
                                <Button>
                                  SELECT
                                  <ArrowDownwardIcon />
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ paddingLeft: '345px' }}>
                                O+
                                <Button>
                                  SELECT
                                  <ArrowDownwardIcon />
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ paddingLeft: '345px' }}>
                                B+
                                <Button>
                                  SELECT
                                  <ArrowDownwardIcon />
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ paddingLeft: '345px' }}>
                                AB+
                                <Button>
                                  SELECT
                                  <ArrowDownwardIcon />
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ paddingLeft: '345px' }}>
                                A-
                                <Button>
                                  SELECT
                                  <ArrowDownwardIcon />
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ paddingLeft: '345px' }}>
                                O-
                                <Button>
                                  SELECT
                                  <ArrowDownwardIcon />
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ paddingLeft: '345px' }}>
                                B-
                                <Button>
                                  SELECT
                                  <ArrowDownwardIcon />
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ paddingLeft: '345px' }}>
                                AB-
                                <Button>
                                  SELECT
                                  <ArrowDownwardIcon />
                                </Button>
                              </td>
                            </tr>
                          </AccordionDetails>
                        </Accordion>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
            {/* Pagination */}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', marginTop: '0px' }}>
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

export default BaseSetupLayout
