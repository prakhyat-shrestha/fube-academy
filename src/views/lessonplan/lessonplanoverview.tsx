import { Typography, MenuItem } from '@mui/material'
import Link from 'next/link'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CustomTextField from '@core/components/mui/TextField'
import Button from '@mui/material/Button'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'

const LessonPlanOverviewLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Lesson Plan Overview
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Lesson Plan
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Lesson Plan Overview</Link>
          </Typography>
        </nav>
      </div>
      <div className='lessonPlanOverView mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div className='container' style={{ display: 'flex' }}>
              <CustomTextField
                select
                fullWidth
                defaultValue='teacher'
                label='TEACHER*'
                id='custom-select'
                style={{ margin: '20px 40px 0 0 ', width: '60%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='teacher'>
                  <span style={{ fontStyle: 'normal' }}>Select Teacher *</span>
                </MenuItem>
                <MenuItem value='one'>
                  <span style={{ fontStyle: 'normal' }}>Hari Khadka *</span>
                </MenuItem>
                <MenuItem value='two'>
                  <span style={{ fontStyle: 'normal' }}>Ram Karki *</span>
                </MenuItem>
                <MenuItem value='three'>
                  <span style={{ fontStyle: 'normal' }}>Sita Shrestha *</span>
                </MenuItem>
                <MenuItem value='four'>
                  <span style={{ fontStyle: 'normal' }}>Navaraj Gyawali *</span>
                </MenuItem>
              </CustomTextField>
              <CustomTextField
                select
                fullWidth
                defaultValue='class'
                label='CLASS*'
                id='custom-select'
                style={{ margin: '20px 40px 0 0 ', width: '60%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='class'>
                  <span style={{ fontStyle: 'normal' }}>Select Class *</span>
                </MenuItem>
                <MenuItem value='one'>
                  <span style={{ fontStyle: 'normal' }}>ECED</span>
                </MenuItem>
                <MenuItem value='two'>
                  <span style={{ fontStyle: 'normal' }}>one</span>
                </MenuItem>
                <MenuItem value='three'>
                  <span style={{ fontStyle: 'normal' }}>three</span>
                </MenuItem>
              </CustomTextField>
              <CustomTextField
                select
                fullWidth
                defaultValue='section'
                label='SECTION*'
                id='custom-select'
                style={{ margin: '20px 40px 0 0 ', width: '60%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='section'>
                  <span style={{ fontStyle: 'normal' }}>Select Section *</span>
                </MenuItem>
              </CustomTextField>
              <CustomTextField
                select
                fullWidth
                defaultValue='subject'
                label='SUBJECT*'
                id='custom-select'
                style={{ marginTop: '20px', width: '60%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='subject'>
                  <span style={{ fontStyle: 'normal' }}>Select Subject *</span>
                </MenuItem>
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

export default LessonPlanOverviewLayout
