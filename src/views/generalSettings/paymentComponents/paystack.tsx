'use client'
import CustomTextField from '@/@core/components/mui/TextField'
import { useState } from 'react'
import {
  FormGroup,
  Box,
  FormControlLabel,
  Checkbox,
  CardActions,
  Button,
  Typography,
  Radio,
  RadioGroup
} from '@mui/material'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'

const PaystackLayout = () => {
  const [serviceChargeChecked, setServiceChargeChecked] = useState(false)

  const handleServiceChargeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setServiceChargeChecked(e.target.checked)
    console.log('Service Charge Checked:', e.target.checked)
  }
  return (
    <>
      <div className='payStack' style={{ marginLeft: '-18%', width: '100%' }}>
        <CustomTextField label='GATEWAY NAME' defaultValue={'Paystack'} style={{ width: '120%' }} />
        <CustomTextField
          label='GATEWAY USERNAME'
          defaultValue={'demo@gmail.com'}
          style={{ width: '120%', marginTop: '20px' }}
        />

        <CustomTextField
          label='GATEWAY SECRET KEY'
          defaultValue={'sk_live_2679322872013c265e161bc8ea11efc1e822bce1'}
          style={{ width: '120%', marginTop: '20px' }}
        />

        <CustomTextField
          label='GATEWAY PUBLISHER KEY'
          defaultValue={'pk_live_e5738ce9aade963387204f1f19bee599176e7a71'}
          style={{ width: '120%', marginTop: '20px' }}
        />
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

        <Typography component='h3' variant='h6'>
          <b>
            N.B: Please Set This url https://erp.fubetech.com/payment_gateway_success_callback/Paystack As Paystack
            Callback Url
          </b>
        </Typography>

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

export default PaystackLayout
