'use client'
import * as React from 'react'
import { Typography, Card, CardContent, Box, FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material'
import Link from 'next/link'

const BehaviourSettingsLayout = () => {
  return (
    <>
      {/* behaviour settings List First Card*/}
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
              Behaviour Records
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Setting </Link>
          </Typography>
        </nav>
      </div>

      <div
        className='behaviourSetting mt-4 '
        style={{ display: 'flex', flex: 1, justifyContent: 'space-between', gap: '30px' }}
      >
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '12%' }}>
                Incident Comment Setting
              </Typography>
            </div>
            <Typography
              variant='h6'
              component='h4'
              style={{ fontSize: 'small', fontWeight: 'bold', marginTop: '20px' }}
            >
              Comment Option
              <div style={{ marginTop: '2%' }}>
                <FormGroup row>
                  <Box mr={37}>
                    <FormControlLabel
                      label='Student Comment'
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
                    label='Parent Comment'
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
                Incident View Setting
              </Typography>
            </div>
            <Typography
              variant='h6'
              component='h4'
              style={{ fontSize: 'small', fontWeight: 'bold', marginTop: '20px' }}
            >
              View Option
              <div style={{ marginTop: '2%' }}>
                <FormGroup row>
                  <Box mr={54}>
                    <FormControlLabel
                      label='Student View'
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
                    label='Parent View'
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
            <div className='container mt-6' style={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant='contained'>SAVE</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default BehaviourSettingsLayout
