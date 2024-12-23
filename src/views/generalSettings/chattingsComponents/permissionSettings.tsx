import { Typography, Box, FormControlLabel, RadioGroup, Radio, Button } from '@mui/material'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import CustomTextField from '@/@core/components/mui/TextField'

const PermissionSettings = () => {
  return (
    <>
      <div className='mainContainer'>
        <div className='row1' style={{ display: 'flex' }}>
          <div className='uploadFile' style={{ display: 'flex', marginTop: '20px', gap: '335px' }}>
            <Typography variant='h6' component='h3'>
              CAN UPLOAD FILE
            </Typography>
            <div style={{ marginTop: '-6px' }}>
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

          <div className='uploadFileLimit' style={{ display: 'flex', marginTop: '20px', gap: '200px' }}>
            <Typography variant='h6' component='h3'>
              UPLOAD FILE LIMIT(MB)
            </Typography>
            <CustomTextField defaultValue={'50'} />
          </div>
        </div>

        <div className='row2' style={{ display: 'flex' }}>
          <div className='makeGroup' style={{ display: 'flex', marginTop: '20px', gap: '255px' }}>
            <Typography variant='h6' component='h3'>
              STUDENT CAN MAKE GROUP
            </Typography>
            <div style={{ marginTop: '-6px' }}>
              <RadioGroup row aria-label='controlled' defaultValue='no' name='controlled'>
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

          <div className='teacherOrStaff' style={{ display: 'flex', marginTop: '20px', gap: '200px' }}>
            <Typography variant='h6' component='h3'>
              TEACHER OR STAFF CAN MAKE GROUP
            </Typography>
            <div style={{ marginTop: '-6px' }}>
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
        </div>

        <div className='row3' style={{ display: 'flex' }}>
          <div className='banStudent' style={{ display: 'flex', marginTop: '20px', gap: '175px' }}>
            <Typography variant='h6' component='h3'>
              CAN STAFF OR TEACHER BAN STUDENT
            </Typography>
            <div style={{ marginTop: '-6px' }}>
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

          <div className='pinnedMessage' style={{ display: 'flex', marginTop: '20px', gap: '205px' }}>
            <Typography variant='h6' component='h3'>
              TEACHER CAN PINNED TOP MESSAGE
            </Typography>
            <div style={{ marginTop: '-6px' }}>
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
        </div>

        <div className='row4'>
          <div className='addMember' style={{ display: 'flex', marginTop: '20px', gap: '255px' }}>
            <Typography variant='h6' component='h3'>
              STUDENT CAN ADD MEMBER
            </Typography>
            <div style={{ marginTop: '-6px' }}>
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
        </div>
      </div>
      {/* Button */}
      <Button variant='contained' sx={{ marginTop: '10px' }}>
        <CheckSharpIcon sx={{ mr: 1 }} />
        UPDATE
      </Button>
    </>
  )
}

export default PermissionSettings
