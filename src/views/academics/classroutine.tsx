import { Card, CardContent, Button, MenuItem, Typography } from '@mui/material'
import CustomTextField from '@/@core/components/mui/TextField'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import Link from 'next/link'

const ClassRoutineLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h4'>
          Class Routine Create
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
            <Link href='#'>Class Routine Create</Link>
          </Typography>
        </nav>
      </div>
      <div className='classRoutine mt-4' style={{ flex: 1 }}>
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
              <Typography variant='body2' component='div' style={{ width: '100%' }}>
                <CustomTextField label='CLASS ' defaultValue='select' select required fullWidth>
                  <CustomTextField placeholder='Search' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                  <MenuItem value='select'>
                    <span>Select Class*</span>
                  </MenuItem>
                  <MenuItem value='eced'>
                    <span>ECED</span>
                  </MenuItem>
                  <MenuItem value='1'>
                    <span>1</span>
                  </MenuItem>
                  <MenuItem value='2'>
                    <span>2</span>
                  </MenuItem>
                </CustomTextField>
              </Typography>

              <Typography variant='body2' component='div' style={{ width: '100%' }}>
                <CustomTextField label='SECTION *' defaultValue='select' fullWidth select>
                  <CustomTextField placeholder='Search' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                  <MenuItem value='select'>
                    <span>Select Section *</span>
                  </MenuItem>
                </CustomTextField>
              </Typography>
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

export default ClassRoutineLayout
