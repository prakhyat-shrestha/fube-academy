import { Typography, MenuItem } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CustomTextField from '@core/components/mui/TextField'
import 'react-datepicker/dist/react-datepicker.css'
import Link from 'next/link'
import { Button, InputAdornment } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'

const AddHomeworkList = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Add Homework
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Homework
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Add Homework</Link>
          </Typography>
        </nav>
      </div>
      <div className='addHomework mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '100%' }}>
          <CardContent>
            <Typography variant='h6' component='h4'>
              Add Homework
            </Typography>

            <div className='container' style={{ display: 'flex' }}>
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
                  <span style={{ fontStyle: 'normal' }}>SELECT CLASS *</span>
                </MenuItem>
                <MenuItem value={'eced'}>ECED</MenuItem>
                <MenuItem value={'one'}>1</MenuItem>
                <MenuItem value={'two'}>2</MenuItem>
              </CustomTextField>
              <CustomTextField
                select
                fullWidth
                defaultValue='subject'
                label='SUBJECT*'
                id='custom-select'
                style={{ margin: '20px 40px 0 0 ', width: '60%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='subject'>
                  <span style={{ fontStyle: 'normal' }}>SELECT SUBJECTS*</span>
                </MenuItem>
              </CustomTextField>
              <CustomTextField
                select
                fullWidth
                defaultValue='select'
                label='SECTION*'
                id='custom-select'
                style={{ marginTop: '20px', width: '60%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='select'>
                  <span style={{ fontStyle: 'normal' }}>UNSELECT ALL</span>
                </MenuItem>
              </CustomTextField>
            </div>
            <div className='container' style={{ display: 'flex' }}>
              <Typography variant='body2' component='div' style={{ margin: '1.75% 20.6% 0 0 ' }}>
                <CustomTextField
                  label='HOMEWORK DATE'
                  type='date'
                  style={{ width: '225%' }}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Typography>

              <Typography variant='body2' component='div' style={{ margin: '1.75% 20.6% 0 0  ' }}>
                <CustomTextField
                  label='SUBMISSION DATE'
                  type='date'
                  style={{ width: '225%' }}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Typography>
              <Typography variant='body2' component='div'>
                <CustomTextField required label='MARKS *' style={{ marginTop: 20, width: '170%' }} />
              </Typography>
            </div>
            <div className='container' style={{ display: 'flex', color: 'white' }}>
              <Typography variant='body2' component='div'>
                <CustomTextField
                  required
                  label='ATTACH FILE'
                  value='Attach File'
                  style={{ marginTop: 20, width: '116.5%' }}
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
              </Typography>
            </div>
            <div className='container'>
              <Typography variant='body2' component='div'>
                <CustomTextField label='DESCRIPTION' multiline rows={3} style={{ marginTop: 20, width: '100%' }} />
              </Typography>
            </div>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant='contained' style={{ margin: '5px 0 0 0' }}>
                <CheckSharpIcon style={{ marginRight: 5 }} />
                SAVE HOMEWORK
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default AddHomeworkList
