import { Typography, Card, CardContent, Button, CardActions } from '@mui/material'
import Link from 'next/link'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'

const LanguageGeneralLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Language
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              General Settings
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Language</Link>
          </Typography>
        </nav>
      </div>

      <div className='aboutAndUpdate mt-4 ' style={{ display: 'flex' }}>
        {/* Upload From Local Directory Card */}
        <Card sx={{ width: '40%', height: '20%' }}>
          <CardContent>
            <Typography variant='h6' component='h4'>
              Upload From Local Directory
            </Typography>
            {/* Button */}
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant='contained'>
                <CheckSharpIcon sx={{ mr: 1 }} />
                SAVE FILE
              </Button>
            </CardActions>
          </CardContent>
        </Card>

        {/* UPDATE DETAILS Card */}
        <Card className='updateDetails' sx={{ width: '100%', marginLeft: '2%', height: 'auto' }}>
          <CardContent></CardContent>
        </Card>
      </div>
    </>
  )
}

export default LanguageGeneralLayout
