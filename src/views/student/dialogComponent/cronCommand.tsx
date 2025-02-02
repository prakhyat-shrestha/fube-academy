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
const CronCommand: React.FC<AddDialogComponentProps> = ({ onClose, open }) => {
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
          width: '400px', // Set desired width
          height: '260px'
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
          Cron Jobs Command
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
        <Typography
          variant='h6'
          component='h3'
          style={{
            color: '#8d70ff',
            fontWeight: 'bolder',
            textAlign: 'center',
            marginTop: '40px',
            fontSize: '.8rem'
          }}
        >
          artisan absent_notification:sms
        </Typography>
        <Typography
          variant='h6'
          component='h3'
          style={{
            color: '#8d70ff',
            fontWeight: 'bolder',
            textAlign: 'center',
            marginTop: '40px',
            fontSize: '.8rem'
          }}
        >
          Example:{' '}
          <span style={{ fontSize: '.7rem', color: '#9a46fa' }}>
            cd /home/fubetech/erp.fubetech.com/ && php artisan <br />
            absent_notification:sms <span>&gt;&gt;</span> /dev/null <span>2&gt;&amp;1</span>
          </span>
        </Typography>
      </DialogContent>
    </Dialog>
  )
}

export default CronCommand
