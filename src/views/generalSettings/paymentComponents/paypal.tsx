'use client'
import { useState } from 'react'
import CustomTextField from '@/@core/components/mui/TextField'
import { FormGroup, Box, FormControlLabel, Checkbox, CardActions, Button, RadioGroup, Radio } from '@mui/material'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'

const PaypalLayout = () => {
  const [serviceChargeChecked, setServiceChargeChecked] = useState(false)

  const handleServiceChargeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setServiceChargeChecked(e.target.checked)
    console.log('Service Charge Checked:', e.target.checked)
  }
  return (
    <>
      <div className='paypal' style={{ marginLeft: '-18%', width: '100%' }}>
        <CustomTextField label='GATEWAY NAME' defaultValue={'Paypal'} style={{ width: '120%' }} />
        <CustomTextField
          label='GATEWAY USERNAME'
          defaultValue={'demo@paypal.com'}
          style={{ width: '120%', marginTop: '20px' }}
        />
        <CustomTextField
          label='GATEWAY PASSWORD'
          defaultValue={'123456789'}
          style={{ width: '120%', marginTop: '20px' }}
        />
        <CustomTextField label='GATEWAY SIGNATURE' style={{ width: '120%', marginTop: '20px' }} />
        <CustomTextField
          label='GATEWAY CLEINT ID'
          defaultValue={'AaCPtpoUHZEXCa3v006nbYhYfD0HIX-dlgYWlsb0fdoFqpVToATuUbT43VuUE6pAxgvSbPTspKBqAF0x'}
          style={{ width: '120%', marginTop: '20px' }}
        />
        <CustomTextField label='GATEWAY MODE(SANDBOX OR LIVE)' style={{ width: '120%', marginTop: '20px' }} />
        <CustomTextField
          label='GATEWAY SECRET KEY'
          defaultValue={'EJ6q4h8w0OanYO1WKtNbo9o8suDg6PKUkHNKv-T6F4APDiq2e19OZf7DfpL5uOlEzJ_AMgeE0L2PtTEj'}
          style={{ width: '120%', marginTop: '20px' }}
        />
        <FormGroup>
          <Box mr={5} mt={2}>
            <FormControlLabel
              label='Service Charge'
              control={
                <Checkbox
                  name='serviceCharge'
                  checked={serviceChargeChecked}
                  onChange={handleServiceChargeChange}
                  checkedIcon={<i className='tabler-circle-check-filled' />}
                  icon={<i className='tabler-circle' />}
                />
              }
            />
          </Box>
        </FormGroup>
        {serviceChargeChecked && (
          <div className='options' style={{ display: 'flex', gap: '15%' }}>
            <RadioGroup row aria-label='controlled' name='controlled' defaultValue='percentage'>
              <Box mr={37}>
                <FormControlLabel
                  value='percentage'
                  control={
                    <Radio
                      checkedIcon={<i className='tabler-circle-check-filled' />}
                      icon={<i className='tabler-circle' />}
                    />
                  }
                  label='Percentage'
                />
              </Box>
              <FormControlLabel
                value='flat'
                control={
                  <Radio
                    checkedIcon={<i className='tabler-circle-check-filled' />}
                    icon={<i className='tabler-circle' />}
                  />
                }
                label='Flat'
              />
            </RadioGroup>
            <CustomTextField defaultValue={'0.00'} style={{ width: '40%' }} />
          </div>
        )}
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

export default PaypalLayout
