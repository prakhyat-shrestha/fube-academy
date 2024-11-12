import * as React from 'react'
import {
  Typography,
  Card,
  CardContent,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Divider,
  Radio,
  RadioGroup,
  Box
} from '@mui/material'
import Link from 'next/link'
import CustomTextField from '@/@core/components/mui/TextField'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'

const SetupExamRouteLayout = () => {
  return (
    <>
      {/* Setup Exam Rule First Card*/}
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Setup Exam Rule
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
            <Link href='#'>Setup Exam Rule </Link>
          </Typography>
        </nav>
      </div>

      <div
        className='setupExamFirst mt-4 '
        style={{ display: 'flex', flex: 1, justifyContent: 'space-between', gap: '30px' }}
      >
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div>
              <Typography variant='h6' component='h3'>
                Setup Final Exam Rule
              </Typography>
            </div>

            <div className='finalExamRule' style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant='h6' component='h4' style={{ fontWeight: 'lighter', marginTop: '20px' }}>
                EXAM TYPE FINAL EXAMINATION(%)
              </Typography>
              <CustomTextField defaultValue='100.00' style={{ marginTop: '10px', width: '50%' }} />
            </div>

            <div className='secondRow' style={{ display: 'flex', gap: '44%' }}>
              <Typography variant='h6' component='h4' style={{ fontWeight: 'lighter', marginTop: '20px' }}>
                TOTAL MARK 100%
              </Typography>
              <Typography variant='h6' component='h4' style={{ fontWeight: 'lighter', marginTop: '20px' }}>
                REMAINING 0%
              </Typography>
            </div>

            <div className='container mt-6' style={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant='contained'>
                <CheckSharpIcon sx={{ mr: 1 }} />
                UPDATE
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Second Card */}
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div>
              <Typography variant='h6' component='h4'>
                Mark Contribution
              </Typography>
            </div>

            <div className='firstField' style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
                EXAM TERM
              </Typography>
              <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
                PERCENTAGE
              </Typography>
            </div>

            <Divider style={{ marginTop: '10px' }} />

            <div className='secondField' style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
                FINAL EXAMINATION
              </Typography>
              <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
                100.00%
              </Typography>
            </div>

            <Divider style={{ marginTop: '10px' }} />

            <div className='thirdField' style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant='h6' component='h4' style={{ fontWeight: 'bold', marginTop: '20px' }}>
                Total
              </Typography>
              <Typography variant='h6' component='h4' style={{ fontWeight: 'bold', marginTop: '20px' }}>
                100%
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Second Row First Card */}
      <div
        className='nameOfStep mt-7 '
        style={{ display: 'flex', flex: 1, justifyContent: 'space-between', gap: '30px' }}
      >
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div>
              <Typography variant='h6' component='h3'>
                Do you want to skip this step for mark register / store?
              </Typography>
            </div>
            <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
              NAME OF STEP
            </Typography>
            <div style={{ marginTop: '2%' }}>
              <FormGroup>
                <FormControlLabel
                  label='Exam Schedule '
                  control={
                    <Checkbox
                      name='size-small'
                      checkedIcon={<i className='tabler-circle-check-filled' />}
                      icon={<i className='tabler-circle' />}
                    />
                  }
                />
                <FormControlLabel
                  label='Exam Attendance '
                  control={
                    <Checkbox
                      name='size-small'
                      checkedIcon={<i className='tabler-circle-check-filled' />}
                      icon={<i className='tabler-circle' />}
                    />
                  }
                />
              </FormGroup>
            </div>

            <div className='container' style={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant='contained'>
                <CheckSharpIcon sx={{ mr: 1 }} />
                UPDATE
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Second Row Second Card */}
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div>
              <Typography variant='h6' component='h4'>
                Merit List Contribution Using
              </Typography>
            </div>
            <div style={{ marginTop: '2%' }}>
              <RadioGroup row aria-label='controlled' name='controlled'>
                <Box mr={10}>
                  <FormControlLabel
                    value='totalMark'
                    control={
                      <Radio
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                    label='Total Mark'
                  />
                </Box>
                <Box mr={10}>
                  <FormControlLabel
                    value='totalGrade'
                    control={
                      <Radio
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                    label='Total Grade'
                  />
                </Box>
                <FormControlLabel
                  value='rollNumber'
                  control={
                    <Radio
                      checkedIcon={<i className='tabler-circle-check-filled' />}
                      icon={<i className='tabler-circle' />}
                    />
                  }
                  label='Roll Number'
                />
              </RadioGroup>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Third Row Card */}
      <div className='resultPrintStyle mt-7 '>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div>
              <Typography variant='h6' component='h3'>
                Result Print Style
              </Typography>
            </div>
            <div style={{ marginTop: '10px' }}>
              <FormGroup row>
                <FormControlLabel
                  label='With Profile Image '
                  control={
                    <Checkbox
                      name='size-small'
                      checkedIcon={<i className='tabler-circle-check-filled' />}
                      icon={<i className='tabler-circle' />}
                    />
                  }
                />
                <FormControlLabel
                  label='With Header Background '
                  control={
                    <Checkbox
                      name='size-small'
                      checkedIcon={<i className='tabler-circle-check-filled' />}
                      icon={<i className='tabler-circle' />}
                    />
                  }
                />
                <FormControlLabel
                  label='With Body Background '
                  control={
                    <Checkbox
                      name='size-small'
                      checkedIcon={<i className='tabler-circle-check-filled' />}
                      icon={<i className='tabler-circle' />}
                    />
                  }
                />
                <FormControlLabel
                  label='With Vertical Border '
                  control={
                    <Checkbox
                      name='size-small'
                      checkedIcon={<i className='tabler-circle-check-filled' />}
                      icon={<i className='tabler-circle' />}
                    />
                  }
                />
              </FormGroup>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default SetupExamRouteLayout
