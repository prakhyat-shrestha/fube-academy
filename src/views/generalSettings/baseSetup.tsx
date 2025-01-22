'use client'
import * as React from 'react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Typography from '@mui/material/Typography'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import {
  TextField,
  InputAdornment,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer
} from '@mui/material'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import ButtonGroup from '@mui/material/ButtonGroup'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Card from '@mui/material/Card'
import { Icon } from '@iconify/react/dist/iconify.js'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CustomTextField from '@/@core/components/mui/TextField'

const BaseSetupLayout = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <>
      <div className='flex '>
        <Typography variant='h6' component='h3'>
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
          <Card sx={{ width: 350, height: 'auto' }}>
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
                <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '12%' }}>
                  Base Setup List
                </Typography>
                <div style={{ flexGrow: 1 }}>
                  <TextField
                    id='standard-search'
                    variant='standard'
                    placeholder='SEARCH'
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
              <TableContainer sx={{ marginTop: '20px' }}>
                <Table
                  sx={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}
                  stickyHeader
                  aria-label='sticky table'
                >
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          padding: '8px',
                          textAlign: 'left',
                          borderRadius: '5px 0 0 5px',
                          position: 'relative' // Required for rounded corners
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <ArrowDownwardIcon style={{ marginRight: '8px', fontSize: '1rem' }} />
                          Base Type
                        </div>
                      </TableCell>
                      <TableCell
                        style={{
                          padding: '8px',
                          textAlign: 'left'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <ArrowDownwardIcon style={{ marginRight: '8px', fontSize: '1rem' }} />
                          Label
                        </div>
                      </TableCell>
                      <TableCell
                        sx={{
                          padding: '8px',
                          textAlign: 'left',
                          borderRadius: '0 5px 5px 0'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <ArrowDownwardIcon style={{ marginRight: '8px', fontSize: '1rem' }} />
                          Action
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{ padding: '9px' }}>
                        <Accordion
                          sx={{
                            width: '312.5%',
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                            overflow: 'hidden'
                          }}
                        >
                          <AccordionSummary
                            sx={{
                              minHeight: '40px', // Reduce the height here
                              padding: '10px' // Remove padding to reduce height
                            }}
                            expandIcon={
                              <Button
                                variant='contained'
                                sx={{
                                  width: '25px', // Fixed width
                                  height: '25px', // Fixed height
                                  borderRadius: '50%', // Ensures the button is a circle
                                  padding: 0, // Removes padding that might distort the shape
                                  minWidth: 0, // Prevents Material-UI from enforcing a larger minWidth
                                  backgroundColor: '#7367F0',
                                  color: 'white',
                                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                                  display: 'flex', // Centers the content
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  '&:hover': {
                                    backgroundColor: 'lightblue'
                                  }
                                }}
                              >
                                <ArrowDownwardIcon style={{ fontSize: '20px' }} /> {/* Icon scaled down to fit */}
                              </Button>
                            }
                          >
                            <Typography variant='h6'>Gender</Typography>
                          </AccordionSummary>

                          <AccordionDetails>
                            <TableRow>
                              <TableCell sx={{ paddingLeft: '345px' }}>
                                <Typography variant='h6'>
                                  Male
                                  <Button sx={{ marginLeft: '290px' }}>
                                    SELECT
                                    <ArrowDownwardIcon />
                                  </Button>
                                </Typography>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ paddingLeft: '345px' }}>
                                <Typography variant='h6'>
                                  Female
                                  <Button sx={{ marginLeft: '270px' }}>
                                    SELECT
                                    <ArrowDownwardIcon />
                                  </Button>
                                </Typography>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ paddingLeft: '345px' }}>
                                <Typography variant='h6'>
                                  Others
                                  <Button sx={{ marginLeft: '276px' }}>
                                    SELECT
                                    <ArrowDownwardIcon />
                                  </Button>
                                </Typography>
                              </TableCell>
                            </TableRow>
                          </AccordionDetails>
                        </Accordion>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ padding: '9px' }}>
                        <Accordion
                          sx={{
                            width: '312.5%',
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                            overflow: 'hidden'
                          }}
                        >
                          <AccordionSummary
                            sx={{
                              minHeight: '40px', // Reduce the height here
                              padding: '10px' // Remove padding to reduce height
                            }}
                            expandIcon={
                              <Button
                                variant='contained'
                                sx={{
                                  width: '25px', // Fixed width
                                  height: '25px', // Fixed height
                                  borderRadius: '50%', // Ensures the button is a circle
                                  padding: 0, // Removes padding that might distort the shape
                                  minWidth: 0, // Prevents Material-UI from enforcing a larger minWidth
                                  backgroundColor: '#7367F0',
                                  color: 'white',
                                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                                  display: 'flex', // Centers the content
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  '&:hover': {
                                    backgroundColor: 'lightblue'
                                  }
                                }}
                              >
                                <ArrowDownwardIcon style={{ fontSize: '20px' }} /> {/* Icon scaled down to fit */}
                              </Button>
                            }
                          >
                            <Typography variant='h6'>Religion</Typography>
                          </AccordionSummary>

                          <AccordionDetails>
                            <TableRow>
                              <TableCell sx={{ paddingLeft: '345px' }}>
                                <Typography variant='h6'>
                                  Islam
                                  <Button sx={{ marginLeft: '280px' }}>
                                    SELECT
                                    <ArrowDownwardIcon />
                                  </Button>
                                </Typography>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ paddingLeft: '345px' }}>
                                <Typography variant='h6'>
                                  Hinduism
                                  <Button sx={{ marginLeft: '255px' }}>
                                    SELECT
                                    <ArrowDownwardIcon />
                                  </Button>
                                </Typography>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ paddingLeft: '345px' }}>
                                <Typography variant='h6'>
                                  Sikhism
                                  <Button sx={{ marginLeft: '265px' }}>
                                    SELECT
                                    <ArrowDownwardIcon />
                                  </Button>
                                </Typography>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ paddingLeft: '345px' }}>
                                <Typography variant='h6'>
                                  Buddhism
                                  <Button sx={{ marginLeft: '250px' }}>
                                    SELECT
                                    <ArrowDownwardIcon />
                                  </Button>
                                </Typography>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ paddingLeft: '345px' }}>
                                <Typography variant='h6'>
                                  Sikhism
                                  <Button sx={{ marginLeft: '265px' }}>
                                    SELECT
                                    <ArrowDownwardIcon />
                                  </Button>
                                </Typography>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ paddingLeft: '345px' }}>
                                <Typography variant='h6'>
                                  Protestantism
                                  <Button sx={{ marginLeft: '223px' }}>
                                    SELECT
                                    <ArrowDownwardIcon />
                                  </Button>
                                </Typography>
                              </TableCell>
                            </TableRow>
                          </AccordionDetails>
                        </Accordion>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ padding: '9px' }}>
                        <Accordion
                          sx={{
                            width: '312.5%',
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                            overflow: 'hidden'
                          }}
                        >
                          <AccordionSummary
                            sx={{
                              minHeight: '40px', // Reduce the height here
                              padding: '10px' // Remove padding to reduce height
                            }}
                            expandIcon={
                              <Button
                                variant='contained'
                                sx={{
                                  width: '25px', // Fixed width
                                  height: '25px', // Fixed height
                                  borderRadius: '50%', // Ensures the button is a circle
                                  padding: 0, // Removes padding that might distort the shape
                                  minWidth: 0, // Prevents Material-UI from enforcing a larger minWidth
                                  backgroundColor: '#7367F0',
                                  color: 'white',
                                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                                  display: 'flex', // Centers the content
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  '&:hover': {
                                    backgroundColor: 'lightblue'
                                  }
                                }}
                              >
                                <ArrowDownwardIcon style={{ fontSize: '20px' }} /> {/* Icon scaled down to fit */}
                              </Button>
                            }
                          >
                            <Typography variant='h6'>Blood Group</Typography>
                          </AccordionSummary>

                          <AccordionDetails>
                            <TableRow>
                              <TableCell sx={{ paddingLeft: '345px' }}>
                                <Typography variant='h6'>
                                  {' '}
                                  A+{' '}
                                  <Button sx={{ marginLeft: '295px' }}>
                                    SELECT
                                    <ArrowDownwardIcon />
                                  </Button>
                                </Typography>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ paddingLeft: '345px' }}>
                                <Typography variant='h6'>
                                  {' '}
                                  O+
                                  <Button sx={{ marginLeft: '299px' }}>
                                    SELECT
                                    <ArrowDownwardIcon />
                                  </Button>
                                </Typography>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ paddingLeft: '345px' }}>
                                <Typography variant='h6'>
                                  {' '}
                                  B+
                                  <Button sx={{ marginLeft: '299px' }}>
                                    SELECT
                                    <ArrowDownwardIcon />
                                  </Button>
                                </Typography>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ paddingLeft: '345px' }}>
                                <Typography variant='h6'>
                                  {' '}
                                  AB+
                                  <Button sx={{ marginLeft: '288px' }}>
                                    SELECT
                                    <ArrowDownwardIcon />
                                  </Button>
                                </Typography>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ paddingLeft: '345px' }}>
                                <Typography variant='h6'>
                                  {' '}
                                  A-
                                  <Button sx={{ marginLeft: '302px' }}>
                                    SELECT
                                    <ArrowDownwardIcon />
                                  </Button>
                                </Typography>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ paddingLeft: '345px' }}>
                                <Typography variant='h6'>
                                  O-
                                  <Button sx={{ marginLeft: '301px' }}>
                                    SELECT
                                    <ArrowDownwardIcon />
                                  </Button>
                                </Typography>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ paddingLeft: '345px' }}>
                                <Typography variant='h6'>
                                  {' '}
                                  B-
                                  <Button sx={{ marginLeft: '302px' }}>
                                    SELECT
                                    <ArrowDownwardIcon />
                                  </Button>
                                </Typography>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ paddingLeft: '345px' }}>
                                <Typography variant='h6'>
                                  AB-
                                  <Button sx={{ marginLeft: '291px' }}>
                                    SELECT
                                    <ArrowDownwardIcon />
                                  </Button>
                                </Typography>
                              </TableCell>
                            </TableRow>
                          </AccordionDetails>
                        </Accordion>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
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
                    cursor: 'pointer',
                    background: '#b3a8f7'
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
