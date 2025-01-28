import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import ClearIcon from '@mui/icons-material/Clear'
import CustomTextField from '@/@core/components/mui/TextField'
import { MenuItem } from '@mui/material'

interface AddDialogComponentProps {
  onClose: () => void
  open: boolean // Add the open prop
}

const AddDialogComponent: React.FC<AddDialogComponentProps> = ({ onClose, open }) => {
  return (
    <Dialog
      onClose={onClose} // Use onClose to handle closing
      aria-labelledby='customized-dialog-title'
      open={open} // Pass the open state to the Dialog
      closeAfterTransition={false}
      maxWidth={false}
      PaperProps={{
        sx: {
          overflow: 'visible',
          width: '800px', // Set desired width
          height: '560px'
        }
      }}
    >
      <DialogTitle
        id='customized-dialog-title'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          background: '#8151fc',
          borderTopLeftRadius: '5px', // Rounded upper-left corner
          borderTopRightRadius: '5px'
        }}
      >
        <Typography variant='h5' component='h3' style={{ color: 'white', fontWeight: 'bolder' }}>
          Admission Query
        </Typography>
        <Button
          variant='contained'
          onClick={onClose}
          style={{
            borderRadius: '50%',
            width: '25px',
            height: '25px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '25px',
            padding: '0',
            minWidth: '0',
            minHeight: '0',
            cursor: 'pointer',
            background: 'white',
            color: 'black'
          }}
        >
          <ClearIcon />
        </Button>
      </DialogTitle>
      <DialogContent>
        <div className='info' style={{ display: 'flex' }}>
          <CustomTextField label='NAME' required style={{ margin: '20px 20px 0 0 ', width: '60%' }} />

          <CustomTextField fullWidth label='PHONE' style={{ margin: '20px 20px 0 0 ', width: '60%' }} />

          <CustomTextField fullWidth label='EMAIL' style={{ margin: '20px 0 0 0 ', width: '60%' }} />
        </div>

        <div className='infoSecond mt-4' style={{ display: 'flex' }}>
          <CustomTextField label='ADDRESS' multiline rows={2} style={{ margin: '20px 20px 0 0 ', width: '60%' }} />

          <CustomTextField
            fullWidth
            label='DESCRIPTION'
            multiline
            rows={2}
            style={{ margin: '20px 0 0 0 ', width: '60%' }}
          />
        </div>

        <div className='date mt-4' style={{ display: 'flex' }}>
          <CustomTextField label='DATE FROM' type='date' required style={{ margin: '20px 20px 0 0 ', width: '60%' }} />

          <CustomTextField
            fullWidth
            label='NEXT FOLLOW UP DATE'
            required
            type='date'
            style={{ margin: '20px 20px 0 0 ', width: '60%' }}
          />

          <CustomTextField fullWidth label='ASSIGNED' required style={{ margin: '20px 0 0 0 ', width: '60%' }} />
        </div>

        <div className='container mt-4' style={{ display: 'flex' }}>
          <CustomTextField
            select
            fullWidth
            label='REFERENCE'
            required
            defaultValue='reference'
            id='custom-select'
            style={{ margin: '20px 20px 0 0 ', width: '60%' }}
          >
            <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
            <MenuItem value='reference'>
              <span style={{ fontStyle: 'normal' }}>Reference*</span>
            </MenuItem>
          </CustomTextField>

          <CustomTextField
            select
            fullWidth
            label='SOURCE'
            required
            defaultValue='source'
            id='custom-select'
            style={{ margin: '20px 20px 0 0 ', width: '60%' }}
          >
            <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
            <MenuItem value='source'>
              <span style={{ fontStyle: 'normal' }}>Source * </span>
            </MenuItem>
          </CustomTextField>

          <CustomTextField
            select
            fullWidth
            label='CLASS'
            required
            defaultValue='class'
            id='custom-select'
            style={{ margin: '20px 20px 0 0 ', width: '60%' }}
          >
            <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
            <MenuItem value='class'>
              <span style={{ fontStyle: 'normal' }}>Class *</span>
            </MenuItem>
            <MenuItem value='one'>ECED</MenuItem>
            <MenuItem value='two'>1</MenuItem>
            <MenuItem value='three'>2</MenuItem>
          </CustomTextField>

          <CustomTextField fullWidth label='NUMBER OF CHILD' required style={{ margin: '20px 0 0 0 ', width: '60%' }} />
        </div>
      </DialogContent>
      <DialogActions style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button onClick={onClose} variant='outlined' color='secondary' style={{ color: 'black' }}>
          Cancel
        </Button>
        <Button onClick={onClose} variant='contained'>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddDialogComponent
