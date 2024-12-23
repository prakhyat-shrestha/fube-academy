import { Typography, Card, CardContent } from '@mui/material'
import Link from '@/components/Link'
import StaffColumnA from './staffComponent/staffColumnA'
import StaffColumnB from './staffComponent/staffColumnB'
import TeacherColumnA from './teacherComponent/teacherColumnA'
import TeacherColumnB from './teacherComponent/teacherColumnB'

const StaffSettingsLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Setting
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Human Resource
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Setting</Link>
          </Typography>
        </nav>
      </div>
      <div className='staffSettings mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <Typography variant='h6' component='h3' style={{ textAlign: 'center' }}>
              Staff Information Field
            </Typography>
            <div className='containerStaff' style={{ display: 'flex', gap: '30px' }}>
              <div className='staffColumnA'>
                <StaffColumnA />
              </div>
              <div className='staffColumnB'>
                <StaffColumnB />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className='mt-7' sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <Typography variant='h6' component='h3' style={{ textAlign: 'center' }}>
              Teacher Information View
            </Typography>
            <div className='containerTeacher' style={{ display: 'flex', gap: '30px' }}>
              <div className='teacherColumnA'>
                <TeacherColumnA />
              </div>
              <div className='teacherColumnB'>
                <TeacherColumnB />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default StaffSettingsLayout
