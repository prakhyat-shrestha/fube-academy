'use client'
import { Card, CardContent, Button, Box, Typography } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import Link from 'next/link'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import React, { useState } from 'react'
import Option from './option'

const FeesInvoiceSettingLayout = () => {
  const [selectedValue, setSelectedValue] = useState('one')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSelectedValue(value)
    console.log(value)
  }

  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h4'>
          Fees Invoice Settings
        </Typography>
        <nav style={{ marginLeft: 'auto' }}>
          <Typography variant='h6' component='h4' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '25px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '25px' }}>
              Bulk Print
            </Link>
            <span style={{ marginRight: '25px' }}>|</span>
            <Link href='#'>Fees Invoice Settings</Link>
          </Typography>
        </nav>
      </div>
      <div className='payroll mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: 'auto' }}>
          <CardContent>
            <div className='container' style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
              <Typography variant='h6' component='h4' style={{ fontWeight: 'bolder', fontSize: 'medium' }}>
                Fees Invoice Settings
              </Typography>
            </div>
            <hr style={{ border: '1px solid #D3D3D3', width: '100%', margin: '5px auto' }} />
            <div className='container' style={{ display: 'flex', gap: '10%', marginTop: '20px' }}>
              <Typography variant='h6' component='h4' style={{ fontSize: 'medium' }}>
                INVOICE TYPE
              </Typography>
              <RadioGroup row aria-label='sizes' name='sizes' value={selectedValue} onChange={handleChange}>
                <Box mr={20}>
                  <FormControlLabel value='one' control={<Radio size='small' />} label='Invoice' />
                </Box>
                <FormControlLabel value='two' control={<Radio size='small' />} label='Slip' />
              </RadioGroup>
            </div>
            {selectedValue === 'two' && <Option />}
            <div className='container ' style={{ display: 'flex', justifyContent: 'center', marginTop: '4%' }}>
              <Button variant='contained' startIcon={<CheckIcon />}>
                UPDATE
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default FeesInvoiceSettingLayout
