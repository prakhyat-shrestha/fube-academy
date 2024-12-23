import {
  Typography,
  Card,
  CardContent,
  Divider,
  Box,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormGroup,
  Checkbox,
  CardActions,
  Button
} from '@mui/material'
import Link from '@/components/Link'
import CustomTextField from '@/@core/components/mui/TextField'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'

const TwoFactorSettingsLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Two Factor Setting
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
            <Link href='#'>Two Factor Setting</Link>
          </Typography>
        </nav>
      </div>
      <div className='twoFactorSettings mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <Typography variant='h6' component='h3' style={{ textAlign: 'center' }}>
              Two Factor Setting
            </Typography>
            <Divider sx={{ marginTop: '10px' }} />

            <div className='container' style={{ display: 'flex', gap: '102px' }}>
              <div className='twoFactorOtp' style={{ display: 'flex', marginTop: '20px', gap: '250px' }}>
                <Typography variant='h6' component='h3'>
                  TWO FACTOR OTP
                </Typography>
                <div style={{ marginTop: '-6px' }}>
                  <RadioGroup row aria-label='controlled' defaultValue='enable' name='controlled'>
                    <Box mr={2}>
                      <FormControlLabel
                        value='enable'
                        control={
                          <Radio
                            checkedIcon={<i className='tabler-circle-check-filled' />}
                            icon={<i className='tabler-circle' />}
                          />
                        }
                        label='Enable'
                      />
                    </Box>
                    <Box mr={2}>
                      <FormControlLabel
                        value='disable'
                        control={
                          <Radio
                            checkedIcon={<i className='tabler-circle-check-filled' />}
                            icon={<i className='tabler-circle' />}
                          />
                        }
                        label='Disable'
                      />
                    </Box>
                  </RadioGroup>
                </div>
              </div>
              <div className='sendCodeVia' style={{ display: 'flex', marginTop: '20px', gap: '250px' }}>
                <Typography variant='h6' component='h3'>
                  SEND CODE VIA
                </Typography>
                <div style={{ marginTop: '-6px' }}>
                  <FormGroup row defaultValue='sms'>
                    <Box mr={2}>
                      <FormControlLabel
                        label='SMS '
                        value='sms'
                        control={
                          <Checkbox
                            defaultChecked={false}
                            name='size-small'
                            checkedIcon={<i className='tabler-circle-check-filled' />}
                            icon={<i className='tabler-circle' />}
                          />
                        }
                      />
                    </Box>
                    <Box mr={2}>
                      <FormControlLabel
                        label='Email '
                        control={
                          <Checkbox
                            defaultChecked
                            name='size-small'
                            checkedIcon={<i className='tabler-circle-check-filled' />}
                            icon={<i className='tabler-circle' />}
                          />
                        }
                      />
                    </Box>
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className='secondContainer' style={{ display: 'flex' }}>
              <div className='applicableFor' style={{ display: 'flex', marginTop: '20px', gap: '60px' }}>
                <Typography variant='h6' component='h3'>
                  APPLICABLE FOR
                </Typography>
                <div style={{ marginTop: '-6px' }}>
                  <FormGroup row defaultValue='admin'>
                    <Box mr={2}>
                      <FormControlLabel
                        label='Admin '
                        value='admin'
                        control={
                          <Checkbox
                            defaultChecked={false}
                            name='size-small'
                            checkedIcon={<i className='tabler-circle-check-filled' />}
                            icon={<i className='tabler-circle' />}
                          />
                        }
                      />
                    </Box>
                    <Box mr={2}>
                      <FormControlLabel
                        label='Student '
                        control={
                          <Checkbox
                            defaultChecked
                            name='size-small'
                            checkedIcon={<i className='tabler-circle-check-filled' />}
                            icon={<i className='tabler-circle' />}
                          />
                        }
                      />
                    </Box>
                    <Box mr={2}>
                      <FormControlLabel
                        label='Parent '
                        control={
                          <Checkbox
                            defaultChecked
                            name='size-small'
                            checkedIcon={<i className='tabler-circle-check-filled' />}
                            icon={<i className='tabler-circle' />}
                          />
                        }
                      />
                    </Box>
                    <Box mr={2}>
                      <FormControlLabel
                        label='Teacher '
                        control={
                          <Checkbox
                            defaultChecked
                            name='size-small'
                            checkedIcon={<i className='tabler-circle-check-filled' />}
                            icon={<i className='tabler-circle' />}
                          />
                        }
                      />
                    </Box>
                    <Box mr={2}>
                      <FormControlLabel
                        label='Staff '
                        control={
                          <Checkbox
                            defaultChecked
                            name='size-small'
                            checkedIcon={<i className='tabler-circle-check-filled' />}
                            icon={<i className='tabler-circle' />}
                          />
                        }
                      />
                    </Box>
                  </FormGroup>
                </div>
              </div>
              <div className='codeLifeTime' style={{ display: 'flex', marginTop: '20px', gap: '100px' }}>
                <Typography variant='h6' component='h3'>
                  CODE LIFETIME(SECOND)
                </Typography>
                <CustomTextField defaultValue={'300.00'} sx={{ marginTop: '-10px' }} />
              </div>
            </div>
          </CardContent>
          {/* Button */}
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button variant='contained'>
              <CheckSharpIcon sx={{ mr: 1 }} />
              UPDATE
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  )
}

export default TwoFactorSettingsLayout
