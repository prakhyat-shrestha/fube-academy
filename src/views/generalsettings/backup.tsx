'use client'
import * as React from 'react'

import { useRef } from 'react'

import Link from 'next/link'

import { styled, createTheme } from '@mui/material/styles'

import Typography from '@mui/material/Typography'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'

import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Card from '@mui/material/Card'

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import { InputAdornment } from '@mui/material'

import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

import CustomTextField from '@/@core/components/mui/TextField'

const BackupLayout = () => {
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

  return (
    <>
      <div className='flex '>
        <Typography variant='h5' component='h3'>
          Backup
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
            <Link href='#'>Backup</Link>
          </Typography>
        </nav>
      </div>
      <div className='flex' style={{ display: 'flex' }}>
        {/* Add category first card */}
        <div className='backupGroup mt-4'>
          <Card sx={{ width: 280, height: 245 }}>
            <CardContent>
              <Typography variant='h4'>Upload From Local Directory</Typography>
              <Typography variant='h5' style={{ width: '47.5%', marginRight: '5%' }}>
                <CustomTextField
                  value='File'
                  style={{ marginTop: 25, width: '211%' }}
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
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant='contained'>
                <CheckSharpIcon style={{ marginRight: 5 }} />
                UPDATE FILE
              </Button>
            </CardActions>
          </Card>
        </div>

        {/* Group list 2nd card */}
        <div className='backupCategoryList mt-4 mx-6' style={{ flex: 1 }}>
          <Card sx={{ width: '102%', height: 280 }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h4' component='h3' style={{ flex: 1, marginRight: '12%' }}>
                  Database Backup List
                </Typography>
                <div style={{ display: 'flex' }}>
                  <Button variant='contained' style={{ height: '10%' }}>
                    <ExpandCircleDownIcon />
                    UPLOAD FILE BACKUP
                  </Button>
                  <Button variant='contained' style={{ marginLeft: '10px' }}>
                    <ExpandCircleDownIcon />
                    DATABASE BACKUP
                  </Button>
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
                          <span>SIZE</span>
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
                          <span>CREATED DATE TIME</span>
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
                          <span>BACKUP FILES</span>
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
                          <span>FILE TYPE</span>
                        </div>
                      </th>{' '}
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
                    <tr style={{ borderBottom: '1px solid #ddd' }}></tr>
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
      </div>
    </>
  )
}

export default BackupLayout
