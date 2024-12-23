import { Typography, Box, FormControlLabel, RadioGroup, Radio, Button } from '@mui/material'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'

const ChattingMethod = () => {
  return (
    <>
      <div className='container'>
        <div className='chattingMethod' style={{ display: 'flex', marginTop: '20px', gap: '250px' }}>
          <Typography variant='h6' component='h3'>
            CHAT SETTINGS
          </Typography>
          <div style={{ marginTop: '-6px' }}>
            <RadioGroup row aria-label='controlled' defaultValue='pusher' name='controlled'>
              <Box mr={2}>
                <FormControlLabel
                  value='pusher'
                  control={
                    <Radio
                      checkedIcon={<i className='tabler-circle-check-filled' />}
                      icon={<i className='tabler-circle' />}
                    />
                  }
                  label='Pusher'
                />
              </Box>
              <Box mr={2}>
                <FormControlLabel
                  value='query'
                  control={
                    <Radio
                      checkedIcon={<i className='tabler-circle-check-filled' />}
                      icon={<i className='tabler-circle' />}
                    />
                  }
                  label='Query'
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

export default ChattingMethod
