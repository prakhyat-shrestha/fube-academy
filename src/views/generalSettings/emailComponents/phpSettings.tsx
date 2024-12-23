import { MenuItem, CardActions, Button } from '@mui/material'
import CustomTextField from '@/@core/components/mui/TextField'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'

const PhpSettingLayout = () => {
  return (
    <>
      <div className='fields' style={{ display: 'flex' }}>
        <CustomTextField
          label='FROM NAME'
          required
          defaultValue={'System Admin'}
          style={{ margin: '0 40px 0 0 ', width: '60%' }}
        />
        <CustomTextField
          label='FROM MAIl'
          required
          defaultValue={'admin@infixedu.com'}
          style={{ margin: '0 40px 0 0 ', width: '60%' }}
        />
        <CustomTextField
          select
          fullWidth
          required
          label='STATUS'
          defaultValue='status'
          id='custom-select'
          style={{ width: '60%' }}
        >
          <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
          <MenuItem value='status'>
            <span style={{ fontStyle: 'normal' }}>Select Status *</span>
          </MenuItem>
          <MenuItem value='one'>Enable</MenuItem>
          <MenuItem value='two'>Disable</MenuItem>
        </CustomTextField>
      </div>
      {/* Button */}
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button variant='contained'>
          <CheckSharpIcon sx={{ mr: 1 }} />
          UPDATE
        </Button>
      </CardActions>
    </>
  )
}

export default PhpSettingLayout
