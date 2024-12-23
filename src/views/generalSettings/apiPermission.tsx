import { Typography, Card, CardContent, Button, Switch, FormControlLabel, FormGroup } from '@mui/material'
import Link from 'next/link'
import CustomTextField from '@/@core/components/mui/TextField'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'

const ApiPermissionLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          API Access
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
            <Link href='#'>API Access</Link>
          </Typography>
        </nav>
      </div>

      {/* Enable API Access Card */}
      <div className='apiAccess mt-4 '>
        <Card sx={{ width: '100%', height: '20%' }}>
          <CardContent>
            <div className='container'>
              <Typography variant='h6' component='h4'>
                API Acess
              </Typography>
              <FormGroup style={{ marginTop: '5px', alignItems: 'center' }}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label='Enable API Access'
                  labelPlacement='start'
                  sx={{
                    '& .MuiFormControlLabel-label': {
                      fontSize: '1.5rem'
                    }
                  }}
                />
              </FormGroup>
            </div>
          </CardContent>
        </Card>

        {/*  Second Card */}
        <Card className='fcmKey mt-7' sx={{ width: '100%', height: 'auto' }}>
          <CardContent>
            <div className='url mt-4' style={{ display: 'flex', gap: '10px' }}>
              <CustomTextField label='FCM KEY' required style={{ width: '86%' }} />
              <Button variant='contained' sx={{ height: '35px', marginTop: '20px' }}>
                <CheckSharpIcon /> SAVE FCM KEY
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default ApiPermissionLayout
