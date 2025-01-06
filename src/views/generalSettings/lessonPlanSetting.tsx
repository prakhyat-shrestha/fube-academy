import {
  Typography,
  Card,
  CardContent,
  Box,
  FormControlLabel,
  RadioGroup,
  Radio,
  CardActions,
  Button
} from '@mui/material'
import Link from '@/components/Link'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'

const LessonPlanSettingLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Lesson Plan Setting
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
            <Link href='#'>Lesson Plan Setting</Link>
          </Typography>
        </nav>
      </div>
      <div className='lessonPlanSettings mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: 'auto' }}>
          <CardContent>
            <Typography variant='h6' component='h3'>
              Lesson Plan Setting
            </Typography>

            <div className='container'>
              <div className='lessonPlan' style={{ display: 'flex', marginTop: '20px', gap: '250px' }}>
                <Typography variant='h6' component='h3'>
                  LESSON PLAN SUBTOPIC
                </Typography>
                <div style={{ marginTop: '-6px' }}>
                  <RadioGroup row aria-label='controlled' defaultValue='enable' name='controlled'>
                    <Box mr={2}>
                      <FormControlLabel
                        value='enable'
                        control={
                          <Radio
                            checkedIcon={<i className='tabler-circle-check-filled' />}
                            icon={<i className='tabler-circle' />}
                          />
                        }
                        label='Enable'
                      />
                    </Box>
                    <Box mr={2}>
                      <FormControlLabel
                        value='disable'
                        control={
                          <Radio
                            checkedIcon={<i className='tabler-circle-check-filled' />}
                            icon={<i className='tabler-circle' />}
                          />
                        }
                        label='Disable'
                      />
                    </Box>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </CardContent>
          {/* Button */}
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button variant='contained'>
              <CheckSharpIcon sx={{ mr: 1 }} />
              UPDATE
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  )
}

export default LessonPlanSettingLayout
