'use client'
import {
  Typography,
  Tab,
  Card,
  CardContent,
  Button,
  FormGroup,
  Box,
  Checkbox,
  FormControlLabel,
  CardActions
} from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'
import type { SyntheticEvent } from 'react'
import CustomTabList from '@core/components/mui/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import PaypalLayout from './paymentComponents/paypal'
import StripeLayout from './paymentComponents/stripe'
import BankLayout from './paymentComponents/bank'
import ChequeLayout from './paymentComponents/cheque'
import PaystackLayout from './paymentComponents/paystack'

const PaymentSettingsLayout = () => {
  const [value, setValue] = useState<string>('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Email Setting
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              General Settings
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Email Setting</Link>
          </Typography>
        </nav>
      </div>

      <div className='paymentSetting mt-4 ' style={{ display: 'flex' }}>
        {/* Payement Gateway Card */}
        <Card className=' payementGateway' sx={{ width: '30%', height: '25%' }}>
          <CardContent>
            <div className='container'>
              <Typography variant='h6' component='h4'>
                Select A Payment Gateway
              </Typography>
            </div>
            <div className=' mt-4'>
              <FormGroup>
                <Box mr={5}>
                  <FormControlLabel
                    label='Cash '
                    value='cash'
                    control={
                      <Checkbox
                        name='size-small'
                        defaultChecked
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                  />
                </Box>
                <Box mr={5}>
                  <FormControlLabel
                    label='Cheque '
                    control={
                      <Checkbox
                        name='size-small'
                        defaultChecked
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                  />
                </Box>
                <Box mr={5}>
                  <FormControlLabel
                    label='Bank '
                    control={
                      <Checkbox
                        name='size-small'
                        defaultChecked
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                  />
                </Box>
                <Box mr={5}>
                  <FormControlLabel
                    label='Paypal '
                    control={
                      <Checkbox
                        name='size-small'
                        defaultChecked
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                  />
                </Box>
                <Box mr={5}>
                  <FormControlLabel
                    label='Stripe '
                    control={
                      <Checkbox
                        name='size-small'
                        defaultChecked
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                  />
                </Box>
                <Box mr={5}>
                  <FormControlLabel
                    label='Paystack '
                    control={
                      <Checkbox
                        name='size-small'
                        defaultChecked
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                  />
                </Box>
                <Box mr={5}>
                  <FormControlLabel
                    label='Wallet '
                    control={
                      <Checkbox
                        name='size-small'
                        defaultChecked
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                  />
                </Box>
              </FormGroup>
            </div>
            {/* Button */}
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant='contained'>
                <CheckSharpIcon sx={{ mr: 1 }} />
                UPDATE
              </Button>
            </CardActions>
          </CardContent>
        </Card>

        {/* Gateway Setting Card */}
        <Card className='gatewaySetting' sx={{ width: '100%', marginLeft: '2%', height: 'auto' }}>
          <CardContent>
            <div className='container'>
              <Typography variant='h6' component='h4'>
                Gateway Settings
              </Typography>
              <div className='tablet mx-4' style={{ marginLeft: '15%', marginTop: '-2%' }}>
                <TabContext value={value}>
                  <CustomTabList
                    pill='false'
                    onChange={handleChange}
                    aria-label='customized tabs example'
                    style={{
                      background: '#ccdce6',
                      width: '495.5px',
                      borderRadius: '5px',
                      padding: '0'
                    }}
                  >
                    <Tab value='1' label='PAYPAL' />
                    <Tab value='2' label='STRIPE' />
                    <Tab value='3' label='PAYSTACK' />
                    <Tab value='4' label='BANK' />
                    <Tab value='5' label='CHEQUE' />
                  </CustomTabList>

                  {/* TabPanel Paypal */}
                  <TabPanel value='1'>
                    <div className='paypal'>
                      <PaypalLayout />
                    </div>
                  </TabPanel>

                  {/* TabPanel Stripe */}
                  <TabPanel value='2'>
                    <div className='stripe '>
                      <StripeLayout />
                    </div>
                  </TabPanel>
                  {/* TabPanel Paystack*/}
                  <TabPanel value='3'>
                    <div className='payStack '>
                      <PaystackLayout />
                    </div>
                  </TabPanel>
                  {/* TabPanel bank */}
                  <TabPanel value='4'>
                    <div className='bank '>
                      <BankLayout />
                    </div>
                  </TabPanel>
                  {/* TabPanel cheque */}
                  <TabPanel value='5'>
                    <div className='cheque '>
                      <ChequeLayout />
                    </div>
                  </TabPanel>
                </TabContext>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default PaymentSettingsLayout
