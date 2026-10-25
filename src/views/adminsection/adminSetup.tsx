import { CardContent, Typography, Card, Button, CardActions, MenuItem } from '@mui/material'
import Link from 'next/link'
import CustomTextField from '@/@core/components/mui/TextField'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'

const AdminSetupLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h4'>
          Admin Setup
        </Typography>
        <nav style={{ marginLeft: 'auto' }}>
          <Typography variant='h6' component='h4' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '25px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '25px' }}>
              Admin Section
            </Link>
            <span style={{ marginRight: '25px' }}>|</span>
            <Link href='#'>Admin Setup</Link>
          </Typography>
        </nav>
      </div>
      <div className='flex' style={{ display: 'flex' }}>
        {/* Add fees group first card */}
        <div className='adminSetup mt-4'>
          <Card sx={{ width: 280, height: 'auto' }}>
            <CardContent>
              <Typography variant='h6' component='h4'>
                Add Admin Setup
              </Typography>
              <CustomTextField label='TYPE ' defaultValue='type' required select fullWidth sx={{ marginTop: '20px' }}>
                <CustomTextField placeholder='Search' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='type'>
                  <span>Complaint Type*</span>
                </MenuItem>
                <MenuItem>
                  <span> Source</span>
                </MenuItem>
                <MenuItem>
                  <span>Reference</span>
                </MenuItem>
              </CustomTextField>
              <CustomTextField label='NAME' required fullWidth sx={{ marginTop: '20px' }} />
              <CustomTextField label='DESCRIPTION' multiline rows={3} fullWidth sx={{ marginTop: '20px' }} />
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant='contained' sx={{ display: 'flex', alignItems: 'center', fontSize: 'small' }}>
                <CheckSharpIcon sx={{ marginRight: 1 }} />
                SAVE SETUP
              </Button>
            </CardActions>
          </Card>
        </div>
        {/*  2nd card */}
        <div className='adminSetupList mt-4 mx-6' style={{ flex: 1 }}>
          <Card sx={{ width: '102.65%', height: '35%' }}>
            <CardContent>
              <Typography variant='h6' component='h4'>
                Admin Setup List
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

export default AdminSetupLayout
