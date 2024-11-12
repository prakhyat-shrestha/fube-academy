import Link from 'next/link'
import {
  Typography,
  RadioGroup,
  Box,
  FormControlLabel,
  Radio,
  Button,
  CardActions,
  Card,
  CardContent
} from '@mui/material'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'

const SeatPlanSettingLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Seat Plan Setting
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
            <Link href='#'>Seat Plan Setting</Link>
          </Typography>
        </nav>
      </div>

      <div className='seatPlanSetting mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div className='container'>
              <Typography variant='h6' component='h4'>
                Seat Plan Setting
              </Typography>
            </div>
            <div className='mainContainer' style={{ display: 'flex' }}>
              <div className='containerOne'>
                {/* SCHOOL NAME */}
                <div className='schoolName' style={{ display: 'flex', gap: '290px' }}>
                  <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
                    SCHOOL NAME
                  </Typography>
                  <div style={{ marginTop: '2%' }}>
                    <RadioGroup row aria-label='controlled' defaultValue='show' name='controlled'>
                      <Box mr={2}>
                        <FormControlLabel
                          value='show'
                          control={
                            <Radio
                              checkedIcon={<i className='tabler-circle-check-filled' />}
                              icon={<i className='tabler-circle' />}
                            />
                          }
                          label='Show'
                        />
                      </Box>
                      <Box mr={2}>
                        <FormControlLabel
                          value='hide'
                          control={
                            <Radio
                              checkedIcon={<i className='tabler-circle-check-filled' />}
                              icon={<i className='tabler-circle' />}
                            />
                          }
                          label='Hide'
                        />
                      </Box>
                    </RadioGroup>
                  </div>
                </div>

                {/* STUDENT NAME */}
                <div className='studentName' style={{ display: 'flex', gap: '284px' }}>
                  <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
                    STUDENT NAME
                  </Typography>
                  <div style={{ marginTop: '2%' }}>
                    <RadioGroup row aria-label='controlled' defaultValue='show' name='controlled'>
                      <Box mr={2}>
                        <FormControlLabel
                          value='show'
                          control={
                            <Radio
                              checkedIcon={<i className='tabler-circle-check-filled' />}
                              icon={<i className='tabler-circle' />}
                            />
                          }
                          label='Show'
                        />
                      </Box>
                      <Box mr={2}>
                        <FormControlLabel
                          value='hide'
                          control={
                            <Radio
                              checkedIcon={<i className='tabler-circle-check-filled' />}
                              icon={<i className='tabler-circle' />}
                            />
                          }
                          label='Hide'
                        />
                      </Box>
                    </RadioGroup>
                  </div>
                </div>

                {/* ROLL NO */}
                <div className='rollNo' style={{ display: 'flex', gap: '338px' }}>
                  <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
                    ROLL NO
                  </Typography>
                  <div style={{ marginTop: '2%' }}>
                    <RadioGroup row aria-label='controlled' defaultValue='show' name='controlled'>
                      <Box mr={2}>
                        <FormControlLabel
                          value='show'
                          control={
                            <Radio
                              checkedIcon={<i className='tabler-circle-check-filled' />}
                              icon={<i className='tabler-circle' />}
                            />
                          }
                          label='Show'
                        />
                      </Box>
                      <Box mr={2}>
                        <FormControlLabel
                          value='hide'
                          control={
                            <Radio
                              checkedIcon={<i className='tabler-circle-check-filled' />}
                              icon={<i className='tabler-circle' />}
                            />
                          }
                          label='Hide'
                        />
                      </Box>
                    </RadioGroup>
                  </div>
                </div>

                {/*EXAM NAME*/}
                <div className='examName' style={{ display: 'flex', gap: '310px' }}>
                  <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
                    EXAM NAME
                  </Typography>
                  <div style={{ marginTop: '2%' }}>
                    <RadioGroup row aria-label='controlled' defaultValue='show' name='controlled'>
                      <Box mr={2}>
                        <FormControlLabel
                          value='show'
                          control={
                            <Radio
                              checkedIcon={<i className='tabler-circle-check-filled' />}
                              icon={<i className='tabler-circle' />}
                            />
                          }
                          label='Show'
                        />
                      </Box>
                      <Box mr={2}>
                        <FormControlLabel
                          value='hide'
                          control={
                            <Radio
                              checkedIcon={<i className='tabler-circle-check-filled' />}
                              icon={<i className='tabler-circle' />}
                            />
                          }
                          label='Hide'
                        />
                      </Box>
                    </RadioGroup>
                  </div>
                </div>
              </div>

              {/* Conatiner Two */}
              <div className='containerTwo' style={{ marginLeft: '12%' }}>
                {/*STUDENT PHOTO */}
                <div className='studentPhoto' style={{ display: 'flex', gap: '304px' }}>
                  <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
                    STUDENT PHOTO
                  </Typography>
                  <div style={{ marginTop: '2%' }}>
                    <RadioGroup row aria-label='controlled' defaultValue='show' name='controlled'>
                      <Box mr={2}>
                        <FormControlLabel
                          value='show'
                          control={
                            <Radio
                              checkedIcon={<i className='tabler-circle-check-filled' />}
                              icon={<i className='tabler-circle' />}
                            />
                          }
                          label='Show'
                        />
                      </Box>
                      <Box mr={2}>
                        <FormControlLabel
                          value='hide'
                          control={
                            <Radio
                              checkedIcon={<i className='tabler-circle-check-filled' />}
                              icon={<i className='tabler-circle' />}
                            />
                          }
                          label='Hide'
                        />
                      </Box>
                    </RadioGroup>
                  </div>
                </div>

                {/* ADMISSION NO */}
                <div className='admissionNo' style={{ display: 'flex', gap: '318px' }}>
                  <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
                    ADMISSION NO
                  </Typography>
                  <div style={{ marginTop: '2%' }}>
                    <RadioGroup row aria-label='controlled' defaultValue='show' name='controlled'>
                      <Box mr={2}>
                        <FormControlLabel
                          value='show'
                          control={
                            <Radio
                              checkedIcon={<i className='tabler-circle-check-filled' />}
                              icon={<i className='tabler-circle' />}
                            />
                          }
                          label='Show'
                        />
                      </Box>
                      <Box mr={2}>
                        <FormControlLabel
                          value='hide'
                          control={
                            <Radio
                              checkedIcon={<i className='tabler-circle-check-filled' />}
                              icon={<i className='tabler-circle' />}
                            />
                          }
                          label='Hide'
                        />
                      </Box>
                    </RadioGroup>
                  </div>
                </div>

                {/* CLASS AND SECTION */}
                <div className='classSection' style={{ display: 'flex', gap: '275px' }}>
                  <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
                    CLASS AND SECTION
                  </Typography>
                  <div style={{ marginTop: '2%' }}>
                    <RadioGroup row aria-label='controlled' defaultValue='show' name='controlled'>
                      <Box mr={2}>
                        <FormControlLabel
                          value='show'
                          control={
                            <Radio
                              checkedIcon={<i className='tabler-circle-check-filled' />}
                              icon={<i className='tabler-circle' />}
                            />
                          }
                          label='Show'
                        />
                      </Box>
                      <Box mr={2}>
                        <FormControlLabel
                          value='hide'
                          control={
                            <Radio
                              checkedIcon={<i className='tabler-circle-check-filled' />}
                              icon={<i className='tabler-circle' />}
                            />
                          }
                          label='Hide'
                        />
                      </Box>
                    </RadioGroup>
                  </div>
                </div>

                {/* ACADEMIC YEAR */}
                <div className='academicYear' style={{ display: 'flex', gap: '308px' }}>
                  <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
                    ACADEMIC YEAR
                  </Typography>
                  <div style={{ marginTop: '2%' }}>
                    <RadioGroup row aria-label='controlled' defaultValue='show' name='controlled'>
                      <Box mr={2}>
                        <FormControlLabel
                          value='show'
                          control={
                            <Radio
                              checkedIcon={<i className='tabler-circle-check-filled' />}
                              icon={<i className='tabler-circle' />}
                            />
                          }
                          label='Show'
                        />
                      </Box>
                      <Box mr={2}>
                        <FormControlLabel
                          value='hide'
                          control={
                            <Radio
                              checkedIcon={<i className='tabler-circle-check-filled' />}
                              icon={<i className='tabler-circle' />}
                            />
                          }
                          label='Hide'
                        />
                      </Box>
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </div>

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

export default SeatPlanSettingLayout
