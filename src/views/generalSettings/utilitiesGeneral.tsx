import {
  Typography,
  Card,
  CardContent,
  Button,
  FormControlLabel,
  FormGroup,
  Box,
  Paper,
  Divider,
  Radio,
  RadioGroup,
  Checkbox,
  InputAdornment,
  CardActions
} from '@mui/material'
import Link from 'next/link'
import CustomTextField from '@/@core/components/mui/TextField'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import FilterDramaIcon from '@mui/icons-material/FilterDrama'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

const UtilitiesGeneralLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Utilities
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
            <Link href='#'>Utilities</Link>
          </Typography>
        </nav>
      </div>

      {/* First Card */}
      <div className='cards mt-4 '>
        <Card sx={{ width: '100%', height: '20%' }}>
          <CardContent>
            <div className='paper' style={{ display: 'flex', gap: '10px' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  '& > :not(style)': {
                    m: 1,
                    width: 320,
                    height: 130
                  }
                }}
              >
                <Paper
                  sx={{
                    background: 'linear-gradient(to right, #29e6f0, #93f5fa)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%'
                  }}
                >
                  <FilterDramaIcon style={{ color: 'white', fontSize: '2.5rem' }} />
                  <Typography
                    variant='h5'
                    component='h3'
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '1.5rem',
                      textAlign: 'center'
                    }}
                  >
                    Clear Cache
                  </Typography>
                </Paper>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  '& > :not(style)': {
                    m: 1,
                    width: 320,
                    height: 130
                  }
                }}
              >
                <Paper
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    background: 'linear-gradient(to right, #6c47c9, #946ef5)' // Purple to light purple gradient
                  }}
                >
                  <ReceiptOutlinedIcon style={{ color: 'white', fontSize: '2.5rem' }} />
                  <Typography
                    variant='h5'
                    component='h3'
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '1.5rem',
                      textAlign: 'center'
                    }}
                  >
                    Clear Log
                  </Typography>
                </Paper>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  '& > :not(style)': {
                    m: 1,
                    width: 320,
                    height: 130
                  }
                }}
              >
                <Paper
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    background: 'linear-gradient(to right, #0c98f5, #77c4f7)' // Dark blue to light blue gradient
                  }}
                >
                  <DesktopMacOutlinedIcon style={{ color: 'white', fontSize: '2.5rem' }} />
                  <Typography
                    variant='h5'
                    component='h3'
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '1.5rem',
                      textAlign: 'center'
                    }}
                  >
                    Disable App Debug
                  </Typography>
                </Paper>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  '& > :not(style)': {
                    m: 1,
                    width: 320,
                    height: 130
                  }
                }}
              >
                <Paper
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    background: 'linear-gradient(to right, #eb2de1, #f584ef)' // Pink to light purple gradient
                  }}
                >
                  <LockOutlinedIcon style={{ color: 'white', fontSize: '2.5rem' }} />
                  <Typography
                    variant='h5'
                    component='h3'
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '1.5rem',
                      textAlign: 'center'
                    }}
                  >
                    Enable Force HTTPS
                  </Typography>
                </Paper>
              </Box>
            </div>
          </CardContent>
        </Card>

        {/*  Second Card */}
        <Card className='maintainance mt-7' sx={{ width: '100%', height: 'auto' }}>
          <CardContent>
            <Typography component='h3' variant='h5' style={{ fontWeight: 'bold', textAlign: 'center' }}>
              Maintenance Mode Setting
            </Typography>
            <Divider sx={{ borderColor: '#7b7f85' }} />
            <div className='maintainanceMode' style={{ display: 'flex', marginTop: '20px', gap: '5%' }}>
              <Typography variant='h6' component='h3' style={{ width: '20%' }}>
                MAINTAINANCE MODE
              </Typography>
              <div style={{ display: 'flex', width: '100%', gap: '10%' }}>
                <div style={{ display: 'flex' }}>
                  <RadioGroup
                    row
                    aria-label='controlled'
                    defaultValue='enable'
                    name='controlled'
                    style={{ marginTop: '-7px' }}
                  >
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
                <CustomTextField
                  label='TITLE'
                  defaultValue={'We will be back soon!'}
                  style={{ width: '67.88%', marginLeft: '30px' }}
                />
              </div>
            </div>
            <CustomTextField
              label='SUB TITLE'
              defaultValue={'Sorry for the inconvenience but we are performing some maintenance at the moment.'}
              style={{ width: '100%', marginTop: '20px' }}
            />

            <div className='applicableFor ' style={{ display: 'flex', marginTop: '30px', gap: '5%' }}>
              <Typography variant='h6' component='h3'>
                APPLICABLE FOR
              </Typography>
              <div style={{ marginTop: '-6px' }}>
                <FormGroup row defaultValue='student'>
                  <Box mr={3}>
                    <FormControlLabel
                      label='Student '
                      value='student'
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
                  <Box mr={3}>
                    <FormControlLabel
                      label='Parents '
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
                  <Box mr={3}>
                    <FormControlLabel
                      label='Teacher '
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
                  <Box mr={3}>
                    <FormControlLabel
                      label='Admin '
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
                  <Box mr={3}>
                    <FormControlLabel
                      label='Accountant '
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
                  <Box mr={3}>
                    <FormControlLabel
                      label='Receptionist '
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
                  <Box mr={3}>
                    <FormControlLabel
                      label='Librarian '
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
                  <Box mr={3}>
                    <FormControlLabel
                      label='Driver '
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
                  <Box mr={3}>
                    <FormControlLabel
                      label='Frontend/Website '
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
            </div>
            <CustomTextField
              required
              value='Upload Image'
              style={{ margin: '20px 40px 0 0 ', width: '50%' }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <Button variant='contained' style={{ height: '25px', width: '90px', fontSize: '0.75rem' }}>
                      BROWSE
                    </Button>
                  </InputAdornment>
                )
              }}
            />
            {/* Button */}
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant='contained'>
                <CheckSharpIcon sx={{ mr: 1 }} />
                UPDATE
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default UtilitiesGeneralLayout
