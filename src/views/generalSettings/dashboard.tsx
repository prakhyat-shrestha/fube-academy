import { Typography, Card, CardContent, Button, Switch, FormControlLabel, FormGroup } from '@mui/material'
import Link from 'next/link'
import CustomTextField from '@/@core/components/mui/TextField'

const DashboardLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Header Option
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
            <Link href='#'>Header Option</Link>
          </Typography>
        </nav>
      </div>

      {/* Dashboard Setting */}
      <div className='dashboardSetting mt-4 ' style={{ display: 'flex' }}>
        <Card sx={{ width: '100%', height: '20%' }}>
          <CardContent>
            <div className='container' style={{ display: 'flex', gap: '5%' }}>
              <Typography variant='h6' component='h4'>
                Website
              </Typography>
              <FormGroup style={{ marginTop: '-6px' }}>
                <FormControlLabel control={<Switch defaultChecked />} label='' />
              </FormGroup>
            </div>
            <div className='url mt-4' style={{ display: 'flex', justifyContent: 'space-between' }}>
              <CustomTextField label='CUSTOM URL' style={{ width: '80%' }} />
              <Button variant='contained' sx={{ height: '35px', marginTop: '20px' }}>
                UPDATE
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Dashboard Setting Second Card */}
        <Card className='switchOptions' sx={{ width: '100%', marginLeft: '2%', height: 'auto' }}>
          <CardContent>
            <div className='firstRow  ' style={{ display: 'flex', gap: '40%' }}>
              <div className='dashboard' style={{ display: 'flex', gap: '100%' }}>
                <Typography variant='h6' component='h4'>
                  Dashboard
                </Typography>
                <FormGroup style={{ marginTop: '-6px' }}>
                  <FormControlLabel control={<Switch defaultChecked />} label='' />
                </FormGroup>
              </div>
              <div className='style' style={{ display: 'flex', gap: '205%' }}>
                <Typography variant='h6' component='h4'>
                  Style
                </Typography>
                <FormGroup style={{ marginTop: '-6px' }}>
                  <FormControlLabel control={<Switch defaultChecked />} label='' />
                </FormGroup>
              </div>
            </div>

            <div className='secondRow  mt-7' style={{ display: 'flex', gap: '44.5%' }}>
              <div className='report' style={{ display: 'flex', gap: '155%' }}>
                <Typography variant='h6' component='h4'>
                  Report
                </Typography>
                <FormGroup style={{ marginTop: '-6px' }}>
                  <FormControlLabel control={<Switch defaultChecked />} label='' />
                </FormGroup>
              </div>
              <div className='language' style={{ display: 'flex', gap: '125%' }}>
                <Typography variant='h6' component='h4'>
                  Language
                </Typography>
                <FormGroup style={{ marginTop: '-6px' }}>
                  <FormControlLabel control={<Switch defaultChecked />} label='' />
                </FormGroup>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default DashboardLayout
