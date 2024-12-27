import { useState } from 'react'

import type { SyntheticEvent, ChangeEvent } from 'react'

import Link from 'next/link'

import {
  Alert,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Tab,
  Typography
} from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

import CheckIcon from '@mui/icons-material/Check'

import CustomTextField from '@/@core/components/mui/TextField'

type StateType = {
  [key: string]: boolean
}

const SendEmailSmsLayout = () => {
  // States
  const [value, setValue] = useState('group')

  //For Send Through Status Toggle
  const [state, setState] = useState<StateType>({
    email: true,
    sms: false
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target

    setState(prevState => ({
      ...prevState,
      [name]: checked,

      // Ensures that only one checkbox is checked
      ...(name === 'email' && checked ? { sms: false } : {}),
      ...(name === 'sms' && checked ? { email: false } : {})
    }))
  }

  const handleTabChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  //For Yellow Alert
  const [isVisible, setIsVisible] = useState(true)

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <>
      <div className='flex '>
        <Typography variant='h5'>Send Email/SMS</Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '15px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '15px' }}>
              Communicate
            </Link>
            <span style={{ marginRight: '15px' }}>|</span>
            <Link href='#'> Send Email/SMS</Link>
          </Typography>
        </nav>
      </div>
      <div>
        <div>
          <Card sx={{ width: '56.5%', height: 'auto', marginTop: '10px' }}>
            <CardContent>
              <Typography variant='h5'>Send Email/SMS</Typography>
              <CustomTextField
                required
                fullWidth
                label='TITLE'
                style={{ marginTop: '10px', width: '100%', marginRight: '5%' }}
                InputProps={{
                  style: {
                    height: '45px',
                    padding: '10px'
                  }
                }}
              />
              <div>
                <FormControl className='mbs-4 mie-4'>
                  <FormLabel sx={{ marginBottom: '-26px' }}>
                    <Typography variant='h6' sx={{ marginTop: '5px' }}>
                      SEND THROUGH
                    </Typography>
                  </FormLabel>
                  <FormGroup sx={{ marginLeft: '180px' }}>
                    <FormControlLabel
                      label='Email'
                      control={
                        <Checkbox
                          checked={state.email}
                          onChange={handleChange}
                          name='email'
                          sx={{ marginLeft: '12px' }}
                          icon={
                            <span
                              style={{
                                width: 20,
                                height: 20,
                                border: '2px solid gray',
                                borderRadius: '50%',
                                display: 'inline-block'
                              }}
                            />
                          }
                          checkedIcon={
                            <span
                              style={{
                                width: 20,
                                height: 20,
                                backgroundColor: 'blue',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '16px',
                                fontWeight: 'bold'
                              }}
                            >
                              ✓
                            </span>
                          }
                        />
                      }
                    />
                    <FormControlLabel
                      label='SMS'
                      sx={{ marginTop: '-33px' }}
                      control={
                        <Checkbox
                          checked={state.sms}
                          onChange={handleChange}
                          name='sms'
                          sx={{ marginLeft: '156px' }}
                          icon={
                            <span
                              style={{
                                width: 20,
                                height: 20,
                                border: '2px solid gray',
                                borderRadius: '50%',
                                display: 'inline-block'
                              }}
                            />
                          }
                          checkedIcon={
                            <span
                              style={{
                                width: 20,
                                height: 20,
                                backgroundColor: 'blue',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '16px',
                                fontWeight: 'bold'
                              }}
                            >
                              ✓
                            </span>
                          }
                        />
                      }
                    />
                  </FormGroup>
                </FormControl>
              </div>
              <CustomTextField
                required
                multiline
                rows={3}
                label='DESCRIPTION'
                style={{ marginTop: '25px', width: '100%', marginRight: '5%' }}
                InputProps={{
                  style: {
                    padding: '10px'
                  }
                }}
              />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card sx={{ width: '42%', height: 'auto', marginTop: '-335px', marginLeft: '58%' }}>
            <CardContent>
              <TabContext value={value}>
                <TabList
                  variant='scrollable'
                  onChange={handleTabChange}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    p: 1,
                    '& .MuiTab-root': {
                      textTransform: 'none',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      color: '#666',
                      px: 2,
                      py: 1,
                      borderRadius: '6px',
                      '&:hover': {
                        color: '#1976d2',
                        bgcolor: '#f0f8ff'
                      },
                      '&.Mui-selected': {
                        color: '#ffffff',
                        bgcolor: '#1976d2'
                      }
                    }
                  }}
                >
                  <Tab label='GROUP' value='group' style={{ fontSize: '14px', marginLeft: '10px' }} />
                  <Tab label='INDIVIDUAL' value='individual' style={{ fontSize: '14px', marginLeft: '10px' }} />
                  <Tab label='CLASS' value='class' style={{ fontSize: '14px', marginLeft: '10px' }} />
                </TabList>
                <form onSubmit={e => e.preventDefault()}>
                  <CardContent>
                    <TabPanel value='group'>
                      <div className='container'>
                        <div className='StaffSMSSection mb-4' style={{ width: '110%', marginLeft: '-25px' }}>
                          <Card>
                            <CardContent>
                              <div
                                className='sectionOne'
                                style={{ marginTop: '-30px', display: 'flex', width: '100%', height: 'auto' }}
                              >
                                <CustomTextField value='MESSAGE TO *' style={{ marginTop: 25, width: '211%' }} />
                              </div>

                              <div>
                                <FormControl className='ml-1 mbs-4 mie-4'>
                                  <FormGroup>
                                    <FormControlLabel
                                      label='Student'
                                      control={
                                        <Checkbox
                                          name='student'
                                          sx={{ marginLeft: '12px' }}
                                          icon={
                                            <span
                                              style={{
                                                width: 20,
                                                height: 20,
                                                border: '2px solid gray',
                                                borderRadius: '50%',
                                                display: 'inline-block'
                                              }}
                                            />
                                          }
                                          checkedIcon={
                                            <span
                                              style={{
                                                width: 20,
                                                height: 20,
                                                backgroundColor: 'blue',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white',
                                                fontSize: '16px',
                                                fontWeight: 'bold'
                                              }}
                                            >
                                              ✓
                                            </span>
                                          }
                                        />
                                      }
                                    />
                                    <FormControlLabel
                                      label='Parents'
                                      control={
                                        <Checkbox
                                          name='parents'
                                          sx={{ marginLeft: '12px' }}
                                          icon={
                                            <span
                                              style={{
                                                width: 20,
                                                height: 20,
                                                border: '2px solid gray',
                                                borderRadius: '50%',
                                                display: 'inline-block'
                                              }}
                                            />
                                          }
                                          checkedIcon={
                                            <span
                                              style={{
                                                width: 20,
                                                height: 20,
                                                backgroundColor: 'blue',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white',
                                                fontSize: '16px',
                                                fontWeight: 'bold'
                                              }}
                                            >
                                              ✓
                                            </span>
                                          }
                                        />
                                      }
                                    />
                                    <FormControlLabel
                                      label='Teacher'
                                      control={
                                        <Checkbox
                                          name='teacher'
                                          sx={{ marginLeft: '12px' }}
                                          icon={
                                            <span
                                              style={{
                                                width: 20,
                                                height: 20,
                                                border: '2px solid gray',
                                                borderRadius: '50%',
                                                display: 'inline-block'
                                              }}
                                            />
                                          }
                                          checkedIcon={
                                            <span
                                              style={{
                                                width: 20,
                                                height: 20,
                                                backgroundColor: 'blue',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white',
                                                fontSize: '16px',
                                                fontWeight: 'bold'
                                              }}
                                            >
                                              ✓
                                            </span>
                                          }
                                        />
                                      }
                                    />
                                  </FormGroup>

                                  <FormControlLabel
                                    label='Admin'
                                    control={
                                      <Checkbox
                                        name='admin'
                                        sx={{ marginLeft: '12px' }}
                                        icon={
                                          <span
                                            style={{
                                              width: 20,
                                              height: 20,
                                              border: '2px solid gray',
                                              borderRadius: '50%',
                                              display: 'inline-block'
                                            }}
                                          />
                                        }
                                        checkedIcon={
                                          <span
                                            style={{
                                              width: 20,
                                              height: 20,
                                              backgroundColor: 'blue',
                                              borderRadius: '50%',
                                              display: 'flex',
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              color: 'white',
                                              fontSize: '16px',
                                              fontWeight: 'bold'
                                            }}
                                          >
                                            ✓
                                          </span>
                                        }
                                      />
                                    }
                                  />
                                  <FormControlLabel
                                    label='Accountant'
                                    control={
                                      <Checkbox
                                        name='accountant'
                                        sx={{ marginLeft: '12px' }}
                                        icon={
                                          <span
                                            style={{
                                              width: 20,
                                              height: 20,
                                              border: '2px solid gray',
                                              borderRadius: '50%',
                                              display: 'inline-block'
                                            }}
                                          />
                                        }
                                        checkedIcon={
                                          <span
                                            style={{
                                              width: 20,
                                              height: 20,
                                              backgroundColor: 'blue',
                                              borderRadius: '50%',
                                              display: 'flex',
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              color: 'white',
                                              fontSize: '16px',
                                              fontWeight: 'bold'
                                            }}
                                          >
                                            ✓
                                          </span>
                                        }
                                      />
                                    }
                                  />
                                  <FormControlLabel
                                    label='Receptionist'
                                    control={
                                      <Checkbox
                                        name='receptionist'
                                        sx={{ marginLeft: '12px' }}
                                        icon={
                                          <span
                                            style={{
                                              width: 20,
                                              height: 20,
                                              border: '2px solid gray',
                                              borderRadius: '50%',
                                              display: 'inline-block'
                                            }}
                                          />
                                        }
                                        checkedIcon={
                                          <span
                                            style={{
                                              width: 20,
                                              height: 20,
                                              backgroundColor: 'blue',
                                              borderRadius: '50%',
                                              display: 'flex',
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              color: 'white',
                                              fontSize: '16px',
                                              fontWeight: 'bold'
                                            }}
                                          >
                                            ✓
                                          </span>
                                        }
                                      />
                                    }
                                  />
                                  <FormControlLabel
                                    label='Librarian'
                                    control={
                                      <Checkbox
                                        name='librarian'
                                        sx={{ marginLeft: '12px' }}
                                        icon={
                                          <span
                                            style={{
                                              width: 20,
                                              height: 20,
                                              border: '2px solid gray',
                                              borderRadius: '50%',
                                              display: 'inline-block'
                                            }}
                                          />
                                        }
                                        checkedIcon={
                                          <span
                                            style={{
                                              width: 20,
                                              height: 20,
                                              backgroundColor: 'blue',
                                              borderRadius: '50%',
                                              display: 'flex',
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              color: 'white',
                                              fontSize: '16px',
                                              fontWeight: 'bold'
                                            }}
                                          >
                                            ✓
                                          </span>
                                        }
                                      />
                                    }
                                  />
                                  <FormControlLabel
                                    label='Driver'
                                    control={
                                      <Checkbox
                                        name='driver'
                                        sx={{ marginLeft: '12px' }}
                                        icon={
                                          <span
                                            style={{
                                              width: 20,
                                              height: 20,
                                              border: '2px solid gray',
                                              borderRadius: '50%',
                                              display: 'inline-block'
                                            }}
                                          />
                                        }
                                        checkedIcon={
                                          <span
                                            style={{
                                              width: 20,
                                              height: 20,
                                              backgroundColor: 'blue',
                                              borderRadius: '50%',
                                              display: 'flex',
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              color: 'white',
                                              fontSize: '16px',
                                              fontWeight: 'bold'
                                            }}
                                          >
                                            ✓
                                          </span>
                                        }
                                      />
                                    }
                                  />
                                </FormControl>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </TabPanel>
                    {/* Individual PANEL */}
                    <TabPanel value='individual'>
                      <div className='container'>
                        <Card sx={{ width: '105%' }}>
                          <CardContent>
                            <div className='individual mt-4  mb-4 '>
                              <div className='sectionOne'>
                                <CustomTextField
                                  required
                                  fullWidth
                                  select
                                  defaultValue={'select'}
                                  label='ROLE'
                                  style={{ width: '100%' }}
                                  InputProps={{
                                    style: {
                                      height: '56px'
                                    }
                                  }}
                                >
                                  <MenuItem value='select'>Role *</MenuItem>
                                  <MenuItem value='student'>Student</MenuItem>
                                  <MenuItem value='parent'>Parents</MenuItem>
                                  <MenuItem value='teacher'>Teacher</MenuItem>
                                  <MenuItem value='admin'>Admin</MenuItem>
                                  <MenuItem value='accountant'>Accountant</MenuItem>
                                  <MenuItem value='receptionist'>Receptionist</MenuItem>
                                  <MenuItem value='librarian'>Librarian</MenuItem>
                                  <MenuItem value='driver'>Driver</MenuItem>
                                </CustomTextField>
                              </div>
                              <div className='sectionTwo mt-4' style={{ width: '100%' }}>
                                <CustomTextField
                                  required
                                  fullWidth
                                  select
                                  defaultValue={'unselected'}
                                  label='NAME'
                                  style={{ width: '100%' }}
                                  InputProps={{
                                    style: {
                                      height: '56px'
                                    }
                                  }}
                                >
                                  <MenuItem value='unselected'>UNSELECT ALL</MenuItem>
                                </CustomTextField>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </TabPanel>
                    {/* Class INFO */}
                    <TabPanel value='class'>
                      <div className='container'>
                        <Card sx={{ width: '105%' }}>
                          <CardContent>
                            <div className='individual mt-4  mb-4 '>
                              <div className='sectionOne'>
                                <CustomTextField
                                  required
                                  fullWidth
                                  select
                                  defaultValue={'select'}
                                  label='CLASS'
                                  style={{ width: '100%' }}
                                  InputProps={{
                                    style: {
                                      height: '56px'
                                    }
                                  }}
                                >
                                  <MenuItem value='select'>Class *</MenuItem>
                                  <MenuItem value='1'>1</MenuItem>
                                  <MenuItem value='2'>2</MenuItem>
                                  <MenuItem value='3'>3</MenuItem>
                                  <MenuItem value='4'>4</MenuItem>
                                  <MenuItem value='5'>5</MenuItem>
                                  <MenuItem value='6'>6</MenuItem>
                                  <MenuItem value='7'>7</MenuItem>
                                  <MenuItem value='8'>8</MenuItem>
                                </CustomTextField>
                              </div>
                              <div className='sectionTwo mt-4' style={{ width: '100%' }}>
                                <CustomTextField
                                  required
                                  fullWidth
                                  select
                                  defaultValue={'select'}
                                  label='SECTION'
                                  style={{ width: '100%' }}
                                  InputProps={{
                                    style: {
                                      height: '56px'
                                    }
                                  }}
                                >
                                  <MenuItem value='select'>Select </MenuItem>
                                  <MenuItem value='unselected'>UNSELECT ALL</MenuItem>
                                </CustomTextField>
                              </div>
                              <div className='sectionThree mt-4' style={{ width: '100%' }}>
                                <CustomTextField
                                  required
                                  fullWidth
                                  select
                                  defaultValue={'select'}
                                  label='STUDENT/PARENT'
                                  style={{ width: '100%' }}
                                  InputProps={{
                                    style: {
                                      height: '56px'
                                    }
                                  }}
                                >
                                  <MenuItem value='select'>Select</MenuItem>
                                  <MenuItem value='selectall'>Select All</MenuItem>
                                  <FormControl className='ml-1 mbs-4 mie-4'>
                                    <FormGroup>
                                      <FormControlLabel
                                        label='Student'
                                        control={
                                          <Checkbox
                                            name='student'
                                            sx={{ marginLeft: '12px' }}
                                            icon={
                                              <span
                                                style={{
                                                  width: 20,
                                                  height: 20,
                                                  border: '2px solid gray',
                                                  borderRadius: '50%',
                                                  display: 'inline-block'
                                                }}
                                              />
                                            }
                                            checkedIcon={
                                              <span
                                                style={{
                                                  width: 20,
                                                  height: 20,
                                                  backgroundColor: 'blue',
                                                  borderRadius: '50%',
                                                  display: 'flex',
                                                  alignItems: 'center',
                                                  justifyContent: 'center',
                                                  color: 'white',
                                                  fontSize: '16px',
                                                  fontWeight: 'bold'
                                                }}
                                              >
                                                ✓
                                              </span>
                                            }
                                          />
                                        }
                                      />
                                      <FormControlLabel
                                        label='Parents'
                                        control={
                                          <Checkbox
                                            name='parents'
                                            sx={{ marginLeft: '12px' }}
                                            icon={
                                              <span
                                                style={{
                                                  width: 20,
                                                  height: 20,
                                                  border: '2px solid gray',
                                                  borderRadius: '50%',
                                                  display: 'inline-block'
                                                }}
                                              />
                                            }
                                            checkedIcon={
                                              <span
                                                style={{
                                                  width: 20,
                                                  height: 20,
                                                  backgroundColor: 'blue',
                                                  borderRadius: '50%',
                                                  display: 'flex',
                                                  alignItems: 'center',
                                                  justifyContent: 'center',
                                                  color: 'white',
                                                  fontSize: '16px',
                                                  fontWeight: 'bold'
                                                }}
                                              >
                                                ✓
                                              </span>
                                            }
                                          />
                                        }
                                      />
                                      <FormControlLabel
                                        label='Teacher'
                                        control={
                                          <Checkbox
                                            name='teacher'
                                            sx={{ marginLeft: '12px' }}
                                            icon={
                                              <span
                                                style={{
                                                  width: 20,
                                                  height: 20,
                                                  border: '2px solid gray',
                                                  borderRadius: '50%',
                                                  display: 'inline-block'
                                                }}
                                              />
                                            }
                                            checkedIcon={
                                              <span
                                                style={{
                                                  width: 20,
                                                  height: 20,
                                                  backgroundColor: 'blue',
                                                  borderRadius: '50%',
                                                  display: 'flex',
                                                  alignItems: 'center',
                                                  justifyContent: 'center',
                                                  color: 'white',
                                                  fontSize: '16px',
                                                  fontWeight: 'bold'
                                                }}
                                              >
                                                ✓
                                              </span>
                                            }
                                          />
                                        }
                                      />
                                    </FormGroup>
                                  </FormControl>
                                </CustomTextField>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </TabPanel>
                  </CardContent>
                </form>
              </TabContext>
            </CardContent>
          </Card>
          <div style={{ marginTop: '25px' }}>
            {isVisible && (
              <Alert
                icon={false}
                variant='filled'
                severity='warning'
                action={
                  <button
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'white',
                      cursor: 'pointer',
                      fontSize: '16px'
                    }}
                    onClick={handleClose}
                  >
                    ✖
                  </button>
                }
              >
                For Sending Email / Sms, It may take some seconds. So please take patience.
              </Alert>
            )}
          </div>
          <Card sx={{ marginTop: '25px', width: '100%' }}>
            <CardContent>
              <Button variant='contained' sx={{ marginLeft: '45%' }}>
                <CheckIcon />
                Send
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

export default SendEmailSmsLayout
