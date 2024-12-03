'use client'
import { useRef, useState } from 'react'

import Link from 'next/link'

import { Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import FormGroup from '@mui/material/FormGroup'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

type StateType = {
  [key: string]: boolean
}

const NotificationSettingsLayout = () => {
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

  // States
  const [state, setState] = useState<StateType>({
    email: true,
    sms: false,
    web: false,
    app: false
  })

  // Vars
  const { email, sms, web, app } = state
  const error = [email, sms, web, app].filter(v => v).length !== 2

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Notification Settings
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              General Settings
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Notification Settings</Link>
          </Typography>
        </nav>
      </div>

      {/* ---- Table Section ----*/}
      <div className='studentList mt-4 ' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant='h5' component='h3' style={{ flex: 1, marginRight: '16%' }}>
                Notification Settings
              </Typography>
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
                      <div style={{ display: 'flex', alignItems: 'center' }}>EVENT</div>
                    </th>
                    <th
                      style={{
                        padding: '8px',
                        textAlign: 'left',
                        backgroundColor: 'lightgray',
                        position: 'relative'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span>DESTINATION </span>
                      </div>
                    </th>
                    <th
                      style={{
                        padding: '8px',
                        textAlign: 'left',
                        backgroundColor: 'lightgray',
                        position: 'relative'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span> RECIPIENT </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                {/*----- Table body section ----- */}
                <tbody>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Assign Class Teacher</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='TEACHER' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Teacher Info </Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Contact Us</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '930px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='SUPER ADMIN' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Super Admin Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Assign Subject</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Subject Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='TEACHER' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Teacher Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Assignment</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>
                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Syllabus</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Lesson Plan</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='TEACHER' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Teacher Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Other Downloads</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Student Admission</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '220px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '220px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '220px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='TEACHER' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Super Admin Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '220px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='TEACHER' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Teacher Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Multi Class</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='TEACHER' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Teacher Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Student Attendance</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Student Promote</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='TEACHER' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Teacher Info </Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Enable/Disable Student</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '220px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '220px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '220px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='TEACHER' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Super Admin Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '220px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='TEACHER' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Teacher Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Student Wise Attendance</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Fees Assign</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Fees Payment</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='SUPER ADMIN' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Super Admin Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Fees Reminder</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='SUPER ADMIN' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Super Admin Info </Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Assign homework</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Add Library Member</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Issue/Return Book</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='SUPER ADMIN' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Super Admin Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Assign Vehicle</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='SUPER ADMIN' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Super Admin Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Assign Dormitory</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Exam Schedule</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Exam Attendance</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Exam Admit Card</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Exam Seat Plan</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Online Exam Publish</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Online Exam Result</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Staff Attendance</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='SUPER ADMIN' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Super Admin Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Staff Payroll</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='SUPER ADMIN' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Super Admin Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '457px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Leave Apply</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '220px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '220px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '220px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='TEACHER' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Super Admin Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '220px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='TEACHER' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Teacher Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Leave Approved</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '220px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '220px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '220px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='TEACHER' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Super Admin Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '220px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='TEACHER' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Teacher Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Leave Declined</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '220px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '220px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '220px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='TEACHER' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Super Admin Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '220px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='TEACHER' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Teacher Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Approve Deposit</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='SUPER ADMIN' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Super Admin Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Reject Deposit</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='SUPER ADMIN' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Super Admin Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Wallet Add</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='SUPER ADMIN' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Super Admin Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Refund Deposit</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '300px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='SUPER ADMIN' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Super Admin Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Fund Transfer</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '930px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='SUPER ADMIN' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Super Admin Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Item Received</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '930px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='SUPER ADMIN' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Super Admin Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Item Sell</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '930px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='SUPER ADMIN' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Super Admin Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Notice</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '220px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '220px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '220px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='TEACHER' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Super Admin Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '220px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='TEACHER' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Teacher Info</Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>Event</td>
                    <td style={{ padding: '8px' }}>
                      {' '}
                      {/* In Table CheckBox */}
                      <div className='flex flex-wrap'>
                        <FormControl className='mbs-4 mie-4'>
                          <FormLabel>Select options</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              label='EMAIL'
                              control={
                                <Checkbox
                                  checked={email}
                                  onChange={handleChange}
                                  name='email'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              control={
                                <Checkbox
                                  checked={sms}
                                  onChange={handleChange}
                                  name='sms'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='WEB'
                              control={
                                <Checkbox
                                  checked={web}
                                  onChange={handleChange}
                                  name='web'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                              label='APP'
                              control={
                                <Checkbox
                                  checked={app}
                                  onChange={handleChange}
                                  name='app'
                                  icon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
                                        border: '2px solid gray',
                                        borderRadius: '50%',
                                        display: 'inline-block'
                                      }}
                                    />
                                  }
                                  checkedIcon={
                                    <span
                                      style={{
                                        width: 24,
                                        height: 24,
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
                    </td>
                    {/* RECIPIENT CHECKBOX */}
                    <td style={{ padding: '8px' }}>
                      <div
                        style={{
                          display: 'flex', // Arrange cards in a row
                          gap: '16px', // Spacing between cards
                          alignItems: 'center' // Align items vertically
                        }}
                      >
                        <Card style={{ width: '220px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between' // Space between checkbox and button
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='STUDENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Student Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '220px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='PARENT' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Parent Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '220px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='TEACHER' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Super Admin Info</Typography>
                          </CardContent>
                        </Card>

                        <Card style={{ width: '220px', height: '150px' }}>
                          <CardContent>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <FormControl>
                                <FormGroup>
                                  <FormControlLabel label='TEACHER' control={<Checkbox />} />
                                </FormGroup>
                              </FormControl>
                              <button
                                style={{
                                  padding: '8px 16px',
                                  backgroundColor: '#007BFF',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Edit
                              </button>
                            </div>
                            <Typography>Teacher Info</Typography>
                          </CardContent>
                        </Card>
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
              Showing 0 to 0 of 0 entries
            </Typography>
            {/*----- Page number section ----- */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 'auto',
                cursor: 'pointer',
                marginRight: '50%'
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
    </>
  )
}

export default NotificationSettingsLayout
