// MUI Imports
import Link from 'next/link'
import { Typography, MenuItem, Divider, InputAdornment, CardActions, Card, Button } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
import CustomTextField from '@/@core/components/mui/TextField'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'

const ImportAttendanceLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Student Attendance
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Student Attendance
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Student Attendance Report</Link>
          </Typography>
        </nav>
      </div>

      <Card className='mt-4' style={{ padding: '20px', height: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant='h6'>Select Criteria</Typography>
          <Button
            variant='outlined'
            style={{ height: '30px', fontSize: '.8rem', borderRadius: '15px' }}
            href='importStudent'
          >
            DOWNLOAD SAMPLE FILE
            <DownloadIcon sx={{ fontSize: '1.05rem', marginLeft: '5px' }} />
          </Button>
        </div>

        <div className='container' style={{ display: 'flex', gap: '20px' }}>
          <CustomTextField
            select
            fullWidth
            required
            label='CLASS'
            defaultValue='class'
            id='custom-select'
            style={{ margin: '20px 10px 0 0 ', width: '65%' }}
          >
            <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
            <MenuItem value='class'>
              <span style={{ fontStyle: 'normal' }}>Select Class *</span>
            </MenuItem>
            <MenuItem value='ECED'>ECED</MenuItem>
            <MenuItem value='1'>1</MenuItem>
            <MenuItem value='2'>2</MenuItem>
            <MenuItem value='3'>3</MenuItem>
            <MenuItem value='4'>4</MenuItem>
            <MenuItem value='5'>5</MenuItem>
            <MenuItem value='6'>6</MenuItem>
            <MenuItem value='7'>7</MenuItem>
          </CustomTextField>
          <CustomTextField
            select
            fullWidth
            defaultValue='section'
            required
            label='SECTION'
            id='custom-select'
            style={{ margin: '20px 0 0 0 ', width: '65%' }}
          >
            <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
            <MenuItem value='section'>
              <span style={{ fontStyle: 'normal' }}>Select Section</span>
            </MenuItem>
          </CustomTextField>
        </div>

        <div className='containerSecond' style={{ display: 'flex', gap: '20px' }}>
          <CustomTextField
            type='date'
            fullWidth
            required
            label='ATTENDANCE DATE'
            id='custom-select'
            style={{ margin: '20px 10px 0 0 ', width: '65%' }}
          />
          <CustomTextField
            required
            value='Excel File'
            label='EXCEL FILE (XLSX, CSV) '
            style={{ margin: '20px 0 0 0 ', width: '65%' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <Button variant='contained' style={{ height: '25px', width: '90px', fontSize: '0.75rem' }}>
                    BROWSE
                  </Button>
                </InputAdornment>
              )
            }}
          />
        </div>

        <CardActions style={{ justifyContent: 'center' }}>
          <Button variant='contained' style={{ fontSize: '.8rem', height: '30px' }}>
            <CheckSharpIcon style={{ marginRight: 5 }} />
            IMPORT ATTENDANCE
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default ImportAttendanceLayout
