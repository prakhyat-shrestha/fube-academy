import { Typography, Box, FormControlLabel, RadioGroup, Radio, Button } from '@mui/material'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'

const InvitationSettings = () => {
  return (
    <>
      <div className='container'>
        <div className='invitationRequirement' style={{ display: 'flex', marginTop: '20px', gap: '250px' }}>
          <Typography variant='h6' component='h3'>
            INVITATION REQUIREMENT
          </Typography>
          <div style={{ marginTop: '-6px' }}>
            <RadioGroup row aria-label='controlled' defaultValue='required' name='controlled'>
              <Box mr={2}>
                <FormControlLabel
                  value='required'
                  control={
                    <Radio
                      checkedIcon={<i className='tabler-circle-check-filled' />}
                      icon={<i className='tabler-circle' />}
                    />
                  }
                  label='Required'
                />
              </Box>
              <Box mr={2}>
                <FormControlLabel
                  value='notRequred'
                  control={
                    <Radio
                      checkedIcon={<i className='tabler-circle-check-filled' />}
                      icon={<i className='tabler-circle' />}
                    />
                  }
                  label='Not Required'
                />
              </Box>
            </RadioGroup>
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

export default InvitationSettings
