'use client'
import { Typography, Tab, Card, CardContent } from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'
import type { SyntheticEvent } from 'react'
import CustomTabList from '@core/components/mui/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import LayoutOne from './admitCardLayouts/layoutOne'
import LayoutTwo from './admitCardLayouts/layoutTwo'
import SelectionOfLayout from './admitCardLayouts/selectLayout'

const AdmitCardSettingLayout = () => {
  const [value, setValue] = useState<string>('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Admit Card Setting
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Exam Settings
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Admit Card Setting</Link>
          </Typography>
        </nav>
      </div>

      <div className='tablet mt-4'>
        <TabContext value={value}>
          <CustomTabList
            pill='false'
            onChange={handleChange}
            aria-label='customized tabs example'
            style={{ background: '#bde7fc', width: '32%', borderRadius: '5px', padding: '0' }}
          >
            <Tab value='1' label='SELECT A LAYOUT' />
            <Tab value='2' label='LAYOUT ONE' />
            <Tab value='3' label='LAYOUT TWO' />
          </CustomTabList>

          {/* TabPanel 1 */}
          <TabPanel value='1'>
            <div className='selectLayout'>
              <Card sx={{ width: '100%', height: '105%' }}>
                <CardContent>
                  <SelectionOfLayout />
                </CardContent>
              </Card>
            </div>
          </TabPanel>

          {/* TabPanel 2 */}
          <TabPanel value='2'>
            <div className='layoutOne ' style={{ flex: 1 }}>
              <Card sx={{ width: '100%', height: '105%' }}>
                <CardContent>
                  <LayoutOne />
                </CardContent>
              </Card>
            </div>
          </TabPanel>

          {/* TabPanel 3 */}
          <TabPanel value='3'>
            <div className='layoutTwo ' style={{ flex: 1 }}>
              <Card sx={{ width: '100%', height: '105%' }}>
                <CardContent>
                  <LayoutTwo />
                </CardContent>
              </Card>
            </div>
          </TabPanel>
        </TabContext>
      </div>
    </>
  )
}

export default AdmitCardSettingLayout
