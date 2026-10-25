'use client'
import * as React from 'react'
import {
  Typography,
  Card,
  CardContent,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Radio,
  RadioGroup
} from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'
import CustomTextField from '@/@core/components/mui/TextField'

const TeacherSettingsLayout = () => {
  const [selectedValue, setSelectedValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSelectedValue(value)
    console.log(value)
  }
  return (
    <>
      {/* teacher evaluation settings List First Card*/}
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Setting
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Teacher Evaluation
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Setting </Link>
          </Typography>
        </nav>
      </div>

      <div
        className='teacherEvaluationSettings mt-4 '
        style={{ display: 'flex', flex: 1, justifyContent: 'space-between', gap: '30px' }}
      >
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '12%' }}>
                Evaluation Setting
              </Typography>
            </div>
            <Typography
              variant='h6'
              component='h4'
              style={{ fontSize: 'small', fontWeight: 'bold', marginTop: '20px' }}
            >
              Evaluation
              <div style={{ marginTop: '2%' }}>
                <RadioGroup row aria-label='controlled' name='controlled'>
                  <Box mr={37}>
                    <FormControlLabel
                      value='enable'
                      control={
                        <Radio
                          checkedIcon={<i className='tabler-circle-check-filled' />}
                          icon={<i className='tabler-circle' />}
                        />
                      }
                      label='Enable'
                    />
                  </Box>
                  <FormControlLabel
                    value='disable'
                    control={
                      <Radio
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                    label='Disable'
                  />
                </RadioGroup>
              </div>
            </Typography>

            <Typography
              variant='h6'
              component='h4'
              style={{ fontSize: 'small', fontWeight: 'bold', marginTop: '20px' }}
            >
              Evaluation Approval
              <div style={{ marginTop: '2%' }}>
                <RadioGroup row aria-label='controlled' name='controlled'>
                  <Box mr={41}>
                    <FormControlLabel
                      value='auto'
                      control={
                        <Radio
                          checkedIcon={<i className='tabler-circle-check-filled' />}
                          icon={<i className='tabler-circle' />}
                        />
                      }
                      label='Auto'
                    />
                  </Box>
                  <FormControlLabel
                    value='manual'
                    control={
                      <Radio
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                    label='Manual'
                  />
                </RadioGroup>
              </div>
            </Typography>
            <div className='container mt-6' style={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant='contained'>SAVE</Button>
            </div>
          </CardContent>
        </Card>
        {/* Second Card */}
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '12%' }}>
                Submission Setting
              </Typography>
            </div>
            <Typography
              variant='h6'
              component='h4'
              style={{ fontSize: 'small', fontWeight: 'bold', marginTop: '20px' }}
            >
              Submitted By
              <div style={{ marginTop: '2%' }}>
                <FormGroup row>
                  <Box mr={54}>
                    <FormControlLabel
                      label='Student '
                      control={
                        <Checkbox
                          name='size-small'
                          checkedIcon={<i className='tabler-circle-check-filled' />}
                          icon={<i className='tabler-circle' />}
                        />
                      }
                    />
                  </Box>
                  <FormControlLabel
                    label='Parent '
                    control={
                      <Checkbox
                        name='size-small'
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                  />
                </FormGroup>
              </div>
            </Typography>
            <Typography
              variant='h6'
              component='h4'
              style={{ fontSize: 'small', fontWeight: 'bold', marginTop: '20px' }}
            >
              Submission Time
              <div style={{ marginTop: '2%' }}>
                <RadioGroup row aria-label='controlled' name='controlled' value={selectedValue} onChange={handleChange}>
                  <Box mr={51}>
                    <FormControlLabel
                      value='auto'
                      control={
                        <Radio
                          checkedIcon={<i className='tabler-circle-check-filled' />}
                          icon={<i className='tabler-circle' />}
                        />
                      }
                      label='Any Time'
                    />
                  </Box>
                  <FormControlLabel
                    value='manual'
                    control={
                      <Radio
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                    label='Fixed Time'
                  />
                </RadioGroup>
              </div>
              {selectedValue === 'manual' && (
                <div className='options'>
                  <div
                    className='startTime'
                    style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}
                  >
                    <Typography variant='h6' component='h4' style={{ fontWeight: 'bold' }}>
                      Start Date
                    </Typography>
                    <CustomTextField type='date' style={{ width: '60%' }} />
                  </div>
                  <div
                    className='startTime'
                    style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}
                  >
                    <Typography variant='h6' component='h4' style={{ fontWeight: 'bold' }}>
                      End Date
                    </Typography>
                    <CustomTextField type='date' style={{ width: '60%' }} />
                  </div>
                </div>
              )}
            </Typography>
            <div className='container mt-6' style={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant='contained'>SAVE</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default TeacherSettingsLayout
