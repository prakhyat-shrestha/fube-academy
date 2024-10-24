import { Card, CardContent, Button, MenuItem, Typography } from '@mui/material'
import CustomTextField from '@/@core/components/mui/TextField'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import Link from 'next/link'

const GenerateIDCardLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h4'>
          Generate ID Card
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
            <Link href='#'>Generate ID Card</Link>
          </Typography>
        </nav>
      </div>
      <div className='generateIDCard mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div
              className='container'
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}
            >
              <Typography variant='h6' component='h4'>
                Select Criteria
              </Typography>
            </div>

            <div className='container' style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
              <Typography variant='body2' component='div' style={{ width: '40%' }}>
                <CustomTextField label='ROLE' defaultValue='select' select required fullWidth>
                  <CustomTextField placeholder='Search' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                  <MenuItem value='select'>
                    <span>Select Role*</span>
                  </MenuItem>
                  <MenuItem value='super-admin'>
                    <span>Super Admin</span>
                  </MenuItem>
                  <MenuItem value='student'>
                    <span>Student</span>
                  </MenuItem>
                  <MenuItem value='parent'>
                    <span>Parents</span>
                  </MenuItem>
                  <MenuItem value='teacher'>
                    <span>Teachers</span>
                  </MenuItem>
                </CustomTextField>
              </Typography>

              <Typography variant='body2' component='div' style={{ width: '40%' }}>
                <CustomTextField label='ID CARD' required defaultValue='select' fullWidth select>
                  <CustomTextField placeholder='Search' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                  <MenuItem value='select'>
                    <span>Select ID Card*</span>
                  </MenuItem>
                </CustomTextField>
              </Typography>

              <CustomTextField fullWidth label='GRID GAP (PX)*' id='custom-select' style={{ width: '40%' }}>
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='select'>
                  <span style={{ fontStyle: 'normal' }}>Select Certificate*</span>
                </MenuItem>
                <MenuItem value='schoolL'>School Leaving</MenuItem>
              </CustomTextField>
            </div>

            <div
              className='container mt-6'
              style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}
            >
              <Button variant='contained' startIcon={<SearchSharpIcon />}>
                SEARCH
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default GenerateIDCardLayout
