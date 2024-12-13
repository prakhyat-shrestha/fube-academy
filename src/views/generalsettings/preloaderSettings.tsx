'use client'
import { useState } from 'react'

import type { ChangeEvent } from 'react'

import Link from 'next/link'

import CardContent from '@mui/material/CardContent'

import Card from '@mui/material/Card'
import { FormControl, FormControlLabel, Typography } from '@mui/material'

import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormLabel from '@mui/material/FormLabel'

type StateType = {
  [key: string]: boolean
}

const PreloaderSettingsLayout = () => {
  const [state, setState] = useState<StateType>({
    show: true,
    hide: false
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target

    setState(prevState => ({
      ...prevState,
      [name]: checked,

      // Ensures that only one checkbox is checked
      ...(name === 'show' && checked ? { hide: false } : {}),
      ...(name === 'hide' && checked ? { show: false } : {})
    }))
  }

  return (
    <>
      <div className='flex '>
        <Typography variant='h5' component='h3'>
          Preloader Settings
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
            <Link href='#'>Preloader Settings</Link>
          </Typography>
        </nav>
      </div>
      <div className='flex' style={{ display: 'flex' }}>
        <div className='languageGroup mt-4'>
          <Card sx={{ width: '1389px', height: 'auto' }}>
            <CardContent>
              <div className='container' style={{ display: 'flex', gap: '72%' }}>
                <Typography variant='h5' component='h4'>
                  Preloader Settings
                </Typography>
              </div>
              <div className='container' style={{ display: 'flex', marginTop: '20px' }}>
                <FormControl className='mbs-4 mie-4'>
                  <FormLabel sx={{ marginBottom: '5px' }}>PRELOADER STATUS</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      label='Show'
                      control={
                        <Checkbox
                          checked={state.show}
                          onChange={handleChange}
                          name='show'
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
                      label='Hide'
                      sx={{ marginTop: '-33px' }}
                      control={
                        <Checkbox
                          checked={state.hide}
                          onChange={handleChange}
                          name='hide'
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
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

export default PreloaderSettingsLayout
