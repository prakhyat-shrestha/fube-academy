import CustomTextField from '@core/components/mui/TextField'
import { MenuItem } from '@mui/material'

const SelectionOfLayout = () => {
  return (
    <>
      <div className='container'>
        <CustomTextField select fullWidth defaultValue='layout' id='custom-select' style={{ width: '50%' }}>
          <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
          <MenuItem value='layout'>
            <span style={{ fontStyle: 'normal' }}>Select Layout </span>
          </MenuItem>
          <MenuItem value='one'>Layout One</MenuItem>
          <MenuItem value='two'>Layout Two</MenuItem>
        </CustomTextField>
      </div>
    </>
  )
}

export default SelectionOfLayout
