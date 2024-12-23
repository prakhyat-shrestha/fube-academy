'use client'
import { MenuItem, CardActions, Button, InputAdornment, IconButton } from '@mui/material'
import { useState } from 'react'
import CustomTextField from '@/@core/components/mui/TextField'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'

const SmtpSettingLayout = () => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev)
  }
  return (
    <>
      {/* First Row */}
      <div className='firstRow' style={{ display: 'flex' }}>
        <CustomTextField
          label='FROM NAME'
          required
          defaultValue={'System Admin'}
          style={{ margin: '0 40px 0 0 ', width: '60%' }}
        />
        <CustomTextField label='FROM MAIl' required defaultValue={'admin@infixedu.com'} style={{ width: '60%' }} />
      </div>

      {/* Second Row */}
      <div className='secondRow' style={{ display: 'flex', marginTop: '20px' }}>
        <CustomTextField
          label='MAIL DRIVER'
          required
          defaultValue={'smtp'}
          style={{ margin: '0 40px 0 0 ', width: '60%' }}
        />
        <CustomTextField label='MAIL HOST' required defaultValue={'smtp@gmail.com'} style={{ width: '60%' }} />
      </div>

      {/* Third Row */}
      <div className='thirdRow' style={{ display: 'flex', marginTop: '20px' }}>
        <CustomTextField
          label='MAIL PORT'
          required
          defaultValue={'587'}
          style={{ margin: '0 40px 0 0 ', width: '60%' }}
        />
        <CustomTextField label='MAIL USERNAME' required defaultValue={'demo@spondonit.com'} style={{ width: '60%' }} />
      </div>

      {/* Fourth Row */}
      <div className='fourthRow' style={{ display: 'flex', marginTop: '20px' }}>
        <CustomTextField
          type={showPassword ? 'text' : 'password'}
          label='MAIL PASSWORD'
          required
          defaultValue={'password'}
          style={{ margin: '0 40px 0 0 ', width: '100%' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={togglePasswordVisibility} edge='end'>
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <div className='div' style={{ display: 'flex', width: '100%' }}>
          <CustomTextField
            label='MAIL ENCRYPTION'
            required
            defaultValue={'tls'}
            style={{ margin: '0 40px 0 0 ', width: '60%' }}
          />
          <CustomTextField
            select
            fullWidth
            required
            label='STATUS'
            defaultValue='status'
            id='custom-select'
            style={{ width: '60%' }}
          >
            <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
            <MenuItem value='status'>
              <span style={{ fontStyle: 'normal' }}>Select Status *</span>
            </MenuItem>
            <MenuItem value='one'>Enable</MenuItem>
            <MenuItem value='two'>Disable</MenuItem>
          </CustomTextField>
        </div>
      </div>

      {/* Button */}
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button variant='contained'>
          <CheckSharpIcon sx={{ mr: 1 }} />
          UPDATE
        </Button>
      </CardActions>
    </>
  )
}

export default SmtpSettingLayout
