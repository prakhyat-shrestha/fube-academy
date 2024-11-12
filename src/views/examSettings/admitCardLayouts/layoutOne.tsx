import {
  Typography,
  RadioGroup,
  Box,
  FormControlLabel,
  Radio,
  InputAdornment,
  Button,
  CardActions
} from '@mui/material'
import CustomTextField from '@/@core/components/mui/TextField'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'

const LayoutOne = () => {
  return (
    <>
      <Typography variant='h6' component='h3'>
        Layout One Admit Card Setting
      </Typography>
      <div className='mainContainer' style={{ display: 'flex' }}>
        <div className='containerOne'>
          {/* Student Photo */}
          <div className='studentPhoto' style={{ display: 'flex', gap: '300px' }}>
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

          {/* Gurardian Name */}
          <div className='guardianName' style={{ display: 'flex', gap: '298px' }}>
            <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
              GUARDIAN NAME
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

          {/* CLASS & SECTION */}
          <div className='classSection' style={{ display: 'flex', gap: '292px' }}>
            <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
              CLASS & SECTION
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
          <div className='academicYear' style={{ display: 'flex', gap: '304px' }}>
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

          {/* STUDENT CAN DOWNLOAD */}
          <div className='studentDownload' style={{ display: 'flex', gap: '230px' }}>
            <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
              STUDENT CAN DOWNLOAD
            </Typography>
            <div style={{ marginTop: '2%' }}>
              <RadioGroup row aria-label='controlled' defaultValue='yes' name='controlled'>
                <Box mr={2}>
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
                <Box mr={2}>
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

          {/* STUDENT NOTIFICATION */}
          <div className='studentNotification' style={{ display: 'flex', gap: '250px' }}>
            <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
              STUDENT NOTIFICATION
            </Typography>
            <div style={{ marginTop: '2%' }}>
              <RadioGroup row aria-label='controlled' defaultValue='yes' name='controlled'>
                <Box mr={2}>
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
                <Box mr={2}>
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

          {/* CLASS TEACHER SIGNATURE */}
          <div className='teacherSignature' style={{ display: 'flex', gap: '215px' }}>
            <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
              CLASS TEACHER SIGNATURE
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
          <CustomTextField
            value='Class Teacher Signature'
            fullWidth
            sx={{ marginTop: '10px' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <Button variant='contained' sx={{ height: '25px', width: '90px', fontSize: '0.75rem' }}>
                    BROWSE
                  </Button>
                </InputAdornment>
              )
            }}
          />
        </div>

        {/* Conatiner Two */}
        <div className='containerTwo' style={{ marginLeft: '12%' }}>
          {/*STUDENT NAME */}
          <div className='studentName' style={{ display: 'flex', gap: '250px' }}>
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

          {/* ADMISSION NO */}
          <div className='admissionNo' style={{ display: 'flex', gap: '255px' }}>
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

          {/* EXAM NAME */}
          <div className='examName' style={{ display: 'flex', gap: '275px' }}>
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

          {/* SCHOOL ADDRESS */}
          <div className='schoolAddress' style={{ display: 'flex', gap: '230px' }}>
            <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
              SCHOOL ADDRESS
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

          {/* PARENT CAN DOWNLOAD */}
          <div className='parentDownload' style={{ display: 'flex', gap: '182px' }}>
            <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
              PARENT CAN DOWNLOAD
            </Typography>
            <div style={{ marginTop: '2%' }}>
              <RadioGroup row aria-label='controlled' defaultValue='yes' name='controlled'>
                <Box mr={2}>
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
                <Box mr={2}>
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

          {/* PARENT NOTIFICATION */}
          <div className='parentNotification' style={{ display: 'flex', gap: '200px' }}>
            <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
              PARENT NOTIFICATION
            </Typography>
            <div style={{ marginTop: '2%' }}>
              <RadioGroup row aria-label='controlled' defaultValue='yes' name='controlled'>
                <Box mr={2}>
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
                <Box mr={2}>
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

          {/* PRINCIPAL SIGNATURE */}
          <div className='principalSignature' style={{ display: 'flex', gap: '200px' }}>
            <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
              PRINCIPAL SIGNATURE
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
          <CustomTextField
            value='Principal Signature'
            fullWidth
            sx={{ marginTop: '10px' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <Button variant='contained' sx={{ height: '25px', width: '90px', fontSize: '0.75rem' }}>
                    BROWSE
                  </Button>
                </InputAdornment>
              )
            }}
          />
        </div>
      </div>

      <CardActions sx={{ justifyContent: 'center' }}>
        <Button variant='contained'>
          <CheckSharpIcon sx={{ mr: 1 }} />
          UPDATE
        </Button>
      </CardActions>
    </>
  )
}

export default LayoutOne
