import { Typography, MenuItem } from '@mui/material'
import Link from 'next/link'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CustomTextField from '@core/components/mui/TextField'
import Button from '@mui/material/Button'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'

const SendMarksBySmsLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Send Marks By SMS
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Examination
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Send Marks By SMS</Link>
          </Typography>
        </nav>
      </div>
      <div className='sendMarkBySms mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div className='container' style={{ display: 'flex', gap: '72.2%' }}>
              <Typography variant='h6' component='h4'>
                Send Mark Via SMS
              </Typography>
            </div>

            <div className='container' style={{ display: 'flex' }}>
              <CustomTextField
                select
                fullWidth
                required
                defaultValue='exam'
                label='EXAM'
                id='custom-select'
                style={{ margin: '20px 40px 0 0 ', width: '60%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='exam'>
                  <span style={{ fontStyle: 'normal' }}>Select Exam*</span>
                </MenuItem>
                <MenuItem value='one'>Final Examination</MenuItem>
                <MenuItem value='two'>First Terminal Examination</MenuItem>
                <MenuItem value='three'>Second Terminal Examination</MenuItem>
              </CustomTextField>
              <CustomTextField
                select
                required
                fullWidth
                defaultValue='class'
                label='CLASS'
                id='custom-select'
                style={{ margin: '20px 40px 0 0 ', width: '60%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='class'>
                  <span style={{ fontStyle: 'normal' }}>Select Class *</span>
                </MenuItem>
                <MenuItem value='one'>ECED</MenuItem>
                <MenuItem value='two'>1</MenuItem>
                <MenuItem value='three'>2</MenuItem>
              </CustomTextField>
              <CustomTextField
                select
                fullWidth
                required
                defaultValue='receiver'
                label='RECEIVER'
                id='custom-select'
                style={{ marginTop: '20px', width: '60%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='receiver'>
                  <span style={{ fontStyle: 'normal' }}>Select Receiver*</span>
                </MenuItem>
              </CustomTextField>
            </div>
            <div className='container mt-6' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Button variant='contained' startIcon={<CheckSharpIcon />}>
                SEND MARKS VIA SMS
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default SendMarksBySmsLayout
