import { Box, FormGroup, Typography } from '@mui/material'
import Radio from '@mui/material/Radio'
import Checkbox from '@mui/material/Checkbox'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import CustomTextField from '@/@core/components/mui/TextField'

const Option = () => {
  return (
    <>
      {/* Radio Slip section first part */}
      <div className='container' style={{ display: 'flex', marginTop: '-2%', marginLeft: '45%' }}>
        <Typography variant='h6' component='h4' style={{ fontSize: 'medium', marginRight: '2%' }}>
          SHOWING PAGE(PART)
        </Typography>
        <div style={{ marginTop: '-0.5%', marginLeft: '2%' }}>
          <FormGroup row>
            <Box mr={2}>
              <FormControlLabel
                label='Parent/Student'
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
                label='Casier'
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
            <FormControlLabel
              label='Office'
              control={
                <Checkbox
                  defaultChecked
                  name='size-small'
                  checkedIcon={<i className='tabler-circle-check-filled' />}
                  icon={<i className='tabler-circle' />}
                />
              }
            />
          </FormGroup>
        </div>
      </div>
      {/* Radio Slip section second part */}
      <div className='container' style={{ display: 'flex', marginTop: '3%' }}>
        <CustomTextField
          label='SIGNATURE'
          defaultValue={'Parent/Student'}
          style={{ width: '40%', marginRight: '5%' }}
        />
        <Typography variant='h6' component='h4' style={{ fontSize: 'medium', marginRight: '2%' }}>
          IS SHOWING SIGNATURE
        </Typography>
        <RadioGroup row aria-label='sizes' name='sizes' style={{ marginTop: '-3%' }}>
          <Box mr={25} />
          <FormControlLabel value='one' control={<Radio size='small' />} label='Yes' />
          <Box mr={25} />
          <FormControlLabel value='two' control={<Radio size='small' />} label='No' />
        </RadioGroup>
      </div>
      {/* Radio Slip section third part */}
      <div className='container' style={{ display: 'flex', marginTop: '3%' }}>
        <CustomTextField label='SIGNATURE' defaultValue={'Casier'} style={{ width: '40%', marginRight: '5%' }} />
        <Typography variant='h6' component='h4' style={{ fontSize: 'medium', marginRight: '2%' }}>
          IS SHOWING SIGNATURE
        </Typography>
        <RadioGroup row aria-label='sizes' name='sizes' style={{ marginTop: '-3%' }}>
          <Box mr={25} />
          <FormControlLabel value='one' control={<Radio size='small' />} label='Yes' />
          <Box mr={25} />
          <FormControlLabel value='two' control={<Radio size='small' />} label='No' />
        </RadioGroup>
      </div>
      {/* Radio Slip section fourth part */}
      <div className='container' style={{ display: 'flex', marginTop: '3%' }}>
        <CustomTextField label='SIGNATURE' defaultValue={'Officer'} style={{ width: '40%', marginRight: '5%' }} />
        <Typography variant='h6' component='h4' style={{ fontSize: 'medium', marginRight: '2%' }}>
          IS SHOWING SIGNATURE
        </Typography>
        <RadioGroup row aria-label='sizes' name='sizes' style={{ marginTop: '-3%' }}>
          <Box mr={25} />
          <FormControlLabel value='one' control={<Radio size='small' />} label='Yes' />
          <Box mr={25} />
          <FormControlLabel value='two' control={<Radio size='small' />} label='No' />
        </RadioGroup>
      </div>
      {/* Radio Slip section fifth part */}
      <div className='container' style={{ display: 'flex', marginTop: '2%' }}>
        <CustomTextField label='COPY FOR' defaultValue={'Parent/Student'} style={{ width: '60%', marginRight: '2%' }} />
        <CustomTextField label='COPY FOR' defaultValue={'Office'} style={{ width: '60%', marginRight: '2%' }} />
        <CustomTextField label='COPY FOR' defaultValue={'Casier'} style={{ width: '60%', marginRight: '2%' }} />
      </div>
    </>
  )
}

export default Option
