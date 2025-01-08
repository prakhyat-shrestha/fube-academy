'use client'
import { useState } from 'react'

import type { ChangeEvent } from 'react'

import Link from 'next/link'

import Image from 'next/image'

import { styled, createTheme } from '@mui/material/styles'
import CardContent from '@mui/material/CardContent'

import Card from '@mui/material/Card'
import { FormControl, FormControlLabel, Paper, Typography, InputAdornment, Button } from '@mui/material'
import type { CircularProgressProps } from '@mui/material/CircularProgress'
import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormLabel from '@mui/material/FormLabel'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

import CustomTextField from '@/@core/components/mui/TextField'

type StateType = {
  [key: string]: boolean
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800]
    })
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
    ...theme.applyStyles('dark', {
      backgroundColor: '#308fe8'
    })
  }
}))

// Facebook spinners.
function FacebookCircularProgress(props: CircularProgressProps) {
  return (
    <Box sx={{ position: 'relative' }}>
      <CircularProgress
        variant='determinate'
        sx={theme => ({
          color: theme.palette.grey[200],
          ...theme.applyStyles('dark', {
            color: theme.palette.grey[800]
          })
        })}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant='indeterminate'
        disableShrink
        sx={theme => ({
          color: '#1a90ff',
          animationDuration: '550ms',
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round'
          },
          ...theme.applyStyles('dark', {
            color: '#308fe8'
          })
        })}
        size={40}
        thickness={4}
        {...props}
      />
    </Box>
  )
}

//For Gradient Circular Loading Bar
function GradientCircularProgress() {
  return (
    <>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id='my_gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
            <stop offset='0%' stopColor='#e01cd5' />
            <stop offset='100%' stopColor='#1CB5E0' />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
    </>
  )
}

//Main Function

const PreloaderSettingsLayout = () => {
  const [state, setState] = useState<StateType>({
    show: true,
    hide: false
  })

  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2'
      }
    }
  })

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1
  })

  //For conditional rendering of animated or image loader
  const [animated, setAnimated] = useState(true)
  const [image, setImage] = useState(false)

  const handleAnimated = () => {
    setAnimated(true)
    setImage(false)
  }

  //For Preloader Status Toggle
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
        <Typography variant='h6' component='h3'>
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

      <div className='preloaderGroup mt-4'>
        <Card sx={{ width: '100%', height: '100%' }}>
          <CardContent>
            <div className='container' style={{ display: 'flex' }}>
              <Typography variant='h6' component='h4'>
                Preloader Settings
              </Typography>
            </div>
            <div className='container' style={{ display: 'flex', marginTop: '20px' }}>
              <div>
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

              <div style={{ marginLeft: '450px' }}>
                <FormControl className='mbs-4 mie-4 '>
                  <FormLabel sx={{ marginBottom: '5px' }}>PRELOADER TYPE</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      label='Animation'
                      control={
                        <Checkbox
                          checked={animated}
                          onChange={e => {
                            setAnimated(e.target.checked)
                            if (e.target.checked) setImage(false)
                          }}
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
                      label='Image'
                      sx={{ marginTop: '-33px' }}
                      control={
                        <Checkbox
                          checked={image}
                          onChange={e => {
                            setImage(e.target.checked)

                            if (e.target.checked) {
                              setAnimated(false)
                            }
                          }}
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
            </div>
            {animated && (
              <div className='animatedProgress mt-3'>
                <Typography variant='h6' component='h3' style={{ marginBottom: '20px' }}>
                  PRELOADER STYLE
                </Typography>
                {/* //First Row Preloader Style */}
                <div style={{ marginTop: '20px', marginLeft: '-2px', gap: '200px', display: 'flex' }}>
                  <Paper
                    elevation={4}
                    sx={{
                      width: '100px',
                      height: '100px',
                      alignContent: 'center',
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <GradientCircularProgress />
                  </Paper>

                  <Paper
                    elevation={4}
                    sx={{
                      width: '100px',
                      height: '100px',
                      alignContent: 'center',
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <FacebookCircularProgress />
                  </Paper>
                  <Paper
                    elevation={4}
                    sx={{
                      width: '100px',
                      height: '100px',
                      alignContent: 'center',
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <CircularProgress />
                  </Paper>
                  <Paper
                    elevation={4}
                    sx={{
                      width: '100px',
                      height: '100px',
                      alignContent: 'center',
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <CircularProgress color='secondary' />
                  </Paper>
                  <Paper
                    elevation={4}
                    sx={{
                      width: '100px',
                      height: '100px',
                      alignContent: 'center',
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <CircularProgress color='success' />
                  </Paper>
                </div>
                {/* //Second Row Preloader Style */}
                <div style={{ marginTop: '40px', marginLeft: '-2px', gap: '200px', display: 'flex' }}>
                  <Paper
                    elevation={4}
                    sx={{
                      width: '100px',
                      height: '100px',
                      alignContent: 'center',
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <CircularProgress color='inherit' />
                  </Paper>
                  <Paper
                    elevation={4}
                    sx={{
                      width: '100px',
                      height: '100px',
                      alignContent: 'center',
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <CircularProgress color='secondary' />
                  </Paper>
                  <Paper
                    elevation={4}
                    sx={{
                      width: '100px',
                      height: '100px',
                      alignContent: 'center',
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <CircularProgress color='secondary' />
                  </Paper>
                </div>
              </div>
            )}
            {image && (
              <div className='imageProgress mt-2'>
                <Typography variant='h5' style={{ width: '47.5%', marginRight: '5%' }}>
                  <CustomTextField
                    value='Preloader Image'
                    style={{ marginTop: 25, width: '70%' }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <Button
                            component='label'
                            role={undefined}
                            variant='contained'
                            size='small'
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                          >
                            Browse
                            <VisuallyHiddenInput
                              type='file'
                              onChange={event => console.log(event.target.files)}
                              multiple
                            />
                          </Button>
                        </InputAdornment>
                      )
                    }}
                  />
                </Typography>
                <Image
                  src='/blueloading.svg'
                  alt='blueloading'
                  width={200}
                  height={200}
                  style={{ marginTop: '-40px', marginLeft: '35%' }}
                />
                <Button variant='contained' sx={{ marginTop: '60px', marginLeft: '-50%' }}>
                  <CheckSharpIcon /> Update
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default PreloaderSettingsLayout
