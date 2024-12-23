'use client'
import { Typography, Tab, Card, CardContent, Button, Divider } from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'
import type { SyntheticEvent } from 'react'
import CustomTabList from '@core/components/mui/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import SmtpSettingLayout from './emailComponents/smtpSettings'
import PhpSettingLayout from './emailComponents/phpSettings'

const EmailSettingsLayout = () => {
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

      <div className='emailSetting mt-4 ' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: 'auto' }}>
          <CardContent>
            <div className='container' style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant='h6' component='h4'>
                Select Email Settings
              </Typography>
              <Button variant='contained' startIcon={<EmailOutlinedIcon />} style={{ fontSize: '.8rem' }}>
                SEND TEST MAIL
              </Button>
            </div>
            <div className='tablet mt-2'>
              <TabContext value={value}>
                <CustomTabList
                  pill='false'
                  onChange={handleChange}
                  aria-label='customized tabs example'
                  style={{ background: '#bde7fc', width: '21.7%', borderRadius: '5px', padding: '0' }}
                >
                  <Tab value='1' label='SMTP SETTINGS' />
                  <Tab value='2' label='PHP SETTINGS' style={{ paddingLeft: '0', marginRight: '0' }} />
                </CustomTabList>
                <Divider style={{ width: '100%' }} />

                {/* TabPanel 1 */}
                <TabPanel value='1'>
                  <div className='smtpSetting'>
                    <SmtpSettingLayout />
                  </div>
                </TabPanel>

                {/* TabPanel 2 */}
                <TabPanel value='2'>
                  <div className='phpSetting '>
                    <PhpSettingLayout />
                  </div>
                </TabPanel>
              </TabContext>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default EmailSettingsLayout
