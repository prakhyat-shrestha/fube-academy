import { Typography, Box, FormControlLabel, RadioGroup, Radio, Button } from '@mui/material'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'

const ChatSettings = () => {
  return (
    <>
      <div className='container'>
        <div className='row1' style={{ display: 'flex' }}>
          <div className='teacherChat' style={{ display: 'flex', marginTop: '20px', gap: '200px' }}>
            <Typography variant='h6' component='h3'>
              CAN TEACHER CHAT WITH PARENTS
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

          <div className='adminAccount' style={{ display: 'flex', marginTop: '20px', gap: '200px' }}>
            <Typography variant='h6' component='h3'>
              CAN STUDENT CHAT WITH ADMIN ACCOUNTS
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

        <div className='row2' style={{ display: 'flex' }}>
          <div className='withoutInvitation' style={{ display: 'flex', marginTop: '20px', gap: '175px' }}>
            <Typography variant='h6' component='h3'>
              ADMIN CAN CHAT WITHOUT INVITATION
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

          <div className='chatSystem' style={{ display: 'flex', marginTop: '20px', gap: '385px' }}>
            <Typography variant='h6' component='h3'>
              OPEN CHAT SYSTEM
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

export default ChatSettings
