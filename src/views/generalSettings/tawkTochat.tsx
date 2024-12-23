import * as React from 'react'
import {
  Typography,
  Card,
  CardContent,
  Divider,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Button,
  CardActions
} from '@mui/material'
import CustomTextField from '@/@core/components/mui/TextField'
import Link from '@/components/Link'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'

const TawkToChatLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Tawk To Chat
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
            <Link href='#'>Tawk To Chat</Link>
          </Typography>
        </nav>
      </div>
      <div className='twakToChat mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div className='container'>
              <Typography variant='h6' component='h4' style={{ textAlign: 'center' }}>
                Twak To Chat Setting
                <Divider style={{ marginTop: '10px', width: '100%' }} />
              </Typography>
            </div>
            <div className='twakChat' style={{ display: 'flex', marginTop: '20px', gap: '35%' }}>
              <Typography variant='h6' component='h3'>
                TWAK TO CHAT
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

            <div className='applicableFor ' style={{ display: 'flex', marginTop: '30px', gap: '10%' }}>
              <Typography variant='h6' component='h3'>
                APPLICABLE FOR
              </Typography>
              <div style={{ marginTop: '-6px' }}>
                <FormGroup row defaultValue='student'>
                  <Box mr={5}>
                    <FormControlLabel
                      label='Student '
                      value='student'
                      control={
                        <Checkbox
                          name='size-small'
                          checkedIcon={<i className='tabler-circle-check-filled' />}
                          icon={<i className='tabler-circle' />}
                        />
                      }
                    />
                  </Box>
                  <Box mr={5}>
                    <FormControlLabel
                      label='Parents '
                      control={
                        <Checkbox
                          name='size-small'
                          checkedIcon={<i className='tabler-circle-check-filled' />}
                          icon={<i className='tabler-circle' />}
                        />
                      }
                    />
                  </Box>
                  <Box mr={5}>
                    <FormControlLabel
                      label='Teacher '
                      control={
                        <Checkbox
                          name='size-small'
                          checkedIcon={<i className='tabler-circle-check-filled' />}
                          icon={<i className='tabler-circle' />}
                        />
                      }
                    />
                  </Box>
                  <Box mr={5}>
                    <FormControlLabel
                      label='Admin '
                      control={
                        <Checkbox
                          name='size-small'
                          checkedIcon={<i className='tabler-circle-check-filled' />}
                          icon={<i className='tabler-circle' />}
                        />
                      }
                    />
                  </Box>
                  <Box mr={5}>
                    <FormControlLabel
                      label='Accountant '
                      control={
                        <Checkbox
                          name='size-small'
                          checkedIcon={<i className='tabler-circle-check-filled' />}
                          icon={<i className='tabler-circle' />}
                        />
                      }
                    />
                  </Box>
                  <Box mr={5}>
                    <FormControlLabel
                      label='Receptionist '
                      control={
                        <Checkbox
                          name='size-small'
                          checkedIcon={<i className='tabler-circle-check-filled' />}
                          icon={<i className='tabler-circle' />}
                        />
                      }
                    />
                  </Box>
                  <Box mr={5}>
                    <FormControlLabel
                      label='Librarian '
                      control={
                        <Checkbox
                          name='size-small'
                          checkedIcon={<i className='tabler-circle-check-filled' />}
                          icon={<i className='tabler-circle' />}
                        />
                      }
                    />
                  </Box>
                  <Box mr={5}>
                    <FormControlLabel
                      label='Driver '
                      control={
                        <Checkbox
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

            {/* For Admin Panel and Availability */}
            <div className='containerOne' style={{ display: 'flex', marginTop: '30px', gap: '30%' }}>
              <div className='adminPanel' style={{ marginTop: '20px' }}>
                <Typography variant='h6' component='h3'>
                  SHOW ON ADMIN PANEL
                </Typography>
                <div style={{ marginTop: '10px' }}>
                  <RadioGroup row aria-label='controlled' defaultValue='no' name='controlled'>
                    <Box mr={5}>
                      <FormControlLabel
                        value='yes'
                        control={
                          <Radio
                            checkedIcon={<i className='tabler-circle-check-filled' />}
                            icon={<i className='tabler-circle' />}
                          />
                        }
                        label='Yes'
                      />
                    </Box>
                    <Box mr={5}>
                      <FormControlLabel
                        value='no'
                        control={
                          <Radio
                            checkedIcon={<i className='tabler-circle-check-filled' />}
                            icon={<i className='tabler-circle' />}
                          />
                        }
                        label='No'
                      />
                    </Box>
                  </RadioGroup>
                </div>
              </div>

              <div className='availability' style={{ marginTop: '20px' }}>
                <Typography variant='h6' component='h3'>
                  AVAILABILITY
                </Typography>
                <div style={{ marginTop: '10px' }}>
                  <RadioGroup row aria-label='controlled' defaultValue='both' name='controlled'>
                    <Box mr={5}>
                      <FormControlLabel
                        value='mobile'
                        control={
                          <Radio
                            checkedIcon={<i className='tabler-circle-check-filled' />}
                            icon={<i className='tabler-circle' />}
                          />
                        }
                        label='Mobile'
                      />
                    </Box>
                    <Box mr={5}>
                      <FormControlLabel
                        value='onlyDesktop'
                        control={
                          <Radio
                            checkedIcon={<i className='tabler-circle-check-filled' />}
                            icon={<i className='tabler-circle' />}
                          />
                        }
                        label='Only Desktop'
                      />
                    </Box>
                    <Box mr={5}>
                      <FormControlLabel
                        value='both'
                        control={
                          <Radio
                            checkedIcon={<i className='tabler-circle-check-filled' />}
                            icon={<i className='tabler-circle' />}
                          />
                        }
                        label='Both'
                      />
                    </Box>
                  </RadioGroup>
                </div>
              </div>
            </div>

            {/* For Frontend and Showing Page */}
            <div className='containerTwo' style={{ display: 'flex', marginTop: '10px', gap: '30.5%' }}>
              <div className='frontEnd' style={{ marginTop: '20px' }}>
                <Typography variant='h6' component='h3'>
                  SHOW ON FRONT END
                </Typography>
                <div style={{ marginTop: '10px' }}>
                  <RadioGroup row aria-label='controlled' defaultValue='yes' name='controlled'>
                    <Box mr={5}>
                      <FormControlLabel
                        value='yes'
                        control={
                          <Radio
                            checkedIcon={<i className='tabler-circle-check-filled' />}
                            icon={<i className='tabler-circle' />}
                          />
                        }
                        label='Yes'
                      />
                    </Box>
                    <Box mr={5}>
                      <FormControlLabel
                        value='no'
                        control={
                          <Radio
                            checkedIcon={<i className='tabler-circle-check-filled' />}
                            icon={<i className='tabler-circle' />}
                          />
                        }
                        label='No'
                      />
                    </Box>
                  </RadioGroup>
                </div>
              </div>

              <div className='showingPage' style={{ marginTop: '20px' }}>
                <Typography variant='h6' component='h3'>
                  SHOWING PAGE
                </Typography>
                <div style={{ marginTop: '10px' }}>
                  <RadioGroup row aria-label='controlled' defaultValue='allPage' name='controlled'>
                    <Box mr={5}>
                      <FormControlLabel
                        value='homePage'
                        control={
                          <Radio
                            checkedIcon={<i className='tabler-circle-check-filled' />}
                            icon={<i className='tabler-circle' />}
                          />
                        }
                        label='Only Homepage'
                      />
                    </Box>
                    <Box mr={5}>
                      <FormControlLabel
                        value='allPage'
                        control={
                          <Radio
                            checkedIcon={<i className='tabler-circle-check-filled' />}
                            icon={<i className='tabler-circle' />}
                          />
                        }
                        label='All Page'
                      />
                    </Box>
                  </RadioGroup>
                </div>
              </div>
            </div>

            {/* For Postion */}
            <div className='position' style={{ marginTop: '20px' }}>
              <Typography variant='h6' component='h3'>
                POSITION
              </Typography>
              <div style={{ marginTop: '10px' }}>
                <RadioGroup row aria-label='controlled' defaultValue='leftSide' name='controlled'>
                  <Box mr={5}>
                    <FormControlLabel
                      value='leftSide'
                      control={
                        <Radio
                          checkedIcon={<i className='tabler-circle-check-filled' />}
                          icon={<i className='tabler-circle' />}
                        />
                      }
                      label='Left Side'
                    />
                  </Box>
                  <Box mr={5}>
                    <FormControlLabel
                      value='rightSide'
                      control={
                        <Radio
                          checkedIcon={<i className='tabler-circle-check-filled' />}
                          icon={<i className='tabler-circle' />}
                        />
                      }
                      label='Right Side'
                    />
                  </Box>
                </RadioGroup>
              </div>
            </div>

            <CustomTextField label='SHORT CODE' multiline rows={2} fullWidth style={{ marginTop: '20px' }} />
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

export default TawkToChatLayout
