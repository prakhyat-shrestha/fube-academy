'use client'
import CustomTextField from '@/@core/components/mui/TextField'
import { useState } from 'react'
import { FormGroup, Box, FormControlLabel, Checkbox, CardActions, Button, Radio, RadioGroup } from '@mui/material'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'

const StripeLayout = () => {
  const [serviceChargeChecked, setServiceChargeChecked] = useState(false)

  const handleServiceChargeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setServiceChargeChecked(e.target.checked)
    console.log('Service Charge Checked:', e.target.checked)
  }
  return (
    <>
      <div className='stripe' style={{ marginLeft: '-18%', width: '100%' }}>
        <CustomTextField label='GATEWAY NAME' defaultValue={'Stripe'} style={{ width: '120%' }} />
        <CustomTextField
          label='GATEWAY USERNAME'
          defaultValue={'demo@strip.com'}
          style={{ width: '120%', marginTop: '20px' }}
        />

        <CustomTextField
          label='GATEWAY SECRET KEY'
          defaultValue={'AVZdghanegaOjiL6DPXd0XwjMGEQ2aXc58z1-isWmBFnw1h2j'}
          style={{ width: '120%', marginTop: '20px' }}
        />

        <CustomTextField label='GATEWAY PUBLISHER KEY' style={{ width: '120%', marginTop: '20px' }} />
        <FormGroup>
          <Box mr={5} mt={2}>
            <FormControlLabel
              label='Service Charge '
              value='serviceCharge'
              control={
                <Checkbox
                  onChange={handleServiceChargeChange}
                  name='size-small'
                  defaultChecked={false}
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

export default StripeLayout
