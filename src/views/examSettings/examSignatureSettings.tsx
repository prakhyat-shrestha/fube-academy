import { Typography, InputAdornment, Switch, CardActions } from '@mui/material'
import Link from 'next/link'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CustomTextField from '@core/components/mui/TextField'
import Button from '@mui/material/Button'
import AddSharpIcon from '@mui/icons-material/AddSharp'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'

const ExamSignatureSettingsLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Exam Signature Settings
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Exam Settings
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Exam Signature Settings</Link>
          </Typography>
        </nav>
      </div>

      <div
        className='note mt-4'
        style={{
          width: '100%',
          background: '#ffedd4',
          color: '#966e24',
          borderRadius: '3px',
          padding: '10px 6px 10px 10px'
        }}
      >
        <p>
          This signatures will show only on the progress card, 100 percent progress card and tabulation sheet report
          view and print page. If you add a single signature it will show the signature on bottom right corner and if
          you add multiple signatures it will show space between from left to right on page bottom.
        </p>
      </div>

      <div className='examSignatureSettings mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div className='container' style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant='contained' startIcon={<AddSharpIcon />}>
                ADD HOMEWORK
              </Button>
            </div>

            <div className='rowFirst mt-4' style={{ display: 'flex' }}>
              <CustomTextField
                label='TITLE'
                defaultValue='PREPARED BY'
                required
                fullWidth
                style={{ width: '30%', margin: '0 40px 0 0' }}
              />

              <div className='browser'>
                <CustomTextField
                  required
                  label='SIGNATURE'
                  value='Signature'
                  fullWidth
                  style={{ margin: '0 20px 0 0', width: '130%' }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <Button variant='contained' sx={{ height: '25px', width: '90px', fontSize: '0.75rem' }}>
                          BROWSE
                        </Button>
                      </InputAdornment>
                    )
                  }}
                />
                <Typography variant='body2' sx={{ mt: 2 }}>
                  (Allow file jpg, png, jpeg, svg)
                </Typography>
              </div>

              <div className='switch' style={{ marginLeft: '10%', marginTop: '-2.5px' }}>
                <Typography variant='h6' component='h4' style={{ fontSize: 'small' }}>
                  STATUS
                </Typography>
                <Switch defaultChecked />
              </div>

              <div className='delete' style={{ marginLeft: '5%', marginTop: '-2.5px' }}>
                <Typography variant='h6' component='h4' style={{ fontSize: 'small' }}>
                  DELETE
                </Typography>
                <Button
                  variant='contained'
                  style={{
                    borderRadius: '15%',
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
                    margin: '6px '
                  }}
                >
                  {<i className='tabler-trash' />}
                </Button>
              </div>
            </div>

            {/* Second Row */}
            <div className='rowSecond ' style={{ display: 'flex', marginTop: '3%' }}>
              <CustomTextField
                label='TITLE'
                defaultValue='CHECKED BY'
                required
                fullWidth
                style={{ width: '30%', margin: '0 40px 0 0' }}
              />

              <div className='browser'>
                <CustomTextField
                  required
                  label='SIGNATURE'
                  value='Signature'
                  fullWidth
                  style={{ margin: '0 20px 0 0', width: '130%' }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <Button variant='contained' sx={{ height: '25px', width: '90px', fontSize: '0.75rem' }}>
                          BROWSE
                        </Button>
                      </InputAdornment>
                    )
                  }}
                />
                <Typography variant='body2' sx={{ mt: 2 }}>
                  (Allow file jpg, png, jpeg, svg)
                </Typography>
              </div>

              <div className='switch' style={{ marginLeft: '10%', marginTop: '-2.5px' }}>
                <Typography variant='h6' component='h4' style={{ fontSize: 'small' }}>
                  STATUS
                </Typography>
                <Switch defaultChecked />
              </div>

              <div className='delete' style={{ marginLeft: '5%', marginTop: '-2.5px' }}>
                <Typography variant='h6' component='h4' style={{ fontSize: 'small' }}>
                  DELETE
                </Typography>
                <Button
                  variant='contained'
                  style={{
                    borderRadius: '15%',
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
                    margin: '6px '
                  }}
                >
                  {<i className='tabler-trash' />}
                </Button>
              </div>
            </div>

            {/* Third Row */}
            <div className='rowThird mt-4' style={{ display: 'flex', marginTop: '3%' }}>
              <CustomTextField
                label='TITLE'
                defaultValue='HEAD TEACHER'
                required
                fullWidth
                style={{ width: '30%', margin: '0 40px 0 0' }}
              />

              <div className='browser'>
                <CustomTextField
                  required
                  label='SIGNATURE'
                  value='Signature'
                  fullWidth
                  style={{ margin: '0 20px 0 0', width: '130%' }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <Button variant='contained' sx={{ height: '25px', width: '90px', fontSize: '0.75rem' }}>
                          BROWSE
                        </Button>
                      </InputAdornment>
                    )
                  }}
                />
                <Typography variant='body2' sx={{ mt: 2 }}>
                  (Allow file jpg, png, jpeg, svg)
                </Typography>
              </div>

              <div className='switch' style={{ marginLeft: '10%', marginTop: '-2.5px' }}>
                <Typography variant='h6' component='h4' style={{ fontSize: 'small' }}>
                  STATUS
                </Typography>
                <Switch defaultChecked />
              </div>

              <div className='delete' style={{ marginLeft: '5%', marginTop: '-2.5px' }}>
                <Typography variant='h6' component='h4' style={{ fontSize: 'small' }}>
                  DELETE
                </Typography>
                <Button
                  variant='contained'
                  style={{
                    borderRadius: '15%',
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
                    margin: '6px '
                  }}
                >
                  {<i className='tabler-trash' />}
                </Button>
              </div>
            </div>

            {/* Button */}
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant='contained'>
                <CheckSharpIcon />
                UPDATE
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default ExamSignatureSettingsLayout
